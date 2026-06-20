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
    name: "Preview",
    price: "Free",
    cadence: "limited product preview",
    icon: Layers3,
    label: "Try the promise",
    bestFor: "Curious visitors and teams evaluating Scout",
    summary:
      "See how Scout thinks before committing. Preview shows the product direction without replacing the paid workflow.",
    features: [
      "Access to the demo/sample experience",
      "Limited workflow preview",
      "Partial output visibility",
      "No saved projects, exports, integrations, or team workspace"
    ],
    accent: "border-line bg-white",
    cta: "Preview Scout",
    featured: false,
    muted: true
  },
  {
    name: "Starter",
    price: "$29",
    cadence: "per month",
    icon: ClipboardList,
    label: "Early validation",
    bestFor: "Solo founders and early operators",
    summary:
      "The first true usable version of Scout for turning scattered customer conversations into structured insight.",
    features: [
      "Full experiment plans and decision rules",
      "Transcript summaries and research synthesis",
      "Core pain point, theme, and objection extraction",
      "Saved projects for early validation work",
      "Basic exports for founder decisions"
    ],
    accent: "border-line bg-white",
    cta: "Start validating",
    featured: false,
    muted: false
  },
  {
    name: "Growth",
    price: "$99",
    cadence: "per month",
    icon: Sparkles,
    label: "Most teams start here",
    bestFor: "Startup growth teams and product marketers",
    summary:
      "Where Scout becomes a business tool: repeated research, campaign intelligence, and saved recommendations that compound.",
    features: [
      "Everything in Starter",
      "Higher usage and multiple projects",
      "Campaign, ad, and search performance analysis",
      "Cross-interview and cross-campaign recommendations",
      "Recommendation history and saved intelligence",
      "Stronger reporting and copy-ready assets"
    ],
    accent: "border-ink bg-ink text-white",
    cta: "Choose Growth",
    featured: true,
    muted: false
  },
  {
    name: "Business",
    price: "$249",
    cadence: "per month",
    icon: Users,
    label: "Team operations",
    bestFor: "Teams, agencies, and cross-functional operators",
    summary:
      "Turn Scout into a shared operating layer for research, growth, product, and strategy decisions.",
    features: [
      "Everything in Growth",
      "Shared workspaces and team collaboration",
      "Role-based access and stronger integration controls",
      "Advanced reporting across research and growth",
      "Higher limits for ongoing team workflows",
      "Priority support and onboarding guidance"
    ],
    accent: "border-teal-100 bg-teal-50",
    cta: "Upgrade the team",
    featured: false,
    muted: false
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "for larger organizations",
    icon: Building2,
    label: "Custom environment",
    bestFor: "Larger organizations and specialized teams",
    summary:
      "For customers who want Scout tailored to their operating environment, data requirements, and workflow scale.",
    features: [
      "Everything in Business",
      "Custom onboarding and tailored usage structures",
      "Higher-volume research and reporting needs",
      "Enterprise controls, security, and procurement support",
      "Custom provider preferences when required",
      "Dedicated support for research and growth programs"
    ],
    accent: "border-amber-100 bg-amber-50",
    cta: "Talk to us",
    featured: false,
    muted: false
  }
];

