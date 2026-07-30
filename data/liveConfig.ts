/**
 * ============================================================
 *  CONFIGURACION DE LA SECCION "EN VIVO"
 * ============================================================
 *  Cambia "activo" a true el dia de la transmision y pega el
 *  ID del video de YouTube (o del stream en vivo) en "youtubeId".
 *  Cuando "activo" es false, el sitio muestra automaticamente
 *  la cuenta regresiva para el proximo evento.
 * ============================================================
 */

export const liveConfig = {
  // Cambia a "true" el dia y hora de la transmision
  activo: false,

  // --- Datos usados cuando activo = true ---
  youtubeId: "jfKfPfyJRdk", // ID del video/stream de YouTube en vivo
  nombreEvento: "Noche de Campeones — Función Estelar de Boxeo",
  descripcionEvento:
    "Transmisión en vivo desde la Arena Ciudad de México. Cartelera completa con comentarios y repeticiones instantáneas.",

  // --- Datos usados cuando activo = false (proxima transmision) ---
  proximoEvento: {
    nombre: "Noche de Campeones — Función Estelar de Boxeo",
    // Formato ISO: "AAAA-MM-DDTHH:mm:ss" (hora local de Ciudad de México)
    fecha: "2026-09-12T21:00:00",
    videoPromocionalYoutubeId: "dQw4w9WgXcQ",
  },
};
