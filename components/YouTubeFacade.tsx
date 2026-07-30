"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface Props {
  youtubeId: string;
  titulo: string;
  autoplayEnModal?: boolean;
  className?: string;
}

/**
 * Componente de YouTube con carga diferida (facade pattern).
 * Solo muestra una miniatura + boton de reproducir. El iframe real
 * de YouTube (pesado) se monta unicamente cuando el usuario da clic,
 * para no ralentizar la pagina con reproductores ocultos.
 */
export default function YouTubeFacade({ youtubeId, titulo, className = "" }: Props) {
  const [reproduciendo, setReproduciendo] = useState(false);
  const miniatura = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  if (reproduciendo) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setReproduciendo(true)}
      className={`group relative aspect-video w-full overflow-hidden bg-brand-gray text-left ${className}`}
      aria-label={`Reproducir video: ${titulo}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={miniatura}
        alt={titulo}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/90 shadow-lg shadow-brand-red/30 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
          <Play className="ml-1 h-6 w-6 fill-white text-white sm:h-7 sm:w-7" />
        </span>
      </span>
    </button>
  );
}
