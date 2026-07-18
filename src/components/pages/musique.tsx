"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Pause, Play, Volume2 } from "lucide-react";
import { useLang } from "../lang";
import { Eyebrow } from "../ui";
import { platformLinks, platformIcons, releases, videos, type Release } from "../data";
import { Reveal } from "../reveal";

const toneStyle: Record<Release["tone"], { style: React.CSSProperties; text: string }> = {
  silver: { style: { background: "linear-gradient(145deg, #d0d0d0, #777 53%, #111)" }, text: "text-[#111]" },
  red: { style: { background: "radial-gradient(circle at center, #f83333 0, #8e0808 35%, #110000 78%)" }, text: "text-white" },
  dark: { style: { background: "repeating-linear-gradient(120deg, #0b0b0b 0, #0b0b0b 5px, #191919 6px, #191919 8px)" }, text: "text-[#ddd]" },
};

function CoverArt({ title, i, tone }: { title: string; i: number; tone: Release["tone"] }) {
  const conf = toneStyle[tone];
  return (
    <div className={`relative aspect-square overflow-hidden p-[25px] flex flex-col items-center justify-center ${conf.text}`} style={conf.style}>
      <span className="absolute inset-[8%] border border-white/40 rotate-[8deg]" />
      {tone === "red" && <span className="absolute w-[37%] h-[82%] rounded-full bg-[#090909] shadow-[0_0_45px_#000]" />}
      <span className="absolute top-4 left-4 text-[8px] z-[1]">0{i + 1}</span>
      <b
        className={`font-display italic text-[clamp(36px,5vw,76px)] tracking-[-2px] z-[1] ${tone === "dark" ? "text-transparent" : ""}`}
        style={tone === "dark" ? { WebkitTextStroke: "1px #bbb" } : undefined}
      >
        {title}
      </b>
      <small className="text-[7px] tracking-[5px] z-[1]">GEN3RVTO</small>
      <i className="absolute right-4 bottom-[14px] font-display text-[15px] text-brand not-italic z-[1]">3KIP</i>
    </div>
  );
}

function Player() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(31);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.25)), 250);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <div className="mt-[65px] bg-[#111] text-white min-h-20 flex items-center p-[13px_22px] gap-[18px]">
      <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Lecture"} className="w-[46px] h-[46px] shrink-0 rounded-full bg-brand text-white grid place-items-center">
        {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
      </button>
      <div className="hidden md:grid w-[46px] h-[46px] place-items-center font-display" style={{ background: "linear-gradient(135deg, #aaa, #111)" }}>
        K
      </div>
      <div className="w-[70px] md:w-[130px]">
        <strong className="block text-[12px]">Kichta</strong>
        <span className="block text-[8px] text-[#b3b3b3] mt-1">GEN3RVTO</span>
      </div>
      <span className="hidden md:inline text-[8px] text-[#b3b3b3]">0:{String(Math.floor(progress * 2.14) % 60).padStart(2, "0")}</span>
      <div className="h-[3px] bg-[#333] relative flex-1 cursor-pointer" onClick={(e) => setProgress((e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100)}>
        <i className="block h-full bg-brand" style={{ width: `${progress}%` }} />
      </div>
      <span className="hidden md:inline text-[8px] text-[#b3b3b3]">3:34</span>
      <Volume2 size={19} className="hidden md:block" />
      <div className="hidden md:block h-[3px] bg-[#333] max-w-[65px] flex-1">
        <i className="block h-full w-[70%] bg-[#888]" />
      </div>
    </div>
  );
}

