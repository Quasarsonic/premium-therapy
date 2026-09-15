import { pillars } from "@/lib/site-data";

export function PillarGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className="rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-sm"
        >
          <h3 className="text-base font-semibold text-foreground">
            {pillar.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  );
}
