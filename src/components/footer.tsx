"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useLang } from "./lang";
import { Logo } from "./ui";
import { Newsletter } from "./newsletter";
import { AppleMusicIcon, FacebookIcon, InstagramIcon, SpotifyIcon, TikTokIcon, YouTubeIcon } from "./brands";
import { social } from "./data";

const linkClass = "flex items-center gap-[10px] text-[9px] tracking-[1px] text-[#cfcfcf] hover:text-white transition-colors";

export function Footer() {
  const { t } = useLang();

  return (
    <>
      <Newsletter />
      <footer className="bg-[#040404] px-5 md:px-[8vw] pt-[70px] pb-[25px]">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 items-start">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-6 text-[8px] text-[#a1a1a1] leading-[2] tracking-[1px]">
              TRAP · MELO TRAP · DRILL
              <br />
              COTONOU, BÉNIN
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <Link href="/" className="text-[9px] tracking-[1px] text-[#cfcfcf] hover:text-white">{t.footerBio}</Link>
            <Link href="/musique" className="text-[9px] tracking-[1px] text-[#cfcfcf] hover:text-white">{t.footerMusic}</Link>
            <Link href="/galerie" className="text-[9px] tracking-[1px] text-[#cfcfcf] hover:text-white">{t.footerGallery}</Link>
            <Link href="/galerie#press" className="text-[9px] tracking-[1px] text-[#cfcfcf] hover:text-white">{t.footerPress}</Link>
            <Link href="/booking" className="text-[9px] tracking-[1px] text-[#cfcfcf] hover:text-white">{t.footerBooking}</Link>
          </div>

          <div className="flex flex-col gap-[15px]">
            <a href={social.spotify} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <SpotifyIcon size={14} />
              Spotify
            </a>
            <a href={social.apple} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <AppleMusicIcon size={14} />
              Apple Music
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <YouTubeIcon size={14} />
              {t.footerYouTube}
            </a>
          </div>

          <div className="flex flex-col gap-[15px]">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <InstagramIcon size={14} />
              Instagram
            </a>
            <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <TikTokIcon size={14} />
              TikTok
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FacebookIcon size={14} />
              Facebook
            </a>
            <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <MessageCircle className="w-[14px]" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-[#222] mt-[55px] pt-[22px] flex flex-wrap justify-between items-center gap-[15px] text-[7px] text-[#9a9a9a] tracking-[1.2px]">
          <span>{t.footerCopyright}</span>
          <strong className="text-[#b3b3b3] order-3 w-full md:w-auto md:order-none">{t.footerSlogan}</strong>
          <Link href="/">{t.footerBackTop}</Link>
        </div>
      </footer>
    </>
  );
}
