import { siteConfig } from "@/data/siteConfig";
import { ChevronDown, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-black"
    >    <video
        className="absolute inset-0 h-full w-full object-cover"
        src={siteConfig.heroVideo}
        poster={siteConfig.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
<div className="absolute inset-0 bg-gradient-dark" />
<div className="absolute inset-0 bg-gradient-radial-red" />

<div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 text-center animate-fadeInUp sm:px-6">
  <span className="mb-4 rounded-full border border-brand-red/50 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-red backdrop-blur-sm sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
    Producción de TV • Streaming profesional • Eventos deportivos
  </span>

<h1 className="max-w-4xl font-sans text-2xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">

  <span className="block">
    La emoción del deporte
  </span>

  <span className="mt-2 block text-brand-red">
    con calidad de televisión
  </span>

</h1>

<p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-xl">
  PRODUCCIONES DEPORTIVAS CON CALIDAD DE TELEVISIÓN.
</p>

  <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
    <a
      href="#producciones"
      className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/30 sm:px-8 sm:py-4"
    >
      <PlayCircle className="h-5 w-5" />
      Ver nuestro trabajo
    </a>

    <a
      href="#contacto"
      className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-black/20 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 sm:px-8 sm:py-4"
    >
      Solicitar cotización
    </a>
  </div>

  <div className="mt-8 hidden items-center justify-center divide-x divide-white/20 text-white/70 md:flex">
    <div className="px-5 text-center">
      <strong className="block text-sm font-bold uppercase tracking-wide text-white">
        +20 años
      </strong>
      <span className="text-xs">DE EXPERIENCIA</span>
    </div>

    <div className="px-5 text-center">
      <strong className="block text-sm font-bold uppercase tracking-wide text-white">
        Desde 2019
      </strong>
      <span className="text-xs">EN VIVO DIGITAL</span>
    </div>

    <div className="px-5 text-center">
      <strong className="block text-sm font-bold uppercase tracking-wide text-white">
        ESTÁNDARES DE TV
      </strong>
      <span className="text-xs">Y PLATAFORMAS DIGITALES</span>
    </div>

    <div className="px-5 text-center">
      <strong className="block text-sm font-bold uppercase tracking-wide text-white">
        Cobertura
      </strong>
      <span className="text-xs">NACIONAL E INTERNACIONAL</span>
    </div>
  </div>

  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs sm:tracking-[0.22em] md:hidden">
    En Vivo Digital nació en 2019. Nuestra experiencia comenzó mucho antes.
  </p>
</div>
      <a
        href="#nosotros"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}