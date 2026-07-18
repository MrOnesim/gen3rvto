import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string | undefined>;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const message = body.message?.trim();
    if (!name || !email || !emailPattern.test(email) || !message) {
      return NextResponse.json({ error: "Merci de compléter les champs obligatoires." }, { status: 400 });
    }
    if (!db) {
      return NextResponse.json({ ok: true, notice: "Database not configured" });
    }
    await db.insert(inquiries).values({
      type: body.type === "contact" ? "contact" : "booking",
      name: name.slice(0, 160),
      email: email.slice(0, 320),
      organization: body.organization?.trim().slice(0, 200) || null,
      eventDate: body.eventDate?.trim().slice(0, 40) || null,
      city: body.city?.trim().slice(0, 120) || null,
      message: message.slice(0, 5000),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Impossible d’envoyer la demande." }, { status: 500 });
  }
}
