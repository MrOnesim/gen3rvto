import { db } from "@/db";
import { events } from "@/db/schema";
import { NextResponse } from "next/server";

const validKinds = new Set(["track_click", "page_view", "video_play"]);

export async function POST(request: Request) {
  try {
    if (!db) return NextResponse.json({ ok: true, notice: "Database not configured" });
    const body = (await request.json()) as {
      kind?: string;
      target?: string;
      platform?: string;
    };
    const kind = body.kind ?? "";
    const target = body.target?.trim();
    const platform = body.platform?.trim().slice(0, 30) || null;
    if (!validKinds.has(kind) || !target) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }
    await db.insert(events).values({
      kind,
      target: target.slice(0, 120),
      platform,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Impossible d'enregistrer l'événement." }, { status: 500 });
  }
}
