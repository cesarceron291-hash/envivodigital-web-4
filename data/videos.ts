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
 "Funciones Completas",
  "Semblanzas",
  "Tras Las Cuerdas",
  "Producciones Especiales",
  "Entrevistas",
  "Reportajes",
  "Sports Queens",
] as const;

export const videos: Video[] = [
  {
    id: "funcion-oceania",
titulo: "Todo por el Todo",
descripcion: "Función completa desde el Foro Oceanía Show Center, producida por En Vivo Digital.",
categoria: "Funciones completas",
miniatura: "",
youtubeId: "Ooj3-qXKSMA",
  },
  {
    id: "funcion-ecatepec",
titulo: "Función Completa - Ecatepec",
descripcion: "Velada profesional desde Plaza Paseo Ventura, Ecatepec, Estado de México.",
categoria: "Funciones completas",
miniatura: "",
youtubeId: "GL_wjBs7dF4",
  },
  {
    id: "funcion-03",
titulo: "Función Completa",
descripcion: "Transmisión completa producida por En Vivo Digital.",
categoria: "Funciones completas",
miniatura: "",
youtubeId: "1JL42mjrryQ",
  },
  {
    id: "funcion-coliseo",
titulo: "Puro Golpe Mexicano",
descripcion: "Función completa producida por En Vivo Digital.",
categoria: "Funciones completas",
miniatura: "",
youtubeId: "K7mpYANh5HI",
},
{
  id: "semblanza-01",
  titulo: "Semblanza",
  descripcion: "Historias que inspiran dentro y fuera del ring.",
  categoria: "Semblanzas",
  miniatura: "",
  youtubeId: "6gXmcPOwjNY",
},

{
  id: "semblanza-02",
  titulo: "Semblanza",
  descripcion: "Conoce la trayectoria de grandes protagonistas del boxeo.",
  categoria: "Semblanzas",
  miniatura: "",
  youtubeId: "GUXkyZE4bTA",
},

{
  id: "semblanza-03",
  titulo: "Semblanza",
  descripcion: "Documentales y perfiles exclusivos producidos por En Vivo Digital.",
  categoria: "Semblanzas",
  miniatura: "",
  youtubeId: "Pw4LrAUNGH4",
},

{
  id: "semblanza-04",
  titulo: "Semblanza",
  descripcion: "Las historias que merecen ser contadas.",
  categoria: "Semblanzas",
  miniatura: "",
  youtubeId: "EAB6nv5DhuU",
},{
  id: "tras-cuerdas-01",
  titulo: "Tras Las Cuerdas",
  descripcion: "Programa de análisis, entrevistas y actualidad del boxeo.",
  categoria: "Tras Las Cuerdas",
  miniatura: "",
  youtubeId: "9IszwioR9e4",
},

{
  id: "tras-cuerdas-02",
  titulo: "Tras Las Cuerdas",
  descripcion: "Los protagonistas del boxeo cuentan su historia.",
  categoria: "Tras Las Cuerdas",
  miniatura: "",
  youtubeId: "cCg6twf8VTw",
},

{
  id: "tras-cuerdas-03",
  titulo: "Tras Las Cuerdas",
  descripcion: "Análisis, debate y entrevistas exclusivas.",
  categoria: "Tras Las Cuerdas",
  miniatura: "",
  youtubeId: "8ORygCHeJoo",
},

{
  id: "tras-cuerdas-04",
  titulo: "Tras Las Cuerdas",
  descripcion: "Todo lo que ocurre dentro y fuera del ring.",
  categoria: "Tras Las Cuerdas",
  miniatura: "",
  youtubeId: "BjctRKKPBXk",
},{
  id: "produccion-especial-01",
  titulo: "Producción Especial",
  descripcion: "Contenido especial producido por En Vivo Digital.",
  categoria: "Producciones especiales",
  miniatura: "",
  youtubeId: "Pwn5TMafsKQ",
},

{
  id: "produccion-especial-02",
  titulo: "Producción Especial",
  descripcion: "Una producción original con narrativa y realización profesional.",
  categoria: "Producciones especiales",
  miniatura: "",
  youtubeId: "OMln6wA-Ths",
},

{
  id: "produccion-especial-03",
  titulo: "Producción Especial",
  descripcion: "Historias y contenidos creados para televisión y plataformas digitales.",
  categoria: "Producciones especiales",
  miniatura: "",
  youtubeId: "xK8r4kqrTRg",
},

{
  id: "produccion-especial-04",
  titulo: "Producción Especial",
  descripcion: "Una muestra del trabajo creativo y técnico de En Vivo Digital.",
  categoria: "Producciones especiales",
  miniatura: "",
  youtubeId: "req84vzMRDw",
},{
  id: "entrevista-01",
  titulo: "Entrevista Exclusiva",
  descripcion: "Conversaciones con los protagonistas del deporte.",
  categoria: "Entrevistas",
  miniatura: "",
  youtubeId: "5sIYCunvQsw",
},

{
  id: "entrevista-02",
  titulo: "Entrevista Exclusiva",
  descripcion: "Historias, anécdotas y testimonios en primera persona.",
  categoria: "Entrevistas",
  miniatura: "",
  youtubeId: "oPAh5sSoj3w",
},

{
  id: "entrevista-03",
  titulo: "Entrevista Exclusiva",
  descripcion: "Las voces más importantes del boxeo y el deporte.",
  categoria: "Entrevistas",
  miniatura: "",
  youtubeId: "ZS2dOz9OW8U",
},

{
  id: "entrevista-04",
  titulo: "Entrevista Exclusiva",
  descripcion: "Contenido exclusivo realizado por En Vivo Digital.",
  categoria: "Entrevistas",
  miniatura: "",
  youtubeId: "g0d9JuNyORs",
},{
  id: "reportaje-01",
  titulo: "Reportaje Especial",
  descripcion: "Historias que muestran el lado humano del deporte.",
  categoria: "Reportajes",
  miniatura: "",
  youtubeId: "Xnekxuauhx4",
},

{
  id: "reportaje-02",
  titulo: "Reportaje Especial",
  descripcion: "Coberturas y reportajes producidos por En Vivo Digital.",
  categoria: "Reportajes",
  miniatura: "",
  youtubeId: "er3nCJrkpTk",
},

{
  id: "reportaje-03",
  titulo: "Reportaje Especial",
  descripcion: "Contenido periodístico con calidad de televisión.",
  categoria: "Reportajes",
  miniatura: "",
  youtubeId: "ZK8SKA2Kkk4",
},

{
  id: "reportaje-04",
  titulo: "Reportaje Especial",
  descripcion: "Historias que merecen ser contadas.",
  categoria: "Reportajes",
  miniatura: "",
  youtubeId: "OAPo7wOdBZ4",
},{
  id: "sports-queens-01",
  titulo: "Sports Queens",
  descripcion: "Las protagonistas del deporte en una producción original de En Vivo Digital.",
  categoria: "Sports Queens",
  miniatura: "",
  youtubeId: "u1UabaBQYyc",
},

{
  id: "sports-queens-02",
  titulo: "Sports Queens",
  descripcion: "Entrevistas e historias con las grandes figuras del deporte femenil.",
  categoria: "Sports Queens",
  miniatura: "",
  youtubeId: "G0ecz0pr7OY",
},

{
  id: "sports-queens-03",
  titulo: "Sports Queens",
  descripcion: "Contenido original con una visión diferente del deporte.",
  categoria: "Sports Queens",
  miniatura: "",
  youtubeId: "66y3Xa54StQ",
},

{
  id: "sports-queens-04",
  titulo: "Sports Queens",
  descripcion: "Producciones exclusivas realizadas por En Vivo Digital.",
  categoria: "Sports Queens",
  miniatura: "",
  youtubeId: "D_sFLk-Ev1U",
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
