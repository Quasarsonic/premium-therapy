"use client";

import type { ReactNode } from "react";
import BorderGlow, { type BorderGlowProps } from "@/components/border-glow/BorderGlow";

/** Premium Therapy theme defaults for React Bits BorderGlow tiles */
export const tileGlowDefaults = {
  edgeSensitivity: 16,
  glowColor: "72 100 72",
  backgroundColor: "#0f0f10",
  borderRadius: 16,
  glowRadius: 42,
  glowIntensity: 1.45,
  coneSpread: 30,
  colors: ["#d4ff00", "#34d399", "#22d3ee"],
  fillOpacity: 0.62,
  colorSensitivityOffset: 8,
  proximityExponent: 0.48,
} as const satisfies Partial<BorderGlowProps>;

type GlowTileProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  animated?: boolean;
} & Partial<BorderGlowProps>;

export function GlowTile({
  children,
  className = "h-full",
  contentClassName = "p-6",
  animated = false,
  ...overrides
}: GlowTileProps) {
  return (
    <BorderGlow
      {...tileGlowDefaults}
      {...overrides}
      animated={animated}
      className={className}
    >
      <div className={contentClassName}>{children}</div>
    </BorderGlow>
  );
}
