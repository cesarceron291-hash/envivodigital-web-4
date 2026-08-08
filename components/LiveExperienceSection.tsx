"use client";

import { useState } from "react";

const productions = [
  {
    title: "Guerra en Playa del Carmen",
    promoter: "TM Boxing",
    venue: "Poliforum de Playa del Carmen",
    location: "Quintana Roo",
    mainEvent: 'Erik Badillo vs “La Joyita” Herrera',
    broadcaster: "Multimedios Canal 6",
    commentators:
      "Eduardo Camarena, Juan Manuel Márquez, Rafael Márquez y Jackie Nava",
    production: "En Vivo Digital",
    videoId: "GL_wjBs7dF4",
  },
  {
    title: "Boxeo de Alto Impacto",
    promoter: "Astur Boxing",
    venue: "Arena Coliseo",
    location: "Ciudad de México",
    mainEvent: 'Juan Pérez “El Güerito de Tepito” vs Iván Aguirre',
    broadcaster: "TVC Deportes",
    commentators: "Felipe Bravo y Gustavo Torrero",
    production: "En Vivo Digital",
    videoId: "K7mpYANh5HI",
  },
  {
    title: "Noches de Boxeo",
    promoter: "LC Promotions",
    venue: "Foro San Rafael",
    location: "Ciudad de México",
    mainEvent: "Tania García vs Guadalupe Bautista",
    broadcaster: "Multimedios Canal 6",
    commentators: "Francisco Pérez y Ramsés Morales",
    production: "En Vivo Digital",
    videoId: "GNBRETnT2XI",
  },
  {
    title: "Puro Golpe Mexicano",
    promoter: "Pacha Producciones",
    venue: "Plaza Paseo Ventura",
    location: "Ecatepec, Estado de México",
    mainEvent: "Lorenzo Teyuco vs Oswaldo Pedrero",
    broadcaster: "Showy TV",
    commentators: "Felipe Bravo y Gustavo Torrero",
    production: "En Vivo Digital",
    videoId: "Khx16NRCnYw",
  },
];

export default function LiveExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduction = productions[activeIndex];

  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* ENCABEZADO */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
            Portafolio
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            Nuestra Experiencia en Vivo
          </h2>

          <p className="mt-4 text-xl font-semibold text-white/90">
            Producciones que hablan por sí solas.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60 md:text-base">
            Más de dos décadas de experiencia en producción televisiva respaldan
            cada transmisión. En En Vivo Digital convertimos eventos deportivos
            en producciones de calidad profesional para televisión y plataformas
            digitales.
          </p>
        </div>

        {/* VIDEO PRINCIPAL + FICHA */}
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

          {/* VIDEO */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
            <div className="aspect-video">
              <iframe
                key={activeProduction.videoId}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeProduction.videoId}`}
                title={activeProduction.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* FICHA DEL EVENTO */}
          <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-zinc-950 p-6 md:p-8">

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              Producción destacada
            </p>

            <h3 className="text-2xl font-black uppercase leading-tight">
              {activeProduction.title}
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/70">

              <p>
                <span className="font-bold text-white">Promotora:</span>{" "}
                {activeProduction.promoter}
              </p>

              <p>
                <span className="font-bold text-white">Recinto:</span>{" "}
                {activeProduction.venue}
              </p>

              <p>
                <span className="font-bold text-white">Sede:</span>{" "}
                {activeProduction.location}
              </p>

              <p>
                <span className="font-bold text-white">Pelea estelar:</span>{" "}
                {activeProduction.mainEvent}
              </p>

              <p>
                <span className="font-bold text-white">Transmitido por:</span>{" "}
                {activeProduction.broadcaster}
              </p>

              <p>
                <span className="font-bold text-white">Comentaristas:</span>{" "}
                {activeProduction.commentators}
              </p>

            </div>

            {/* PRODUCCIÓN GENERAL */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Producción General
              </p>

              <p className="mt-1 text-base font-black uppercase text-white">
                {activeProduction.production}
              </p>
            </div>

            {/* BOTÓN */}
            <a
              href={`https://www.youtube.com/watch?v=${activeProduction.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center border border-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-600"
            >
              Ver producción completa
            </a>
          </div>
        </div>

        {/* MINIATURAS */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {productions.map((production, index) => (
            <button
              key={production.videoId}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group overflow-hidden rounded-lg border text-left transition ${
                activeIndex === index
                  ? "border-red-600"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="aspect-video overflow-hidden bg-zinc-900">
                <img
                  src={`https://img.youtube.com/vi/${production.videoId}/hqdefault.jpg`}
                  alt={production.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="bg-zinc-950 p-3">
                <p className="text-xs font-bold uppercase leading-5 text-white">
                  {production.title}
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  {production.promoter}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* CARACTERÍSTICAS */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">

          <div className="bg-zinc-950 p-6 text-center">
            <p className="text-sm font-black uppercase">
              Producción
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
              Multicámara
            </p>
          </div>

          <div className="bg-zinc-950 p-6 text-center">
            <p className="text-sm font-black uppercase">
              Calidad
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
              Televisiva
            </p>
          </div>

          <div className="bg-zinc-950 p-6 text-center">
            <p className="text-sm font-black uppercase">
              Eventos
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
              Deportivos
            </p>
          </div>

          <div className="bg-zinc-950 p-6 text-center">
            <p className="text-sm font-black uppercase">
              Cobertura
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
              Nacional
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}