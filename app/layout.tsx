import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/siteConfig";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const titulo = "En Vivo Digital | Productora de Televisión y Transmisiones Deportivas en México";
const descripcion =
  "Productora mexicana especializada en producción de televisión, transmisiones deportivas, streaming profesional y producción de boxeo. Producción multicámara para México y el mundo.";

const palabrasClave = [
  "productora de televisión en México",
  "streaming deportivo",
  "producción de boxeo",
  "transmisiones deportivas",
  "producción multicámara",
  "streaming profesional",
  "productora audiovisual",
  "transmisión de eventos",
  "producción para YouTube",
  "En Vivo Digital",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titulo,
    template: "%s | En Vivo Digital",
  },
  description: descripcion,
  keywords: palabrasClave,
  authors: [{ name: "En Vivo Digital" }],
  creator: "En Vivo Digital",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.nombre,
    title: titulo,
    description: descripcion,
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "En Vivo Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
    images: ["/images/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={lato.variable}>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
