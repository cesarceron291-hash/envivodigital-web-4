"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, X } from "lucide-react";
import { MiembroEquipo } from "@/types";

export default function TeamCard({
  nombre,
  cargo,
  descripcion,
  semblanza,
  foto,
  redes,
}: MiembroEquipo) {
  const [mostrarSemblanza, setMostrarSemblanza] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-md border border-brand-line bg-brand-panel transition-colors hover:border-brand-red/50">
        <div className="relative aspect-square w-full overflow-hidden bg-brand-gray">
          <Image
            src={foto}
            alt={`Foto de ${nombre}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          />
        </div>

        <div className="p-5">
          <h3 className="font-sans text-base font-bold text-white">
            {nombre}
          </h3>

          <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
            {cargo}
          </p>

          <p className="mt-2 text-sm text-brand-muted">
            {descripcion}
          </p>

          <button
            type="button"
            onClick={() => setMostrarSemblanza(true)}
            className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-red transition-colors hover:text-white"
          >
            Ver semblanza →
          </button>

          <div className="mt-4 flex gap-3">
            {redes.instagram && (
              <a
                href={redes.instagram}
                aria-label={`Instagram de ${nombre}`}
                className="text-brand-muted hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}

            {redes.facebook && (
              <a
                href={redes.facebook}
                aria-label={`Facebook de ${nombre}`}
                className="text-brand-muted hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}

            {redes.linkedin && (
              <a
                href={redes.linkedin}
                aria-label={`LinkedIn de ${nombre}`}
                className="text-brand-muted hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {mostrarSemblanza && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
          onClick={() => setMostrarSemblanza(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-brand-line bg-brand-panel p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setMostrarSemblanza(false)}
              aria-label="Cerrar semblanza"
              className="absolute right-4 top-4 text-brand-muted transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
              {cargo}
            </p>

            <h2 className="mt-1 pr-8 font-sans text-2xl font-bold text-white">
              {nombre}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-brand-muted">
              {semblanza.split("\n\n").map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}