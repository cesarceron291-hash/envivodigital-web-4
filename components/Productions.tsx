"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import VideoRow from "./VideoRow";
import VideoModal from "./VideoModal";
import { videos, CATEGORIAS } from "@/data/videos";
import { Video } from "@/types";

export default function Productions() {
  const [seleccionado, setSeleccionado] = useState<Video | null>(null);

  return (
    <section id="producciones" className="bg-brand-dark px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Nuestro contenido"
            titulo="Producciones"
            descripcion="Explora nuestras transmisiones, programas y producciones especiales directamente desde YouTube."
            alineacion="izquierda"
            conMargenInferior={false}
          />
          <Link
            href="/producciones"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-brand-red hover:text-brand-red"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {CATEGORIAS.map((categoria) => (
          <VideoRow
            key={categoria}
            categoria={categoria}
            videos={videos.filter((v) => v.categoria === categoria)}
            onSelect={setSeleccionado}
          />
        ))}
      </div>

      <VideoModal video={seleccionado} onClose={() => setSeleccionado(null)} />
    </section>
  );
}
