"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anima un numero de 0 hasta "end" cuando el elemento referenciado
 * se vuelve visible en pantalla (usando IntersectionObserver).
 */
export function useCountUp(end: number, duration = 2000) {
  const [valor, setValor] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(nodo);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let inicio: number | null = null;
    let frame: number;

    const animar = (timestamp: number) => {
      if (inicio === null) inicio = timestamp;
      const progreso = Math.min((timestamp - inicio) / duration, 1);
      const facilitado = 1 - Math.pow(1 - progreso, 3); // ease-out cubic
      setValor(Math.floor(facilitado * end));
      if (progreso < 1) {
        frame = requestAnimationFrame(animar);
      } else {
        setValor(end);
      }
    };

    frame = requestAnimationFrame(animar);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return { ref, valor };
}
