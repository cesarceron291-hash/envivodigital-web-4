import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProductionsCatalog from "@/components/ProductionsCatalog";
import { siteConfig } from "@/data/siteConfig";

const titulo = "Producciones";
const descripcion =
  "Explora el catálogo completo de transmisiones deportivas, funciones de boxeo, entrevistas y producciones especiales de En Vivo Digital.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  alternates: {
    canonical: `${siteConfig.url}/producciones`,
  },
  openGraph: {
    title: `${titulo} | ${siteConfig.nombre}`,
    description: descripcion,
    url: `${siteConfig.url}/producciones`,
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.nombre,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${titulo} | ${siteConfig.nombre}`,
    description: descripcion,
    images: ["/images/og/og-image.jpg"],
  },
};

export default function ProduccionesPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-brand-dark px-5 pb-4 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Catálogo completo"
            titulo="Todas nuestras producciones"
            descripcion="Busca y filtra por categoría entre todas nuestras transmisiones, programas y producciones especiales."
            alineacion="izquierda"
          />
        </div>
      </section>

      <ProductionsCatalog />
      <Footer />
    </main>
  );
}
