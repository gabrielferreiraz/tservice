import { COMPANY } from "@/lib/content";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-brand-dark), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-3xl font-bold leading-tight text-paper sm:text-5xl md:text-6xl">
          {COMPANY.yearsInMarket} anos de obra.{" "}
          <span className="text-brand">Comando direto, do início ao fim.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-paper/70 sm:mt-6 sm:text-lg">
          Pavimentação, elétrica, pisos e terraplenagem com uma base fixa de até {COMPANY.teamSize} profissionais. {COMPANY.ownerName.split(" ")[0]} comanda a obra pessoalmente, do início ao fim. Sem terceirizar etapa, sem trocar equipe no meio do caminho.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <WhatsAppButton label={`Falar com o ${COMPANY.ownerName.split(" ")[0]}`} className="justify-center text-base" />
          <a
            href="#diferenciais"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-semibold text-paper transition hover:border-brand hover:text-brand"
          >
            Como funciona o prazo
          </a>
        </div>

        <dl className="mt-12 grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-8 sm:mt-16 sm:gap-4 sm:pt-10">
          <Stat value={`${COMPANY.yearsInMarket}+`} label="Anos de mercado" />
          <Stat value={`${COMPANY.teamSize}`} label="Profissionais fixos na equipe" />
          <Stat value="0" label="Etapas terceirizadas" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <dt className="font-heading text-3xl font-bold text-brand sm:text-4xl">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wide text-paper/60 sm:text-sm">{label}</dd>
    </div>
  );
}
