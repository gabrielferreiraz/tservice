import { REFERENCE_PROOF, whatsappLink } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppButton";

export default function References() {
  return (
    <section id="referencias" className="bg-stone px-4 py-20 text-ink sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand">
          {REFERENCE_PROOF.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{REFERENCE_PROOF.title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">{REFERENCE_PROOF.body}</p>

        <a
          href={whatsappLink("Olá! Antes de fechar, gostaria de falar com uma referência de obra anterior.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-ink/15 px-6 py-3 font-semibold text-ink transition hover:border-brand hover:text-brand"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Pedir contato de referência
        </a>
      </div>
    </section>
  );
}
