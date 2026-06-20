import type { LucideIcon } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="mono-label">{eyebrow}</p>
      <h1 className="mt-3 font-display text-3xl font-medium leading-none tracking-tighter text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-bodymuted">{description}</p>
    </header>
  );
}

export function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-card border border-line bg-canvas p-5 ${className}`}>{children}</div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mono-label">{children}</p>;
}

export function StatTile({
  label,
  value,
  hint
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Card>
      <p className="mono-label">{label}</p>
      <p className="mt-3 font-display text-4xl font-medium tracking-tighter text-ink">{value}</p>
      {hint ? <p className="mt-1 text-sm text-slate-500">{hint}</p> : null}
    </Card>
  );
}

export function Placeholder({
  icon: Icon,
  title,
  description
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="grid place-items-center rounded-media border border-dashed border-line bg-canvas px-6 py-14 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-media bg-green-pale text-green-deep">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
      <span className="mono-label mt-5 rounded-pill border border-line px-3 py-1">Coming soon</span>
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "teal" | "amber";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-stone text-bodymuted",
    teal: "bg-green-pale text-green-deep",
    amber: "bg-coral-pale text-amber-700"
  };
  return (
    <span className={`rounded-pill px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>
  );
}
