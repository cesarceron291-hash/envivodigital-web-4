import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { servicios } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Lo que hacemos"
          titulo="Servicios"
          descripcion="Soluciones integrales de producción audiovisual y transmisión, con calidad de televisión."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.titulo} {...servicio} />
          ))}
        </div>
      </div>
    </section>
  );
}
