import Link from "next/link";
import { MapPinIcon } from "@/components/icons/social";
import { SiteLogo } from "@/components/site-logo";
import { mapsUrl, navLinks, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Link href="/" className="inline-flex flex-col items-start gap-4">
            {/*
              The logo's centre spheres are solid black, so they disappear
              against the dark surface. A soft white halo behind gives them
              something to read against (and the blend has to be off, or
              lighten would drop them into the background again).
            */}
            <span className="relative inline-flex items-center justify-center">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.28),rgba(255,255,255,0.10)_45%,transparent_72%)] blur-lg"
              />
              <SiteLogo size="xl" blend={false} className="relative" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Premium Therapy
            </span>
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Navigazione
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/90 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Contatti
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                @premiumtherapy.ch
              </a>
            </li>
            <li>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 text-muted transition-colors hover:text-accent"
              >
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-accent" />
                <span className="underline-offset-4 group-hover:underline">
                  {site.studioAddress}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
