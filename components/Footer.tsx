import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Formato "/#seccion": funciona igual desde el inicio (scroll) que desde
// una página interior (navega al inicio y luego hace scroll).
const enlaces = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#producciones", label: "Producciones" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#en-vivo", label: "En vivo" },
  { href: "/#contacto", label: "Contacto" },
];

// Enlaces adicionales a páginas interiores (no forman parte del menú principal).
const enlacesInternos = [{ href: "/producciones", label: "Catálogo completo de producciones" }];

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-line bg-black px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <span className="font-sans text-xl font-black tracking-tight text-white">
            EN VIVO<span className="text-brand-red"> DIGITAL</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-brand-muted">{siteConfig.eslogan}</p>
          <div className="mt-5 flex gap-4">
            <a href={siteConfig.redes.facebook} aria-label="Facebook" className="text-brand-muted hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href={siteConfig.redes.instagram} aria-label="Instagram" className="text-brand-muted hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href={siteConfig.redes.youtube} aria-label="YouTube" className="text-brand-muted hover:text-white"><Youtube className="h-5 w-5" /></a>
            <a href={siteConfig.redes.tiktok} aria-label="TikTok" className="text-sm font-bold text-brand-muted hover:text-white">TikTok</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-white/70">Navegación</h4>
          <ul className="space-y-2">
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href} className="text-sm text-brand-muted hover:text-white">{enlace.label}</Link>
              </li>
            ))}
            {enlacesInternos.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href} className="text-sm text-brand-muted hover:text-white">{enlace.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-white/70">Contacto</h4>
          <ul className="space-y-2 text-sm text-brand-muted">
            <li>{siteConfig.contacto.telefono}</li>
            <li>{siteConfig.contacto.correo}</li>
            <li>{siteConfig.contacto.ciudad}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-brand-line pt-6 text-xs text-brand-muted sm:flex-row">
        <p>© {anio} En Vivo Digital. Todos los derechos reservados.</p>
        <div className="flex gap-5">
          <Link href="/aviso-de-privacidad" className="hover:text-white">Aviso de privacidad</Link>
          <Link href="/terminos-y-condiciones" className="hover:text-white">Términos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
}
