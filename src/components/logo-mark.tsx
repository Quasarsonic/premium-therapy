type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-8 w-8" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M16 2L28 9v14l-12 7L4 23V9L16 2z"
        className="fill-accent/20 stroke-accent"
        strokeWidth="1.5"
      />
      <path
        d="M16 10v12M11 13.5l10 5M21 13.5l-10 5"
        className="stroke-accent"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