export function MusiquePageContent() {
  const { t } = useLang();

  const track = (target: string, platform: string) => {
    try {
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "track_click", target, platform }),
        keepalive: true,
      });
    } catch {}
  };

  return (
    <main className="overflow-hidden">
      {/* ===== DISCOGRAPHY ===== */}
      <section id="music" className="bg-[#f0efeb] text-[#0a0a0a] px-5 md:px-[8vw] pt-[110px] md:pt-[150px] pb-[85px] md:pb-[120px]">
        <div className="flex items-end justify-between mb-[55px]">
          <div>
            <Eyebrow red>{t.musicEyebrow}</Eyebrow>
            <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] mt-[18px]">{t.musicTitle}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {releases.map((r, i) => (
            <Reveal as="article" key={r.title} delay={i * 90}>
              <a href={r.spotify} target="_blank" rel="noopener noreferrer" aria-label={`Écouter ${r.title}`} onClick={() => track(r.title, "Spotify")} className="block overflow-hidden group">
                <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                  <CoverArt title={r.title} i={i} tone={r.tone} />
                </div>
              </a>
              <div className="flex justify-between items-center pt-[17px]">
                <div>
                  <span className="text-[7px] text-brand tracking-[1.5px]">{r.status}</span>
                  <h3 className="text-[16px] my-[5px]">{r.title}</h3>
                  <p className="text-[8px] text-[#b3b3b3] m-0 tracking-[1px]">{r.date}</p>
                  <div className="flex gap-[14px] mt-[10px]">
                    <a href={r.spotify} target="_blank" rel="noopener noreferrer" onClick={() => track(r.title, "Spotify")} className="text-[8px] tracking-[1px] uppercase text-[#9a9a9a] border-b border-[#ccc] pb-[3px] hover:text-brand hover:border-brand">Spotify</a>
                    <a href={r.apple} target="_blank" rel="noopener noreferrer" onClick={() => track(r.title, "Apple")} className="text-[8px] tracking-[1px] uppercase text-[#9a9a9a] border-b border-[#ccc] pb-[3px] hover:text-brand hover:border-brand">Apple</a>
                    {r.youtube && <a href={r.youtube} target="_blank" rel="noopener noreferrer" onClick={() => track(r.title, "YouTube")} className="text-[8px] tracking-[1px] uppercase text-[#9a9a9a] border-b border-[#ccc] pb-[3px] hover:text-brand hover:border-brand">YouTube</a>}
                  </div>
                </div>
                <a href={r.spotify} target="_blank" rel="noopener noreferrer" aria-label={`Écouter ${r.title}`} onClick={() => track(r.title, "Spotify")} className="w-10 h-10 shrink-0 rounded-full border border-[#aaa] grid place-items-center transition-colors hover:bg-brand hover:border-brand hover:text-white">
                  <Play size={18} fill="currentColor" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Player />
      </section>

      {/* ===== VIDEOS ===== */}
      <section id="videos" className="bg-[#070707] px-5 md:px-[8vw] py-[85px] md:py-[120px]">
        <div className="mb-[55px]">
          <Eyebrow red>{t.videoEyebrow}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] mt-[18px]">{t.videoTitle}</h2>
        </div>

        {/* Featured video */}
        <Reveal as="figure" className="m-0">
          <div className="relative w-full aspect-video overflow-hidden bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
              title={`GEN3RVTO — ${videos[0].title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <figcaption className="flex items-center gap-[13px] mt-4">
            <span className="bg-brand px-[10px] py-[6px] text-[7px] tracking-[2px]">OFFICIAL VIDEO</span>
            <span className="font-display text-[22px] tracking-[1px]">{videos[0].title}</span>
          </figcaption>
        </Reveal>

        {/* Other videos */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {videos.slice(1).map((v, i) => (
            <Reveal as="figure" key={v.youtubeId} delay={i * 90} className="m-0">
              <div className="relative w-full aspect-video overflow-hidden bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={`GEN3RVTO — ${v.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <figcaption className="font-display text-[18px] tracking-[1px] mt-3">{v.title}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PLATFORMS ===== */}
      <section id="platforms" className="bg-[#111] text-[#eee] border-b border-[#2a2a2a] px-5 md:px-[8vw] py-7 md:py-9 flex flex-col md:flex-row md:items-center gap-4 md:gap-[5vw]">
        <div className="min-w-[180px]">
          <p className="m-0 mb-[7px] text-[9px] font-extrabold tracking-[2px] text-white">{t.platformTitle}</p>
          <p className="m-0 text-[8px] text-[#a1a1a1] tracking-[1px] uppercase">{t.platformSub}</p>
        </div>
        <div className="flex items-center overflow-x-auto no-scrollbar flex-1 -mx-5 md:mx-0">
          {t.platforms.map((name) => {
            const Icon = platformIcons[name];
            const href = platformLinks[name];
            const content = (
              <>
                {Icon && <Icon size={16} className="opacity-80" />}
                <span className="font-display text-[15px] tracking-[0.5px]">{name}</span>
                <i className="not-italic text-[8px] text-brand">↗</i>
              </>
            );
            return href ? (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[10px] whitespace-nowrap px-[22px] py-[13px] border-l border-[#333] text-[#c9c9c9] transition-colors hover:text-white">
                {content}
              </a>
            ) : (
              <span key={name} className="flex items-center gap-[10px] whitespace-nowrap px-[22px] py-[13px] border-l border-[#333] text-[#c9c9c9]">
                {content}
              </span>
            );
          })}
        </div>
      </section>

      <div className="bg-[#080808] px-5 md:px-[8vw] py-[60px] text-center">
        <Link href="/booking" className="inline-flex items-center gap-4 text-[9px] tracking-[1.5px] uppercase border-b border-[#555] pb-[8px] hover:text-brand hover:border-brand">
          {t.allReleases}
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