const included = [
  ["Research synthesis", "Turn interviews, notes, transcripts, surveys, and raw evidence into structured source material."],
  ["Theme and objection extraction", "Find repeated pains, buyer language, objections, triggers, and opportunity patterns."],
  ["Campaign intelligence", "Connect what customers say to campaign, ad, search, and conversion performance."],
  ["Experiment recommendations", "Generate next experiments, messaging angles, success thresholds, and decision rules."],
  ["Saved business memory", "Keep projects, insights, recommendations, assets, and outcomes in one compounding system."],
  ["Managed setup", "Scout configures the underlying AI and data services required for each workflow."],
  ["Unified reporting", "Share decisions and evidence without assembling separate docs, exports, and dashboards."],
  ["Consolidated billing", "One Scout relationship instead of separate tools, vendors, and usage bills."]
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

const connectorCategories = [
  {
    category: "Email / outreach",
    tools: ["Gmail", "Outlook", "Mailchimp", "HubSpot"]
  },
  {
    category: "Ads",
    tools: ["Google Ads", "Meta Ads"]
  },
  {
    category: "Landing pages",
    tools: ["Webflow", "Framer", "WordPress", "Vercel"]
  },
  {
    category: "Forms / surveys",
    tools: ["Typeform", "Google Forms", "Tally"]
  },
  {
    category: "Meetings",
    tools: ["Zoom", "Google Meet", "Microsoft Teams"]
  },
  {
    category: "CRM",
    tools: ["HubSpot", "Salesforce", "Pipedrive"]
  },
  {
    category: "Analytics",
    tools: ["Google Analytics", "Mixpanel", "PostHog"]
  },
  {
    category: "Scheduling",
    tools: ["Google Calendar", "Calendly"]
  }
];

const faqs = [
  {
    question: "Is Preview a full free plan?",
    answer:
      "No. Preview is a limited product preview so new users can understand Scout's value. Paid plans unlock the real ongoing workflow: saved projects, full outputs, exports, integrations, collaboration, and repeated use."
  },
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
    question: "Why would I upgrade from Starter to Growth?",
    answer:
      "Starter helps an individual validate early ideas. Growth is for teams using Scout continuously across interviews, campaigns, messaging decisions, recommendation history, and stronger reporting."
  },
  {
    question: "What happens as my usage grows?",
    answer:
      "Scout scales the managed services behind the scenes and helps your team move into the right plan as research volume, campaign data, team size, or automation needs increase."
  }
];

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const Icon = plan.icon;
  const dark = plan.featured;

  return (
    <article className={`relative flex h-full flex-col rounded-[8px] border p-5 shadow-panel ${plan.accent}`}>
      {plan.featured ? (
        <div className="absolute right-4 top-4 rounded-md bg-teal-500 px-2.5 py-1 text-xs font-semibold text-white">
          Recommended
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-teal-100" : plan.muted ? "text-slate-500" : "text-teal-700"}`}>
            {plan.label}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal">{plan.name}</h2>
        </div>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${dark ? "bg-white/10 text-teal-100" : plan.muted ? "bg-mist text-slate-500" : "bg-white text-teal-700"}`}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-5">
        <span className="text-4xl font-semibold tracking-normal">{plan.price}</span>
        <p className={`mt-1 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>{plan.cadence}</p>
      </div>
      <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-teal-100" : plan.muted ? "text-slate-500" : "text-teal-700"}`}>
        Best for: {plan.bestFor}
      </p>
      <p className={`mt-4 text-sm leading-6 ${dark ? "text-slate-200" : "text-slate-700"}`}>
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
      <Link
        href={plan.name === "Scale" ? "#billing" : "/#validate"}
        className={`mt-6 inline-flex h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold ${
          dark
            ? "bg-teal-500 text-white hover:bg-teal-400"
            : plan.muted
              ? "border border-line bg-white text-slate-700 hover:bg-mist"
              : "bg-ink text-white hover:bg-slate-800"
        }`}
      >
        {plan.cta}
      </Link>
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
              Pricing for turning research into compounding growth intelligence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Scout is a premium AI-powered workspace for research synthesis, campaign intelligence,
              and decision support. Preview the product for free, then unlock the ongoing system that
              saves projects, connects signals, and turns insight into action.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#validate"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Preview Scout <ArrowRight className="h-4 w-4" />
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
                    Managed product layer
                  </p>
                  <h2 className="text-xl font-semibold text-ink">One workspace. No vendor maze.</h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Scout may use multiple services underneath for transcription, analysis, campaign
                intelligence, and AI processing. Your team experiences one product, one workflow, and
                one billing relationship.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Managed setup", "Saved intelligence", "Workflow depth", "One bill"].map((item) => (
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
                Preview is for trying. Starter is for solo validation. Growth is for active execution.
                Business is for team operations. Scale is for tailored environments.
              </p>
            </div>
            <p className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-slate-700">
              Featured: Growth, the best fit for active teams.
            </p>
          </div>
          <div className="mb-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <PlanCard plan={plans[0]} />
            <div className="rounded-[8px] border border-line bg-white p-5 shadow-panel">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700">
                <Layers3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-normal text-ink">
                Preview shows the promise. Paid plans unlock the system.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The free preview helps teams understand Scout judgment and output quality. The
                paid product adds persistence, full outputs, exports, integrations, collaboration,
                and repeated workflows that compound over time.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Starter: solo validation", "Growth: active execution", "Business: team operations", "Scale: tailored environments"].map((item) => (
                  <div key={item} className="rounded-lg border border-line bg-mist px-3 py-3 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.slice(1).map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-normal text-ink">
            What paid plans unlock
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Scout is not selling raw AI calls. Paid plans unlock organized insight, research
            synthesis, campaign intelligence, decision support, and saved business memory that gets
            more useful over time.
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
              transcription, analysis, campaign intelligence, recommendation generation, and data
              processing. Instead of asking your team to integrate, configure, and manage each
              provider separately, Scout handles orchestration and gives you one streamlined product
              experience and one billing relationship.
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
              Optional integrations without default complexity
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Scout should never feel like a marketplace of disconnected vendors. For most teams, it
              works as one managed product. Advanced teams can request deeper controls, provider
              preferences, or specialized workflows without making the default experience complex.
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

        <div className="mt-8 rounded-[8px] border border-line bg-mist p-4">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                Supported connector categories
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-normal text-ink">
                Tools can connect underneath. Scout keeps the product unified.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              These are roadmap and premium execution connectors. Customers should see them as
              managed capabilities, not setup work they must assemble by hand.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {connectorCategories.map((group) => (
              <article key={group.category} className="rounded-lg border border-line bg-white p-4">
                <h4 className="font-semibold text-ink">{group.category}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-line bg-mist px-2.5 py-1.5 text-xs font-semibold text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
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
              Clear answers for teams evaluating Scout as a unified research and growth intelligence
              workspace, not another stack to configure.
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
            <h2 className="text-2xl font-semibold tracking-normal">Scout is the product layer. The vendors are infrastructure.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              You buy organized insight, campaign intelligence, decision support, and saved business
              value. Scout manages the stack, orchestration, and billing behind the scenes.
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
