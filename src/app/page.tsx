import { HomePageContent } from "@/components/pages/home";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "GEN3RVTO",
  genre: ["Rap", "Trap", "Melo Trap", "Drill", "Hood Trap"],
  description: "Artiste béninois basé à Cotonou et fondateur du mouvement 3KIP.",
  foundingLocation: { "@type": "Place", name: "Cotonou, Bénin" },
  album: [
    { "@type": "MusicRecording", name: "Kichta", datePublished: "2026-01" },
    { "@type": "MusicRecording", name: "Flip Flap", datePublished: "2026-05" },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomePageContent />
    </>
  );
}
