"use client";

import { GlowTile } from "@/components/glow-tile";
import { recognitions } from "@/lib/site-data";

export function RecognitionGrid() {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {recognitions.map((item) => (
        <GlowTile key={item.badge} contentClassName="p-8">
          <div className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 font-mono text-sm font-bold text-accent">
            {item.badge}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </GlowTile>
      ))}
    </div>
  );
}
