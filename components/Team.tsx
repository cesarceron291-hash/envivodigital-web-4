import SectionHeading from "./SectionHeading";
import TeamCard from "./TeamCard";
import { equipo } from "@/data/team";

export default function Team() {
  return (
    <section className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="El equipo detrás de cada transmisión"
          titulo="Nuestro equipo"
          descripcion="Información provisional. Sustituye fotos, nombres y redes en /data/team.ts"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {equipo.map((miembro) => (
            <TeamCard key={miembro.cargo} {...miembro} />
          ))}
        </div>
      </div>
    </section>
  );
}
