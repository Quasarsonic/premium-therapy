import Image from "next/image";

type SiteLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /**
   * `mix-blend-lighten` drops the logo's black centre spheres into the dark
   * background. Turn it off where the logo sits on its own backdrop.
   */
  blend?: boolean;
};

const sizes = {
  sm: { box: "h-8 w-auto max-w-[2.5rem]", px: 32, py: 19 },
  md: { box: "h-10 w-auto max-w-[3.25rem]", px: 40, py: 24 },
  lg: { box: "h-14 w-auto max-w-[4.5rem]", px: 56, py: 34 },
  xl: { box: "h-24 w-auto max-w-[9rem] md:h-28 md:max-w-[10.5rem]", px: 168, py: 101 },
} as const;

export function SiteLogo({
  size = "md",
  className = "",
  blend = true,
}: SiteLogoProps) {
  const { box, px, py } = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Premium Therapy"
      width={px}
      height={py}
      className={`shrink-0 object-contain ${blend ? "mix-blend-lighten" : ""} ${box} ${className}`}
      priority
    />
  );
}
