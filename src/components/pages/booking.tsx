"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, Check, Download, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";
import { useLang } from "../lang";
import { Eyebrow, btnPrimary } from "../ui";
import { Reveal } from "../reveal";
import { AppleMusicIcon, SpotifyIcon, YouTubeIcon } from "../brands";
import { social } from "../data";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "block w-full border-0 border-b border-[#383838] bg-transparent text-white py-[10px] outline-none resize-y focus:border-brand";
const labelClass = "text-[8px] tracking-[1.4px] text-[#c9c9c9] uppercase";

export function BookingPageContent() {
  const { t, lang } = useLang();
  const [bookingState, setBookingState] = useState<FormState>("idle");
  const [contactState, setContactState] = useState<FormState>("idle");

  async function submit(e: FormEvent<HTMLFormElement>, type: string, setState: (s: FormState) => void) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <main className="overflow-hidden">
      {/* ===== EVENTS ===== */}
      <section id="events" className="bg-[#090909] px-5 md:px-[8vw] pt-[110px] md:pt-[150px] pb-[85px] md:pb-[120px]">
        <Reveal>
          <div className="mb-[55px]">
            <Eyebrow red>{t.events}</Eyebrow>
            <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] mt-[18px]">
              {t.events.split("/")[1] || t.events}
            </h2>
          </div>
          <div className="border-y border-[#2b2b2b] p-[35px_10px] md:p-[35px_30px] flex flex-col md:flex-row md:items-center gap-[25px]">
            <CalendarDays className="text-brand w-[30px] h-[30px]" />
            <div className="flex-1">
              <h3 className="m-0 mb-[7px] text-[15px] uppercase">{t.noEvents}</h3>
              <p className="text-[#b3b3b3] text-[12px] m-0">{t.eventBody}</p>
            </div>
            <a href="#newsletter" className="text-[8px] tracking-[2px] flex gap-[12px]">
              NEWSLETTER
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ===== SHOP ===== */}
      <section id="shop" className="bg-[#e6e4df] text-[#111] px-5 md:px-[8vw] py-[60px] md:py-[100px] grid md:grid-cols-2 items-center gap-8 md:gap-[8vw] min-h-[650px]">
        <div className="relative h-[360px] md:h-[450px] flex items-center justify-center">
          <div
            className="w-[230px] md:w-[280px] h-[320px] md:h-[390px] bg-[#0a0a0a] text-white flex flex-col items-center justify-center drop-shadow-[0_25px_25px_#0006]"
            style={{ clipPath: "polygon(24% 5%, 38% 0, 62% 0, 76% 5%, 100% 21%, 86% 39%, 76% 31%, 76% 100%, 24% 100%, 24% 31%, 14% 39%, 0 21%)" }}
          >
            <span className="font-display text-[52px] leading-[0.75] italic">
              <span className="text-brand">GEN3</span>
              <br />
              RVTO
            </span>
            <small className="text-[5px] tracking-[2px] mt-[18px]">JAMAIS SANS L&apos;3KIP</small>
          </div>
          <div className="absolute right-[5%] bottom-[3%] w-[110px] md:w-[150px] h-[66px] md:h-[90px] rounded-t-[90px] rounded-b-[15px] bg-[#bdbdbd] grid place-items-center font-display text-[28px] rotate-[-12deg] shadow-[0_20px_30px_#0003]">
            3KIP
            <span className="absolute -right-[45px] -bottom-[6px] w-[80px] h-[22px] bg-[#aaa] rounded-full" />
          </div>
        </div>
        <Reveal className="text-center md:text-left">
          <Eyebrow red className="justify-center md:justify-start">{t.shop}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] my-[25px_0_32px]">{t.shopTitle}</h2>
          <p className="text-[#a1a1a1] tracking-[1px]">{t.shopCta}</p>
          <span className="inline-flex gap-[10px] items-center bg-[#111] text-white text-[8px] tracking-[1.5px] uppercase px-[17px] py-[13px] mt-[25px]">
            <Sparkles size={15} />
            {t.soon}
          </span>
        </Reveal>
      </section>

      {/* ===== BOOKING ===== */}
      <section id="booking" className="bg-[#080808] px-5 md:px-[8vw] py-[85px] md:py-[120px] grid md:grid-cols-2 gap-14 md:gap-[10vw]">
        <Reveal>
          <Eyebrow red>{t.booking}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] my-[25px_0_32px]">{t.bookTitle}</h2>
          <p className="text-[#c9c9c9] max-w-[460px] leading-[1.7]">{t.bookBody}</p>
          <div className="flex flex-col items-start gap-4 my-[35px]">
            <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[13px] text-[11px] text-[#aaa] hover:text-brand">
              <MessageCircle className="w-4 text-brand" />
              {t.bookingWhatsApp}
            </a>
            <div className="flex flex-wrap items-center gap-x-[18px] gap-y-3 text-[11px] text-[#aaa]">
              <a href={social.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-brand"><SpotifyIcon size={18} /></a>
              <a href={social.apple} target="_blank" rel="noopener noreferrer" aria-label="Apple Music" className="hover:text-brand"><AppleMusicIcon size={18} /></a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-brand"><YouTubeIcon size={18} /></a>
            </div>
            <span className="flex items-center gap-[13px] text-[11px] text-[#aaa]">
              <MapPin className="w-4 text-brand" />
              Cotonou, Bénin
            </span>
          </div>
          <span className="inline-flex gap-[12px] items-center border-b border-[#555] py-[10px] text-[9px] tracking-[1.5px]">
            <Download className="w-4" />
            {t.bookingEpk}
          </span>
        </Reveal>

        <form className="bg-[#111] p-6 md:p-[42px]" onSubmit={(e) => submit(e, "booking", setBookingState)}>
          <h3 className="uppercase font-display text-[28px] tracking-[1px] m-0 mb-[30px]">{lang === "fr" ? "Demande de booking" : "Booking request"}</h3>
          <div className="grid md:grid-cols-2 gap-[22px_18px]">
            <label className={labelClass}>{t.name}<input name="name" required className={inputClass} /></label>
            <label className={labelClass}>{t.email}<input name="email" type="email" required className={inputClass} /></label>
            <label className={labelClass}>{t.org}<input name="organization" className={inputClass} /></label>
            <label className={labelClass}>{t.city}<input name="city" className={inputClass} /></label>
            <label className={`${labelClass} md:col-span-2`}>{t.date}<input name="eventDate" type="date" className={inputClass} /></label>
            <label className={`${labelClass} md:col-span-2`}>{t.message}<textarea name="message" rows={4} required className={inputClass} /></label>
          </div>
          <button disabled={bookingState === "loading"} className={`${btnPrimary} mt-7`} type="submit">
            {bookingState === "loading" ? "…" : t.send}
            <Send size={16} />
          </button>
          {bookingState === "success" && <p className="flex items-center gap-2 text-[10px] mt-[15px] text-[#60b879]"><Check className="w-[15px]" />{t.sent}</p>}
          {bookingState === "error" && <p className="text-[10px] mt-[15px] text-[#ff5a5a]">{lang === "fr" ? "Une erreur est survenue. Réessayez." : "An error occurred. Try again."}</p>}
        </form>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-[#080808] px-5 md:px-[8vw] py-[85px] md:py-[120px] grid md:grid-cols-[0.75fr_1fr] gap-14 md:gap-[10vw]">
        <Reveal>
          <Eyebrow red>{t.faqEyebrow}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] my-[25px_0_32px]">{t.faqTitle}</h2>
          <p className="text-[#b3b3b3] text-[13px] leading-[1.7]">{t.faqSub}</p>
        </Reveal>
        <Reveal delay={90}>
          <div className="border-t border-[#333]">
            {t.faq.map((item, i) => (
              <details key={item.q} open={i === 0} className="border-b border-[#333] py-6 group">
                <summary className="list-none cursor-pointer text-[14px] uppercase font-bold tracking-[0.4px] flex justify-between [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-brand text-[22px] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-[#c9c9c9] text-[12px] leading-[1.7] max-w-[580px] pr-10 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-[#111] px-5 md:px-[8vw] py-[85px] md:py-[120px] grid md:grid-cols-[0.75fr_1fr] gap-14 md:gap-[10vw] items-center">
        <Reveal>
          <Eyebrow red>{t.contactEyebrow}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] my-[25px_0_32px]">{t.contactTitle}</h2>
          <p className="text-[#b3b3b3] text-[13px] leading-[1.7]">{t.contactBody}</p>
        </Reveal>
        <form className="grid md:grid-cols-2 gap-[25px_18px]" onSubmit={(e) => submit(e, "contact", setContactState)}>
          <label className={labelClass}>{t.name}<input name="name" required className={inputClass} /></label>
          <label className={labelClass}>{t.email}<input name="email" type="email" required className={inputClass} /></label>
          <label className={`${labelClass} md:col-span-2`}>{t.message}<textarea name="message" rows={3} required className={inputClass} /></label>
          <button className={`${btnPrimary} md:col-span-2 justify-self-start`} disabled={contactState === "loading"}>
            {contactState === "loading" ? "…" : t.send}
            <ArrowRight />
          </button>
          {contactState === "success" && <p className="md:col-span-2 flex items-center gap-2 text-[10px] text-[#60b879]"><Check className="w-[15px]" />{t.sent}</p>}
          {contactState === "error" && <p className="md:col-span-2 text-[10px] text-[#ff5a5a]">{t.errSend}</p>}
        </form>
      </section>
    </main>
  );
}
