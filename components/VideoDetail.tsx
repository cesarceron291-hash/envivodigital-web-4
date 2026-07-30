"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import YouTubeFacade from "./YouTubeFacade";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { Video } from "@/types";

interface Props {
  video: Video;
  relacionados: Video[];
}

/**
 * Contenido de la página de detalle de una producción (/producciones/[id]).
 * Muestra el reproductor grande (con carga diferida, igual que el resto
 * del sitio), la información completa del video y producciones
 * relacionadas de la misma categoría.
 */
export default function VideoDetail({ video, relacionados }: Props) {
  const [seleccionado, setSeleccionado] = useState<Video | null>(null);

  const compartir = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      await navigator.share({ title: video.titulo, url }).catch(() => {});
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <section className="bg-black px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/producciones"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al catálogo
        </Link>

        <div className="overflow-hidden rounded-md border border-brand-line shadow-2xl shadow-black/50">
          <YouTubeFacade youtubeId={video.youtubeId} titulo={video.titulo} />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="mb-2 inline-block rounded-full border border-brand-red/50 bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-red">
              {video.categoria}
            </span>
            <h1 className="font-sans text-2xl font-black text-white sm:text-3xl">{video.titulo}</h1>
            {video.fecha && (
              <p className="mt-1 text-xs text-brand-muted">
                {new Date(video.fecha).toLocaleDateString("es-MX", { dateStyle: "long" })}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={compartir}
            className="flex shrink-0 items-center gap-2 rounded-sm border border-white/30 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
          >
            <Share2 className="h-4 w-4" /> Compartir
          </button>
        </div>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85">{video.descripcion}</p>
      </div>

      {relacionados.length > 0 && (
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="mb-6 font-sans text-xl font-bold uppercase tracking-wide text-white">
            Producciones relacionadas
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relacionados.map((relacionado) => (
              <VideoCard key={relacionado.id} video={relacionado} onSelect={setSeleccionado} className="w-full" />
            ))}
          </div>
        </div>
      )}

      <VideoModal video={seleccionado} onClose={() => setSeleccionado(null)} />
    </section>
  );
}
