# En Vivo Digital — Sitio Web (Etapa 1 + Etapa 2 + Etapa 3 + Etapa 4)

Este es el proyecto completo del sitio de **En Vivo Digital**, construido con Next.js, React, TypeScript y Tailwind CSS. No necesitas saber programar para instalarlo, probarlo, editar sus textos/videos y publicarlo. Sigue esta guía en orden.

**Etapa 2:** se agregó la página interior `/producciones`, un catálogo completo con buscador y filtro por categoría de todos los videos (la página principal solo muestra una vista previa por categoría).

**Etapa 3:** cada video tiene también su propia página de detalle (`/producciones/<id>`) con reproductor grande, descripción completa, datos estructurados para Google y producciones relacionadas.

**Etapa 4 (nuevo):** se agregaron las páginas **Aviso de Privacidad** (`/aviso-de-privacidad`), **Términos y Condiciones** (`/terminos-y-condiciones`) y una **página 404 personalizada** con la identidad visual de la marca. Se explica más abajo en la sección 4.

> ⚠️ **Importante sobre las páginas legales:** el texto de Aviso de Privacidad y Términos y Condiciones es una plantilla genérica, no fue redactada ni revisada por un abogado. Antes de publicar el sitio, pide a un abogado (idealmente especializado en protección de datos) que la revise y la adapte a tu operación real. El propio sitio muestra este mismo aviso arriba de cada documento.

---

## 0. Qué vas a necesitar

- Una computadora (Windows o Mac).
- Instalar **Node.js** (versión 18 o más reciente). Descárgalo gratis en: https://nodejs.org (elige la versión "LTS").
- Un editor de texto para ver/editar archivos. Recomendado: **Visual Studio Code** (gratis): https://code.visualstudio.com
- Una cuenta gratuita en **Vercel** (para publicar el sitio): https://vercel.com

---

## 1. Instalar el proyecto en tu computadora

1. Descomprime la carpeta `envivodigital-web` que te entregamos, donde prefieras (ej. Escritorio o Documentos).
2. Abre **Visual Studio Code**.
3. Ve a `Archivo > Abrir carpeta...` y selecciona la carpeta `envivodigital-web`.
4. Abre una terminal dentro de VS Code: menú `Terminal > Nueva terminal`.
5. En esa terminal, escribe este comando y presiona Enter (solo la primera vez, para instalar las piezas necesarias):

   ```
   npm install
   ```

   Esto puede tardar 1-3 minutos. Verás una carpeta nueva llamada `node_modules` — es normal, no la edites.

---

## 2. Probar el sitio en tu computadora (modo local)

En la misma terminal, escribe:

```
npm run dev
```

Verás un mensaje como `Local: http://localhost:3000`. Abre esa dirección en tu navegador (Chrome, Edge, etc.) y ahí estará tu sitio funcionando. Cada vez que guardes un cambio en un archivo, el navegador se actualizará solo.

Para detener el servidor de pruebas, regresa a la terminal y presiona `Ctrl + C`.

---

## 3. Estructura de carpetas (qué hay dentro)

```
envivodigital-web/
├── app/                  → Configuración general del sitio (SEO, layout, página principal)
│   ├── layout.tsx        → Título, descripción, metadatos e íconos del sitio
│   ├── page.tsx          → Ordena las secciones de la página principal
│   ├── globals.css       → Estilos generales
│   ├── sitemap.ts        → Genera el mapa del sitio automáticamente
│   └── robots.ts         → Reglas para buscadores (Google, etc.)
├── components/           → Cada sección/pieza visual del sitio (un archivo por sección)
├── data/                 → AQUÍ EDITAS TEXTOS, VIDEOS, DATOS DE CONTACTO, ETC.
├── hooks/                → Funciones internas reutilizables (no es necesario tocarlas)
├── types/                → Definiciones internas de datos (no es necesario tocarlas)
├── public/                → Imágenes, video de fondo, ícono del sitio
│   ├── videos/            → Aquí va tu video de fondo del Hero (hero-bg.mp4)
│   └── images/            → Fotos, logos de clientes, imagen para compartir en redes
├── package.json           → Lista de dependencias del proyecto
└── tailwind.config.ts      → Colores y estilos de marca (negro, gris, blanco, rojo)
```

