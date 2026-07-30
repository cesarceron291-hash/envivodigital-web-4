import { AlertTriangle } from "lucide-react";
import { DocumentoLegal } from "@/types";

interface Props {
  documento: DocumentoLegal;
}

/**
 * Renderiza cualquier documento legal (Aviso de Privacidad, Términos y
 * Condiciones, etc.) con un estilo consistente con el resto del sitio.
 * El contenido en sí se edita en /data/legal.ts, no aquí.
 */
export default function LegalDocument({ documento }: Props) {
  return (
    <section className="bg-black px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-sans text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          {documento.titulo}
        </h1>
        <p className="mt-3 text-sm text-brand-muted">Última actualización: {documento.actualizado}</p>

        <div className="mt-6 flex items-start gap-3 rounded-md border border-brand-red/40 bg-brand-red/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
          <p className="text-sm text-white/85">
            Este documento es una plantilla provisional generada automáticamente. Antes de publicar el
            sitio, pide a un abogado que la revise y la adapte a la operación real de tu empresa.
          </p>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
          {documento.introduccion.map((parrafo, i) => (
            <p key={`intro-${i}`}>{parrafo}</p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {documento.secciones.map((seccion) => (
            <div key={seccion.titulo}>
              <h2 className="font-sans text-lg font-bold text-white sm:text-xl">{seccion.titulo}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                {seccion.parrafos.map((parrafo, i) => (
                  <p key={i}>{parrafo}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
