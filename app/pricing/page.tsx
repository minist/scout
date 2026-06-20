import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardList,
  Layers3,
  Mail,
  Megaphone,
  MousePointerClick,
  Network,
  Rocket,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "for early exploration",
    icon: ClipboardList,
    stage: "Plan",
    summary: "Basic experiment planning for founders shaping the riskiest assumption.",
    features: [
      "Core experiment recommendation",
      "Limited monthly generations",
      "Basic outreach and interview assets",
      "Success metric and decision rule"
    ],
    accent: "border-line bg-white"
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "per founder / month",
    icon: Sparkles,
    stage: "Generate",
    summary: "More generations and richer assets for running repeatable validation sprints.",
    features: [
      "Higher generation limits",
      "More asset types and variations",
      "Copy-ready exports and saved snippets",
      "Landing page, outreach, and concierge assets"
    ],
    accent: "border-teal-100 bg-teal-50"
  },
  {
    name: "Team",
    price: "$79",
    cadence: "per team / month",
    icon: Users,
    stage: "Execute",
    summary: "Collaboration, experiment memory, and premium execution integrations.",
    features: [
      "Team collaboration and shared workspace",
      "Experiment history and learning log",
      "CRM, meetings, and ads integration roadmap",
      "Founder handoff notes and decision reviews"
    ],
    accent: "border-ink bg-ink text-white"
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "for venture studios and innovation teams",
    icon: Building2,
    stage: "Automate",
    summary: "Deeper orchestration for teams turning validation into an operating system.",
    features: [
      "Premium workflow orchestration",
      "Custom execution playbooks",
      "Advanced automation and approvals",
      "Dedicated support for validation programs"
    ],
    accent: "border-amber-100 bg-amber-50"
  }
];

const integrationGroups = [
  {
    category: "Email / outreach",
    icon: Mail,
    partners: ["Gmail", "Outlook", "Mailchimp", "HubSpot"]
  },
  {
    category: "Ads",
    icon: Megaphone,
    partners: ["Google Ads", "Meta Ads"]
  },
  {
    category: "Landing pages",
    icon: MousePointerClick,
    partners: ["Webflow", "Framer", "WordPress", "Vercel"]
  },
  {
    category: "Forms / surveys",
    icon: ClipboardList,
    partners: ["Typeform", "Google Forms", "Tally"]
  },
  {
    category: "Meetings",
    icon: Users,
    partners: ["Zoom", "Google Meet", "Microsoft Teams"]
  },
  {
    category: "CRM",
    icon: Network,
    partners: ["HubSpot", "Salesforce", "Pipedrive"]
  },
  {
    category: "Analytics",
    icon: Layers3,
    partners: ["Google Analytics", "Mixpanel", "PostHog"]
  },
  {
    category: "Scheduling",
    icon: Workflow,
    partners: ["Google Calendar", "Calendly"]
  }
];

const progression = [
  ["Plan", "Pick the leanest experiment for the riskiest assumption."],
  ["Generate", "Create outreach, landing copy, scripts, and tracking assets."],
  ["Execute", "Push assets into the tools founders already use."],
  ["Automate", "Coordinate multi-step validation workflows and decisions."]
];

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const Icon = plan.icon;
  const dark = plan.name === "Team";

  return (
    <article className={`flex h-full flex-col rounded-[8px] border p-5 shadow-panel ${plan.accent}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-teal-100" : "text-teal-700"}`}>
            {plan.stage}
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-normal text-ink sm:text-6xl">
              From validation plan to execution system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Scout starts by recommending the right experiment and generating assets. The roadmap
              moves toward premium execution integrations that help founders launch, measure, and act
              through the tools they already use.
            </p>
          </div>
          <div className="rounded-[8px] border border-line bg-mist p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {progression.map(([label, body], index) => (
                <div key={label} className="rounded-lg border border-line bg-white p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-50 text-sm font-semibold text-teal-700">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-ink">{label}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal text-ink">
                Plans that follow the validation workflow
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                The MVP stays focused on planning and generation. Execution and automation are
                presented as roadmap and premium capabilities.
              </p>
            </div>
            <Link
              href="/#validate"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Try the MVP <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <Rocket className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-ink">
              Execution Integrations
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Scout is designed to become the operating layer between experiment strategy and the
              tools founders already use to launch outreach, landing pages, meetings, ads, and
              measurement. These integrations are roadmap and premium execution features, not part of
              the current MVP.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {integrationGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.category} className="rounded-[8px] border border-line bg-white p-4 shadow-panel">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-ink">{group.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.partners.map((partner) => (
                      <span
                        key={partner}
                        className="rounded-md border border-line bg-mist px-2.5 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">Start with the MVP. Grow into execution.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Today Scout helps founders choose experiments and generate assets. Next, premium plans
              will help run those experiments across the founder stack.
            </p>
          </div>
          <Link
            href="/#validate"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-sm font-semibold text-white hover:bg-teal-700"
          >
            Generate an experiment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
