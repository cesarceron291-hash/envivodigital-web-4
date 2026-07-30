import * as Icons from "lucide-react";
import { Servicio } from "@/types";
import { LucideIcon } from "lucide-react";

export default function ServiceCard({ titulo, descripcion, icono }: Servicio) {
  const Icono = (Icons as unknown as Record<string, LucideIcon>)[icono] ?? Icons.Sparkles;

  return (
    <div className="group rounded-md border border-brand-line bg-brand-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/60 hover:shadow-lg hover:shadow-brand-red/10">
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-red/10 transition-colors group-hover:bg-brand-red">
        <Icono className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
      </div>
      <h3 className="mt-4 font-sans text-base font-bold text-white">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{descripcion}</p>
    </div>
  );
}
