import { ButtonLink } from "@/components/ui/button";
import { hero, site } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden pt-24 md:items-center md:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.92) 65%, rgb(5,5,5) 100%), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-0">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {site.tagline}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          {hero.subtitle}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {hero.description}
        </p>
        <p className="mt-6 max-w-xl text-sm font-medium text-accent/90">
          {hero.cta}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contatti" className="px-8 py-4 text-base">
            Prenota una seduta
          </ButtonLink>
          <ButtonLink href="/servizi" variant="outline" className="px-8 py-4 text-base">
            Scopri i servizi
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
