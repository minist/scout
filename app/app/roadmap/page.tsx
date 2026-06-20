"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CircleDashed, FlaskConical, Gauge } from "lucide-react";
import { Badge, Card, PageHeader, SectionLabel } from "@/components/ui";
import { loadPlan } from "@/lib/plan-store";
import type { ScoutResult } from "@/lib/scout";

const placeholderExperiments = [
  {
    order: 1,
    title: "5 problem interviews",
    tests: "Problem / Desirability — the riskiest assumption",
    method: "Mom Test-style discovery calls",
    cost: "Low effort · ~1 week",
    strength: "Strong qualitative signal",
    status: "Prescribed"
  },
  {
    order: 2,
    title: "Fake-door landing page",
    tests: "Demand — would people sign up?",
    method: "Smoke-test page + ad traffic",
    cost: "Low effort · ~3 days",
    strength: "Quantitative signal",
    status: "Queued"
  },
  {
    order: 3,
    title: "Pricing / pre-sale probe",
    tests: "Willingness to pay",
    method: "Pre-sale or letter-of-intent",
    cost: "Medium effort",
    strength: "High-confidence signal",
    status: "Queued"
  }
];

function GeneratedRoadmap({ result }: { result: ScoutResult }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionLabel>Prescribed experiment</SectionLabel>
        <Badge tone="teal">From your latest plan</Badge>
      </div>

      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-base font-semibold text-teal-700">
            1
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold text-ink">{result.experimentType}</h3>
              <Badge tone="teal">Prescribed</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{result.rationale}</p>
            <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-3">
              <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
              <p className="text-sm leading-6 text-ink">
                <span className="font-semibold">Success threshold: </span>
                {result.successMetric}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <SectionLabel>Steps to run it</SectionLabel>
        <div className="mt-4 grid gap-3">
          {result.checklist.map((item, index) => (
            <Card key={item}>
              <div className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-mist text-sm font-semibold text-ink">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-mist">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Assets to run this experiment are in the Asset Studio.
          </p>
          <Link
            href="/app/assets"
            className="pill-primary h-10"
          >
            Open Asset Studio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </section>
  );
}

function PlaceholderRoadmap() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <SectionLabel>Prescribed sequence</SectionLabel>
        <Badge tone="teal">Sample</Badge>
      </div>
      <div className="grid gap-4">
        {placeholderExperiments.map((experiment) => (
          <Card key={experiment.order}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-mist text-base font-semibold text-ink">
                {experiment.order}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-ink">{experiment.title}</h3>
                  <Badge tone={experiment.status === "Prescribed" ? "teal" : "neutral"}>
                    {experiment.status}
                  </Badge>
                </div>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-slate-500">
                  <CircleDashed className="h-4 w-4 text-amber-500" />
                  Tests: {experiment.tests}
                </p>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Method</dt>
                    <dd className="mt-1 text-slate-700">{experiment.method}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Cost / effort
                    </dt>
                    <dd className="mt-1 text-slate-700">{experiment.cost}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Evidence strength
                    </dt>
                    <dd className="mt-1 text-slate-700">{experiment.strength}</dd>
                  </div>
                </dl>
              </div>
              <button
                type="button"
                disabled
                className="pill-primary h-10 shrink-0 opacity-60"
              >
                <FlaskConical className="h-4 w-4" />
                Start
              </button>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        This is a sample sequence.{" "}
        <Link href="/app/canvas" className="font-semibold text-teal-700 hover:text-teal-800">
          Generate a plan on the Idea Canvas
        </Link>{" "}
        to prescribe the experiment for your idea.
      </p>
    </section>
  );
}

export default function RoadmapPage() {
  const [result, setResult] = useState<ScoutResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(loadPlan().result);
    setReady(true);
  }, []);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Validation Roadmap"
        title="Your experiment, riskiest first"
        description="The cheapest experiment that tests the assumption most likely to kill the idea — with the steps to run it and the bar that decides what happens next."
      />
      {ready && result ? <GeneratedRoadmap result={result} /> : <PlaceholderRoadmap />}
    </div>
  );
}
