import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost" | "outline";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-accent text-accent-foreground hover:brightness-110 shadow-glow",
    ghost: "bg-transparent text-foreground hover:text-accent",
    outline:
      "border border-white/20 bg-white/5 text-foreground hover:border-accent/60 hover:text-accent",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "ghost" | "outline";
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-accent text-accent-foreground hover:brightness-110 shadow-glow",
    ghost: "bg-transparent text-foreground hover:text-accent",
    outline:
      "border border-white/20 bg-white/5 text-foreground hover:border-accent/60 hover:text-accent",
  };

  return (
    <Link
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
