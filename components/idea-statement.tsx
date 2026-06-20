"use client";

import { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";

export function IdeaStatement() {
  const [idea, setIdea] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIdea(window.localStorage.getItem("scout:pendingIdea"));
    } catch {
      /* ignore storage errors */
    }
  }, []);

  if (idea) {
    return (
      <div className="mt-3 rounded-lg border border-line bg-white px-4 py-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
          <p className="text-sm leading-6 text-ink">{idea}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-lg border border-dashed border-line bg-mist px-4 py-6 text-slate-400">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-teal-700" />
        <span className="text-sm font-medium text-slate-500">
          Your idea or feature statement will live here.
        </span>
      </div>
    </div>
  );
}
