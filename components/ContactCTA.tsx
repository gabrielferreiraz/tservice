import { COMPANY, whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppButton";
import HazardStripe from "./HazardStripe";

export default function ContactCTA() {
  return (
    <section id="contato" className="bg-ink">
      <HazardStripe />
      <div className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-paper sm:text-4xl">
            Dúvida antes de fechar? Fala com o Nelson direto.
          </h2>
          <p className="mt-4 max-w-xl text-paper/70">
            Fala direto com {COMPANY.ownerName.split(" ")[0]} pelo WhatsApp ou por telefone, sem
            script de vendas, sem intermediário.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com {COMPANY.ownerName.split(" ")[0]}
            </a>
            <a
              href={`tel:${COMPANY.phoneDisplay.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-8 py-4 text-base font-semibold text-paper transition hover:border-brand hover:text-brand"
            >
              {COMPANY.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 text-sm text-paper/50">
            Atendimento em {COMPANY.city}
          </p>
        </div>
      </div>
    </section>
  );
}
