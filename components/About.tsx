import SectionHeading from "./SectionHeading";
import YouTubeFacade from "./YouTubeFacade";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  return (
    <section id="nosotros" className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Quiénes somos" titulo="Quiénes somos" alineacion="izquierda" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-white/85 sm:text-lg">
            <p>
              En Vivo Digital es una productora especializada en transmisiones deportivas y producción
              audiovisual. Nuestra experiencia en televisión nos permite combinar narrativa, tecnología y
              emoción para crear contenidos con calidad profesional.
            </p>
            <p>
              Desde una función de boxeo hasta una transmisión internacional, cada producción se realiza
              con el compromiso de llevar al público una experiencia clara, dinámica y emocionante.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-brand-line shadow-2xl shadow-black/50">
            <YouTubeFacade
              youtubeId={siteConfig.videoInstitucionalYoutubeId}
              titulo="Video institucional En Vivo Digital"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
