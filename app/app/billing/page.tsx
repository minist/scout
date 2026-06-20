import Link from "next/link";
import {
  BarChart3,
  Check,
  CreditCard,
  Layers3,
  ReceiptText,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Badge, Card, PageHeader, SectionLabel, StatTile } from "@/components/ui";

const planFeatures = [
  "Full experiment plans and decision rules",
  "Saved projects and recommendation history",
  "Campaign intelligence and stronger reporting",
  "Managed setup previews for execution workflows"
];

const usageRows = [
  ["Research summaries", "18 / 100", "Interview notes, transcripts, and raw research synthesis"],
  ["Generated assets", "42 / 200", "Emails, forms, landing pages, ad copy, and CRM drafts"],
  ["Managed setup previews", "9 / 50", "Forms, outreach, landing pages, CRM, and reporting setup"],
  ["Connected workspaces", "3 / 10", "Projects using shared recommendations and asset history"]
];

const invoiceRows = [
  ["Scout Growth plan", "$99.00"],
  ["Managed AI and data orchestration", "Included"],
  ["Connector setup previews", "Included"],
  ["Consolidated vendor billing", "$0 separate bills"]
];

const billingPrinciples = [
  {
    title: "One product relationship",
    body: "Your team pays Scout instead of assembling separate transcription, AI, analytics, and campaign tools.",
    icon: ReceiptText
  },
  {
    title: "Managed services underneath",
    body: "Scout may rely on multiple providers behind the scenes, but setup and orchestration stay hidden by default.",
    icon: Layers3
  },
  {
    title: "Clear upgrade path",
    body: "Move from Preview to Starter, Growth, Business, or Scale as usage, collaboration, and integration depth grow.",
    icon: BarChart3
  }
];

export default function BillingPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <PageHeader
          eyebrow="Billing"
          title="One product, one bill"
          description="Scout centralizes billing for the research, AI, data, and execution services used inside the workspace. Customers see clear plans and usage instead of managing raw vendor accounts."
        />
        <Link
          href="/pricing"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white hover:bg-slate-800"
        >
          View public pricing
        </Link>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Current plan" value="Growth" hint="$99/month" />
        <StatTile label="Next invoice" value="$99" hint="July 20, 2026" />
        <StatTile label="Separate vendor bills" value="0" hint="Managed through Scout" />
        <StatTile label="Workspace seats" value="3" hint="2 seats available" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="bg-ink text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-100">
                Current plan
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">Growth</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                For teams connecting interviews, campaign signals, and saved AI recommendations.
              </p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10 text-teal-100">
              <Sparkles className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-6 flex items-end gap-2">
            <span className="text-4xl font-semibold">$99</span>
            <span className="pb-1 text-sm text-slate-300">per month</span>
          </div>
          <div className="mt-6 grid gap-3">
            {planFeatures.map((feature) => (
              <div key={feature} className="flex gap-3 text-sm leading-6 text-slate-100">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-teal-100">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {feature}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <SectionLabel>Usage this month</SectionLabel>
            <Badge tone="teal">Healthy</Badge>
          </div>
          <div className="grid gap-4">
            {usageRows.map(([label, value, description]) => (
              <div key={label} className="rounded-lg border border-line bg-mist p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-ink">{label}</p>
                  <p className="text-sm font-semibold text-teal-700">{value}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <CreditCard className="h-5 w-5" />
            </span>
            <div>
              <SectionLabel>Invoice preview</SectionLabel>
              <h3 className="mt-1 text-xl font-semibold text-ink">June 2026 billing summary</h3>
            </div>
          </div>
          <div className="mt-5 divide-y divide-line rounded-lg border border-line">
            {invoiceRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 px-4 py-3">
                <p className="text-sm font-medium text-slate-700">{label}</p>
                <p className="text-sm font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Demo invoice only. In production, this page would show payment method, invoices, seats,
            limits, plan changes, and procurement details.
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <SectionLabel>Trust model</SectionLabel>
              <h3 className="mt-1 text-xl font-semibold text-ink">Scout abstracts vendor complexity</h3>
            </div>
          </div>
          <div className="mt-5 grid gap-4">
            {billingPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="flex gap-3 rounded-lg border border-line bg-mist p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-teal-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{principle.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{principle.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </section>
    </div>
  );
}
