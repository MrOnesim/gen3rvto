import type { MetadataRoute } from "next";

const BASE = "https://gen3rvto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/musique`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/galerie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/booking`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
