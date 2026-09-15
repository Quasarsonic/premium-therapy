import Image from "next/image";

type SiteLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /**
   * `default` has black centre spheres, which `mix-blend-lighten` drops into a
   * dark background; `light` is the same mark with white spheres, so all of it
   * survives on dark surfaces.
   */
  variant?: "default" | "light";
};

const variants = {
  default: { src: "/logo.png", ratio: 500 / 301 },
  light: { src: "/logo-light.png", ratio: 490 / 300 },
} as const;

/** Rendered heights; the width follows the variant's aspect ratio. */
const sizes = {
  sm: { box: "h-8 w-auto max-w-[2.5rem]", h: 19 },
  md: { box: "h-10 w-auto max-w-[3.25rem]", h: 24 },
  lg: { box: "h-14 w-auto max-w-[4.5rem]", h: 34 },
  xl: { box: "h-24 w-auto max-w-[9rem] md:h-28 md:max-w-[10.5rem]", h: 101 },
} as const;

export function SiteLogo({
  size = "md",
  className = "",
  variant = "default",
}: SiteLogoProps) {
  const { box, h } = sizes[size];
  const { src, ratio } = variants[variant];

  return (
    <Image
      src={src}
      alt="Premium Therapy"
      width={Math.round(h * ratio)}
      height={h}
      className={`shrink-0 object-contain mix-blend-lighten ${box} ${className}`}
      priority
    />
  );
}
