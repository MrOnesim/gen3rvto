"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    Camera,
    Clapperboard,
    Play,
} from "lucide-react";
import { useLang } from "../lang";
import { Eyebrow, btnPrimary, displayH2 } from "../ui";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../brands";
import { Reveal } from "../reveal";
import { latestRelease, social } from "../data";

export function HomePageContent() {
    const { t } = useLang();

    return (
        <main className="overflow-hidden">
            {/* ===== HERO ===== */}
            <section
                id="home"
                className="relative h-[min(900px,100vh)] min-h-[700px] bg-[#080808]"
            >
                <Image
                    src="/images/gen3rvto-hero.jpg"
                    alt="GEN3RVTO, artiste rap béninois"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_22%] grayscale contrast-[1.12] brightness-[0.68]"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, #050505 2%, #050505b8 27%, transparent 58%, #05050559), linear-gradient(0deg, #050505 0%, transparent 27%)",
                    }}
                />
                <div className="absolute inset-0 z-[2] opacity-[0.16] noise" />

                <div className="absolute z-[4] left-6 md:left-[9.2vw] top-[48%] md:top-1/2 -translate-y-[44%]">
                    <Eyebrow line>{t.heroTag}</Eyebrow>
                    <h1 className="font-display font-black uppercase text-[clamp(80px,14vw,210px)] leading-[0.68] tracking-[-8px] my-[35px] md:my-[45px_0_36px]">
                        GEN3
                        <br />
                        <i
                            className="not-italic text-transparent ml-12 md:ml-[13vw]"
                            style={{ WebkitTextStroke: "1px #eee" }}
                        >
                            RVTO
                        </i>
                    </h1>
                    <p className="text-[10px] tracking-[4px] text-[#aaa] font-bold">
                        {t.heroSub}
                    </p>
                    <div className="mt-9 flex items-center gap-[35px]">
                        <a
                            href={latestRelease.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={btnPrimary}
                        >
                            <Play size={17} fill="currentColor" /> {t.listen}
                        </a>
                        <Link
                            href="/musique"
                            className="flex items-center gap-[10px] text-[9px] uppercase tracking-[1.5px] border-b border-[#777] py-[11px]"
                        >
                            {t.latest}
                            <ArrowDown size={16} />
                        </Link>
                    </div>
                </div>

                <div className="absolute z-[3] right-[2vw] bottom-5 font-display text-[20vw] tracking-[-1vw] text-white/[0.03] leading-none pointer-events-none select-none">
                    3KIP
                </div>

                <div className="hidden md:flex absolute z-[5] bottom-7 left-[4vw] flex-col items-center gap-[10px]">
                    <span className="text-[7px] tracking-[3px] [writing-mode:vertical-rl]">
                        SCROLL
                    </span>
                    <i className="h-10 w-px bg-[#777]" />
                </div>

                <div className="hidden md:flex absolute z-[5] right-[3.2vw] top-1/2 -translate-y-1/2 flex-col gap-[20px]">
                    <a
                        href={social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-brand"
                    >
                        <InstagramIcon size={17} />
                    </a>
                    <a
                        href={social.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="hover:text-brand"
                    >
                        <TikTokIcon size={17} />
                    </a>
                    <a
                        href={social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-brand"
                    >
                        <FacebookIcon size={17} />
                    </a>
                    <a
                        href={social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-brand"
                    >
                        <Clapperboard size={18} />
                    </a>
                    <a
                        href={social.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Spotify"
                        className="hover:text-brand"
                    >
                        <Camera size={17} />
                    </a>
                </div>
            </section>

            {/* ===== LATEST RELEASE BAR ===== */}
            <section className="bg-[#0a0a0a] border-y border-[#222] px-5 md:px-[8vw] py-[22px] md:py-0 md:h-[112px] grid grid-cols-[1fr_auto] md:flex md:items-center md:justify-between gap-[22px]">
                <div className="grid grid-cols-[auto_auto] gap-x-[13px] items-center">
                    <span className="row-span-3 w-[7px] h-[7px] rounded-full bg-brand shadow-[0_0_0_5px_#ef28281f]" />
                    <p className="col-start-2 m-0 text-[8px] tracking-[2px] uppercase text-[#c9c9c9]">
                        {t.latest}
                    </p>
                    <strong className="col-start-2 font-display text-[22px] tracking-[1px]">
                        {latestRelease.title}
                    </strong>
                    <small className="col-start-2 text-[8px] text-[#b3b3b3]">
                        OUT NOW
                    </small>
                </div>

                <div className="col-span-2 row-start-2 md:col-auto md:row-auto flex flex-wrap items-center gap-[18px] md:gap-[26px]">
                    <a
                        href={latestRelease.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[15px] text-[#c9c9c9] hover:text-white"
                    >
                        Spotify
                        <i className="not-italic text-[8px] ml-[6px] text-brand">
                            ↗
                        </i>
                    </a>
                    <a
                        href={latestRelease.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[15px] text-[#c9c9c9] hover:text-white"
                    >
                        Apple Music
                        <i className="not-italic text-[8px] ml-[6px] text-brand">
                            ↗
                        </i>
                    </a>
                    {latestRelease.youtube && (
                        <a
                            href={latestRelease.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-[15px] text-[#c9c9c9] hover:text-white"
                        >
                            YouTube
                            <i className="not-italic text-[8px] ml-[6px] text-brand">
                                ↗
                            </i>
                        </a>
                    )}
                </div>

                <a
                    href={latestRelease.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-start-2 row-start-1 md:col-auto md:row-auto flex items-center gap-[18px] text-[9px] tracking-[2px] border-b border-[#555] py-[10px] transition-colors hover:text-brand hover:border-brand"
                >
                    {t.listen}
                    <ArrowRight size={16} />
                </a>
            </section>

            {/* ===== ABOUT ===== */}
            <section
                id="about"
                className="relative bg-[#080808] px-5 md:px-[8vw] py-[85px] md:py-[120px] grid md:grid-cols-[minmax(300px,42%)_1fr] gap-[65px] md:gap-[10vw] items-center"
            >
                <div className="hidden md:flex absolute top-20 left-[3vw] gap-[10px] items-center text-[8px] text-[#9a9a9a] [writing-mode:vertical-rl]">
                    01
                    <span className="h-[45px] w-px bg-[#333]" />
                </div>

                <div className="relative h-[520px] md:h-[670px]">
                    <Image
                        src="/images/gen3rvto-studio.jpg"
                        alt="Portrait studio de GEN3RVTO"
                        fill
                        sizes="(max-width: 800px) 90vw, 38vw"
                        className="object-cover object-top grayscale"
                    />
                    <span className="absolute -z-10 inset-0 border border-white/[0.11] translate-x-[18px] translate-y-[18px]" />
                    <span className="absolute bottom-5 -left-[29px] [writing-mode:vertical-rl] bg-brand px-[9px] py-[15px] text-[7px] tracking-[2px]">
                        COTONOU / BJ
                    </span>
                </div>

                <Reveal>
                    <div>
                        <Eyebrow red>{t.aboutEyebrow}</Eyebrow>
                        <h2 className={`${displayH2} my-[25px_0_32px]`}>
                            {t.aboutTitle}
                        </h2>
                        <p className="max-w-[570px] text-[#aaa] text-[15px] leading-[1.9]">
                            {t.aboutBody}
                        </p>
                        <blockquote className="font-[Georgia,serif] italic text-[19px] md:text-[23px] leading-[1.5] border-l-2 border-brand pl-[25px] my-[35px] text-[#ddd]">
                            “{t.aboutQuote}”
                        </blockquote>
                        <Link
                            href="/musique"
                            className="inline-flex items-center gap-5 border border-[#555] px-5 py-[15px] text-[9px] tracking-[1.5px] uppercase transition-colors hover:border-brand hover:text-brand"
                        >
                            {t.discover}
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </Reveal>
            </section>

            {/* ===== MOVEMENT ===== */}
            <section
                id="movement"
                className="relative min-h-[580px] grid place-items-center text-center bg-brand text-white isolate overflow-hidden px-5"
            >
                <div className="absolute -z-10 font-display text-[38vw] text-black/10 tracking-[-2vw] leading-none select-none">
                    3KIP
                </div>
                <div className="max-w-[700px]">
                    <Eyebrow className="justify-center !text-white">
                        {t.movementEyebrow}
                    </Eyebrow>
                    <h2 className="font-display uppercase text-[clamp(65px,10vw,125px)] leading-[0.78] tracking-[-4px] my-[35px]">
                        {t.movement}
                    </h2>
                    <p className="max-w-[520px] mx-auto leading-[1.7] text-[14px]">
                        {t.movementBody}
                    </p>
                    <div className="flex justify-center gap-5 md:gap-[60px] mt-[50px]">
                        {t.values.map((v, i) => (
                            <span
                                key={v}
                                className="text-[10px] tracking-[2px] uppercase"
                            >
                                <b className="mr-[10px] text-[#5f0909] text-[8px]">
                                    0{i + 1}
                                </b>
                                {v}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
