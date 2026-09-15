import { ContactMap } from "@/components/contact-map";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/social";
import { SocialGlowButton } from "@/components/social-glow-button";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <section className="border-y border-white/10 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
        <ContactMap />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contatti / Prenotazioni
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold">Prenota il tuo benessere</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Chiama, scrivi o inviaci un messaggio su WhatsApp e fissiamo subito il
            tuo appuntamento, a domicilio o in studio a Paradiso, Lugano e Minusio.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Indirizzo studio</dt>
              <dd className="mt-1 font-medium">{site.studioAddress}</dd>
            </div>
            <div>
              <dt className="text-muted">Telefono</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="font-medium hover:text-accent">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium hover:text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <SocialGlowButton
              brand="whatsapp"
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
              WhatsApp
            </SocialGlowButton>
            <SocialGlowButton
              brand="instagram"
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-[1.125rem] w-[1.125rem]" />
              Instagram
            </SocialGlowButton>
            <ButtonLink href={`mailto:${site.email}`} variant="outline">
              Scrivi una email
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
