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
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
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
    <div className={`rounded-[10px] border border-line bg-[#1B1D22] p-5 shadow-panel ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{children}</p>
  );
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
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-normal text-ink">{value}</p>
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
    <div className="grid place-items-center rounded-[10px] border border-dashed border-line bg-white px-6 py-14 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-700">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
      <span className="mt-5 rounded-md border border-line bg-mist px-3 py-1 text-xs font-semibold text-slate-500">
        Coming soon
      </span>
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
    neutral: "bg-slate-100 text-slate-600",
    teal: "bg-teal-50 text-teal-700",
    amber: "bg-amber-50 text-amber-700"
  };
  return (
    <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>
  );
}
