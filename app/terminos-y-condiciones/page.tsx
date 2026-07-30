import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/LegalDocument";
import { terminosYCondiciones } from "@/data/legal";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de En Vivo Digital.",
  alternates: { canonical: `${siteConfig.url}/terminos-y-condiciones` },
};

export default function TerminosYCondicionesPage() {
  return (
    <main>
      <Navbar />
      <LegalDocument documento={terminosYCondiciones} />
      <Footer />
    </main>
  );
}
