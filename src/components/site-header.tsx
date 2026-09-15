"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/85 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 md:h-[4.75rem] md:px-6">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2.5 text-foreground"
        >
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="text-base font-semibold tracking-tight md:text-[1.05rem]">
            Premium Therapy
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Principale"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/contatti"
            className="hidden rounded-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:ring-accent/40 md:inline-flex"
          >
            Prenota
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" aria-hidden>
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeWidth="1.75"
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeWidth="1.75"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-background/95 px-4 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active ? "bg-white/5 text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contatti"
              className="mt-3 inline-flex justify-center rounded-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10"
            >
              Prenota
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