**Regla simple:** para cambiar contenido (textos, videos, datos de contacto, equipo, clientes, servicios), edita únicamente los archivos dentro de la carpeta **`data/`**. No necesitas tocar nada dentro de `components/` para actualizar información.

---

## 4. Cómo cambiar cada cosa

### Cambiar el video de fondo del Hero (portada)
1. Consigue tu video en formato `.mp4` (recomendado: menos de 15 MB, sin audio, 1920×1080).
2. Ponle de nombre exactamente `hero-bg.mp4`.
3. Cópialo dentro de `public/videos/`, reemplazando el archivo `LEEME.txt` que está ahí de referencia.

### Cambiar textos generales, teléfono, correo, redes sociales y WhatsApp
Edita el archivo `data/siteConfig.ts`. Ahí están: eslogan, teléfono, correo, ciudad, redes sociales, número de WhatsApp y el enlace del formulario (Formspree).

### Cambiar los videos de la sección "Producciones"
Edita el archivo `data/videos.ts`. Por cada video hay estos datos:
- `titulo` → el título que se muestra.
- `descripcion` → una descripción corta.
- `categoria` → debe ser una de las categorías ya definidas arriba del archivo (Boxeo, Latin KO, etc.)
- `youtubeId` → el identificador del video de YouTube. Lo obtienes de la URL del video:
  `https://www.youtube.com/watch?v=ABC12345XYZ` → el ID es `ABC12345XYZ`

  Puedes copiar un bloque `{ ... }` existente, pegarlo debajo y cambiar sus datos para agregar un video nuevo. Para quitar un video, borra su bloque completo.

  **Este mismo archivo alimenta dos lugares del sitio:** la vista previa por categoría de la página principal (sección "Producciones") y el catálogo completo en `/producciones` (con buscador y filtro). No necesitas editar nada más — cualquier video que agregues aquí aparece automáticamente en ambos lugares.

### Página "Catálogo completo de producciones" (`/producciones`)
Es una página nueva a la que se llega dando clic en el botón **"Ver catálogo completo"** dentro de la sección Producciones del inicio, o desde el enlace en el pie de página. Muestra todos los videos de `data/videos.ts` en una cuadrícula, con un buscador por texto y botones de filtro por categoría. No requiere edición aparte: se actualiza sola cuando editas `data/videos.ts`.

### Página de "ficha" por video (`/producciones/video-01`, etc.)
Cada video tiene también su propia página individual con reproductor grande, descripción completa y producciones relacionadas de la misma categoría — ideal para compartir el enlace de un video específico por WhatsApp o redes sociales. Se llega a ella con el enlace **"Ver ficha completa"** que aparece debajo de cada video, tanto en el inicio como en el catálogo. Estas páginas se generan automáticamente: por cada bloque que agregues en `data/videos.ts`, se crea sola una página en `/producciones/<id-del-video>` (usa el mismo valor que pusiste en el campo `id`).

### Cambiar el Aviso de Privacidad y los Términos y Condiciones
Edita el archivo `data/legal.ts`. Cada documento tiene:
- `titulo` → el título de la página.
- `actualizado` → la fecha que se muestra como "última actualización" (cámbiala cada vez que edites el texto).
- `introduccion` → una lista de párrafos introductorios.
- `secciones` → una lista de secciones, cada una con su propio `titulo` y una lista de `parrafos`.

Recuerda: **este texto es una plantilla genérica y debe ser revisada por un abogado** antes de publicar el sitio. Sustituye los datos entre corchetes `[ ]` (dirección, correo de contacto para privacidad, ciudad/estado para jurisdicción) por tu información real.

### Página 404 (cuando alguien entra a un enlace que no existe)
Next.js muestra automáticamente el archivo `app/not-found.tsx` cuando alguien visita una dirección que no existe en el sitio (por ejemplo, un enlace mal escrito). Ya tiene el estilo de la marca y botones para volver al inicio o ver producciones; no necesitas configurarla.

