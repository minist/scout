import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ClipboardList,
  HelpCircle,
  Layers3,
  Lock,
  ReceiptText,
  Settings2,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const plans = [
  {
    name: "Starter",
    price: "$29",
    cadence: "per month",
    icon: ClipboardList,
    label: "Research foundation",
    summary: "For early teams organizing interviews, transcripts, and core insights.",
    features: [
      "Interview notes, uploads, and research workspace",
      "Managed transcription and summarization",
      "Core insight extraction and theme detection",
      "AI-generated next-step recommendations",
      "Simple reports for founder decisions"
    ],
    accent: "border-line bg-white"
  },
  {
    name: "Growth",
    price: "$99",
    cadence: "per month",
    icon: Sparkles,
    label: "Research to campaigns",
    summary: "For teams connecting customer evidence, campaign signals, and recommendations.",
    features: [
      "Everything in Starter",
      "Campaign and ad performance analysis",
      "Managed data sync from connected work tools",
      "Recommendation history and experiment memory",
      "Exportable reports and copy-ready assets"
    ],
    accent: "border-teal-100 bg-teal-50"
  },
  {
    name: "Business",
    price: "$249",
    cadence: "per month",
    icon: Users,
    label: "Team workflows",
    summary: "For teams turning research and campaign learning into a shared operating rhythm.",
    features: [
      "Everything in Growth",
      "Team workspace, roles, and shared decisions",
      "Advanced reporting across research and growth",
      "Managed workflow orchestration by Scout",
      "Priority support and onboarding guidance"
    ],
    accent: "border-ink bg-ink text-white"
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "for larger organizations",
    icon: Building2,
    label: "Managed automation",
    summary: "For organizations needing deeper analytics, higher usage, and custom controls.",
    features: [
      "Everything in Business",
      "Higher usage and custom reporting requirements",
      "Enterprise controls and approval workflows",
      "Custom provider preferences when required",
      "Dedicated support for research and growth programs"
    ],
    accent: "border-amber-100 bg-amber-50"
  }
];

const included = [
  ["Interview transcription and summarization", "Turn calls, notes, and raw research into clean source material."],
  ["Insight extraction and theme detection", "Find repeated pains, buyer language, objections, and opportunity patterns."],
  ["Campaign and ad performance analysis", "Connect growth signals to what customers actually said."],
  ["Managed data connections", "Scout configures the underlying sync services needed for your workspace."],
  ["AI-generated recommendations", "Get next experiments, campaign angles, and decision rules from one place."],
  ["Unified workspace and reporting", "Keep evidence, recommendations, assets, and outcomes together."],
  ["Managed service configuration", "Scout handles setup and orchestration behind the scenes."],
  ["Consolidated billing", "One Scout plan instead of separate vendor contracts and scattered usage bills."]
];

const managedLayers = [
  {
    title: "Research intake",
    icon: ClipboardList,
    body: "Interviews, notes, transcripts, survey responses, and customer evidence flow into one workspace."
  },
  {
    title: "AI analysis",
    icon: Sparkles,
    body: "Scout manages the AI services needed for summaries, themes, recommendations, and next actions."
  },
  {
    title: "Growth signals",
    icon: BarChart3,
    body: "Campaign, ad, and conversion data can be analyzed alongside customer research."
  },
  {
    title: "Workflow orchestration",
    icon: Workflow,
    body: "Scout coordinates the hidden services, data movement, and automation required to run the workflow."
  }
];

const advancedOptions = [
  "Custom provider preferences",
  "Enterprise data controls",
  "Specialized workflow routing",
  "Procurement and security requirements",
  "Custom reporting and usage limits",
  "Dedicated onboarding for complex teams"
];

