import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cobertura = [
  { region: "México", ciudades: "CDMX, Guadalajara, Monterrey, Tijuana, Ciudad Juárez y más" },
  { region: "Estados Unidos", ciudades: "Texas, California, Las Vegas" },
  { region: "Latinoamérica", ciudades: "Cobertura bajo solicitud en toda la región" },
  { region: "Eventos internacionales", ciudades: "Producción remota y en sitio, a la medida del evento" },
];

export default function Coverage() {
  return (
    <section className="bg-brand-dark px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Alcance"
          titulo="Cobertura"
          descripcion="Producciones dentro y fuera de México, con la misma calidad de televisión."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cobertura.map((item) => (
            <div
              key={item.region}
              className="flex items-start gap-4 rounded-md border border-brand-line bg-brand-panel p-6"
            >
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-red" />
              <div>
                <h3 className="font-sans text-base font-bold text-white">{item.region}</h3>
                <p className="mt-1 text-sm text-brand-muted">{item.ciudades}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
