import { siteConfig } from "@/data/siteConfig";
import { MessageCircle } from "lucide-react";

export default function CommercialCTA() {
  const mensaje = encodeURIComponent(
    "Hola, tengo un evento y me gustaría conocer más sobre la producción de En Vivo Digital."
  );

  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 sm:px-8">
      <div className="absolute inset-0 bg-gradient-radial-red" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-sans text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
          ¿Tienes un evento que merece verse como televisión?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-brand-muted sm:text-lg">
          Cuéntanos tu proyecto y diseñaremos una producción adaptada a tus necesidades, plataforma y
          presupuesto.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-redDark"
          >
            Solicitar cotización
          </a>
          <a
            href={`https://wa.me/${siteConfig.contacto.whatsapp}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
