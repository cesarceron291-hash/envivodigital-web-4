import { siteConfig } from "@/data/siteConfig";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.nombre,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/og/og-image.jpg`,
    description: siteConfig.descripcion,
    slogan: siteConfig.eslogan,
    email: siteConfig.contacto.correo,
    telephone: siteConfig.contacto.telefono,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contacto.ciudad,
      addressCountry: "MX",
    },
    sameAs: [
      siteConfig.redes.facebook,
      siteConfig.redes.instagram,
      siteConfig.redes.youtube,
      siteConfig.redes.tiktok,
    ],
    areaServed: ["México", "Estados Unidos", "Latinoamérica"],
    knowsAbout: [
      "Producción de televisión",
      "Transmisiones deportivas",
      "Streaming profesional",
      "Producción de boxeo",
      "Producción multicámara",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
