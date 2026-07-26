import Image from "next/image";
import { SERVICES } from "@/lib/content";
import { ICON_MAP } from "./icon-map";

export default function Services() {
  return (
    <section id="servicos" className="bg-paper px-4 py-20 text-ink sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Quatro frentes, um só comando</h2>
          <p className="mt-4 text-ink/60">
            Não são contratos separados nem equipes diferentes por etapa. É o mesmo time,
            coordenado pelo Nelson, cobrindo cada frente da obra.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative p-6">
                  <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-brand text-white shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
