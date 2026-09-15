"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import BorderGlow, { type BorderGlowProps } from "@/components/border-glow/BorderGlow";
import { ButtonLink } from "@/components/ui/button";

/** Per-network React Bits glow palettes (hue sat light for glowColor). */
const brandGlow = {
  whatsapp: {
    glowColor: "142 70 49",
    colors: ["#25D366", "#6ef0a6", "#128C7E"],
    backgroundColor: "#0b3b28",
  },
  instagram: {
    glowColor: "334 74 54",
    colors: ["#FFDD55", "#E1306C", "#833AB4"],
    backgroundColor: "#2a1038",
  },
} satisfies Record<string, Partial<BorderGlowProps>>;

type SocialGlowButtonProps = {
  brand: keyof typeof brandGlow;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof ButtonLink>, "variant" | "children">;

export function SocialGlowButton({
  brand,
  children,
  className = "",
  ...linkProps
}: SocialGlowButtonProps) {
  return (
    <BorderGlow
      {...brandGlow[brand]}
      ambient
      ambientDuration={16}
      glowMode="full"
      edgeSensitivity={0}
      colorSensitivityOffset={0}
      borderRadius={999}
      glowRadius={16}
      glowIntensity={1.25}
      coneSpread={30}
      fillOpacity={0.4}
      className={`inline-grid shrink-0 ${className}`}
    >
      <ButtonLink variant={brand} {...linkProps}>
        {children}
      </ButtonLink>
    </BorderGlow>
  );
}
