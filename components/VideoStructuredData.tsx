import { Video } from "@/types";

interface Props {
  video: Video;
}

/**
 * Datos estructurados Schema.org (VideoObject) para cada página de detalle
 * de una producción. Ayuda a que Google pueda mostrar el video como
 * resultado enriquecido (rich result) en las búsquedas.
 */
export default function VideoStructuredData({ video }: Props) {
  const miniatura = video.miniatura || `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.titulo,
    description: video.descripcion,
    thumbnailUrl: [miniatura],
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    genre: video.categoria,
  };

  // Solo se incluye "uploadDate" si el video tiene una fecha real cargada
  // en data/videos.ts, para no publicar una fecha inventada.
  if (video.fecha) {
    data.uploadDate = video.fecha;
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
