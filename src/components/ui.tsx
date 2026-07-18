import Link from "next/link";
import type { ReactNode } from "react";

export const btnPrimary =
  "inline-flex items-center justify-center gap-3 h-12 px-6 bg-brand text-white uppercase text-[9px] font-extrabold tracking-[1.5px] transition-all duration-200 hover:bg-white hover:text-[#111] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-default";

export const sectionPad = "px-[8vw] py-[85px] md:py-[120px] relative";

export const displayH2 =
  "font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px]";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="GEN3RVTO — accueil" className={`font-black italic text-[23px] tracking-[-1.5px] leading-[0.75] ${className}`}>
      <span className="text-brand">GEN3</span>RVTO
      <small className="block text-[#aaa] text-[6px] tracking-[5px] text-right mt-[7px]">3KIP</small>
    </Link>
  );
}

export function Eyebrow({ children, red = false, line = false, className = "" }: { children: ReactNode; red?: boolean; line?: boolean; className?: string }) {
  return (
    <p className={`flex items-center gap-3 uppercase text-[10px] tracking-[3px] font-bold ${red ? "text-brand" : "text-[#bcbcbc]"} ${className}`}>
      {line && <span className="inline-block w-[27px] h-px bg-brand" />}
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, action }: { eyebrow: string; title: string; action?: ReactNode }) {
  return (
    <div className="flex items-end justify-between mb-[55px]">
      <div>
        <Eyebrow red>{eyebrow}</Eyebrow>
        <h2 className={`${displayH2} mt-[18px]`}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
