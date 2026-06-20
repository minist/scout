import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MarketingShell } from "@/components/marketing-shell";

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    tagline: "Idea-stage individuals",
    summary: "The acquisition hook — validate your first idea end to end.",
    features: [
      "1 active idea",
      "The core validation loop",
      "Riskiest-assumption detection",
      "Limited asset generations",
      "Basic decision logging"
    ],
    cta: "Start free",
    highlight: false
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "per month",
    tagline: "Solo founders & indie hackers",
    summary: "Everything you need to validate idea after idea.",
    features: [
      "Unlimited ideas",
      "Full asset studio",
      "Interview pipeline (transcribe, tag, extract)",
      "Full decision log",
      "Export validation reports"
    ],
    cta: "Start Pro",
    highlight: true
  },
  {
    name: "Team",
    price: "$49",
    cadence: "per month",
    tagline: "Teams building a live product",
    summary: "Retention & expansion — validate every feature continuously.",
    features: [
      "Everything in Pro",
      "Phase 2 feature validation",
      "Collaboration & roles",
      "Integrations (analytics, flags, email)",
      "Shared evidence repository"
    ],
    cta: "Start Team",
    highlight: false
  }
];

const faqs = [
  {
    question: "Is the Free plan really free?",
    answer:
      "Yes. One active idea, the full validation loop, and basic logging — no credit card. It's the on-ramp to the whole product."
  },
  {
    question: "What's the difference between Pro and Team?",
    answer:
      "Pro is built for validating ideas before you build (Phase 1). Team adds Phase 2 — validating each feature continuously with your real users — plus collaboration and integrations."
  },
  {
    question: "Do I need integrations to get value?",
    answer:
      "No. Scout generates the assets and you run experiments manually, logging results back in. Real integrations (email send, landing-page hosting, analytics) are a fast-follow."
  },
  {
    question: "Can I export my evidence?",
    answer:
      "Pro and Team can export validation reports and investor- or team-ready evidence summaries. Your decision log is yours."
  }
];

export default function PricingPage() {
  return (
    <MarketingShell>
      <section className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-20 text-center sm:px-8">
        <p className="mono-label">Pricing</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-medium leading-none tracking-tightest text-ink sm:text-6xl">
          Free to validate. Paid to scale.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-bodymuted">
          Free idea-validation is the funnel; paid feature-validation is retention and expansion — a
          clean land-and-expand ladder.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "flex flex-col rounded-sm p-8",
                tier.highlight ? "bg-primary text-white" : "border border-line bg-stone"
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium">{tier.name}</h2>
                {tier.highlight ? (
                  <span className="rounded-pill bg-coral px-2.5 py-0.5 font-mono text-xs uppercase tracking-[0.08em] text-primary">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className={`mt-1 text-sm ${tier.highlight ? "text-white/60" : "text-slate-500"}`}>
                {tier.tagline}
              </p>
              <p className="mt-6">
                <span className="font-display text-5xl font-medium tracking-tighter">{tier.price}</span>
                <span className={`ml-1 text-sm ${tier.highlight ? "text-white/60" : "text-slate-500"}`}>
                  {tier.cadence}
                </span>
              </p>
              <p className={`mt-4 text-sm leading-6 ${tier.highlight ? "text-white/70" : "text-bodymuted"}`}>
                {tier.summary}
              </p>
              <div className={`my-6 h-px ${tier.highlight ? "bg-white/15" : "bg-line"}`} />
              <ul className="grid flex-1 gap-3 text-sm">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex gap-3 leading-6 ${tier.highlight ? "text-white/80" : "text-bodymuted"}`}
                  >
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        tier.highlight ? "bg-white/10 text-coral" : "bg-green-pale text-green-deep"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={tier.highlight ? "pill-on-dark mt-7" : "pill-primary mt-7"}
              >
                {tier.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="font-display text-4xl font-medium leading-none tracking-tighter text-ink">
            Pricing FAQ
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-card border border-line bg-canvas p-6">
                <h3 className="text-lg font-medium text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-bodymuted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
