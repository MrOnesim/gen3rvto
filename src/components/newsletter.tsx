"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useLang } from "./lang";

type FormState = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const { t, lang } = useLang();
  const [state, setState] = useState<FormState>("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), locale: lang }),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="newsletter" className="bg-brand px-5 md:px-[8vw] py-[45px] md:py-[55px] flex flex-col md:flex-row md:items-center md:justify-between gap-[30px] md:gap-[50px]">
      <div className="grid grid-cols-[auto_1fr] gap-x-5 items-center">
        <Zap fill="currentColor" className="row-span-2 w-[34px] h-[34px]" />
        <h2 className="font-display text-[34px] md:text-[40px] uppercase m-0 tracking-[-1px]">{t.newsletter}</h2>
        <p className="m-0 mt-1 text-[10px]">{t.newsletterBody}</p>
      </div>
      <div className="w-full md:w-auto">
        <form onSubmit={submit} className="flex w-full md:w-[min(450px,42vw)] border-b border-white">
          <input
            name="email"
            type="email"
            required
            placeholder={t.emailPlaceholder}
            className="flex-1 bg-transparent border-0 text-white outline-none py-[13px] px-[2px] text-[12px] placeholder:text-[#ffd0d0]"
          />
          <button type="submit" disabled={state === "loading"} className="bg-white text-[#111] px-[18px] flex items-center gap-[10px] disabled:opacity-70">
            {state === "success" ? <Check className="w-4" /> : <ArrowRight className="w-4" />}
            <span className="text-[8px] uppercase tracking-[1px]">{state === "success" ? "OK" : t.subscribe}</span>
          </button>
        </form>
        {state === "error" && <small className="block text-right text-[#fff5f5] text-[9px] mt-2">{t.errRetry}</small>}
      </div>
    </section>
  );
}
