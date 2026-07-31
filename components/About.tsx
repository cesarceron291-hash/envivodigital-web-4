import YouTubeFacade from "./YouTubeFacade";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-black px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* ENCABEZADO */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-red sm:text-base">
            EXPERIENCIA, CALIDAD Y PRESUPUESTOS A TU ALCANCE
          </p>

          <h2 className="mt-4 font-sans text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-[2.6rem] xl:whitespace-nowrap xl:text-5xl">
            LA TELEVISIÓN YA NO ES INALCANZABLE
          </h2>
        </div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:grid-cols-[0.8fr_1.2fr] xl:gap-16">

          {/* TEXTO */}
          <div className="max-w-xl">

            <h3 className="text-xl font-black uppercase leading-tight text-white sm:text-2xl">
              TU PRÓXIMA FUNCIÓN PUEDE VERSE COMO TELEVISIÓN.
            </h3>

            <div className="mt-7 space-y-6 text-sm font-medium uppercase leading-7 tracking-[0.02em] text-white/75 sm:text-base sm:leading-8">

              <p>
                MUCHOS PROMOTORES PIENSAN QUE PRODUCIR UNA FUNCIÓN CON
                CALIDAD DE TELEVISIÓN ESTÁ FUERA DE SU PRESUPUESTO.
              </p>

              <p>
                <span className="inline-block rounded-md bg-brand-red px-3 py-1 font-black text-white">
                  EN VIVO DIGITAL
                </span>{" "}
                DEMUESTRA TODOS LOS DÍAS QUE LA CALIDAD DE TELEVISIÓN PUEDE
                ESTAR AL ALCANCE DE MÁS PROMOTORES. REUNIMOS A UN EQUIPO
                CON MÁS DE 20 AÑOS DE EXPERIENCIA EN TELEVISIÓN Y
                PRODUCCIÓN DEPORTIVA PARA CREAR SOLUCIONES PROFESIONALES
                ADAPTADAS A LA REALIDAD DE CADA PROMOTORA.
              </p>

              <p>
                NO PROMETEMOS SER LOS MÁS BARATOS. OFRECEMOS EL MEJOR
                EQUILIBRIO ENTRE EXPERIENCIA, CALIDAD Y PRESUPUESTO, PARA
                QUE QUIEN ORGANIZA SU PRIMERA FUNCIÓN O QUIERE DAR EL
                SIGUIENTE PASO PUEDA HACERLO SIN INVERSIONES IMPOSIBLES.
              </p>

            </div>

            {/* BENEFICIOS */}

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">

              <div className="border-l-2 border-brand-red pl-4">
                <h4 className="text-lg font-black uppercase text-white">
                  +20 AÑOS
                </h4>
                <p className="mt-1 text-sm font-semibold uppercase text-white/60">
                  DE EXPERIENCIA EN TELEVISIÓN
                </p>
              </div>

              <div className="border-l-2 border-brand-red pl-4">
                <h4 className="text-lg font-black uppercase text-white">
                  ESTÁNDARES DE TV
                </h4>
                <p className="mt-1 text-sm font-semibold uppercase text-white/60">
                  PARA CUALQUIER PANTALLA
                </p>
              </div>

              <div className="border-l-2 border-brand-red pl-4">
                <h4 className="text-lg font-black uppercase text-white">
                  PRESUPUESTOS ADAPTADOS
                </h4>
                <p className="mt-1 text-sm font-semibold uppercase text-white/60">
                  A CADA PROYECTO
                </p>
              </div>

              <div className="border-l-2 border-brand-red pl-4">
                <h4 className="text-lg font-black uppercase text-white">
                  PROYECCIÓN
                </h4>
                <p className="mt-1 text-sm font-semibold uppercase text-white/60">
                  EN TV Y PLATAFORMAS DIGITALES
                </p>
              </div>

            </div>

            {/* FRASE FINAL */}

            <div className="mt-12 border-l-4 border-brand-red pl-6">

              <p className="text-2xl font-black uppercase leading-tight text-white">
                NO SOLO PRODUCIMOS TU FUNCIÓN.
              </p>

              <p className="mt-2 text-2xl font-black uppercase leading-tight text-brand-red">
                TE AYUDAMOS A DAR EL SALTO DE YOUTUBE A LA TELEVISIÓN.
              </p>

            </div>

          </div>

          {/* VIDEO */}

          <div className="w-full overflow-hidden rounded-xl border border-brand-line shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
            <YouTubeFacade
              youtubeId={siteConfig.videoInstitucionalYoutubeId}
              titulo="TU PRÓXIMA FUNCIÓN PUEDE VERSE ASÍ"
            />
          </div>

        </div>

        {/* ALIANZAS */}

        <div className="mt-16 border-t border-white/10 pt-10">

          <p className="text-center text-xs font-bold uppercase tracking-[0.30em] text-white/50">
            ALIANZAS DE DIFUSIÓN
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">

            <span className="text-lg font-black uppercase text-white">
              BOX AZTECA AMÉRICA
            </span>

            <span className="text-brand-red">•</span>

            <span className="text-lg font-black uppercase text-white">
              BOX AZTECA TEXAS
            </span>

            <span className="text-brand-red">•</span>

            <span className="text-lg font-black uppercase text-white">
              AYM SPORTS
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}