### Activar/desactivar la sección "En Vivo"
Edita el archivo `data/liveConfig.ts`:
- Pon `activo: true` el día de tu transmisión y pega el `youtubeId` de tu transmisión en vivo.
- Cuando `activo: false`, el sitio muestra automáticamente la cuenta regresiva del "próximo evento" (edita fecha, nombre y descripción en ese mismo archivo).

### Cambiar servicios, clientes, equipo, casos de éxito y cifras de experiencia
- Servicios: `data/services.ts`
- Clientes/alianzas: `data/clients.ts` (agrega tu logo en `public/images/logos/` y escribe su ruta en el campo `logo`)
- Equipo: `data/team.ts` (agrega fotos en `public/images/team/`)
- Casos de éxito: `data/successCases.ts`
- Cifras de experiencia (contador animado): `data/stats.ts` — **estas cifras son de ejemplo, reemplázalas por tus números reales.**

### Cambiar el ícono del sitio (favicon) o la imagen para compartir en redes (WhatsApp/Facebook)
- Ícono del sitio: reemplaza `app/icon.png` y `public/icon.png` por tu propio ícono cuadrado (idealmente 512×512 px).
- Imagen para compartir en redes: reemplaza `public/images/og/og-image.jpg` por una imagen de 1200×630 px con tu logo.

### Conectar el formulario de contacto
El formulario ya está preparado para conectarse a **Formspree** (gratis):
1. Crea una cuenta en https://formspree.io
2. Crea un formulario nuevo y copia el enlace que te dan (algo como `https://formspree.io/f/abc123`)
3. Pégalo en `data/siteConfig.ts`, en el campo `formspreeEndpoint`.

También puedes conectarlo después a **Resend** (para enviar correos desde tu propio dominio) creando una ruta en `app/api/contacto/route.ts` — si más adelante lo necesitas, pídenos ayuda para esa etapa.

---

## 5. Publicar el sitio en Vercel

1. Crea una cuenta gratis en https://vercel.com (puedes entrar con tu cuenta de GitHub, Google o correo).
2. Si aún no tienes el proyecto en GitHub:
   - Crea una cuenta en https://github.com si no tienes una.
   - Crea un repositorio nuevo y sube la carpeta `envivodigital-web` (VS Code tiene un botón de "Publicar en GitHub" en la pestaña de Control de código fuente).
3. En Vercel, da clic en **"Add New... > Project"**.
4. Selecciona el repositorio que acabas de subir.
5. Vercel detectará automáticamente que es un proyecto Next.js. No necesitas cambiar ninguna configuración.
6. Da clic en **"Deploy"**. En un par de minutos tendrás tu sitio publicado con una dirección tipo `https://envivodigital-web.vercel.app`.
7. Para usar tu propio dominio (ej. `www.envivodigital.mx`), ve a `Project > Settings > Domains` dentro de Vercel y sigue las instrucciones para conectarlo.

Cada vez que subas un cambio a GitHub, Vercel va a actualizar el sitio publicado automáticamente.

---

## 6. Notas importantes

- **Contenido provisional:** los videos, cifras de experiencia, casos de éxito, logos de clientes y fotos del equipo vienen con datos de ejemplo. Búscalos con el comentario `PROVISIONAL` o `ejemplo` dentro de cada archivo en `data/` y sustitúyelos por tu información real.
- **Videos de YouTube:** el sitio solo carga el reproductor completo de YouTube cuando el usuario da clic en un video — así la página carga rápido y no se satura con múltiples reproductores.
- **SEO:** el título, descripción, palabras clave, mapa del sitio (`sitemap.xml`), reglas para buscadores (`robots.txt`) y la vista previa para compartir en WhatsApp/Facebook ya están configurados en `app/layout.tsx`. Solo necesitas actualizar `url` en `data/siteConfig.ts` con tu dominio real antes de publicar.
- **Próxima etapa:** este proyecto corresponde a la Etapa 1 (página principal completa). Cuando quieras, podemos continuar con páginas interiores (ej. una página dedicada a cada producción, blog, o páginas legales completas).

---

¿Dudas o quieres continuar con la Etapa 2 (páginas interiores)? Solo pídelo.
