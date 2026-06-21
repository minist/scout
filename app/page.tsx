import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardList,
  Gauge,
  Lightbulb,
  Mail,
  Route,
  Sparkles,
  Target,
  WandSparkles
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { roboticsSampleInput, roboticsSampleResult } from "@/lib/scout";

const heroImage = "/scout-hero-facade.png";

const inputFields = [
  { label: "Idea", value: roboticsSampleInput.ideaName },
  { label: "Product", value: roboticsSampleInput.ideaDescription },
  { label: "Stage", value: roboticsSampleInput.validationStage },
  { label: "ICP", value: roboticsSampleInput.targetUser },
  { label: "Problem", value: roboticsSampleInput.problem },
  { label: "Riskiest belief", value: roboticsSampleInput.riskiestAssumption }
];

const sampleAsset = roboticsSampleResult.assets[0];

const steps = [
  {
    id: "01",
    icon: Lightbulb,
    title: "Name the belief",
    body: "Scout starts with the assumption that could make the whole idea fail."
  },
  {
    id: "02",
    icon: WandSparkles,
    title: "Generate the runbook",
    body: "It prescribes one experiment, creates assets, and shows the success threshold."
  },
  {
    id: "03",
    icon: Route,
    title: "Turn results into action",
    body: "Continue, refine, or pivot with a decision rule grounded in evidence."
  }
];

const proofPoints = ["Experiment logic", "Execution assets", "Success threshold", "Next decision"];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-6 sm:px-8 lg:pb-12">
        <div className="relative min-h-[560px] overflow-hidden rounded-[18px] border border-line bg-ink shadow-panel sm:min-h-[620px]">
          <Image
            src={heroImage}
            alt="Founders reviewing customer research and validation notes in a professional workspace"
            fill
            priority
            className="object-cover brightness-[0.74]"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161611]/92 via-[#161611]/64 to-[#161611]/18" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#161611]/82 to-transparent" />

          <div className="relative z-10 flex min-h-[560px] max-w-3xl flex-col justify-center px-6 py-14 sm:min-h-[620px] sm:px-10 lg:px-14">
            <h1 className="max-w-3xl font-display text-4xl font-normal leading-[1.04] tracking-normal text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[72px]">
              Validate the riskiest part before you build.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              Scout turns a founder&apos;s belief into a testable experiment, generates the assets to run it,
              and explains the threshold that decides what happens next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#246532] px-6 text-sm font-semibold text-white transition hover:bg-[#174d27] hover:scale-[0.98]"
              >
                Open Scout <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#how"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                See the workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 pb-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point} className="bg-[#fffaf1] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-600">{point}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[10px] border border-line bg-[#fffaf1] p-4 shadow-panel">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Analyst-grade validation runbook</p>
              <p className="mt-1 text-sm leading-6 text-stone-600">
                Recommendation, assets, threshold, and reasoning in one founder workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[#fffaf1]">
        <div className="mx-auto grid w-full max-w-7xl gap-px border-x border-line bg-line">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="grid gap-5 bg-[#fffaf1] px-5 py-8 sm:grid-cols-[0.2fr_0.8fr] sm:px-8">
                <p className="font-display text-5xl font-medium tracking-normal text-ink">{step.id}</p>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-normal text-ink">{step.title}</h2>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">{step.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how" className="mx-auto grid w-full max-w-7xl items-start gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="lg:sticky lg:top-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">Step 01</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-ink sm:text-4xl">
            Tell Scout what needs proving.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            Start with the idea, audience, problem, and riskiest belief. Scout treats that context like a
            research brief, not a generic prompt.
          </p>
        </div>

        <div className="rounded-[10px] border border-line bg-[#fffaf1] p-5 shadow-panel sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                <Target className="h-5 w-5" />
              </span>
              <p className="font-semibold text-ink">Founder context</p>
            </div>
            <span className="rounded-md border border-line bg-mist px-2.5 py-1 text-xs font-semibold text-stone-600">
              Sample
            </span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
            {inputFields.map((field) => (
              <div key={field.label} className="grid gap-2 bg-[#fffaf1] px-4 py-3 sm:grid-cols-[0.28fr_0.72fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                  {field.label}
                </p>
                <p className="text-sm leading-6 text-stone-700">{field.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="border-y border-line bg-[#f4f0e7]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="grid gap-4">
            <div className="rounded-[10px] border border-line bg-[#fffaf1] p-5 shadow-panel">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                Recommended experiment
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium capitalize leading-tight text-ink">
                {roboticsSampleResult.experimentType}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[10px] border border-line bg-[#fffaf1] p-5 shadow-panel">
                <Gauge className="h-5 w-5 text-teal-700" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                  Success threshold
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-700">{roboticsSampleResult.successMetric}</p>
              </div>
              {sampleAsset ? (
                <div className="rounded-[10px] border border-line bg-[#fffaf1] p-5 shadow-panel">
                  <Mail className="h-5 w-5 text-teal-700" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                    Generated asset
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">{sampleAsset.title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {sampleAsset.setupAction?.label ?? "Create managed setup"}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">Step 02</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-ink sm:text-4xl">
              Get the experiment and the assets to execute it.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Scout does more than recommend. It creates outreach, scripts, landing copy, and managed setup
              previews that point toward the tools founders already use.
            </p>
            <Link
              href="/app/canvas"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-stone-800 hover:scale-[0.98]"
            >
              Generate a plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="loop" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">Step 03</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-ink sm:text-4xl">
              Make every next decision sharper.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Each validation becomes reusable context. Scout helps founders keep research, assets, evidence,
              and decisions connected as the company learns.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Evidence memory", "Every assumption and outcome stays attached to the idea."],
              ["Decision rule", "Continue, refine, or pivot with a visible threshold."],
              ["Execution layer", "Future integrations turn assets into running experiments."],
              ["Founder focus", "Less stack assembly, more learning from customers."]
            ].map(([title, body]) => (
              <div key={title} className="rounded-[10px] border border-line bg-[#fffaf1] p-5 shadow-panel">
                <ClipboardList className="h-5 w-5 text-teal-700" />
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="flex flex-col items-start gap-6 rounded-[10px] border border-line bg-[#fffaf1] p-8 shadow-panel sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-normal text-ink sm:text-3xl">
              Stop building on guesses.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-stone-600">
              Run the smallest credible test, then let the result tell you what to do next.
            </p>
          </div>
          <Link
            href="/app"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-stone-800 hover:scale-[0.98]"
          >
            Open Scout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
