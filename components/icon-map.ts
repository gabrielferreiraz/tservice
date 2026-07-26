import {
  Route,
  Mountain,
  Zap,
  Layers,
  Droplets,
  Wrench,
  Users,
  CalendarCheck,
  History,
  ClipboardList,
  Cog,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

// Mapa central: nome do ícone (string, guardado em lib/content.ts) -> componente.
// Mantém o conteúdo (dados) desacoplado da biblioteca de ícones.
export const ICON_MAP: Record<string, LucideIcon> = {
  Route,
  Mountain,
  Zap,
  Layers,
  Droplets,
  Wrench,
  Users,
  CalendarCheck,
  History,
  ClipboardList,
  Cog,
  RefreshCw,
};
