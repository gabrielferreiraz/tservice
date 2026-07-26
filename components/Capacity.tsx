import { CAPACITY_PHASES } from "@/lib/content";
import { ICON_MAP } from "./icon-map";

export default function Capacity() {
  return (
    <section id="capacidade" className="bg-paper px-4 py-20 text-ink sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Como o prazo é cumprido
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Testado em obras de 6 meses ou mais
          </h2>
          <p className="mt-4 text-ink/60">
            Obra de infraestrutura raramente é rápida. O processo abaixo é o que sustenta o
            prazo combinado do início ao fim.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {CAPACITY_PHASES.map((phase) => {
            const Icon = ICON_MAP[phase.icon];
            return (
              <div
                key={phase.step}
                className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm transition hover:border-brand/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="font-heading text-3xl font-bold text-ink/10">{phase.step}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
