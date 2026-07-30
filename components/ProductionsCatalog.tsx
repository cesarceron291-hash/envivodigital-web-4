"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { videos, CATEGORIAS } from "@/data/videos";
import { Video } from "@/types";

const TODAS = "Todas" as const;
const filtros: string[] = [TODAS, ...CATEGORIAS];

/**
 * Catálogo completo de producciones (/producciones).
 * A diferencia de la vista previa de la página principal (que muestra
 * carruseles horizontales por categoría), aquí se listan TODOS los videos
 * en una cuadrícula, con buscador y filtro por categoría.
 */
export default function ProductionsCatalog() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>(TODAS);
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState<Video | null>(null);

  const videosFiltrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();

    return videos.filter((video) => {
      const coincideCategoria = categoriaActiva === TODAS || video.categoria === categoriaActiva;
      const coincideTexto =
        texto.length === 0 ||
        video.titulo.toLowerCase().includes(texto) ||
        video.descripcion.toLowerCase().includes(texto);

      return coincideCategoria && coincideTexto;
    });
  }, [categoriaActiva, busqueda]);

  return (
    <section className="bg-black px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Buscador */}
        <div className="relative mb-6 max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por título o descripción..."
            className="w-full rounded-sm border border-brand-line bg-brand-panel py-3 pl-11 pr-4 text-sm text-white placeholder:text-brand-muted focus:border-brand-red focus:outline-none"
            aria-label="Buscar producciones"
          />
        </div>

        {/* Filtro por categoría */}
        <div className="scrollbar-hide mb-10 flex gap-3 overflow-x-auto pb-2">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              type="button"
              onClick={() => setCategoriaActiva(filtro)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                categoriaActiva === filtro
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-brand-line bg-brand-panel text-brand-muted hover:border-white/40 hover:text-white"
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>

        {/* Resultado */}
        {videosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videosFiltrados.map((video) => (
              <VideoCard key={video.id} video={video} onSelect={setSeleccionado} className="w-full" />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-sm text-brand-muted">
            No se encontraron producciones con esos filtros. Intenta con otra categoría o palabra clave.
          </p>
        )}

        <p className="mt-8 text-center text-xs text-brand-muted">
          Mostrando {videosFiltrados.length} de {videos.length} producciones.
        </p>
      </div>

      <VideoModal video={seleccionado} onClose={() => setSeleccionado(null)} />
    </section>
  );
}
