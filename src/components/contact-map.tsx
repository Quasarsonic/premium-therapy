import { mapsUrl, site } from "@/lib/site-data";

export function ContactMap() {
  return (
    <div className="group relative min-h-[340px]">
      <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-accent/40 via-emerald-400/15 to-cyan-400/25 opacity-60 blur-md transition duration-500 group-hover:opacity-90" />

      <div className="relative h-full overflow-hidden rounded-2xl p-px bg-gradient-to-br from-accent/50 via-emerald-400/30 to-cyan-400/35 ring-1 ring-zinc-200/10">
        <div className="relative h-full min-h-[340px] overflow-hidden rounded-[calc(1rem-1px)] bg-white">
          <iframe
            title="Mappa studio Premium Therapy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            className="h-full min-h-[340px] w-full scale-[1.02] brightness-[1.1] saturate-[1.4] contrast-[1.05] transition duration-500 group-hover:brightness-[1.14] group-hover:saturate-[1.48]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(212,255,0,0.05),transparent_45%)]" />

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
