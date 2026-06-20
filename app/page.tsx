import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  FlaskConical,
  GitBranch,
  Layers,
  MessagesSquare,
  Target,
  TrendingUp
} from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";
import { IdeaGate } from "@/components/idea-gate";

const loop = [
  { step: "01", title: "Capture", body: "Drop in your idea or the feature you're weighing." },
  { step: "02", title: "Decompose", body: "Scout breaks it into the assumptions it depends on." },
  { step: "03", title: "Rank", body: "Risk × uncertainty surfaces the single riskiest belief." },
  { step: "04", title: "Prescribe", body: "Get the cheapest experiment that actually tests it." },
  { step: "05", title: "Generate", body: "The asset bundle to run it lands ready to use." },
  { step: "06", title: "Decide", body: "Commit the bar, capture evidence, log the decision." }
];

const features = [
  {
    icon: GitBranch,
    title: "Assumption modeling",
    body: "Decompose any idea into problem, demand, willingness-to-pay, reachability, and feasibility — then rank by risk."
  },
  {
    icon: FlaskConical,
    title: "Experiment prescription",
    body: "Scout recommends the cheapest valid experiment for the riskiest assumption. The core intelligence."
  },
  {
    icon: FileText,
    title: "Asset generation",
    body: "Outreach emails, who-to-ask lists, Mom Test scripts, fake ads, landing-page copy — generated to run today."
  },
  {
    icon: MessagesSquare,
    title: "Interview pipeline",
    body: "Upload conversations, get transcripts and summaries, and promote tagged quotes straight to evidence."
  },
  {
    icon: ClipboardList,
    title: "Decision log",
    body: "Every assumption, its evidence, and each persevere / pivot / kill decision — your cumulative source of truth."
  },
  {
    icon: TrendingUp,
    title: "Continuous discovery",
    body: "Once you're building, run the same loop on every feature using the users you now have. (Phase 2)"
  }
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    tagline: "Idea-stage individuals",
    features: ["1 active idea", "The core validation loop", "Limited asset generations", "Basic decision logging"],
    cta: "Start free",
    highlight: false
  },
  {
    name: "Pro",
    price: "$19",
    tagline: "Solo founders & indie hackers",
    features: ["Unlimited ideas", "Full asset studio", "Interview pipeline", "Full decision log + export"],
    cta: "Start Pro",
    highlight: true
  },
  {
    name: "Team",
    price: "$49",
    tagline: "Teams building a live product",
    features: ["Phase 2 feature validation", "Collaboration & roles", "Integrations", "Shared evidence repository"],
    cta: "Start Team",
    highlight: false
  }
];

export default function LandingPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-slate-600">
            <Target className="h-3.5 w-3.5 text-teal-700" />
            Validation workspace
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Validate before you build.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Scout tells you the cheapest experiment to run before you build — and hands you the
            assets to run it — so you validate your idea with evidence instead of optimism.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#how"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold text-ink hover:bg-mist"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Borrowed from Lean Startup, The Mom Test &amp; Continuous Discovery — turnkey.
          </p>
        </div>

        <IdeaGate />
      </section>

      {/* How it works — the loop */}
      <section id="how" className="border-y border-line bg-mist">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              The validation loop
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One loop, run end to end
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Don&apos;t validate the easy things. Find the single belief that would kill the idea if
              it&apos;s wrong, and test it as cheaply as possible. Scout makes that loop turnkey.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loop.map((node) => (
              <div key={node.step} className="rounded-[10px] border border-line bg-white p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                  {node.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{node.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{node.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            What&apos;s inside
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything to run honest experiments
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The moat isn&apos;t any single asset — it&apos;s the loop plus the evidence history that
            compounds over time.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-[10px] border border-line bg-white p-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{feature.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Two phases */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div className="rounded-[12px] border border-line bg-white p-6">
            <span className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
              <Layers className="h-3.5 w-3.5" /> Phase 1 — available now
            </span>
            <h3 className="mt-4 text-xl font-semibold text-ink">Idea validation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Validate that the problem and demand are real before allocating real resources.
              Problem interviews, fake-door pages, smoke-test ads, pre-sales.
            </p>
          </div>
          <div className="rounded-[12px] border border-line bg-ink p-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-teal-100">
              <TrendingUp className="h-3.5 w-3.5" /> Phase 2 — coming soon
            </span>
            <h3 className="mt-4 text-xl font-semibold">Feature validation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Once you&apos;re building, validate each feature the same way — using the users you now
              have. Painted-door buttons, feature-flag betas, A/B variants.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Pricing</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Free to validate. Paid to scale.
            </h2>
          </div>
          <Link href="/pricing" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
            Full pricing details →
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "flex flex-col rounded-[12px] border p-6",
                tier.highlight ? "border-teal-200 bg-teal-50/40 shadow-panel" : "border-line bg-white"
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
                {tier.highlight ? (
                  <span className="rounded-md bg-teal-600 px-2 py-0.5 text-xs font-semibold text-white">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-slate-500">{tier.tagline}</p>
              <p className="mt-4">
                <span className="text-3xl font-semibold tracking-tight text-ink">{tier.price}</span>
                <span className="text-sm text-slate-500">/mo</span>
              </p>
              <ul className="mt-5 grid flex-1 gap-2.5 text-sm text-slate-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={[
                  "mt-6 inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold",
                  tier.highlight
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "border border-line text-ink hover:bg-mist"
                ].join(" ")}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-5 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Stop pouring months into untested ideas.
            </h2>
            <p className="mt-2 max-w-xl text-base leading-7 text-slate-600">
              Validate the riskiest part first — with evidence, not optimism.
            </p>
          </div>
          <Link
            href="/signup"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
