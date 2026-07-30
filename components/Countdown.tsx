"use client";

import { useEffect, useState } from "react";

interface Props {
  fechaObjetivo: string;
}

function calcularTiempoRestante(fechaObjetivo: string) {
  const diferencia = new Date(fechaObjetivo).getTime() - Date.now();
  if (diferencia <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

  return {
    dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diferencia / (1000 * 60)) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  };
}

export default function Countdown({ fechaObjetivo }: Props) {
  const [tiempo, setTiempo] = useState(() => calcularTiempoRestante(fechaObjetivo));

  useEffect(() => {
    const intervalo = setInterval(() => setTiempo(calcularTiempoRestante(fechaObjetivo)), 1000);
    return () => clearInterval(intervalo);
  }, [fechaObjetivo]);

  const unidades = [
    { valor: tiempo.dias, etiqueta: "Días" },
    { valor: tiempo.horas, etiqueta: "Horas" },
    { valor: tiempo.minutos, etiqueta: "Min" },
    { valor: tiempo.segundos, etiqueta: "Seg" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {unidades.map((unidad) => (
        <div
          key={unidad.etiqueta}
          className="flex w-16 flex-col items-center rounded-md border border-brand-line bg-brand-panel py-3 sm:w-20"
        >
          <span className="font-sans text-2xl font-black text-white sm:text-3xl">
            {String(unidad.valor).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-brand-muted sm:text-xs">
            {unidad.etiqueta}
          </span>
        </div>
      ))}
    </div>
  );
}
