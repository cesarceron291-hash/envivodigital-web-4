import SectionHeading from "./SectionHeading";
import { casosDeExito } from "@/data/successCases";

export default function SuccessCases() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resultados"
          titulo="Casos de éxito"
          descripcion="Información provisional de ejemplo. Será sustituida por casos reales."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {casosDeExito.map((caso) => (
            <div key={caso.cliente} className="overflow-hidden rounded-md border border-brand-line bg-brand-panel">
              <div className="flex aspect-video items-center justify-center bg-brand-gray">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                  Imagen / video provisional
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-sans text-lg font-bold text-white">{caso.cliente}</h3>
                <dl className="space-y-1.5 text-sm text-brand-muted">
                  <div><dt className="inline font-bold text-white/80">Producción: </dt><dd className="inline">{caso.tipoDeProduccion}</dd></div>
                  <div><dt className="inline font-bold text-white/80">Cámaras: </dt><dd className="inline">{caso.numeroDeCamaras}</dd></div>
                  <div><dt className="inline font-bold text-white/80">Plataformas: </dt><dd className="inline">{caso.plataformas}</dd></div>
                  <div><dt className="inline font-bold text-white/80">Alcance: </dt><dd className="inline">{caso.alcance}</dd></div>
                  <div><dt className="inline font-bold text-white/80">Resultado: </dt><dd className="inline">{caso.resultado}</dd></div>
                </dl>
                <p className="border-t border-brand-line pt-3 text-sm italic text-white/70">{caso.testimonio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
