"use client";

import { useState } from "react";
import { Bell, Share2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import YouTubeFacade from "./YouTubeFacade";
import Countdown from "./Countdown";
import { liveConfig } from "@/data/liveConfig";

export default function LiveSection() {
  const [recordatorio, setRecordatorio] = useState(false);

  const compartir = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      await navigator.share({ title: "En Vivo Digital", url }).catch(() => {});
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <section id="en-vivo" className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Transmisión" titulo="En Vivo" />

        {liveConfig.activo ? (
          <div className="overflow-hidden rounded-md border border-brand-red/40 shadow-xl shadow-brand-red/10">
            <div className="flex items-center gap-2 bg-brand-red px-5 py-3">
              <span className="h-2.5 w-2.5 animate-pulseRed rounded-full bg-white" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">En vivo ahora</span>
            </div>
            <YouTubeFacade youtubeId={liveConfig.youtubeId} titulo={liveConfig.nombreEvento} />
            <div className="flex flex-col gap-4 bg-brand-panel p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-sans text-xl font-bold text-white">{liveConfig.nombreEvento}</h3>
                <p className="mt-2 max-w-2xl text-sm text-brand-muted">{liveConfig.descripcionEvento}</p>
              </div>
              <button
                onClick={compartir}
                className="flex shrink-0 items-center gap-2 rounded-sm border border-white/30 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:border-white"
              >
                <Share2 className="h-4 w-4" /> Compartir
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 rounded-md border border-brand-line bg-brand-panel p-6 sm:p-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Próxima transmisión
              </span>
              <h3 className="font-sans text-2xl font-black text-white sm:text-3xl">
                {liveConfig.proximoEvento.nombre}
              </h3>
              <p className="mt-3 text-sm text-brand-muted">
                {new Date(liveConfig.proximoEvento.fecha).toLocaleString("es-MX", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </p>

              <div className="mt-8">
                <Countdown fechaObjetivo={liveConfig.proximoEvento.fecha} />
              </div>

              <button
                onClick={() => setRecordatorio(true)}
                disabled={recordatorio}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-redDark disabled:opacity-60"
              >
                <Bell className="h-4 w-4" />
                {recordatorio ? "¡Te avisaremos!" : "Recordarme"}
              </button>
            </div>

            <div className="overflow-hidden rounded-md">
              <YouTubeFacade
                youtubeId={liveConfig.proximoEvento.videoPromocionalYoutubeId}
                titulo="Video promocional del próximo evento"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
