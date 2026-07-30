import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { estadisticas } from "@/data/stats";

export default function Experience() {
  return (
    <section className="bg-brand-dark px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experiencia"
          titulo="Números que respaldan nuestro trabajo"
          descripcion="Cifras provisionales de ejemplo. Reemplázalas en /data/stats.ts con tus datos reales."
        />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {estadisticas.map((estadistica) => (
            <Counter key={estadistica.etiqueta} {...estadistica} />
          ))}
        </div>
      </div>
    </section>
  );
}
