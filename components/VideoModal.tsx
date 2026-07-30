"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Video } from "@/types";

interface Props {
  video: Video | null;
  onClose: () => void;
}

/**
 * Modal (ventana emergente) que reproduce el video de YouTube
 * seleccionado sin sacar al usuario del sitio.
 */
export default function VideoModal({ video, onClose }: Props) {
  useEffect(() => {
    if (!video) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.titulo}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red"
          aria-label="Cerrar video"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-3 text-white">
          <h3 className="font-sans text-lg font-bold">{video.titulo}</h3>
          <p className="mt-1 text-sm text-brand-muted">{video.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
