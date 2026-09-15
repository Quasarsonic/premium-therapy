import type { Metadata } from "next";
import { CollaborationGrid } from "@/components/collaboration-grid";
import { ContactPanel } from "@/components/contact-panel";
import { RecognitionGrid } from "@/components/recognition-grid";
import { SectionHeading } from "@/components/section-heading";

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
        <CollaborationGrid />
      </section>

      <section className="border-t border-white/10 bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <SectionHeading title="Riconoscimenti" align="center" />
          <RecognitionGrid />
        </div>
      </section>
    </div>
  );
}
