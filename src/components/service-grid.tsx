import type { ServiceItem } from "@/lib/site-data";

type ServiceGridProps = {
  items: ServiceItem[];
  columns?: 2 | 3;
};

export function ServiceGrid({ items, columns = 3 }: ServiceGridProps) {
  const gridClass =
    columns === 2
      ? "md:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {items.map((item) => (
        <article
          key={item.slug}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-6 transition duration-300 hover:border-accent/40 hover:bg-surface"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
            <span className="font-mono text-xs">PT</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
