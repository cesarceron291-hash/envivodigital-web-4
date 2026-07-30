"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

interface Errores {
  [campo: string]: string;
}

const tiposDeEvento = [
  "Función de boxeo",
  "Evento deportivo",
  "Espectáculo / concierto",
  "Conferencia / congreso",
  "Producción para TV",
  "Otro",
];

/**
 * Formulario de contacto.
 *
 * Este formulario esta listo para conectarse a un servicio externo:
 *  - Formspree: configura tu endpoint en /data/siteConfig.ts (formspreeEndpoint)
 *    y el formulario enviara los datos automaticamente por POST.
 *  - Resend / correo electronico: puedes crear una ruta en app/api/contacto/route.ts
 *    que reciba estos mismos campos y envie el correo con la API de Resend.
 *  - WhatsApp: el boton flotante y el CTA ya envian un mensaje directo.
 */
export default function ContactForm() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [errorGeneral, setErrorGeneral] = useState("");
  const [errores, setErrores] = useState<Errores>({});

  const validar = (datos: FormData): Errores => {
    const nuevosErrores: Errores = {};
    const requeridos = ["nombre", "correo", "telefono", "tipoEvento", "mensaje"];

    requeridos.forEach((campo) => {
      const valor = String(datos.get(campo) || "").trim();
      if (!valor) nuevosErrores[campo] = "Este campo es obligatorio.";
    });

    const correo = String(datos.get("correo") || "").trim();
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo && !regexCorreo.test(correo)) {
      nuevosErrores.correo = "Escribe un correo electrónico válido.";
    }

    return nuevosErrores;
  };

  const manejarEnvio = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorGeneral("");
    const form = e.currentTarget;
    const datos = new FormData(form);

    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    setEnviando(true);
    try {
      if (siteConfig.formspreeEndpoint.includes("TU_ID_DE_FORMSPREE")) {
        // Aun no se ha configurado Formspree: solo simulamos el envio.
        console.warn(
          "Formspree no está configurado. Edita 'formspreeEndpoint' en data/siteConfig.ts"
        );
        await new Promise((resolve) => setTimeout(resolve, 600));
      } else {
        const respuesta = await fetch(siteConfig.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: datos,
        });
        if (!respuesta.ok) throw new Error("Error al enviar el formulario");
      }

      setEnviado(true);
      form.reset();
    } catch (error) {
      setErrorGeneral("No se pudo enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  };

  const inputClase =
    "w-full rounded-sm border border-brand-line bg-brand-gray px-4 py-3 text-sm text-white placeholder:text-brand-muted focus:border-brand-red focus:outline-none";
  const labelClase = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/80";
  const errorClase = "mt-1 text-xs text-brand-red";

  if (enviado) {
    return (
      <div className="rounded-md border border-brand-red/40 bg-brand-panel p-10 text-center">
        <h3 className="font-sans text-2xl font-bold text-white">¡Gracias por escribirnos!</h3>
        <p className="mt-3 text-brand-muted">
          Recibimos tu solicitud. Nuestro equipo se pondrá en contacto contigo muy pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={manejarEnvio} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClase} htmlFor="nombre">Nombre *</label>
        <input id="nombre" name="nombre" type="text" className={inputClase} placeholder="Tu nombre" />
        {errores.nombre && <p className={errorClase}>{errores.nombre}</p>}
      </div>

      <div>
        <label className={labelClase} htmlFor="empresa">Empresa</label>
        <input id="empresa" name="empresa" type="text" className={inputClase} placeholder="Nombre de tu empresa" />
      </div>

      <div>
        <label className={labelClase} htmlFor="correo">Correo electrónico *</label>
        <input id="correo" name="correo" type="email" className={inputClase} placeholder="tucorreo@ejemplo.com" />
        {errores.correo && <p className={errorClase}>{errores.correo}</p>}
      </div>

      <div>
        <label className={labelClase} htmlFor="telefono">Teléfono *</label>
        <input id="telefono" name="telefono" type="tel" className={inputClase} placeholder="55 0000 0000" />
        {errores.telefono && <p className={errorClase}>{errores.telefono}</p>}
      </div>

      <div>
        <label className={labelClase} htmlFor="tipoEvento">Tipo de evento *</label>
        <select id="tipoEvento" name="tipoEvento" defaultValue="" className={inputClase}>
          <option value="" disabled>Selecciona una opción</option>
          {tiposDeEvento.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
        {errores.tipoEvento && <p className={errorClase}>{errores.tipoEvento}</p>}
      </div>

      <div>
        <label className={labelClase} htmlFor="ciudad">Ciudad</label>
        <input id="ciudad" name="ciudad" type="text" className={inputClase} placeholder="Ciudad del evento" />
      </div>

      <div>
        <label className={labelClase} htmlFor="fecha">Fecha estimada</label>
        <input id="fecha" name="fecha" type="date" className={inputClase} />
      </div>

      <div>
        <label className={labelClase} htmlFor="presupuesto">Presupuesto aproximado</label>
        <input id="presupuesto" name="presupuesto" type="text" className={inputClase} placeholder="Ej. $50,000 MXN" />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClase} htmlFor="mensaje">Mensaje *</label>
        <textarea id="mensaje" name="mensaje" rows={5} className={inputClase} placeholder="Cuéntanos sobre tu evento..." />
        {errores.mensaje && <p className={errorClase}>{errores.mensaje}</p>}
      </div>

      {errorGeneral && <p className={`sm:col-span-2 ${errorClase}`}>{errorGeneral}</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={enviando}
          className="w-full rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-redDark disabled:opacity-60 sm:w-auto"
        >
          {enviando ? "Enviando..." : "Enviar solicitud"}
        </button>
      </div>
    </form>
  );
}
