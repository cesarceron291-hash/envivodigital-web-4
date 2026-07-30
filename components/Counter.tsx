"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { Estadistica } from "@/types";

export default function Counter({ numero, sufijo, etiqueta }: Estadistica) {
  const { ref, valor } = useCountUp(numero, 1800);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-sans text-4xl font-black text-brand-red sm:text-5xl">
        {valor.toLocaleString("es-MX")}
        {sufijo}
      </span>
      <span className="mt-2 text-xs font-bold uppercase tracking-wide text-brand-muted sm:text-sm">
        {etiqueta}
      </span>
    </div>
  );
}
