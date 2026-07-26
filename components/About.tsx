import { COMPANY } from "@/lib/content";

export default function About() {
  return (
    <section id="sobre" className="bg-paper px-4 py-20 text-ink sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Quem comanda a obra
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {COMPANY.ownerName}, {COMPANY.yearsInMarket} anos de canteiro
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink/50">
            Fundador da T&apos;Service Infra
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            O nome &quot;Infra&quot; não é acaso. A equipe cobre pavimentação, elétrica, pisos e terraplenagem, tudo sob o comando direto de {COMPANY.ownerName}, no canteiro, não numa planilha em outra cidade.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Quem contrata uma vez, contrata de novo. Quando aparece problema no campo, é o próprio {COMPANY.ownerName.split(" ")[0]} quem resolve, não um preposto, não uma equipe terceirizada montada só para aquela obra.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <InfoCard value={`${COMPANY.yearsInMarket}`} label="Anos de experiência no mercado" />
          <InfoCard value={`${COMPANY.teamSize}`} label="Profissionais em equipe fixa" />
          <InfoCard value="100%" label="Obras com equipe própria" />
          <InfoCard value="Infra" label="Serviço completo, sem fragmentar contratos" />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
      <p className="font-heading text-3xl font-bold text-brand">{value}</p>
      <p className="mt-2 text-sm text-ink/60">{label}</p>
    </div>
  );
}
