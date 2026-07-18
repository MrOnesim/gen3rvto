import type { Metadata } from "next";
import { MusiquePageContent } from "@/components/pages/musique";

export const metadata: Metadata = {
  title: "Musique",
  description: "Discographie de GEN3RVTO : Flip Flap, Kichta, JSL3KIP 1 et plus. Écoutez sur Spotify, Apple Music et YouTube.",
};

export default function MusiquePage() {
  return <MusiquePageContent />;
}
