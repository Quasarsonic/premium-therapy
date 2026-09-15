import { GlowTile } from "@/components/glow-tile";
import { mapsUrl, site } from "@/lib/site-data";

export function ContactMap() {
  return (
    <GlowTile
      className="group"
      contentClassName="relative flex-1 bg-white"
      ambient
      ambientDuration={18}
      borderRadius={18}
      glowRadius={14}
      glowIntensity={1.05}
      fillOpacity={0.4}
    >
      <iframe
        title="Mappa studio Premium Therapy"
        src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
        className="h-full min-h-[340px] w-full scale-[1.02] brightness-[1.08] saturate-[1.35] contrast-[1.06] transition duration-500 group-hover:brightness-[1.12] group-hover:saturate-[1.45]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(212,255,0,0.06),transparent_40%)]" />

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 rounded-full border border-zinc-200 bg-white/95 px-4 py-2 text-xs font-semibold text-zinc-900 shadow-sm backdrop-blur-md transition hover:border-accent/50 hover:text-zinc-950"
      >
        Apri in Google Maps →
      </a>
    </GlowTile>
  );
}
