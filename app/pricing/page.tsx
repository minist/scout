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
      <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Pricing</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Free to validate. Paid to scale.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Free idea-validation is the funnel; paid feature-validation is retention and expansion — a
          clean land-and-expand ladder.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "flex flex-col rounded-[12px] border p-6",
                tier.highlight
                  ? "border-teal-200 bg-teal-50/40 shadow-panel"
                  : "border-line bg-white shadow-panel"
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-ink">{tier.name}</h2>
                {tier.highlight ? (
                  <span className="rounded-md bg-teal-600 px-2 py-0.5 text-xs font-semibold text-white">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-slate-500">{tier.tagline}</p>
              <p className="mt-5">
                <span className="text-4xl font-semibold tracking-tight text-ink">{tier.price}</span>
                <span className="ml-1 text-sm text-slate-500">{tier.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{tier.summary}</p>
              <div className="my-5 h-px bg-line" />
              <ul className="grid flex-1 gap-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-6 text-slate-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={[
                  "mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold",
                  tier.highlight
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "border border-line text-ink hover:bg-mist"
                ].join(" ")}
              >
                {tier.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">Pricing FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[10px] border border-line bg-white p-5">
                <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
