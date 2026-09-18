import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { PillarGrid } from "@/components/pillar-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { ButtonLink } from "@/components/ui/button";
import { about, services } from "@/lib/site-data";

export default function HomePage() {
  const featuredServices = services.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Metodo"
          title="Soluzioni integrate per il tuo benessere"
          description="Quattro pilastri, un unico obiettivo: sollievo, energia ed equilibrio."
          align="center"
        />
        <div className="mt-12">
          <PillarGrid />
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <SectionHeading title={about.title} />
          <div className="mt-10 grid items-start gap-10 md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src="/images/gregorio-drei.webp"
                alt="Gregorio Drei, Premium Therapy"
                width={682}
                height={1024}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-muted md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Servizi"
            title="Trattamenti professionali"
            description="Massaggio, recupero sportivo e terapie complementari, personalizzati su di te."
          />
          <ButtonLink href="/servizi" variant="outline" className="shrink-0">
            Tutti i servizi
          </ButtonLink>
        </div>
        <div className="mt-10">
          <ServiceGrid items={featuredServices} columns={2} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Pronto a prenotare?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Contattaci per fissare la tua seduta in studio, a domicilio o presso le
            strutture partner in Ticino.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contatti">Vai ai contatti</ButtonLink>
            <Link
              href="/servizi"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Esplora disturbi trattati
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
