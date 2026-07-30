import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDocument from "@/components/LegalDocument";
import { avisoDePrivacidad } from "@/data/legal";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de En Vivo Digital sobre el tratamiento de datos personales.",
  alternates: { canonical: `${siteConfig.url}/aviso-de-privacidad` },
};

export default function AvisoDePrivacidadPage() {
  return (
    <main>
      <Navbar />
      <LegalDocument documento={avisoDePrivacidad} />
      <Footer />
    </main>
  );
}
