"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ClipboardList,
  ExternalLink,
  FileText,
  Gauge,
  Loader2,
  RotateCcw,
  Sparkles,
  Target,
  WandSparkles
} from "lucide-react";
import {
  scoutSamples,
  type ScoutInput,
  type ScoutResult,
  type ScoutSample
} from "@/lib/scout";
import { loadPendingIdea, loadPlan, savePlan } from "@/lib/plan-store";

const emptyInput: ScoutInput = {
  ideaName: "",
  targetUser: "",
  problem: "",
  riskiestAssumption: "",
  validationStage: "Problem discovery"
};

const stages = ["Problem discovery", "Solution smoke test", "Manual delivery", "Pre-launch demand"];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function defaultSetupAction(assetType: string) {
  const normalized = assetType.toLowerCase();
  if (normalized.includes("email") || normalized.includes("outreach")) {
    return {
      label: "Set up outreach sequence",
      service: "Gmail or HubSpot",
      description:
        "Create a draft email sequence, personalization fields, and reply tracking for this asset."
    };
  }
  if (normalized.includes("interview") || normalized.includes("survey") || normalized.includes("form")) {
    return {
      label: "Generate response form",
      service: "Google Forms or Tally",
      description: "Turn this asset into a structured form with score fields, notes, and follow-up tracking."
    };
  }
  if (normalized.includes("landing")) {
    return {
      label: "Create landing page draft",
      service: "Webflow, Framer, WordPress, or Vercel",
      description: "Create a draft page with CTA tracking, thank-you state, and motivation capture."
    };
  }
  if (normalized.includes("ad") || normalized.includes("campaign")) {
    return {
      label: "Prepare campaign setup",
      service: "Google Ads or Meta Ads",
      description: "Create campaign copy, audience notes, and conversion event mapping for the experiment."
    };
  }
  if (normalized.includes("sheet") || normalized.includes("tracking") || normalized.includes("scorecard")) {
    return {
      label: "Create tracking workspace",
      service: "Google Sheets",
      description: "Create a scorecard and roll up results against the success threshold."
    };
  }
  return {
    label: "Create managed setup",
    service: "Scout workspace",
    description: "Turn this generated asset into an execution-ready workflow inside Scout."
  };
}

function Field({
  label,
  value,
  placeholder,
  onChange
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-lg border border-line px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  placeholder,
  onChange
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <textarea
        value={value}
        placeholder={placeholder}
        rows={3}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-24 resize-y rounded-lg border border-line px-3 py-3 text-sm leading-6 text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
      />
    </label>
  );
}

