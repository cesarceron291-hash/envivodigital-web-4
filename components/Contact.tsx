import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const whatsappUrl =
  "https://wa.me/525534256604?text=Hola%2C%20quiero%20cotizar%20una%20producci%C3%B3n%20para%20mi%20evento.";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-black px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          eyebrow="HABLEMOS DE TU PRÓXIMO EVENTO"
          titulo="SOLICITA TU COTIZACIÓN"
          descripcion="CUÉNTANOS TU IDEA. PREPARAREMOS UNA PROPUESTA ADAPTADA A TU EVENTO, A TU PRESUPUESTO Y A TUS OBJETIVOS."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* INFORMACIÓN */}

          <div className="space-y-8">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-brand-red bg-brand-red/10 p-6 transition-all hover:border-brand-red hover:bg-brand-red/20"
            >
              <div className="flex items-center gap-4">

                <MessageCircle className="h-10 w-10 text-brand-red" />

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    RESPUESTA RÁPIDA
                  </p>

                  <h3 className="mt-1 text-xl font-black uppercase text-white">
                    COTIZA POR WHATSAPP
                  </h3>

                </div>

              </div>

              <p className="mt-5 text-sm uppercase leading-7 text-white/80">
                HAZ CLIC Y CONVERSEMOS SOBRE TU PRÓXIMO EVENTO.
              </p>

            </a>

            <div className="flex items-start gap-4">

              <Phone className="mt-1 h-5 w-5 text-brand-red" />

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.20em] text-white/60">
                  TELÉFONO
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  +52 55 3425 6604
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <Mail className="mt-1 h-5 w-5 text-brand-red" />

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.20em] text-white/60">
                  CORREO ELECTRÓNICO
                </p>

                <p className="mt-1 break-all text-lg font-semibold uppercase text-white">
                  CESARCERON291@GMAIL.COM
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <MapPin className="mt-1 h-5 w-5 text-brand-red" />

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.20em] text-white/60">
                  UBICACIÓN
                </p>

                <p className="mt-1 text-lg font-semibold uppercase text-white">
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
    </section>
  );
}