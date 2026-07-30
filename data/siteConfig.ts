/**
 * ============================================================
 *  CONFIGURACION GENERAL DEL SITIO - EN VIVO DIGITAL
 * ============================================================
 *  Edita este archivo para cambiar datos de contacto, redes
 *  sociales, el video de fondo del Hero y el enlace de WhatsApp.
 *  NO necesitas tocar ningun otro archivo para estos cambios.
 * ============================================================
 */

export const siteConfig = {
  nombre: "En Vivo Digital",
  eslogan: "La emoción del deporte, producida con calidad de televisión.",
  descripcion:
    "Productora mexicana especializada en producción de televisión, transmisiones deportivas, streaming y contenidos audiovisuales.",
  url: "https://envivodigital.tv",

  // Video de fondo del Hero. Reemplaza el archivo en /public/videos/hero-bg.mp4
  // por tu propio video (recomendado: MP4, H.264, menos de 15 MB, sin audio).
  heroVideo: "/videos/hero-bg.mp4",
  heroPoster: "/images/hero-poster.jpg", // imagen que se ve mientras carga el video

  // Video institucional de la seccion "Quienes somos" (ID de YouTube)
  videoInstitucionalYoutubeId: "GLruXHj4QxA",

  contacto: {
    telefono: "+52 55 0000 0000",
    whatsapp: "5210000000000", // Numero con codigo de pais, sin espacios ni signos (ej. 521XXXXXXXXXX)
    correo: "cesarceron291@gmail.com",
    ciudad: "Ciudad de México, México",
  },

  redes: {
    facebook: "https://facebook.com/envivodigital",
    instagram: "https://instagram.com/envivodigital",
    youtube: "https://youtube.com/@envivodigital",
    tiktok: "https://tiktok.com/@envivodigital",
  },

  // Endpoint de Formspree para el formulario de contacto.
  // Crea una cuenta gratis en https://formspree.io, obten tu endpoint
  // (ej. "https://formspree.io/f/xxxxxxx") y pegalo aqui.
  formspreeEndpoint: "https://formspree.io/f/TU_ID_DE_FORMSPREE",
};
