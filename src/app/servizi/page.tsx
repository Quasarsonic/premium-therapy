import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { ButtonLink } from "@/components/ui/button";
import { conditions, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Massaggi classici, sportivi, linfodrenaggio, cupping, taping e valutazioni cliniche a Ticino.",
};

export default function ServiziPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <SectionHeading
          eyebrow="Premium Therapy"
          title="I Nostri Servizi"
          description="Trattamenti professionali per il tuo benessere"
        />
        <div className="mt-12">
          <ServiceGrid items={services} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeading
            eyebrow="Terapia mirata"
            title="Disturbi Trattati"
            description="Terapia specializzata per diverse patologie e condizioni"
          />
          <div className="mt-12">
            <ServiceGrid items={conditions} columns={2} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <p className="text-muted">
          Non sai quale trattamento fa per te? Contattaci per una valutazione
          personalizzata.
        </p>
        <ButtonLink href="/contatti" className="mt-6">
          Prenota ora
        </ButtonLink>
      </section>
    </div>
  );
}
