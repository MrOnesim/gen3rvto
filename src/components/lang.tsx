"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

export type Copy = {
  nav: { label: string; href: string }[];
  heroTag: string; heroSub: string; listen: string; latest: string;
  aboutEyebrow: string; aboutTitle: string; aboutBody: string; aboutQuote: string; discover: string;
  musicEyebrow: string; musicTitle: string; allReleases: string;
  videoEyebrow: string; videoTitle: string; watch: string;
  platformTitle: string; platformSub: string; platforms: string[];
  galleryEyebrow: string; galleryTitle: string; galleryNote: string;
  galleryItems: { label: string; tag: string }[];
  dibiEyebrow: string; dibiTitle: string;
  movementEyebrow: string; movement: string; movementBody: string; values: string[];
  events: string; noEvents: string; eventBody: string;
  pressEyebrow: string; pressTitle: string;
  shop: string; shopTitle: string; soon: string; shopCta: string;
  booking: string; bookTitle: string; bookBody: string;
  bookingContact: string; bookingWhatsApp: string; bookingEpk: string;
  name: string; email: string; org: string; city: string; date: string; message: string; send: string; sent: string;
  contactEyebrow: string; contactTitle: string; contactBody: string;
  faqEyebrow: string; faqTitle: string; faqSub: string; faq: { q: string; a: string }[];
  newsletter: string; newsletterBody: string; emailPlaceholder: string; subscribe: string;
  footerCopyright: string; footerSlogan: string; footerBackTop: string;
  footerBio: string; footerMusic: string; footerGallery: string; footerPress: string; footerBooking: string;
  footerPlatforms: string; footerYouTube: string;
  errRetry: string; errSend: string;
};

