import { db } from "@/db";
import { desc, eq } from "drizzle-orm";
import { events, inquiries, newsletterSubscribers } from "@/db/schema";

export type DashboardData = {
  pageViews: number | null;
  visitors: number | null;
  newsletter: number;
  inquiries: number;
  totalClicks: number;
  clicksByTrack: { target: string; count: number }[];
  clicksByPlatform: { platform: string; count: number }[];
  recentInquiries: { name: string; email: string; type: string; createdAt: string }[];
};

export async function getDashboardData(): Promise<DashboardData> {
  const base: DashboardData = {
    pageViews: null,
    visitors: null,
    newsletter: 0,
    inquiries: 0,
    totalClicks: 0,
    clicksByTrack: [],
    clicksByPlatform: [],
    recentInquiries: [],
  };

  if (!db) return base;

  const [news, inq, clicks, byTrack, byPlatform, recent] = await Promise.all([
    db.select({ c: newsletterSubscribers.id }).from(newsletterSubscribers),
    db.select({ c: inquiries.id }).from(inquiries),
    db.select({ c: events.id }).from(events),
    db
      .select({ target: events.target, count: events.id })
      .from(events)
      .where(eq(events.kind, "track_click")),
    db
      .select({ platform: events.platform, count: events.id })
      .from(events)
      .where(eq(events.kind, "track_click")),
    db
      .select({
        name: inquiries.name,
        email: inquiries.email,
        type: inquiries.type,
        createdAt: inquiries.createdAt,
      })
      .from(inquiries)
      .orderBy(desc(inquiries.createdAt))
      .limit(8),
  ]);

  base.newsletter = news.length;
  base.inquiries = inq.length;
  base.totalClicks = clicks.length;
  base.clicksByTrack = byTrack.map((r) => ({ target: r.target, count: Number(r.count) }));
  base.clicksByPlatform = byPlatform.map((r) => ({ platform: r.platform ?? "—", count: Number(r.count) }));
  base.recentInquiries = recent.map((r) => ({ ...r, createdAt: r.createdAt.toISOString() }));

  return base;
}
