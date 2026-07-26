import { DIFFERENTIALS } from "@/lib/content";
import { ICON_MAP } from "./icon-map";

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-ink-soft px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-bold text-paper sm:text-4xl">
            O que garante o prazo
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {DIFFERENTIALS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-ink p-8 transition hover:border-brand/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
