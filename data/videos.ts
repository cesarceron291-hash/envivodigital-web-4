import { Video } from "@/types";

/**
 * ============================================================
 *  CATALOGO DE VIDEOS - SECCION "PRODUCCIONES"
 * ============================================================
 *  Este es el UNICO archivo que necesitas editar para agregar,
 *  quitar o modificar los videos que aparecen en el sitio.
 *
 *  Para cada video necesitas:
 *   - id            -> un identificador unico (ej. "video-01")
 *   - titulo        -> el titulo que se muestra
 *   - descripcion   -> una descripcion corta (1-2 lineas)
 *   - categoria     -> debe coincidir EXACTAMENTE con una de las
 *                      categorias listadas en CATEGORIAS abajo
 *   - youtubeId     -> el ID del video de YouTube. Se obtiene de
 *                      la URL: https://www.youtube.com/watch?v=ESTE_ES_EL_ID
 *   - miniatura     -> normalmente puedes dejar esto vacio ("") y el
 *                      sitio usara automaticamente la miniatura oficial
 *                      de YouTube. Solo llenalo si quieres una imagen
 *                      personalizada en /public/images/producciones/
 *
 *  IMPORTANTE: Los IDs de YouTube de este archivo son de EJEMPLO
 *  (provisionales). Reemplazalos por los IDs reales de tu canal.
 * ============================================================
 */

export const CATEGORIAS = [
  "Boxeo",
  "Latin KO",
  "Tras Las Cuerdas",
  "Producciones especiales",
  "Entrevistas",
  "Eventos completos",
  "Mejores momentos",
  "Contenido reciente",
] as const;

export const videos: Video[] = [
  {
    id: "video-01",
    titulo: "Función Estelar de Boxeo — Cartelera Completa",
    descripcion: "Transmisión completa de la velada de box con narración y comentarios en vivo.",
    categoria: "Boxeo",
    miniatura: "",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-02",
    titulo: "Latin KO — Episodio 12",
    descripcion: "El programa oficial de boxeo latino con las mejores historias del ring.",
    categoria: "Latin KO",
    miniatura: "",
    youtubeId: "jfKfPfyJRdk",
  },
  {
    id: "video-03",
    titulo: "Tras Las Cuerdas — Behind the Scenes",
    descripcion: "Lo que la cámara de televisión no siempre muestra, directo desde el vestidor.",
    categoria: "Tras Las Cuerdas",
    miniatura: "",
    youtubeId: "5qap5aO4i9A",
  },
  {
    id: "video-04",
    titulo: "Producción Especial — Gala de Premiación",
    descripcion: "Cobertura multicámara de una gala de premiación con transmisión simultánea.",
    categoria: "Producciones especiales",
    miniatura: "",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: "video-05",
    titulo: "Entrevista Exclusiva — Campeón Mundial",
    descripcion: "Charla uno a uno previa a la pelea más importante de la temporada.",
    categoria: "Entrevistas",
    miniatura: "",
    youtubeId: "2Vv-BfVoq4g",
  },
  {
    id: "video-06",
    titulo: "Evento Completo — Noche de Campeones",
    descripcion: "La transmisión íntegra, tal como se vio en vivo por YouTube y televisión.",
    categoria: "Eventos completos",
    miniatura: "",
    youtubeId: "ktvTqknDobU",
  },
  {
    id: "video-07",
    titulo: "Mejores Momentos — Temporada 2025",
    descripcion: "Un resumen con los nocauts, sorpresas y momentos más emotivos del año.",
    categoria: "Mejores momentos",
    miniatura: "",
    youtubeId: "6Dh-RL__uN4",
  },
  {
    id: "video-08",
    titulo: "Último Programa Subido",
    descripcion: "Lo más reciente de nuestra producción semanal.",
    categoria: "Contenido reciente",
    miniatura: "",
    youtubeId: "M7lc1UVf-VE",
  },
  {
    id: "video-09",
    titulo: "Latin KO — Episodio 11",
    descripcion: "Historias del boxeo latinoamericano, contadas con calidad de televisión.",
    categoria: "Latin KO",
    miniatura: "",
    youtubeId: "3JZ_D3ELwOQ",
  },
  {
    id: "video-10",
    titulo: "Función de Box — Ciudad Juárez",
    descripcion: "Transmisión deportiva producida en locación con equipo multicámara.",
    categoria: "Boxeo",
    miniatura: "",
    youtubeId: "L_jWHffIx5E",
  },
];
