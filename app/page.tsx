"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  Gauge,
  Loader2,
  MessageSquareText,
  RotateCcw,
  Sparkles,
  Target,
  WandSparkles
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  roboticsSampleInput,
  roboticsSampleResult,
  type ScoutInput,
  type ScoutResult
} from "@/lib/scout";

const emptyInput: ScoutInput = {
  ideaName: "",
  targetUser: "",
  problem: "",
  riskiestAssumption: "",
  validationStage: "Problem discovery"
};

const stages = ["Problem discovery", "Solution smoke test", "Manual delivery", "Pre-launch demand"];

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function MiniResultPreview() {
  return (
    <div className="rounded-[8px] border border-line bg-white p-4 shadow-panel">
      <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            Recommended experiment
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink">Problem interview outreach</h3>
        </div>
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
          <MessageSquareText className="h-5 w-5" />
        </div>
      </div>
      <div className="grid gap-3 py-4">
        {["Generate research assets", "Manage services behind the scenes", "Turn results into next actions"].map(
          (item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-teal-50 text-teal-700">
                <Check className="h-3.5 w-3.5" />
              </span>
              {item}
            </div>
          )
        )}
      </div>
      <div className="rounded-lg border border-amber-100 bg-amber-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
          Success threshold
        </p>
        <p className="mt-1 text-sm font-medium leading-6 text-ink">
          5 high-pain interviews and 3 prototype review commitments in 10 business days.
        </p>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <section id="home" className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24 lg:pt-16">
      <div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
          Validate the riskiest part of your startup before you build.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Scout is a unified AI-powered research and growth workspace. It turns raw customer
          evidence into the right experiment, execution-ready assets, managed workflows, and clear
          next actions.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#validate"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Build my experiment <WandSparkles className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-line px-5 text-sm font-semibold text-ink hover:bg-mist"
          >
            View sample <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <MiniResultPreview />
    </section>
  );
}

function ValidationForm({
  input,
  setInput,
  onSubmit,
  onLoadSample,
  isLoading
}: {
  input: ScoutInput;
  setInput: (input: ScoutInput) => void;
  onSubmit: () => void;
  onLoadSample: () => void;
  isLoading: boolean;
}) {
  const canSubmit = useMemo(
    () =>
      input.ideaName.trim() &&
      input.targetUser.trim() &&
      input.problem.trim() &&
      input.riskiestAssumption.trim(),
    [input]
  );

  return (
    <section id="validate" className="border-y border-line bg-mist">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal text-ink">Tell Scout what needs proving.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The best experiment depends on the assumption that could break the company. Keep it
            specific and Scout will generate the runbook, assets, and next-step threshold without
            making you manage the underlying stack.
          </p>
          <button
            type="button"
            onClick={onLoadSample}
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-semibold text-ink hover:bg-teal-50"
          >
            <Sparkles className="h-4 w-4 text-teal-700" />
            Load robotics sample
          </button>
        </div>

        <form
          className="rounded-[8px] border border-line bg-white p-5 shadow-panel sm:p-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (canSubmit) onSubmit();
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
              onClick={() => setInput(emptyInput)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-slate-700 hover:bg-mist"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              type="submit"
              disabled={!canSubmit || isLoading}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-sm font-semibold text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
              Generate experiment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
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
  return (
    <section id="results" className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal text-ink">Experiment runbook</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Scout prioritizes the fastest test that can change your decision, then turns it into
            copy, checklists, thresholds, and managed execution workflows as the product grows.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid content-start gap-5">
          <div className="rounded-[8px] border border-line bg-ink p-5 text-white shadow-panel sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-100">
                  Experiment recommendation
                </p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight">{result.experimentType}</h3>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10">
                <Target className="h-6 w-6 text-teal-100" />
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-200">{result.rationale}</p>
          </div>

          <div className="rounded-[8px] border border-amber-100 bg-amber-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-amber-700">
                <Gauge className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
                  Success threshold
                </p>
                <p className="mt-2 text-lg font-semibold leading-7 text-ink">{result.successMetric}</p>
              </div>
            </div>
          </div>

          <DecisionRule result={result} />
        </div>

        <div className="grid gap-5">
          <div className="rounded-[8px] border border-line bg-white p-5 shadow-panel sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                <ClipboardList className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-ink">Checklist</h3>
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

          <div className="rounded-[8px] border border-line bg-white p-5 shadow-panel sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-ink">Generated assets</h3>
            </div>
            <div className="grid gap-4">
              {result.assets.map((asset) => (
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionRule({ result }: { result: ScoutResult }) {
  const rows = [
    ["Continue", result.decisionRule.continue, "bg-teal-50 text-teal-700"],
    ["Refine", result.decisionRule.refine, "bg-amber-50 text-amber-700"],
    ["Pivot", result.decisionRule.pivot, "bg-slate-100 text-slate-700"]
  ];

  return (
    <div className="rounded-[8px] border border-line bg-white p-5 shadow-panel sm:p-6">
      <h3 className="text-xl font-semibold text-ink">Decision rule</h3>
      <div className="mt-4 grid gap-3">
        {rows.map(([label, body, style]) => (
          <div key={label} className="grid gap-2 border-t border-line pt-3 first:border-t-0 first:pt-0">
            <span className={classNames("w-fit rounded-md px-2 py-1 text-xs font-semibold", style)}>
              {label}
            </span>
            <p className="text-sm leading-6 text-slate-700">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [input, setInput] = useState<ScoutInput>(roboticsSampleInput);
  const [result, setResult] = useState<ScoutResult>(roboticsSampleResult);
  const [isLoading, setIsLoading] = useState(false);

  async function generate() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });
      const data = (await response.json()) as ScoutResult;
      setResult(data);
      window.setTimeout(() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" }), 80);
    } catch {
      setResult(roboticsSampleResult);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SiteShell>
      <Landing />
      <ValidationForm
        input={input}
        setInput={setInput}
        onSubmit={generate}
        onLoadSample={() => {
          setInput(roboticsSampleInput);
          setResult(roboticsSampleResult);
        }}
        isLoading={isLoading}
      />
      <Results result={result} />
    </SiteShell>
  );
}
