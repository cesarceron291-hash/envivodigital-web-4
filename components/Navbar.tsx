"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";

// Los enlaces usan el formato "/#seccion" (con diagonal al inicio) para que
// funcionen correctamente sin importar en qué página esté el usuario:
// si ya está en el inicio, hace scroll suave; si está en una página interior
// (ej. /producciones), primero navega al inicio y luego hace scroll.
const enlaces = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#producciones", label: "Producciones" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#en-vivo", label: "En vivo" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [abierto, setAbierto] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg shadow-black/40 backdrop-blur-sm" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-sans text-xl font-black tracking-tight text-white">
            EN VIVO<span className="text-brand-red"> DIGITAL</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <Link
                href={enlace.href}
                className="text-sm font-bold uppercase tracking-wide text-white/80 transition-colors hover:text-brand-red"
              >
                {enlace.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contacto"
          className="hidden rounded-sm bg-brand-red px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-redDark lg:inline-block"
        >
          Solicitar cotización
        </Link>

        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          className="text-white lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={abierto}
        >
          {abierto ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {abierto && (
        <div className="border-t border-brand-line bg-black/98 px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  onClick={() => setAbierto(false)}
                  className="block py-3 text-base font-bold uppercase tracking-wide text-white/85 hover:text-brand-red"
                >
                  {enlace.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contacto"
            onClick={() => setAbierto(false)}
            className="mt-3 block rounded-sm bg-brand-red px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
          >
            Solicitar cotización
          </Link>
        </div>
      )}
    </header>
  );
}
