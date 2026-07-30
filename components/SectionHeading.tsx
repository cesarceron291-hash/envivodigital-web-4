interface Props {
  eyebrow?: string;
  titulo: string;
  descripcion?: string;
  alineacion?: "centro" | "izquierda";
  // Por defecto el encabezado trae su propio margen inferior (mb-12).
  // Pásalo en "false" cuando ya controles ese espacio desde el contenedor
  // que lo envuelve (por ejemplo, al colocarlo junto a un botón en una fila).
  conMargenInferior?: boolean;
}

export default function SectionHeading({
  eyebrow,
  titulo,
  descripcion,
  alineacion = "centro",
  conMargenInferior = true,
}: Props) {
  const alineado = alineacion === "centro" ? "text-center items-center mx-auto" : "text-left items-start";
  const margen = conMargenInferior ? "mb-12" : "";

  return (
    <div className={`${margen} flex max-w-3xl flex-col ${alineado}`}>
      {eyebrow && (
        <span className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
          {eyebrow}
        </span>
      )}
      <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
        {titulo}
      </h2>
      {descripcion && (
        <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">{descripcion}</p>
      )}
    </div>
  );
}