function Results({ result }: { result: ScoutResult }) {
  const rules: Array<[string, string, string]> = [
    ["Continue", result.decisionRule.continue, "bg-teal-50 text-teal-700"],
    ["Refine", result.decisionRule.refine, "bg-amber-50 text-amber-700"],
    ["Pivot", result.decisionRule.pivot, "bg-slate-100 text-slate-700"]
  ];

  return (
    <div id="plan-results" className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="grid content-start gap-5">
        <div className="rounded-media bg-green-deep p-5 text-white sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-100">
                Recommended experiment
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{result.experimentType}</h3>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10">
              <Target className="h-6 w-6 text-teal-100" />
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-200">{result.rationale}</p>
        </div>

        <div className="rounded-[10px] border border-amber-100 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-amber-700">
              <Gauge className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
                Success threshold
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-ink">{result.successMetric}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] border border-line bg-white p-5 shadow-panel sm:p-6">
          <h3 className="text-lg font-semibold text-ink">Decision rule</h3>
          <div className="mt-4 grid gap-3">
            {rules.map(([label, body, style]) => (
              <div key={label} className="grid gap-2 border-t border-line pt-3 first:border-t-0 first:pt-0">
                <span className={cx("w-fit rounded-md px-2 py-1 text-xs font-semibold", style)}>{label}</span>
                <p className="text-sm leading-6 text-slate-700">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid content-start gap-5">
        <div className="rounded-[10px] border border-line bg-white p-5 shadow-panel sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <ClipboardList className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-ink">Checklist</h3>
          </div>
          <div className="grid gap-3">
            {result.checklist.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-lg border border-line p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-mist text-sm font-semibold text-ink">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[10px] border border-line bg-white p-5 shadow-panel sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
              <FileText className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-ink">Generated assets</h3>
          </div>
          <div className="grid gap-4">
            {result.assets.map((asset) => {
              const setup = asset.setupAction || defaultSetupAction(asset.type);
              return (
                <article key={`${asset.type}-${asset.title}`} className="rounded-lg border border-line bg-mist p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                      {asset.type}
                    </p>
                    <p className="text-sm font-semibold text-ink">{asset.title}</p>
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-slate-700">
                    {asset.content}
                  </pre>
                  <div className="mt-4 rounded-lg border border-teal-100 bg-white p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                          Managed setup preview
                        </p>
                        <h4 className="mt-2 text-sm font-semibold text-ink">{setup.label}</h4>
                        <p className="mt-1 text-sm font-semibold text-slate-600">{setup.service}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{setup.description}</p>
                      </div>
                      <button
                        type="button"
                        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-pill bg-primary px-4 text-sm font-medium text-white opacity-90"
                        aria-label={`Preview ${setup.label}`}
                      >
                        Preview setup <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      Future premium action. Scout would configure the connector and keep billing unified
                      behind the scenes.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlanGenerator() {
  const [input, setInput] = useState<ScoutInput>(emptyInput);
  const [result, setResult] = useState<ScoutResult | null>(null);
  const [activeSampleId, setActiveSampleId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hydrate from a previously generated plan, or prefill the problem from the
  // idea captured on the landing page.
  useEffect(() => {
    const saved = loadPlan();
    if (saved.input && saved.result) {
      setInput(saved.input);
      setResult(saved.result);
      return;
    }
    const idea = loadPendingIdea();
    if (idea) {
      setInput((prev) => ({ ...prev, problem: idea }));
    }
  }, []);

  const canSubmit = useMemo(
    () =>
      Boolean(
        input.ideaName.trim() &&
          input.targetUser.trim() &&
          input.problem.trim() &&
          input.riskiestAssumption.trim()
      ),
    [input]
  );

  async function generate() {
    if (!canSubmit) return;
    setIsLoading(true);
    setActiveSampleId("");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input)
      });
      const data = (await response.json()) as ScoutResult;
      setResult(data);
      savePlan(input, data);
      window.setTimeout(
        () => document.getElementById("plan-results")?.scrollIntoView({ behavior: "smooth", block: "start" }),
        80
      );
    } finally {
      setIsLoading(false);
    }
  }

  function loadSample(sample: ScoutSample) {
    setInput(sample.input);
    setResult(sample.result);
    setActiveSampleId(sample.id);
    savePlan(sample.input, sample.result);
    window.setTimeout(
      () => document.getElementById("plan-results")?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.62fr_1.38fr]">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
            <Sparkles className="h-4 w-4 text-teal-700" />
            Start from an example
          </div>
          <div className="grid gap-3">
            {scoutSamples.map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => loadSample(sample)}
                className={cx(
                  "rounded-lg border bg-white p-4 text-left transition hover:border-teal-200 hover:bg-teal-50",
                  activeSampleId === sample.id ? "border-teal-300 ring-4 ring-teal-50" : "border-line"
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ink">{sample.label}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                    {sample.result.experimentType}
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{sample.description}</span>
              </button>
            ))}
          </div>
        </div>

        <form
          className="rounded-[10px] border border-line bg-white p-5 shadow-panel sm:p-6"
          onSubmit={(event) => {
            event.preventDefault();
            generate();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Idea name"
              value={input.ideaName}
              placeholder="RoboRoute"
              onChange={(ideaName) => setInput({ ...input, ideaName })}
            />
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink">Validation stage</span>
              <select
                value={input.validationStage}
                onChange={(event) => setInput({ ...input, validationStage: event.target.value })}
                className="h-11 rounded-lg border border-line bg-white px-3 text-sm text-ink outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              >
                {stages.map((stage) => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 grid gap-4">
            <TextArea
              label="Target user / ICP"
              value={input.targetUser}
              placeholder="Operations leads at small warehouses with 20-150 employees"
              onChange={(targetUser) => setInput({ ...input, targetUser })}
            />
            <TextArea
              label="Problem being solved"
              value={input.problem}
              placeholder="Teams lose hours manually planning safe, efficient paths for mobile robots."
              onChange={(problem) => setInput({ ...input, problem })}
            />
            <TextArea
              label="Riskiest assumption / current belief"
              value={input.riskiestAssumption}
              placeholder="Ops leads will try a planning workflow before hardware integration."
              onChange={(riskiestAssumption) => setInput({ ...input, riskiestAssumption })}
            />
          </div>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => {
                setInput(emptyInput);
                setActiveSampleId("");
              }}
              className="pill-outline h-11"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button type="submit" disabled={!canSubmit || isLoading} className="pill-primary h-11">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <WandSparkles className="h-4 w-4" />}
              {result ? "Regenerate plan" : "Generate validation plan"}
            </button>
          </div>
        </form>
      </div>

      {result ? (
        <Results result={result} />
      ) : (
        <div className="grid place-items-center rounded-[10px] border border-dashed border-line bg-white px-6 py-14 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-700">
            <ArrowRight className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-ink">Your validation plan will appear here</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Fill in the fields (or load an example) and Scout will prescribe the cheapest experiment,
            generate the assets to run it, and set the success threshold — then surface them across your
            roadmap and asset studio.
          </p>
        </div>
      )}
    </div>
  );
}
