import SectionHeading from "./SectionHeading";
import { clientes } from "@/data/clients";

export default function Clients() {
  return (
    <section id="clientes" className="bg-brand-dark px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Confían en nosotros"
          titulo="Clientes y alianzas"
          descripcion="Promotores, televisoras y plataformas que han trabajado con En Vivo Digital."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clientes.map((cliente) => (
            <div
              key={cliente.nombre}
              className="flex h-28 items-center justify-center rounded-md border border-brand-line bg-brand-panel px-4 text-center transition-colors hover:border-brand-red/50"
            >
              {cliente.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cliente.logo} alt={cliente.nombre} className="max-h-14 max-w-full object-contain" />
              ) : (
                <span className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                  {cliente.nombre}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