const faqs = [
  {
    question: "Do I need to choose my own AI vendors?",
    answer:
      "No. Scout automatically configures the services needed to power transcription, analysis, recommendations, and reporting. Most teams never need to choose or manage vendors directly."
  },
  {
    question: "Does Scout use third-party services behind the scenes?",
    answer:
      "Yes. Scout may use trusted AI, data, and infrastructure services behind the scenes. That complexity stays mostly hidden so your team gets one unified product experience."
  },
  {
    question: "Why is Scout billing unified?",
    answer:
      "Teams should not have to manage separate bills for transcription, AI analysis, data syncing, and campaign intelligence. Scout consolidates usage into one plan and one billing relationship."
  },
  {
    question: "Can I connect my own providers later?",
    answer:
      "Advanced and enterprise teams can request custom provider preferences, data controls, or integration requirements without making the default experience more complex."
  },
  {
    question: "What happens as my usage grows?",
    answer:
      "Scout scales the managed services behind the scenes and helps your team move into the right plan as research volume, campaign data, team size, or automation needs increase."
  }
];

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const Icon = plan.icon;
  const dark = plan.name === "Business";

  return (
    <article className={`flex h-full flex-col rounded-[8px] border p-5 shadow-panel ${plan.accent}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-teal-100" : "text-teal-700"}`}>
            {plan.label}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal">{plan.name}</h2>
        </div>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${dark ? "bg-white/10 text-teal-100" : "bg-white text-teal-700"}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-5">
        <span className="text-4xl font-semibold tracking-normal">{plan.price}</span>
        <p className={`mt-1 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>{plan.cadence}</p>
      </div>
      <p className={`mt-5 text-sm leading-6 ${dark ? "text-slate-200" : "text-slate-700"}`}>
        {plan.summary}
      </p>
      <div className={`my-5 h-px ${dark ? "bg-white/15" : "bg-line"}`} />
      <ul className="grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6">
            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-white/10 text-teal-100" : "bg-teal-50 text-teal-700"}`}>
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className={dark ? "text-slate-100" : "text-slate-700"}>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-normal text-ink sm:text-6xl">
              Turn customer research into better campaigns, without managing the stack.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Scout brings together transcription, research analysis, campaign insight, and AI
              recommendations in one product. We automatically configure the services underneath, so
              you get a simpler workflow and one consolidated billing experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#validate"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Start with Scout <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#billing"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold text-ink hover:bg-mist"
              >
                How billing works
              </a>
            </div>
          </div>

          <div className="rounded-[8px] border border-line bg-mist p-4">
            <div className="rounded-lg border border-line bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Layers3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                    Product layer
                  </p>
                  <h2 className="text-xl font-semibold text-ink">Scout manages the stack.</h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Your team buys one workspace for research, insight, campaigns, and decisions. Scout
                handles service setup, orchestration, usage, and billing behind the scenes.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["No vendor setup", "One workspace", "Managed AI services", "One bill"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg border border-line bg-mist px-3 py-2 text-sm font-semibold text-slate-700">
                    <Check className="h-4 w-4 text-teal-700" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal text-ink">
                Simple plans for turning research into growth
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Start with organized research and core insights. Scale into campaign analysis,
                recommendations, reporting, and managed automation as your team grows.
              </p>
            </div>
            <p className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-slate-700">
              Scout is the product layer. The vendors are infrastructure.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-normal text-ink">
            Everything you need to move from research to action
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Scout sells value and outcomes, not infrastructure. The workspace combines research,
            growth signals, recommendations, and reporting without asking teams to assemble the stack.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {included.map(([title, body]) => (
            <article key={title} className="rounded-[8px] border border-line bg-white p-4 shadow-panel">
              <div className="mb-3 flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="font-semibold leading-6 text-ink">{title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="billing" className="border-y border-line bg-mist">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-16">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-white text-teal-700">
              <ReceiptText className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-ink">One product, one bill</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Scout may use multiple AI and data services behind the scenes for tasks like
              transcription, analysis, recommendation generation, and data processing. Instead of
              asking your team to integrate, configure, and manage each vendor separately, Scout
              handles setup, orchestration, monitoring, and billing in one place.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {managedLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <article key={layer.title} className="rounded-[8px] border border-line bg-white p-5 shadow-panel">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-ink">{layer.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{layer.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <Settings2 className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-ink">
              Advanced integrations without default complexity
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For most teams, Scout works out of the box. Advanced teams can configure provider
              preferences, enterprise controls, or specialized workflows when needed, without making
              the default product experience feel like a vendor marketplace.
            </p>
          </div>

          <div className="rounded-[8px] border border-line bg-white p-5 shadow-panel">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-amber-700">
                <Lock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
                  Optional controls
                </p>
                <h3 className="text-xl font-semibold text-ink">Available when the team needs them</h3>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {advancedOptions.map((option) => (
                <div key={option} className="rounded-lg border border-line bg-mist px-3 py-3 text-sm font-semibold text-slate-700">
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-white text-teal-700">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-ink">Pricing FAQ</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Clear answers for teams that want one managed research and growth workspace, not
              another stack to configure.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[8px] border border-line bg-white p-5 shadow-panel">
                <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">One workspace for research, insight, campaigns, and decisions.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              You buy Scout. Scout manages the stack, the orchestration, and the billing behind the
              scenes.
            </p>
          </div>
          <Link
            href="/#validate"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-sm font-semibold text-white hover:bg-teal-700"
          >
            Try the Scout MVP <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
