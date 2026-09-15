"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { navLinks } from "@/lib/site-data";

const SCROLL_THRESHOLD = 56;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 z-50 flex justify-center px-3 transition-[top,padding] duration-500 ease-out sm:px-4 ${
        compact ? "top-3 md:top-4" : "top-4 md:top-6"
      }`}
    >
      <div className="relative w-full max-w-6xl">
        <div
          className={`pointer-events-auto relative mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            compact
              ? "h-14 max-w-xl rounded-full border border-white/15 bg-background/45 px-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:max-w-lg md:h-[3.25rem] md:max-w-2xl md:px-4"
              : "h-16 w-full max-w-6xl rounded-2xl border border-white/10 bg-background/20 px-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)] backdrop-blur-md md:h-[4.5rem] md:rounded-3xl md:px-6"
          }`}
        >
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-2.5 text-foreground"
          >
            <SiteLogo
              size={compact ? "sm" : "md"}
              className="transition-all duration-500"
            />
            <span
              className={`overflow-hidden whitespace-nowrap font-semibold tracking-tight transition-all duration-500 ${
                compact
                  ? "max-w-0 opacity-0 md:max-w-[9rem] md:opacity-100 md:text-sm"
                  : "max-w-[12rem] text-base opacity-100 md:max-w-none md:text-[1.05rem]"
              }`}
            >
              Premium Therapy
            </span>
          </Link>

          <nav
            className={`absolute left-1/2 hidden -translate-x-1/2 items-center md:flex ${
              compact ? "gap-5" : "gap-8"
            }`}
            aria-label="Principale"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    compact ? "text-[0.8125rem]" : "text-sm"
                  } ${
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

          <div className="relative z-10 flex shrink-0 items-center gap-2">
            <Link
              href="/contatti"
              className={`hidden items-center justify-center rounded-full bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-950/90 font-medium text-white ring-1 ring-white/10 transition-all duration-500 hover:ring-accent/40 md:inline-flex ${
                compact
                  ? "px-4 py-2 text-xs"
                  : "px-5 py-2.5 text-sm"
              }`}
            >
              Prenota
            </Link>

            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all md:hidden ${
                compact ? "h-9 w-9" : "h-10 w-10"
              }`}
              aria-expanded={open}
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 stroke-current"
                aria-hidden
              >
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
          <div className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/15 bg-background/55 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-3 text-base font-medium ${
                      active ? "bg-white/5 text-foreground" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contatti"
                className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10"
              >
                Prenota
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
