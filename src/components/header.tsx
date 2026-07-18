"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLang } from "./lang";
import { Logo } from "./ui";

export function Header() {
  const { lang, t, toggle } = useLang();
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const home = pathname === "/";

  return (
    <header
      className={`z-50 top-0 left-0 w-full h-[72px] md:h-[92px] flex items-center justify-between px-5 md:px-[4.3vw] ${
        home ? "absolute bg-transparent" : "sticky bg-ink/85 backdrop-blur-md border-b border-[#222]"
      }`}
    >
      <Logo />

      <nav
        className={`hidden md:flex items-center gap-[2.2vw] ${
          menu
            ? "!flex fixed inset-0 top-[72px] z-40 flex-col justify-center gap-7 bg-ink/[0.97]"
            : ""
        }`}
        aria-label="Navigation principale"
      >
        {t.nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenu(false)}
              className={`text-[10px] font-bold tracking-[1.4px] uppercase transition-colors hover:text-brand ${
                active ? "text-brand" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile fullscreen menu */}
      {menu && (
        <nav
          className="md:hidden fixed inset-0 top-[72px] z-40 flex flex-col items-center justify-center gap-7 bg-ink/[0.97]"
          aria-label="Navigation mobile"
        >
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenu(false)}
              className="font-display text-[27px] tracking-[1px] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="flex items-center gap-[10px] md:gap-[22px]">
        <button
          onClick={toggle}
          aria-label="Changer de langue"
          className="border border-[#777] px-[14px] py-[9px] text-[10px] font-bold tracking-[1px] inline-flex items-center gap-[6px] transition-colors hover:border-brand hover:text-brand"
        >
          <span className="text-white">{lang.toUpperCase()}</span>
          <span className="text-[#a1a1a1]">/ {lang === "fr" ? "EN" : "FR"}</span>
        </button>
        <Link
          href="/booking"
          className="hidden md:flex h-[38px] px-[15px] items-center gap-[14px] border border-[#777] text-[9px] tracking-[1.4px] font-bold transition-colors hover:border-brand hover:text-brand"
        >
          BOOKING
          <ArrowRight size={15} />
        </Link>
        <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
