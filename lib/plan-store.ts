import type { ScoutInput, ScoutResult } from "@/lib/scout";

const RESULT_KEY = "scout:lastResult";
const INPUT_KEY = "scout:lastInput";
const IDEA_KEY = "scout:pendingIdea";

export function loadPendingIdea(): string | null {
  try {
    return window.localStorage.getItem(IDEA_KEY);
  } catch {
    return null;
  }
}

export function clearPendingIdea() {
  try {
    window.localStorage.removeItem(IDEA_KEY);
  } catch {
    /* ignore storage errors */
  }
}

export function savePlan(input: ScoutInput, result: ScoutResult) {
  try {
    window.localStorage.setItem(INPUT_KEY, JSON.stringify(input));
    window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
  } catch {
    /* ignore storage errors */
  }
}

export function loadPlan(): { input: ScoutInput | null; result: ScoutResult | null } {
  try {
    const rawResult = window.localStorage.getItem(RESULT_KEY);
    const rawInput = window.localStorage.getItem(INPUT_KEY);
    return {
      input: rawInput ? (JSON.parse(rawInput) as ScoutInput) : null,
      result: rawResult ? (JSON.parse(rawResult) as ScoutResult) : null
    };
  } catch {
    return { input: null, result: null };
  }
}
