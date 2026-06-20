"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, WandSparkles, X } from "lucide-react";

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
    <div className="rounded-media border border-line bg-canvas p-6 sm:p-8">
      <p className="mono-label">Try it now</p>
      <label htmlFor="idea" className="mt-3 block text-xl font-medium tracking-tight text-ink">
        What do you want to validate?
      </label>
      <textarea
        id="idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        rows={3}
        placeholder="Describe your idea or the feature you're considering…"
        className="mt-4 min-h-24 w-full resize-y rounded-sm border border-line px-3 py-3 text-sm leading-6 text-ink outline-none placeholder:text-muted focus:border-focus focus:ring-4 focus:ring-paleblue"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => setIdea(example)}
            className="rounded-pill border border-line bg-mist px-3 py-1.5 text-xs text-bodymuted transition-colors hover:border-ink hover:text-ink"
          >
            {example}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onGenerate}
        disabled={!idea.trim()}
        className="pill-primary mt-5 w-full"
      >
        <WandSparkles className="h-4 w-4" />
        Generate my validation plan
      </button>
      <p className="mt-3 text-center font-mono text-xs text-muted">
        Free to start · no credit card required
      </p>

      {open ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-primary/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-media border border-line bg-canvas p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-green-pale text-green-deep">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink">Create your free account</h3>
                  <p className="text-sm text-slate-500">Sign up to generate and save your plan.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-8 w-8 place-items-center rounded-sm text-muted hover:bg-mist hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 rounded-sm border border-line bg-mist p-3 text-sm text-bodymuted">
              <span className="font-medium text-ink">Your idea: </span>
              {idea.trim()}
            </div>

            <div className="mt-5 grid gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="h-11 rounded-sm border border-line px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-focus focus:ring-4 focus:ring-paleblue"
              />
              <input
                type="password"
                placeholder="Create a password"
                className="h-11 rounded-sm border border-line px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-focus focus:ring-4 focus:ring-paleblue"
              />
              <button type="button" onClick={onContinue} className="pill-primary w-full">
                Continue to Scout <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-4 text-center font-mono text-xs text-muted">
              Demo only — no account is actually created.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
