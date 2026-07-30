import { MiembroEquipo } from "@/types";

// Sustituye foto, nombre y redes por la informacion real de cada integrante.
// Coloca las fotografias en /public/images/team/
export const equipo: MiembroEquipo[] = [
  { nombre: "[Nombre]", cargo: "Dirección general", descripcion: "Lidera la visión creativa y estratégica de cada producción.", foto: "/images/team/direccion-general.jpg", redes: { instagram: "#", linkedin: "#" } },
  { nombre: "[Nombre]", cargo: "Producción", descripcion: "Coordina la logística y planeación integral de cada evento.", foto: "/images/team/produccion.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Realización", descripcion: "Dirige la mezcla en vivo y el ritmo narrativo de la transmisión.", foto: "/images/team/realizacion.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Narración", descripcion: "Voz oficial de las transmisiones en vivo.", foto: "/images/team/narracion.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Comentarios", descripcion: "Análisis experto durante cada transmisión deportiva.", foto: "/images/team/comentarios.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Cámaras", descripcion: "Responsable de la cobertura multicámara en sitio.", foto: "/images/team/camaras.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Audio", descripcion: "Ingeniería de audio en vivo con calidad broadcast.", foto: "/images/team/audio.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Gráficos", descripcion: "Diseño de gráficos y marcadores en tiempo real.", foto: "/images/team/graficos.jpg", redes: { instagram: "#" } },
  { nombre: "[Nombre]", cargo: "Edición", descripcion: "Postproducción de resúmenes y contenido para redes.", foto: "/images/team/edicion.jpg", redes: { instagram: "#" } },
];
