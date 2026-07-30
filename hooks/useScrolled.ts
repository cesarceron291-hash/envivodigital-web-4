"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve "true" cuando el usuario se ha desplazado mas alla de
 * "umbral" pixeles. Se usa para cambiar el fondo del menu principal.
 */
export function useScrolled(umbral = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > umbral);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [umbral]);

  return scrolled;
}
