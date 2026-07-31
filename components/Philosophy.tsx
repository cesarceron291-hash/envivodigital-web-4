import { BadgeCheck, CircleDollarSign, Tv, Handshake } from "lucide-react";

const bloques = [
  {
    icono: BadgeCheck,
    titulo: "EXPERIENCIA COMPROBADA",
    texto:
      "MÁS DE 20 AÑOS PARTICIPANDO EN PRODUCCIONES DEPORTIVAS PARA TELEVISIÓN Y PLATAFORMAS DIGITALES. SABEMOS QUÉ DEBE OCURRIR DETRÁS DE CÁMARAS PARA QUE TODO SALGA AL AIRE COMO DEBE.",
  },
  {
    icono: CircleDollarSign,
    titulo: "PRESUPUESTOS ADAPTADOS",
    texto:
      "CADA FUNCIÓN ES DIFERENTE. DISEÑAMOS PROPUESTAS ACORDES AL TAMAÑO, LOS OBJETIVOS Y LA ETAPA DE CADA PROMOTORA, SIN RENUNCIAR A UNA IMAGEN PROFESIONAL.",
  },
  {
    icono: Tv,
    titulo: "ESTÁNDARES DE TELEVISIÓN",
    texto:
      "REALIZACIÓN MULTICÁMARA, NARRACIÓN PROFESIONAL, REPETICIONES, GRÁFICOS Y UNA PRODUCCIÓN PENSADA PARA FORTALECER LA IMAGEN DE TU EVENTO.",
  },
  {
    icono: Handshake,
    titulo: "MÁS QUE UNA TRANSMISIÓN",
    texto:
      "PODEMOS AYUDARTE A AMPLIAR EL ALCANCE DE TU FUNCIÓN MEDIANTE NUESTRAS ALIANZAS CON BOX AZTECA AMÉRICA, BOX AZTECA TEXAS Y AYM SPORTS, CUANDO EL PROYECTO LO PERMITA.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-brand-dark px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-red sm:text-base">
            EXPERIENCIA QUE GENERA CONFIANZA
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-sans text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            ¿POR QUÉ ELEGIR EN VIVO DIGITAL?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium uppercase leading-7 tracking-[0.03em] text-white/60 sm:text-base">
            PRODUCCIÓN PROFESIONAL, EXPERIENCIA REAL Y SOLUCIONES PENSADAS PARA
            PROMOTORAS QUE QUIEREN CRECER.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {bloques.map((bloque) => (
            <div
              key={bloque.titulo}
              className="group rounded-xl border border-brand-line bg-brand-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-red/10">
                  <bloque.icono className="h-6 w-6 text-brand-red" />
                </div>

                <div>
                  <h3 className="font-sans text-lg font-black uppercase tracking-wide text-white sm:text-xl">
                    {bloque.titulo}
                  </h3>

                  <p className="mt-3 text-sm font-medium uppercase leading-7 tracking-[0.02em] text-brand-muted sm:text-base">
                    {bloque.texto}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CIERRE */}
        <div className="mt-12 rounded-xl border border-brand-red/30 bg-black/30 px-6 py-10 text-center sm:px-10 lg:mt-16">
          <p className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            TU EVENTO. NUESTRA EXPERIENCIA.
          </p>

          <p className="mt-2 text-2xl font-black uppercase leading-tight text-brand-red sm:text-3xl">
            UNA PRODUCCIÓN CON ESTÁNDARES DE TELEVISIÓN.
          </p>

          <a
            href="#contacto"
            className="mt-7 inline-flex items-center justify-center rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/30"
          >
            SOLICITAR PROPUESTA
          </a>
        </div>
      </div>
    </section>
  );
}