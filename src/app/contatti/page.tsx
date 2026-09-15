import type { Metadata } from "next";
import { ContactPanel } from "@/components/contact-panel";
import { SectionHeading } from "@/components/section-heading";
import { collaborations, recognitions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Prenota massaggi terapeutici a Paradiso, Lugano e Minusio. Telefono, email e WhatsApp.",
};

export default function ContattiPage() {
  return (
    <div className="pt-28">
      <ContactPanel />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Rete"
          title="Collaborazioni"
          description="Sport professionistico, studi partner e strutture in tutto il Ticino."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborations.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-surface/60 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeading title="Riconoscimenti" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {recognitions.map((item) => (
              <article
                key={item.badge}
                className="rounded-2xl border border-white/10 p-8"
              >
                <div className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 font-mono text-sm font-bold text-accent">
                  {item.badge}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
