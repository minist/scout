"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Sparkles, WandSparkles, X } from "lucide-react";

const examples = [
  "An app that helps dog owners find last-minute pet sitters",
  "A tool that turns sales calls into follow-up emails automatically",
  "A marketplace for renting out idle 3D printers"
];

export function IdeaGate() {
  const router = useRouter();
  const [idea, setIdea] = useState("");
  const [open, setOpen] = useState(false);

  function onGenerate() {
    if (!idea.trim()) return;
    setOpen(true);
  }

  function onContinue() {
    // Front-end demo only: persist the idea and enter the workspace.
    try {
      window.localStorage.setItem("scout:pendingIdea", idea.trim());
    } catch {
      /* ignore storage errors */
    }
    router.push("/app/canvas");
  }

  return (
    <div className="rounded-[12px] border border-line bg-white p-5 shadow-panel sm:p-6">
      <div className="flex items-center gap-2 text-teal-700">
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.12em]">Try it now</span>
      </div>
      <label htmlFor="idea" className="mt-3 block text-base font-semibold text-ink">
        What do you want to validate?
      </label>
      <textarea
        id="idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        rows={3}
        placeholder="Describe your idea or the feature you're considering…"
        className="mt-3 min-h-24 w-full resize-y rounded-lg border border-line px-3 py-3 text-sm leading-6 text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => setIdea(example)}
            className="rounded-full border border-line bg-mist px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-teal-200 hover:text-ink"
          >
            {example}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onGenerate}
        disabled={!idea.trim()}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-sm font-semibold text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        <WandSparkles className="h-4 w-4" />
        Generate my validation plan
      </button>
      <p className="mt-2 text-center text-xs text-slate-400">
        Free to start · no credit card required
      </p>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-[12px] border border-line bg-white p-6 shadow-panel">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Create your free account</h3>
                  <p className="text-sm text-slate-500">Sign up to generate and save your plan.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-mist hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 rounded-lg border border-line bg-mist p-3 text-sm text-slate-600">
              <span className="font-semibold text-ink">Your idea: </span>
              {idea.trim()}
            </div>

            <div className="mt-5 grid gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="h-11 rounded-lg border border-line px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              />
              <input
                type="password"
                placeholder="Create a password"
                className="h-11 rounded-lg border border-line px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              />
              <button
                type="button"
                onClick={onContinue}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Continue to Scout <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Demo only — no account is actually created.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
