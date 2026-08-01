import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const whatsappUrl =
  "https://wa.me/525534256604?text=Hola%2C%20quiero%20cotizar%20una%20producci%C3%B3n%20para%20mi%20evento.";

export default function Contact() {
  return (
    <section id="contacto" className="bg-black px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="HABLEMOS DE TU PROYECTO"
          titulo="TU PRÓXIMO EVENTO COMIENZA AQUÍ"
          descripcion="CUÉNTANOS QUÉ TIENES EN MENTE Y PREPARAREMOS UNA PROPUESTA ADAPTADA A TUS OBJETIVOS Y PRESUPUESTO."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-7 lg:col-span-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border border-brand-red/40 bg-brand-red/10 p-4 transition-all hover:border-brand-red hover:bg-brand-red/20"
            >
              <MessageCircle className="mt-1 h-6 w-6 shrink-0 text-brand-red" />

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                  COTIZA POR WHATSAPP
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  55 3425 6604
                </p>

                <p className="mt-2 text-xs uppercase leading-relaxed text-white/60">
                  HOLA, QUIERO COTIZAR UNA PRODUCCIÓN PARA MI EVENTO.
                </p>
              </div>
            </a>

            <a
              href="tel:+525534256604"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-red" />

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                  TELÉFONO
                </p>

                <p className="text-sm text-brand-muted">
                  55 3425 6604
                </p>
              </div>
            </a>

            <a
              href="mailto:cesarceron291@gmail.com?subject=Cotización%20En%20Vivo%20Digital"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-red" />

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                  CORREO
                </p>

                <p className="break-all text-sm text-brand-muted">
                  cesarceron291@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-red" />

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                  UBICACIÓN
                </p>

                <p className="text-sm text-brand-muted">
                  CIUDAD DE MÉXICO, MÉXICO
                </p>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </section>
  );
}