"use client";

import type { ReactNode } from "react";
import BorderGlow from "@/components/border-glow/BorderGlow";
import { tileGlowDefaults } from "@/components/glow-tile";

type BrandWordGlowProps = {
  children: ReactNode;
  className?: string;
};

export function BrandWordGlow({ children, className = "" }: BrandWordGlowProps) {
  return (
    <BorderGlow
      {...tileGlowDefaults}
      glowMode="full"
      edgeSensitivity={0}
      colorSensitivityOffset={0}
      borderRadius={999}
      glowRadius={22}
      glowIntensity={1.2}
      fillOpacity={0.35}
      backgroundColor="rgba(5, 5, 5, 0.35)"
      className={`inline-grid shrink-0 ${className}`}
    >
      <div className="px-3 py-1.5">{children}</div>
    </BorderGlow>
  );
}
