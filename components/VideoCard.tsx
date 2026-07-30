"use client";

import Link from "next/link";
import { Video } from "@/types";
import { Play, ArrowUpRight } from "lucide-react";

interface Props {
  video: Video;
  onSelect: (video: Video) => void;
  // Clases de ancho/comportamiento de la tarjeta. Por defecto mantiene el
  // tamaño fijo usado en los carruseles horizontales (VideoRow). La página
  // de catálogo (/producciones) le pasa "w-full" para que se ajuste a una
  // cuadrícula en vez de un carrusel.
  className?: string;
}

/**
 * Tarjeta de video. Al dar clic en la miniatura se abre el reproductor
 * en una ventana emergente (modal), tal como en la Etapa 1. El texto
 * "Ver ficha completa" lleva a la página de detalle (/producciones/[id])
 * agregada en la Etapa 3, útil para compartir un enlace directo al video.
 *
 * Nota técnica: el enlace de "ficha completa" se coloca FUERA del botón
 * de reproducir (y no anidado dentro de él) porque el HTML no permite un
 * <a> dentro de un <button>; esto evita errores de accesibilidad.
 */
export default function VideoCard({ video, onSelect, className = "w-64 shrink-0 snap-start sm:w-72" }: Props) {
  const miniatura = video.miniatura || `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div
      className={`group relative overflow-hidden rounded-md border border-brand-line bg-brand-panel transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <button
        type="button"
        onClick={() => onSelect(video)}
        className="block w-full text-left"
        aria-label={`Reproducir video: ${video.titulo}`}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-brand-gray">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={miniatura}
            alt={video.titulo}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/50" />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/90">
              <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
            </span>
          </span>
        </div>
      </button>

      <div className="p-4">
        <h4 className="line-clamp-1 font-sans text-sm font-bold text-white">{video.titulo}</h4>
        <p className="mt-1 line-clamp-2 text-xs text-brand-muted">{video.descripcion}</p>
        <Link
          href={`/producciones/${video.id}`}
          className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-red hover:text-white"
        >
          Ver ficha completa
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
