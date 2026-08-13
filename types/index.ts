export interface Video {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  miniatura: string; // URL de la miniatura (puede ser la de YouTube o una imagen propia)
  youtubeId: string; // Solo el ID del video de YouTube, ej: "dQw4w9WgXcQ"
  fecha?: string;
}

export interface Servicio {
  titulo: string;
  descripcion: string;
  icono: string; // nombre del icono de lucide-react
}

export interface Cliente {
  nombre: string;
  logo?: string; // ruta de la imagen del logo (opcional, se muestra un recuadro provisional si no existe)
}

export interface CasoDeExito {
  cliente: string;
  tipoDeProduccion: string;
  numeroDeCamaras: string;
  plataformas: string;
  alcance: string;
  resultado: string;
  testimonio: string;
  imagen: string;
}

export interface MiembroEquipo {
  nombre: string;
  cargo: string;
  descripcion: string;
  semblanza: string;
  foto: string;
  redes: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Estadistica {
  numero: number;
  sufijo: string;
  etiqueta: string;
}

export interface SeccionLegal {
  titulo: string;
  parrafos: string[];
}

export interface DocumentoLegal {
  titulo: string;
  actualizado: string; // fecha en formato legible, ej. "29 de julio de 2026"
  introduccion: string[];
  secciones: SeccionLegal[];
}
