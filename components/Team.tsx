import { COMPANY, TEAM_SPECIALTIES, TEAM_STATS } from "@/lib/content";
import { ICON_MAP } from "./icon-map";

export default function Team() {
  return (
    <section id="equipe" className="bg-stone px-4 py-20 text-ink sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Equipe
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Time próprio, não montado por obra
          </h2>
          <p className="mt-4 text-ink/60">
            {COMPANY.ownerName} trabalha com uma base fixa de até {COMPANY.teamSize} profissionais que já
            atuam com ele há anos. Nem toda obra leva todo mundo, mas ninguém desconhecido entra no
            time no meio do caminho — e a equipe não é trocada durante a obra.
          </p>
        </div>

        <dl className="mt-14 grid gap-6 border-y border-ink/10 py-10 sm:grid-cols-3">
          {TEAM_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <dt className="font-heading text-4xl font-bold text-brand">{stat.value}</dt>
              <dd className="mt-2 text-sm text-ink/60">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TEAM_SPECIALTIES.map((specialty) => {
            const Icon = ICON_MAP[specialty.icon];
            return (
              <span
                key={specialty.label}
                className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/80"
              >
                <Icon className="h-4 w-4 text-brand" strokeWidth={2} />
                {specialty.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
