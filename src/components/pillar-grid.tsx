"use client";

import { GlowTile } from "@/components/glow-tile";
import { pillars } from "@/lib/site-data";

export function PillarGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {pillars.map((pillar, index) => (
        <GlowTile key={pillar.title} animated={index === 0}>
          <h3 className="text-base font-semibold text-foreground">
            {pillar.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {pillar.description}
          </p>
        </GlowTile>
      ))}
    </div>
  );
}
