import { Target, Eye, Heart } from "lucide-react";

const bloques = [
  {
    icono: Target,
    titulo: "Misión",
    texto:
      "Producir transmisiones deportivas y contenidos audiovisuales que transmitan emoción, profesionalismo y calidad de televisión.",
  },
  {
    icono: Eye,
    titulo: "Visión",
    texto:
      "Consolidar a En Vivo Digital como una de las productoras deportivas independientes más importantes de México y Latinoamérica.",
  },
  {
    icono: Heart,
    titulo: "Filosofía",
    texto:
      "No transmitimos solamente eventos. Contamos historias, construimos emociones y acercamos al público a los protagonistas.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-brand-dark px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
        {bloques.map((bloque) => (
          <div
            key={bloque.titulo}
            className="group rounded-md border border-brand-line bg-brand-panel p-8 transition-colors hover:border-brand-red/60"
          >
            <bloque.icono className="h-9 w-9 text-brand-red" />
            <h3 className="mt-5 font-sans text-xl font-bold uppercase tracking-wide text-white">
              {bloque.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">{bloque.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
