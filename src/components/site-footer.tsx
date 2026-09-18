import Link from "next/link";
import { InstagramGradientIcon, MapPinIcon } from "@/components/icons/social";
import { SiteLogo } from "@/components/site-logo";
import { mapsUrl, navLinks, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Link href="/" className="inline-flex">
            <SiteLogo size="xl" variant="light" />
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
            <li className="pt-1">
              <a
                href={site.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex transition-transform duration-300 hover:scale-110"
              >
                <InstagramGradientIcon className="h-6 w-6" />
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
