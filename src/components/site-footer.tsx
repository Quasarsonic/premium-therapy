import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { navLinks, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Link href="/" className="inline-flex flex-col items-start gap-4">
            <SiteLogo size="xl" />
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
            <li className="text-muted">{site.studioAddress}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
