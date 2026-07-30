import { Instagram, Facebook, Linkedin } from "lucide-react";
import { MiembroEquipo } from "@/types";

export default function TeamCard({ nombre, cargo, descripcion, redes }: MiembroEquipo) {
  return (
    <div className="group overflow-hidden rounded-md border border-brand-line bg-brand-panel transition-colors hover:border-brand-red/50">
      <div className="flex aspect-square items-center justify-center bg-brand-gray text-brand-muted">
        <span className="text-xs font-bold uppercase tracking-wide">Foto provisional</span>
      </div>
      <div className="p-5">
        <h3 className="font-sans text-base font-bold text-white">{nombre}</h3>
        <p className="text-xs font-bold uppercase tracking-wide text-brand-red">{cargo}</p>
        <p className="mt-2 text-sm text-brand-muted">{descripcion}</p>
        <div className="mt-4 flex gap-3">
          {redes.instagram && (
            <a href={redes.instagram} aria-label={`Instagram de ${nombre}`} className="text-brand-muted hover:text-white">
              <Instagram className="h-4 w-4" />
            </a>
          )}
          {redes.facebook && (
            <a href={redes.facebook} aria-label={`Facebook de ${nombre}`} className="text-brand-muted hover:text-white">
              <Facebook className="h-4 w-4" />
            </a>
          )}
          {redes.linkedin && (
            <a href={redes.linkedin} aria-label={`LinkedIn de ${nombre}`} className="text-brand-muted hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
