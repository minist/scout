import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  ExternalLink,
  Gauge,
  Hammer,
  Lightbulb,
  Mail,
  RefreshCw,
  Sparkles,
  Target,
  WandSparkles
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { roboticsSampleInput, roboticsSampleResult } from "@/lib/scout";

const inputFields = [
  { label: "Idea name", value: roboticsSampleInput.ideaName },
  { label: "Validation stage", value: roboticsSampleInput.validationStage },
  { label: "Target user / ICP", value: roboticsSampleInput.targetUser },
  { label: "Problem being solved", value: roboticsSampleInput.problem },
  { label: "Riskiest assumption", value: roboticsSampleInput.riskiestAssumption }
];

const sampleAsset = roboticsSampleResult.assets[0];

const offers = [
  {
    icon: Target,
    title: "The right experiment",
    body: "Scout picks the single cheapest experiment that actually tests your riskiest assumption — not the easy one."
  },
  {
    icon: WandSparkles,
    title: "The assets to run it",
    body: "Outreach, interview scripts, landing copy, and ads — generated and ready, each with a managed setup to put it live."
  },
  {
    icon: Gauge,
    title: "The bar to clear",
    body: "A measurable success threshold and a clear continue / refine / pivot rule, so the result actually changes your decision."
  }
];

const journey = [
  {
    icon: Lightbulb,
    tag: "Starting idea",
    title: "Validate the core idea",
    body: "Prove the problem and demand are real before you write a line of code.",
    status: "Validated"
  },
  {
    icon: Hammer,
    tag: "Build",
    title: "Start building with confidence",
    body: "You're building on evidence, not optimism — and the riskiest unknowns are already answered.",
    status: "In progress"
  },
  {
    icon: RefreshCw,
    tag: "Every feature after",
    title: "Validate each new feature",
    body: "Every new direction is researched with the full context of everything you've already learned.",
    status: "Ongoing"
  }
];

export default function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 pt-10 text-center sm:px-8 lg:pb-24 lg:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-slate-600">
          <Sparkles className="h-3.5 w-3.5 text-teal-700" />
          AI-powered validation workspace
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
          Validate the riskiest part of your idea before you build.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Tell Scout what you&apos;re unsure about. It turns the belief that could break your idea into
          the cheapest experiment that proves it, hands you the assets to run it, and remembers
          everything — for this idea and every one that comes after.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/app"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Open Scout <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#how"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-line px-6 text-sm font-semibold text-ink hover:bg-mist"
          >
            See how it works
          </Link>
        </div>
      </section>

      {/* Section 1 — Tell Scout what needs proving */}
      <section id="how" className="border-y border-line bg-mist">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Step 01
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
              Tell Scout what needs proving.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Start with what you&apos;re unsure about. Describe your idea, who it&apos;s for, and the
              riskiest assumption — the belief that would sink the whole thing if you&apos;re wrong.
              That&apos;s all Scout needs to get to work.
            </p>
            <ul className="mt-6 grid gap-3">
              {["What you're building", "Who it's for", "The assumption that could break it"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Visual: the input fields */}
          <div className="rounded-[12px] border border-line bg-white p-5 shadow-panel sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink">
              <Target className="h-4 w-4 text-teal-700" />
              Tell Scout about your idea
            </div>
            <div className="grid gap-4">
              {inputFields.map((field) => (
                <div key={field.label}>
                  <p className="mb-1.5 text-sm font-semibold text-ink">{field.label}</p>
                  <div className="rounded-lg border border-line bg-mist px-3 py-2.5 text-sm leading-6 text-slate-600">
                    {field.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-teal-600 text-sm font-semibold text-white">
              <WandSparkles className="h-4 w-4" />
              Generate validation plan
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The output: experiment + assets + implementing it */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Visual: the generated plan */}
          <div className="order-2 grid gap-4 lg:order-1">
            <div className="rounded-[12px] border border-line bg-ink p-5 text-white shadow-panel sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-100">
                    Recommended experiment
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold capitalize leading-tight">
                    {roboticsSampleResult.experimentType}
                  </h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10">
                  <Target className="h-5 w-5 text-teal-100" />
                </span>
              </div>
            </div>

            <div className="rounded-[12px] border border-amber-100 bg-amber-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-amber-700">
                  <Gauge className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
                    Success threshold
                  </p>
                  <p className="mt-1 text-sm font-medium leading-6 text-ink">
                    {roboticsSampleResult.successMetric}
                  </p>
                </div>
              </div>
            </div>

            {sampleAsset ? (
              <div className="rounded-[12px] border border-line bg-white p-4 shadow-panel sm:p-5">
                <div className="flex items-center gap-2 text-teal-700">
                  <Mail className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.12em]">{sampleAsset.type}</p>
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">{sampleAsset.title}</p>
                <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-teal-100 bg-teal-50/60 px-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">
                      {sampleAsset.setupAction?.label ?? "Create managed setup"}
                    </p>
                    <p className="truncate text-xs text-slate-600">
                      {sampleAsset.setupAction?.service ?? "Scout workspace"}
                    </p>
                  </div>
                  <span className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-ink px-3 text-xs font-semibold text-white">
                    Set up <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Step 02
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
              Get the experiment — and everything to run it.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Scout turns your idea into a complete validation plan. Then it helps you implement:
              managed setup turns each generated asset into an execution-ready workflow, so you go from
              plan to running experiment without juggling tools.
            </p>
            <div className="mt-6 grid gap-4">
              {offers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <div key={offer.title} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{offer.title}</h3>
                      <p className="mt-0.5 text-sm leading-6 text-slate-600">{offer.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Continuous validation with retained context */}
      <section id="loop" className="border-y border-line bg-mist">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Step 03
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
              Validate every idea — not just the first one.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Once you&apos;ve validated and started building, Scout doesn&apos;t stop being useful. Come
              back to validate each new feature or direction — and every new question is researched with
              the retained context of everything you&apos;ve already learned. Your evidence compounds,
              so each validation makes the next one sharper.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-[12px] border border-line bg-white p-6 shadow-panel"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-slate-500">
                      {step.status}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                    {step.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.body}</p>
                  {index < journey.length - 1 ? (
                    <span className="absolute -right-2.5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-slate-400 lg:grid">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 rounded-[12px] border border-dashed border-line bg-white px-5 py-5 text-center">
            <ClipboardList className="h-5 w-5 shrink-0 text-teal-700" />
            <p className="text-sm leading-6 text-slate-600">
              Every assumption, experiment, and decision is saved — a compounding source of truth that
              makes Scout smarter about your business with each idea you validate.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6 rounded-[16px] bg-ink p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal sm:text-3xl">
              Stop building on guesses.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
              Validate the riskiest part first — with evidence, not optimism — and keep validating every
              idea that follows.
            </p>
          </div>
          <Link
            href="/app"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-ink hover:bg-slate-100"
          >
            Open Scout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
