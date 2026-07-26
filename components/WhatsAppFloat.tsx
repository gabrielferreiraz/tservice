import { whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppButton";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-float fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
