import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const enlaces = [
  { href: "/#inicio", label: "INICIO" },
  { href: "/#nosotros", label: "NOSOTROS" },
  { href: "/#servicios", label: "SERVICIOS" },
  { href: "/#producciones", label: "PRODUCCIONES" },
  { href: "/#clientes", label: "CLIENTES" },
  { href: "/#en-vivo", label: "EN VIVO" },
  { href: "/#contacto", label: "CONTACTO" },
];

const enlacesInternos = [
  {
    href: "/producciones",
    label: "CATÁLOGO COMPLETO DE PRODUCCIONES",
  },
];

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-line bg-black px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-3">
        {/* MARCA */}
        <div>
          <span className="font-sans text-xl font-black uppercase tracking-tight text-white">
            EN VIVO
            <span className="text-brand-red"> DIGITAL</span>
          </span>

          <p className="mt-4 max-w-xs text-sm font-medium uppercase leading-7 text-brand-muted">
            PRODUCCIONES DEPORTIVAS CON ESTÁNDARES DE TELEVISIÓN.
          </p>

          <div className="mt-6 flex items-center gap-5">
            <a
              href={siteConfig.redes.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-brand-muted transition-colors hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href={siteConfig.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-brand-muted transition-colors hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href={siteConfig.redes.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-brand-muted transition-colors hover:text-white"
            >
              <Youtube className="h-5 w-5" />
            </a>

            <a
              href={siteConfig.redes.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-sm font-black uppercase text-brand-muted transition-colors hover:text-white"
            >
              TIKTOK
            </a>
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            NAVEGACIÓN
          </h4>

          <ul className="space-y-3">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  className="text-sm font-medium uppercase text-brand-muted transition-colors hover:text-white"
                >
                  {enlace.label}
                </Link>
              </li>
            ))}

            {enlacesInternos.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  className="text-sm font-medium uppercase text-brand-muted transition-colors hover:text-white"
                >
                  {enlace.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            CONTACTO
          </h4>

          <ul className="space-y-4 text-sm font-medium uppercase text-brand-muted">
            <li>
              <a
                href="tel:+525534256604"
                className="transition-colors hover:text-white"
              >
                +52 55 3425 6604
              </a>
            </li>

            <li>
              <a
                href="mailto:cesarceron291@gmail.com?subject=Cotización%20En%20Vivo%20Digital"
                className="break-all transition-colors hover:text-white"
              >
                CESARCERON291@GMAIL.COM
              </a>
            </li>

            <li>CIUDAD DE MÉXICO, MÉXICO</li>
          </ul>
        </div>
      </div>

      {/* PIE INFERIOR */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-brand-line pt-6 text-xs font-medium uppercase text-brand-muted sm:flex-row">
        <p>
          © {anio} EN VIVO DIGITAL. TODOS LOS DERECHOS RESERVADOS.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/aviso-de-privacidad"
            className="transition-colors hover:text-white"
          >
            AVISO DE PRIVACIDAD
          </Link>

          <Link
            href="/terminos-y-condiciones"
            className="transition-colors hover:text-white"
          >
            TÉRMINOS Y CONDICIONES
          </Link>
        </div>
      </div>
    </footer>
  );
}