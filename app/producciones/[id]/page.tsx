import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoDetail from "@/components/VideoDetail";
import VideoStructuredData from "@/components/VideoStructuredData";
import { videos } from "@/data/videos";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  params: { id: string };
}

// Genera en tiempo de construcción una página para cada video de
// data/videos.ts (ej. /producciones/video-01, /producciones/video-02...).
// Si agregas un video nuevo a ese archivo, su página se crea sola.
export function generateStaticParams() {
  return videos.map((video) => ({ id: video.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const video = videos.find((v) => v.id === params.id);

  if (!video) {
    return { title: "Producción no encontrada" };
  }

  const miniatura = video.miniatura || `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const url = `${siteConfig.url}/producciones/${video.id}`;

  return {
    title: video.titulo,
    description: video.descripcion,
    alternates: { canonical: url },
    openGraph: {
      title: `${video.titulo} | ${siteConfig.nombre}`,
      description: video.descripcion,
      url,
      images: [{ url: miniatura, width: 480, height: 360, alt: video.titulo }],
    },
    twitter: {
      card: "summary_large_image",
      title: video.titulo,
      description: video.descripcion,
      images: [miniatura],
    },
  };
}

export default function VideoDetailPage({ params }: Props) {
  const video = videos.find((v) => v.id === params.id);

  if (!video) {
    notFound();
  }

  const relacionados = videos
    .filter((v) => v.categoria === video.categoria && v.id !== video.id)
    .slice(0, 4);

  return (
    <main>
      <Navbar />
      <VideoStructuredData video={video} />
      <VideoDetail video={video} relacionados={relacionados} />
      <Footer />
    </main>
  );
}
