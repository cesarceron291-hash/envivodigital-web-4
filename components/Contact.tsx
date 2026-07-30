import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Hablemos"
          titulo="Contacto"
          descripcion="Cuéntanos sobre tu evento y te responderemos a la brevedad."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">Teléfono</p>
                <p className="text-sm text-brand-muted">{siteConfig.contacto.telefono}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">Correo</p>
                <p className="text-sm text-brand-muted">{siteConfig.contacto.correo}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">Ubicación</p>
                <p className="text-sm text-brand-muted">{siteConfig.contacto.ciudad}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
