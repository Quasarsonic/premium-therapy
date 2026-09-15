import { site } from "@/lib/site-data";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

export function ContactMap() {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-accent/40 via-emerald-400/15 to-cyan-400/25 opacity-60 blur-md transition duration-500 group-hover:opacity-90" />

      <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-accent/40 via-white/25 to-white/5">
        <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-white">
          <iframe
            title="Mappa studio Premium Therapy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            className="min-h-[340px] w-full scale-[1.02] brightness-[1.08] saturate-[1.35] contrast-[1.06] transition duration-500 group-hover:brightness-[1.12] group-hover:saturate-[1.45]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(212,255,0,0.06),transparent_40%)]" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Studio attivo
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 rounded-full border border-zinc-200 bg-white/95 px-4 py-2 text-xs font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition hover:border-accent/50 hover:text-zinc-950"
          >
            Apri in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
