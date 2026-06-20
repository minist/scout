"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Copy,
  ExternalLink,
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
  scoutSamples,
  type ScoutSample,
  type ScoutInput,
  type ScoutResult
} from "@/lib/scout";

type SetupPreview = {
  assetTitle: string;
  assetType: string;
  setup: ReturnType<typeof defaultSetupAction>;
  content: string;
};

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
      description:
        "Turn this asset into a structured form with score fields, notes, and follow-up tracking."
    };
  }

  if (normalized.includes("landing")) {
    return {
      label: "Create landing page draft",
      service: "Webflow, Framer, WordPress, or Vercel",
      description:
        "Create a draft page with CTA tracking, thank-you state, and motivation capture."
    };
  }

  if (normalized.includes("ad") || normalized.includes("campaign")) {
    return {
      label: "Prepare campaign setup",
      service: "Google Ads or Meta Ads",
      description:
        "Create campaign copy, audience notes, and conversion event mapping for the experiment."
    };
  }

  if (normalized.includes("sheet") || normalized.includes("tracking") || normalized.includes("scorecard")) {
    return {
      label: "Create tracking workspace",
      service: "Google Sheets",
      description:
        "Create a scorecard and roll up results against the success threshold."
    };
  }

  return {
    label: "Create managed setup",
    service: "Scout workspace",
    description:
      "Turn this generated asset into an execution-ready workflow inside Scout."
  };
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
  activeSampleId,
  isLoading
}: {
  input: ScoutInput;
  setInput: (input: ScoutInput) => void;
  onSubmit: () => void;
  onLoadSample: (sample: ScoutSample) => void;
  activeSampleId: string;
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
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
              <Sparkles className="h-4 w-4 text-teal-700" />
              Demo examples
            </div>
            <div className="grid gap-3">
              {scoutSamples.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => onLoadSample(sample)}
                  className={classNames(
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
                  <span className="mt-2 block text-sm leading-6 text-slate-600">
                    {sample.description}
                  </span>
                </button>
              ))}
            </div>
          </div>
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
  const [setupPreview, setSetupPreview] = useState<SetupPreview | null>(null);

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
                          <h4 className="mt-2 text-base font-semibold text-ink">{setup.label}</h4>
                          <p className="mt-1 text-sm font-semibold text-slate-600">{setup.service}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{setup.description}</p>
                        </div>
                        <button
                          type="button"
                          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white opacity-90"
                          aria-label={`Preview ${setup.label}`}
                          onClick={() =>
                            setSetupPreview({
                              assetTitle: asset.title,
                              assetType: asset.type,
                              setup,
                              content: asset.content
                            })
                          }
                        >
                          Preview setup <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        Future premium action. Scout would configure the connector and keep billing
                        unified behind the scenes.
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {setupPreview ? (
        <SetupPreviewModal preview={setupPreview} onClose={() => setSetupPreview(null)} />
      ) : null}
    </section>
  );
}

function SetupPreviewModal({
  preview,
  onClose
}: {
  preview: SetupPreview;
  onClose: () => void;
}) {
  const isFormSetup =
    preview.assetType.toLowerCase().includes("interview") ||
    preview.assetType.toLowerCase().includes("form") ||
    preview.setup.service.toLowerCase().includes("forms") ||
    preview.setup.service.toLowerCase().includes("tally");
  const questions = extractQuestions(preview.content);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/50 px-4 py-6">
      <div className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[8px] border border-line bg-white shadow-panel">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-white p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
              Execution preview
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-normal text-ink">
              {isFormSetup ? "Google Forms draft ready" : `${preview.setup.label} ready`}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Scout converts the generated asset into a managed setup preview. In the paid execution
              layer, Scout would create and configure this through the connected tool.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-line px-3 text-sm font-semibold text-slate-700 hover:bg-mist"
          >
            Close
          </button>
        </div>

        <div className="grid gap-5 p-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="grid content-start gap-4">
            {[
              ["Connector", preview.setup.service],
              ["Source asset", preview.assetTitle],
              ["Status", "Demo draft generated"],
              ["Billing", "Managed by Scout"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-line bg-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink">{value}</p>
              </div>
            ))}
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
                Demo note
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                This does not call Google APIs yet. It shows the premium execution flow Scout would
                automate after integrations are connected.
              </p>
            </div>
          </div>

          {isFormSetup ? (
            <GoogleFormPreview questions={questions} />
          ) : (
            <GenericSetupPreview preview={preview} />
          )}
        </div>
      </div>
    </div>
  );
}

function GoogleFormPreview({ questions }: { questions: string[] }) {
  const visibleQuestions = questions.length ? questions : [
    "What problem are you trying to solve today?",
    "How painful is this workflow on a 1-5 scale?",
    "Would you agree to a follow-up prototype review?"
  ];

  return (
    <div className="rounded-[8px] border border-line bg-mist p-4">
      <div className="rounded-lg border border-line bg-white">
        <div className="border-t-8 border-teal-600 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            Google Forms preview
          </p>
          <h4 className="mt-2 text-2xl font-semibold tracking-normal text-ink">
            Problem interview response form
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Created from the Scout interview guide with structured fields for pain, context, and
            follow-up commitment.
          </p>
        </div>
        <div className="grid gap-3 border-t border-line p-5">
          {visibleQuestions.slice(0, 8).map((question, index) => (
            <div key={question} className="rounded-lg border border-line bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-6 text-ink">{question}</p>
                <span className="rounded-md bg-mist px-2 py-1 text-xs font-semibold text-slate-600">
                  {index === 4 ? "Scale" : "Short answer"}
                </span>
              </div>
              <div className="mt-4 h-9 rounded-md border border-dashed border-slate-300 bg-mist" />
            </div>
          ))}
          <div className="rounded-lg border border-teal-100 bg-teal-50 p-4">
            <p className="text-sm font-semibold text-ink">Added by Scout</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Pain score, ICP fit, follow-up commitment, and notes fields are included so responses
              can roll up into the success threshold.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-line p-5 sm:flex-row">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white"
          >
            Open demo form <ExternalLink className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-ink hover:bg-mist"
          >
            Copy form outline <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function GenericSetupPreview({ preview }: { preview: SetupPreview }) {
  return (
    <div className="rounded-[8px] border border-line bg-mist p-4">
      <div className="rounded-lg border border-line bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
          Managed setup draft
        </p>
        <h4 className="mt-2 text-2xl font-semibold tracking-normal text-ink">{preview.setup.label}</h4>
        <p className="mt-3 text-sm leading-6 text-slate-600">{preview.setup.description}</p>
        <div className="mt-5 grid gap-3">
          {["Create draft asset", "Map tracking fields", "Prepare connector settings", "Keep billing under Scout"].map((step, index) => (
            <div key={step} className="flex gap-3 rounded-lg border border-line bg-mist p-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-sm font-semibold text-ink">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function extractQuestions(content: string) {
  return content
    .split("\n")
    .map((line) => line.trim().replace(/^\d+\.\s*/, ""))
    .filter((line) => line.endsWith("?"));
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
  const [activeSampleId, setActiveSampleId] = useState(scoutSamples[0].id);
  const [isLoading, setIsLoading] = useState(false);

  async function generate() {
    setIsLoading(true);
    setActiveSampleId("");
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
        onLoadSample={(sample) => {
          setInput(sample.input);
          setResult(sample.result);
          setActiveSampleId(sample.id);
          window.setTimeout(() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" }), 80);
        }}
        activeSampleId={activeSampleId}
        isLoading={isLoading}
      />
      <Results result={result} />
    </SiteShell>
  );
}