export const copy: Record<Lang, Copy> = {
  fr: {
    nav: [
      { label: "Accueil", href: "/" },
      { label: "Musique", href: "/musique" },
      { label: "Galerie", href: "/galerie" },
      { label: "Booking", href: "/booking" },
    ],
    heroTag: "COTONOU · BÉNIN", heroSub: "RAP · TRAP · MELO TRAP · DRILL", listen: "Écouter maintenant", latest: "Dernière sortie",
    aboutEyebrow: "01 / L'ARTISTE", aboutTitle: "Une voix. Une vision. Une équipe.",
    aboutBody: "GEN3RVTO est un artiste béninois qui développe un univers mêlant trap, mélodies et énergie urbaine. À travers sa musique, il met en avant la loyauté, l'ambition et l'esprit d'équipe. Fondateur du mouvement 3KIP, il considère celui-ci comme bien plus qu'un collectif : une vision destinée à rassembler.",
    aboutQuote: "Faire rayonner Cotonou et marquer durablement la scène musicale africaine.", discover: "Découvrir son histoire",
    musicEyebrow: "02 / DISCOGRAPHIE", musicTitle: "Le son de la 3KIP", allReleases: "Toutes les sorties",
    videoEyebrow: "03 / VIDÉOS", videoTitle: "À l'écran", watch: "REGARDER SUR YOUTUBE",
    platformTitle: "04 / ÉCOUTER PARTOUT", platformSub: "Disponible sur toutes les plateformes",
    platforms: ["Spotify", "Apple Music", "Deezer", "YouTube Music", "Boomplay", "Audiomack", "SoundCloud"],
    galleryEyebrow: "05 / GALERIE", galleryTitle: "Hors cadre.", galleryNote: "PRESS · STUDIO · LIVE",
    dibiEyebrow: "FEATURE · DIBITIQUE", dibiTitle: "Dibi x 3KIP.",
    galleryItems: [
      { label: "3KIP NIGHTS", tag: "LIVE / COTONOU" },
      { label: "STUDIO 26", tag: "PORTRAIT" },
      { label: "MIC SESSION", tag: "STUDIO" },
      { label: "RED ROOM", tag: "PERFORMANCE" },
    ],
    movementEyebrow: "LE MOUVEMENT",
    movement: "Jamais sans l'3KIP.",
    movementBody: "Plus qu'un nom, 3KIP est une vision. Un mouvement construit sur la loyauté, l'ambition et la force du collectif.", values: ["Loyauté", "Ambition", "Équipe"],
    events: "06 / SUR SCÈNE", noEvents: "Aucune date annoncée", eventBody: "Les prochaines dates arrivent. Inscris-toi pour être le premier au courant.",
    pressEyebrow: "07 / PRESS & NEWS", pressTitle: "Dernières nouvelles.",
    shop: "08 / 3KIP® STORE", shopTitle: "Le mouvement se porte.", soon: "Bientôt disponible", shopCta: "T-shirts · Hoodies · Caps · Limited editions",
    booking: "09 / BOOKING", bookTitle: "Faisons du bruit, ensemble.", bookBody: "Festival, concert, média ou collaboration : présentez-nous votre projet.",
    bookingContact: "Coordonnées officielles à venir", bookingWhatsApp: "WhatsApp Booking", bookingEpk: "PRESS KIT / EPK · BIENTÔT",
    name: "Nom complet *", email: "E-mail *", org: "Organisation", city: "Ville / Pays", date: "Date de l'événement", message: "Parlez-nous du projet *", send: "Envoyer la demande", sent: "Demande envoyée. L'équipe revient vers vous.",
    contactEyebrow: "10 / CONTACT", contactTitle: "Parlons-nous.", contactBody: "Média, label, collaboration ou simple message : écrivez à l'équipe.",
    faqEyebrow: "11 / FAQ", faqTitle: "Questions fréquentes.", faqSub: "Tout ce qu'il faut savoir sur GEN3RVTO et 3KIP.",
    faq: [
      { q: "Qui est GEN3RVTO ?", a: "Un artiste béninois basé à Cotonou, à la croisée de la trap, de la melo trap et de la drill." },
      { q: "Que signifie 3KIP ?", a: "Un mouvement fondé sur la loyauté, l'ambition et l'esprit d'équipe — bien plus qu'un collectif." },
      { q: "Comment proposer un booking ?", a: "Utilisez le formulaire professionnel ci-dessus. Chaque demande est enregistrée et étudiée par l'équipe." },
      { q: "Quand la boutique ouvrira-t-elle ?", a: "Les premières pièces 3KIP sont en préparation. La newsletter annoncera le lancement." },
    ],
    newsletter: "Reste dans la boucle.", newsletterBody: "Sorties, dates, exclusivités 3KIP. Pas de bruit inutile.", emailPlaceholder: "ton@email.com", subscribe: "S'inscrire",
    footerCopyright: "© 2026 GEN3RVTO. TOUS DROITS RÉSERVÉS.",
    footerSlogan: "JAMAIS SANS L'3KIP",
    footerBackTop: "RETOUR EN HAUT ↑",
    footerBio: "BIO", footerMusic: "MUSIQUE", footerGallery: "GALERIE", footerPress: "PRESSE", footerBooking: "BOOKING",
    footerPlatforms: "Plateformes", footerYouTube: "YouTube",
    errRetry: "Vérifiez votre adresse et réessayez.", errSend: "Envoi impossible. Réessayez.",
  },
  en: {
    nav: [
      { label: "Home", href: "/" },
      { label: "Music", href: "/musique" },
      { label: "Gallery", href: "/galerie" },
      { label: "Booking", href: "/booking" },
    ],
    heroTag: "COTONOU · BENIN", heroSub: "RAP · TRAP · MELO TRAP · DRILL", listen: "Listen now", latest: "Latest release",
    aboutEyebrow: "01 / THE ARTIST", aboutTitle: "One voice. One vision. One team.",
    aboutBody: "GEN3RVTO is a Beninese artist shaping a sound where trap, melody and raw urban energy meet. His music champions loyalty, ambition and teamwork. Founder of the 3KIP movement, he sees it as far more than a collective: a vision built to bring like-minded people together.",
    aboutQuote: "Put Cotonou on the map and leave a lasting mark on African music.", discover: "Discover his story",
    musicEyebrow: "02 / DISCOGRAPHY", musicTitle: "The sound of 3KIP", allReleases: "All releases",
    videoEyebrow: "03 / VIDEOS", videoTitle: "On screen", watch: "WATCH ON YOUTUBE",
    platformTitle: "04 / LISTEN EVERYWHERE", platformSub: "Available on all platforms",
    platforms: ["Spotify", "Apple Music", "Deezer", "YouTube Music", "Boomplay", "Audiomack", "SoundCloud"],
    galleryEyebrow: "05 / GALLERY", galleryTitle: "Off frame.", galleryNote: "PRESS · STUDIO · LIVE",
    dibiEyebrow: "FEATURE · DIBITIQUE", dibiTitle: "Dibi x 3KIP.",
    galleryItems: [
      { label: "3KIP NIGHTS", tag: "LIVE / COTONOU" },
      { label: "STUDIO 26", tag: "PORTRAIT" },
      { label: "MIC SESSION", tag: "STUDIO" },
      { label: "RED ROOM", tag: "PERFORMANCE" },
    ],
    movementEyebrow: "THE MOVEMENT",
    movement: "Never without the 3KIP.",
    movementBody: "More than a name, 3KIP is a vision. A movement built on loyalty, ambition and collective strength.", values: ["Loyalty", "Ambition", "Team"],
    events: "06 / LIVE", noEvents: "No dates announced", eventBody: "New dates are coming. Subscribe to hear first.",
    pressEyebrow: "07 / PRESS & NEWS", pressTitle: "Latest stories.",
    shop: "08 / 3KIP® STORE", shopTitle: "Wear the movement.", soon: "Coming soon", shopCta: "T-shirts · Hoodies · Caps · Limited editions",
    booking: "09 / BOOKING", bookTitle: "Let's make noise, together.", bookBody: "Festival, concert, media or collaboration: tell us about your project.",
    bookingContact: "Official contact details coming soon", bookingWhatsApp: "WhatsApp Booking", bookingEpk: "PRESS KIT / EPK · SOON",
    name: "Full name *", email: "Email *", org: "Organization", city: "City / Country", date: "Event date", message: "Tell us about the project *", send: "Send request", sent: "Request sent. The team will get back to you.",
    contactEyebrow: "10 / CONTACT", contactTitle: "Let's talk.", contactBody: "Media, label, collaboration or a simple message: reach the team.",
    faqEyebrow: "11 / FAQ", faqTitle: "Frequently asked.", faqSub: "Everything you need to know about GEN3RVTO and 3KIP.",
    faq: [
      { q: "Who is GEN3RVTO?", a: "A Beninese artist based in Cotonou, blending trap, melo trap and drill." },
      { q: "What does 3KIP mean?", a: "A movement built on loyalty, ambition and teamwork — far more than a collective." },
      { q: "How can I book GEN3RVTO?", a: "Use the professional form above. Every request is saved and reviewed by the team." },
      { q: "When will the store open?", a: "The first 3KIP pieces are in development. The newsletter will announce the drop." },
    ],
    newsletter: "Stay in the loop.", newsletterBody: "Releases, shows and 3KIP exclusives. No unnecessary noise.", emailPlaceholder: "you@email.com", subscribe: "Join",
    footerCopyright: "© 2026 GEN3RVTO. ALL RIGHTS RESERVED.",
    footerSlogan: "NEVER WITHOUT THE 3KIP",
    footerBackTop: "BACK TO TOP ↑",
    footerBio: "BIO", footerMusic: "MUSIC", footerGallery: "GALLERY", footerPress: "PRESS", footerBooking: "BOOKING",
    footerPlatforms: "Platforms", footerYouTube: "YouTube",
    errRetry: "Check your address and try again.", errSend: "Could not send. Try again.",
  },
};

type LangCtx = { lang: Lang; t: Copy; toggle: () => void };

const LangContext = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem("gen3rvto-lang");
    if (stored === "fr" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
    }
  }, []);

  const toggle = () =>
    setLang((prev) => {
      const next: Lang = prev === "fr" ? "en" : "fr";
      window.localStorage.setItem("gen3rvto-lang", next);
      document.documentElement.lang = next;
      return next;
    });

  return <LangContext.Provider value={{ lang, t: copy[lang], toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
