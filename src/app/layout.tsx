import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LangProvider } from "@/components/lang";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { YouTubeMiniPlayer } from "@/components/youtube-mini-player";
import { latestRelease, videos } from "@/components/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://gen3rvto.com"),
  title: { default: "GEN3RVTO — Site officiel | 3KIP", template: "%s | GEN3RVTO" },
  description: "Site officiel de GEN3RVTO, artiste rap et trap béninois à Cotonou. Musique, clips, actualités, concerts et booking. Jamais Sans L’3KIP.",
  keywords: ["GEN3RVTO", "3KIP", "Rap béninois", "Trap béninoise", "Melo Trap", "Drill", "Hip-Hop Afrique", "Artiste béninois", "Cotonou", "Bénin", "Musique urbaine"],
  authors: [{ name: "GEN3RVTO" }],
  creator: "GEN3RVTO",
  openGraph: {
    type: "website", locale: "fr_FR", alternateLocale: "en_US", siteName: "GEN3RVTO",
    title: "GEN3RVTO — Jamais Sans L’3KIP", description: "L’univers officiel de GEN3RVTO, artiste béninois.",
    images: [{ url: "/images/gen3rvto-hero.jpg", width: 1536, height: 1024, alt: "GEN3RVTO" }],
  },
  twitter: { card: "summary_large_image", title: "GEN3RVTO — 3KIP", description: "Rap · Trap · Melo Trap · Drill", images: ["/images/gen3rvto-hero.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <Header />
          {children}
          <Footer />
          <WhatsappFab />
          {videos.length > 0 && (
            <YouTubeMiniPlayer tracks={videos.map((v) => ({ id: v.youtubeId, title: v.title }))} />
          )}
        </LangProvider>
      </body>
    </html>
  );
}
