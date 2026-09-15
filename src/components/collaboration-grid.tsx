"use client";

import { GlowTile } from "@/components/glow-tile";
import { collaborations } from "@/lib/site-data";

export function CollaborationGrid() {
  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {collaborations.map((group) => (
        <GlowTile key={group.category}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            {group.category}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlowTile>
      ))}
    </div>
  );
}
