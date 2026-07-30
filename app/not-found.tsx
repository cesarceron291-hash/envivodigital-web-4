import type { Metadata } from "next";
import Link from "next/link";
import { Home, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

// Next.js muestra automáticamente este archivo cuando una ruta no existe,
// o cuando cualquier página llama a notFound() (por ejemplo, la ficha de
// un video con un ID que no existe en data/videos.ts).
export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-[100svh] flex-col items-center justify-center bg-black px-5 pb-16 pt-32 text-center sm:px-8">
        <span className="font-sans text-7xl font-black text-brand-red sm:text-8xl">404</span>
        <h1 className="mt-4 font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
          Esta página no existe o fue movida
        </h1>
        <p className="mt-4 max-w-md text-sm text-brand-muted sm:text-base">
          Revisa que la dirección esté bien escrita, o utiliza los siguientes enlaces para continuar
          navegando por En Vivo Digital.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-redDark"
          >
            <Home className="h-4 w-4" />
            Volver al inicio
          </Link>
          <Link
            href="/producciones"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <Compass className="h-4 w-4" />
            Ver producciones
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
