import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  FlaskConical,
  GitBranch,
  Layers,
  MessagesSquare,
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
      <section className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <p className="mono-label">Validation workspace</p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[0.98] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
            Validate before you build.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-bodymuted">
            Scout tells you the cheapest experiment to run before you build — and hands you the
            assets to run it — so you validate your idea with evidence instead of optimism.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href="/signup" className="pill-primary">
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#how" className="link-underline text-sm">
              See how it works
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-muted">
            Lean Startup · The Mom Test · Continuous Discovery — turnkey.
          </p>
        </div>

        <IdeaGate />
      </section>

      {/* How it works — the loop */}
      <section id="how" className="bg-stone">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mono-label">The validation loop</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-none tracking-tighter text-ink sm:text-5xl">
              One loop, run end to end
            </h2>
            <p className="mt-5 text-lg leading-7 text-bodymuted">
              Don&apos;t validate the easy things. Find the single belief that would kill the idea if
              it&apos;s wrong, and test it as cheaply as possible. Scout makes that loop turnkey.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loop.map((node) => (
              <div key={node.step} className="rounded-card border border-line bg-canvas p-6">
                <span className="font-mono text-sm font-bold tracking-[0.08em] text-coral">
                  {node.step}
                </span>
                <h3 className="mt-3 text-xl font-medium text-ink">{node.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-bodymuted">{node.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mono-label">What&apos;s inside</p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-none tracking-tighter text-ink sm:text-5xl">
            Everything to run honest experiments
          </h2>
          <p className="mt-5 text-lg leading-7 text-bodymuted">
            The moat isn&apos;t any single asset — it&apos;s the loop plus the evidence history that
            compounds over time.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="bg-canvas p-7">
                <span className="grid h-11 w-11 place-items-center rounded-sm bg-green-pale text-green-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-medium text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-bodymuted">{feature.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Two phases */}
      <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-media border border-line bg-stone p-8">
            <span className="mono-label inline-flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-green-deep" /> Phase 1 — available now
            </span>
            <h3 className="mt-5 font-display text-3xl font-medium tracking-tighter text-ink">
              Idea validation
            </h3>
            <p className="mt-3 text-base leading-7 text-bodymuted">
              Validate that the problem and demand are real before allocating real resources. Problem
              interviews, fake-door pages, smoke-test ads, pre-sales.
            </p>
          </div>
          <div className="rounded-media bg-green-deep p-8 text-white">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-green-pale">
              <TrendingUp className="mr-2 inline h-3.5 w-3.5" /> Phase 2 — coming soon
            </span>
            <h3 className="mt-5 font-display text-3xl font-medium tracking-tighter">
              Feature validation
            </h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              Once you&apos;re building, validate each feature the same way — using the users you now
              have. Painted-door buttons, feature-flag betas, A/B variants.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="bg-stone">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mono-label">Pricing</p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-none tracking-tighter text-ink sm:text-5xl">
                Free to validate. Paid to scale.
              </h2>
            </div>
            <Link href="/pricing" className="link-underline text-sm">
              Full pricing details
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={[
                  "flex flex-col rounded-sm p-8",
                  tier.highlight ? "bg-primary text-white" : "border border-line bg-canvas"
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{tier.name}</h3>
                  {tier.highlight ? (
                    <span className="rounded-pill bg-coral px-2.5 py-0.5 font-mono text-xs uppercase tracking-[0.08em] text-primary">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className={`mt-1 text-sm ${tier.highlight ? "text-white/60" : "text-slate-500"}`}>
                  {tier.tagline}
                </p>
                <p className="mt-5">
                  <span className="font-display text-4xl font-medium tracking-tighter">{tier.price}</span>
                  <span className={`ml-1 text-sm ${tier.highlight ? "text-white/60" : "text-slate-500"}`}>
                    /mo
                  </span>
                </p>
                <div className={`my-6 h-px ${tier.highlight ? "bg-white/15" : "bg-line"}`} />
                <ul className="grid flex-1 gap-3 text-sm">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 leading-6 ${
                        tier.highlight ? "text-white/80" : "text-bodymuted"
                      }`}
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          tier.highlight ? "bg-coral" : "bg-green-deep"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={tier.highlight ? "pill-on-dark mt-7" : "pill-primary mt-7"}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start gap-8 rounded-media bg-green-deep p-10 text-white lg:flex-row lg:items-center lg:justify-between lg:p-16">
          <div>
            <h2 className="font-display text-3xl font-medium leading-none tracking-tighter sm:text-4xl">
              Stop pouring months into untested ideas.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-7 text-white/70">
              Validate the riskiest part first — with evidence, not optimism.
            </p>
          </div>
          <Link href="/signup" className="pill-on-dark shrink-0">
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
