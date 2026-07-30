import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { videos } from "@/data/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasFijas: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/producciones`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/aviso-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Se agrega automáticamente una URL por cada video de data/videos.ts.
  const paginasDeVideos: MetadataRoute.Sitemap = videos.map((video) => ({
    url: `${siteConfig.url}/producciones/${video.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...paginasFijas, ...paginasDeVideos];
}
