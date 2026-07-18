"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useLang } from "../lang";
import { Eyebrow } from "../ui";
import { Reveal } from "../reveal";

const galleryImages = [
  "/images/gen3rvto-night.jpg",
  "/images/gen3rvto-portrait.jpg",
  "/images/gen3rvto-mic.jpg",
  "/images/gen3rvto-live.jpg",
];

const dibiImages = [
  "/images/gen3rvto-dibi-dobo.jpeg",
];

const figureClass = [
  "col-span-2 md:col-span-1 md:row-span-2 h-[390px] md:h-auto",
  "h-[260px] md:h-auto",
  "h-[260px] md:h-auto",
  "col-span-2 md:col-start-2 md:col-span-2 h-[250px] md:h-auto",
];

export function GaleriePageContent() {
  const { t, lang } = useLang();

  return (
    <main className="overflow-hidden">
      {/* ===== GALLERY ===== */}
      <section id="gallery" className="bg-[#0a0a0a] px-5 md:px-[8vw] pt-[110px] md:pt-[150px] pb-[85px] md:pb-[120px]">
        <div className="flex items-end justify-between mb-[55px]">
          <div>
            <Eyebrow red>{t.galleryEyebrow}</Eyebrow>
            <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] mt-[18px]">{t.galleryTitle}</h2>
          </div>
          <span className="text-[8px] tracking-[3px] text-[#9a9a9a]">{t.galleryNote}</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-[1.35fr_0.75fr_0.75fr] md:grid-rows-[300px_300px] gap-3">
          {t.galleryItems.map((item, idx) => (
            <Reveal as="figure" key={item.label} delay={idx * 80} className={`relative m-0 overflow-hidden bg-[#111] group ${figureClass[idx]}`}>
              <Image
                src={galleryImages[idx]}
                alt={`GEN3RVTO - ${item.label}`}
                fill
                sizes={idx === 0 || idx === 3 ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 25vw"}
                className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.025]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-[35px] px-[18px] pb-4 text-[8px] tracking-[2px] flex justify-between" style={{ background: "linear-gradient(transparent, #000c)" }}>
                {item.label}
                <span>{item.tag}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PRESS ===== */}
      <section id="press" className="bg-[#e8e6e0] text-[#111] px-5 md:px-[8vw] py-[85px] md:py-[120px]">
        <div className="mb-[55px]">
          <Eyebrow red>{t.pressEyebrow}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] mt-[18px]">{t.pressTitle}</h2>
        </div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 md:gap-[7vw]">
          <Reveal>
            <article className="grid md:grid-cols-[47%_1fr] gap-[30px] items-center">
              <div className="relative h-[470px] md:h-[410px] overflow-hidden">
                <Image src="/images/gen3rvto-leather.jpg" alt="Portrait presse GEN3RVTO" fill sizes="(max-width: 760px) 100vw, 50vw" className="object-cover grayscale" />
              </div>
              <div>
                <span className="text-[7px] tracking-[2px] text-brand font-extrabold">PORTRAIT · 2026</span>
                <h3 className="font-display uppercase font-normal text-[30px] md:text-[35px] leading-none my-[18px]">
                  {lang === "fr" ? "GEN3RVTO, une vision née à Cotonou" : "GEN3RVTO, a vision born in Cotonou"}
                </h3>
                <p className="text-[12px] leading-[1.7] text-[#a1a1a1]">
                  {lang === "fr"
                    ? "Trap, mélodie et force du collectif : découvrez l'univers qui donne vie au mouvement 3KIP."
                    : "Trap, melody and collective strength: discover the world behind the 3KIP movement."}
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <div className="border-t border-[#bbb]">
              <article className="min-h-[120px] border-b border-[#bbb] grid grid-cols-[1fr_auto] content-center relative">
                <span className="text-[7px] tracking-[2px] text-brand font-extrabold">RELEASE · JAN 2026</span>
                <h3 className="font-display uppercase font-normal text-[21px] mt-[10px]">Kichta — {lang === "fr" ? "le premier chapitre" : "the first chapter"}</h3>
                <ChevronRight className="col-start-2 row-span-2" />
              </article>
              <article className="min-h-[120px] border-b border-[#bbb] grid grid-cols-[1fr_auto] content-center relative">
                <span className="text-[7px] tracking-[2px] text-brand font-extrabold">COMING · 2026</span>
                <h3 className="font-display uppercase font-normal text-[21px] mt-[10px]">Flip Flap — {lang === "fr" ? "dernière sortie" : "latest release"}</h3>
                <ChevronRight className="col-start-2 row-span-2" />
              </article>
              <article className="min-h-[120px] border-b border-[#bbb] grid grid-cols-[1fr_auto] content-center relative">
                <span className="text-[7px] tracking-[2px] text-brand font-extrabold">MEDIA</span>
                <h3 className="font-display uppercase font-normal text-[21px] mt-[10px]">Press kit / EPK</h3>
                <small className="absolute right-0 top-1/2 text-[7px] p-[6px] bg-[#111] text-white">{lang === "fr" ? "EN PRÉPARATION" : "IN PROGRESS"}</small>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== DIBI / DIBITIQUE ===== */}
      <section id="dibi" className="bg-[#0a0a0a] px-5 md:px-[8vw] py-[85px] md:py-[120px]">
        <div className="mb-[55px]">
          <Eyebrow red>{t.dibiEyebrow}</Eyebrow>
          <h2 className="font-display uppercase font-normal text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-[-2px] mt-[18px]">{t.dibiTitle}</h2>
          <p className="max-w-[640px] text-[#cfcfcf] text-[14px] leading-[1.9] mt-[25px]">
            {lang === "fr"
              ? "Figure majeure de la musique urbaine africaine, Dibi a popularisé un style unique qu'il a lui-même baptisé la « Dibitique » : un mélange audacieux de rap, d'afropop, de R&B et de sonorités traditionnelles béninoises. GEN3RVTO s'inscrit dans cette vague qui fait rayonner Cotonou."
              : "A major figure in African urban music, Dibi popularized a one-of-a-kind style he named the “Dibitique” — a bold blend of rap, afropop, R&B and traditional Beninese sounds. GEN3RVTO carries the wave that puts Cotonou on the map."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <Reveal as="figure" className="relative m-0 overflow-hidden bg-[#111] group h-[300px] md:h-[440px]">
            <Image
              src={dibiImages[0]}
              alt="Dibi en session Dibitique"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.025]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 pt-[35px] px-[18px] pb-4 text-[8px] tracking-[2px] flex justify-between" style={{ background: "linear-gradient(transparent, #000c)" }}>
              DIBITIQUE
              <span>SESSION</span>
            </figcaption>
          </Reveal>
          <Reveal as="figure" delay={90} className="relative m-0 overflow-hidden bg-[#111] group h-[300px] md:h-[440px] grid place-items-center">
            <div className="px-8 text-center">
              <p className="font-display uppercase text-[clamp(28px,4vw,52px)] leading-[0.9] tracking-[-1px]">DIBI<span className="text-brand"> × </span>3KIP</p>
              <p className="text-[9px] tracking-[3px] text-[#cfcfcf] mt-[18px]">LA DIBITIQUE · COTONOU</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
