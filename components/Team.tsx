import SectionHeading from "./SectionHeading";
import TeamCard from "./TeamCard";
import { equipo } from "@/data/team";

export default function Team() {
  const comentaristas = equipo.slice(0, 3);
  const produccion = equipo.slice(3, 6);
  const camaras = equipo.slice(6, 9);

  return (
    <section className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="El equipo detrás de cada transmisión"
          titulo="Nuestro equipo"
          descripcion="Profesionales con experiencia en producción, narración y cobertura deportiva."
        />

        {/* COMENTARISTAS */}
        <div className="mt-14">
          <div className="mb-6">
            <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-white">
              Comentaristas
            </h3>
            <div className="mt-2 h-0.5 w-12 bg-brand-red" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {comentaristas.map((miembro) => (
              <TeamCard key={miembro.nombre} {...miembro} />
            ))}
          </div>
        </div>

        {/* PRODUCCIÓN */}
        <div className="mt-16">
          <div className="mb-6">
            <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-white">
              Producción
            </h3>
            <div className="mt-2 h-0.5 w-12 bg-brand-red" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {produccion.map((miembro) => (
              <TeamCard key={miembro.nombre} {...miembro} />
            ))}
          </div>
        </div>

        {/* CÁMARAS */}
        <div className="mt-16">
          <div className="mb-6">
            <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-white">
              Cámaras
            </h3>
            <div className="mt-2 h-0.5 w-12 bg-brand-red" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {camaras.map((miembro) => (
              <TeamCard key={miembro.nombre} {...miembro} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}