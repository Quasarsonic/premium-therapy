import Image from "next/image";

type SiteLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { box: "h-8 w-8", px: 32 },
  md: { box: "h-10 w-10", px: 40 },
  lg: { box: "h-14 w-14", px: 56 },
} as const;

export function SiteLogo({ size = "md", className = "" }: SiteLogoProps) {
  const { box, px } = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Premium Therapy"
      width={px}
      height={px}
      className={`shrink-0 object-contain mix-blend-lighten ${box} ${className}`}
      priority
    />
  );
}
