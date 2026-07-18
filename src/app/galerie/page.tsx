import type { Metadata } from "next";
import { GaleriePageContent } from "@/components/pages/galerie";

export const metadata: Metadata = {
  title: "Galerie & Press",
  description: "Photos live, studio et press de GEN3RVTO. Dernières nouvelles du mouvement 3KIP.",
};

export default function GaleriePage() {
  return <GaleriePageContent />;
}
