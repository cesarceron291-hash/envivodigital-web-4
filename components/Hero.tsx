import { siteConfig } from "@/data/siteConfig";
import { ChevronDown, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-black">
      {/* Video de fondo. Reemplaza el archivo en /public/videos/hero-bg.mp4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={siteConfig.heroVideo}
        poster={siteConfig.heroPoster}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Capa oscura para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-radial-red" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center animate-fadeInUp">
        <span className="mb-5 rounded-full border border-brand-red/50 bg-brand-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
          Producción · Transmisión · Streaming
        </span>

        <h1 className="font-sans text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          En Vivo <span className="text-brand-red">Digital</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium text-white/90 sm:text-2xl">
          {siteConfig.eslogan}
        </p>

        <p className="mt-4 max-w-xl text-sm text-brand-muted sm:text-base">
          Producción televisiva, transmisiones deportivas y streaming profesional para México y el mundo.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#producciones"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/30"
          >
            <PlayCircle className="h-5 w-5" />
            Ver producciones
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
          >
            Solicitar cotización
          </a>
        </div>
      </div>

      <a
        href="#nosotros"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
