import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; locale?: string };
    const email = body.email?.trim().toLowerCase();
    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
    }
    await db.insert(newsletterSubscribers).values({
      email,
      locale: body.locale === "en" ? "en" : "fr",
    }).onConflictDoNothing({ target: newsletterSubscribers.email });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Service momentanément indisponible." }, { status: 500 });
  }
}
