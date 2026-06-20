import { NextResponse } from "next/server";
import { roboticsSampleResult, type ScoutInput, type ScoutResult } from "@/lib/scout";

const allowedExperimentTypes = [
  "problem interview outreach",
  "fake landing page test",
  "concierge MVP"
];

function isScoutResult(value: unknown): value is ScoutResult {
  if (!value || typeof value !== "object") return false;
  const result = value as Partial<ScoutResult>;
  return (
    typeof result.experimentType === "string" &&
    typeof result.rationale === "string" &&
    Array.isArray(result.checklist) &&
    Array.isArray(result.assets) &&
    typeof result.successMetric === "string" &&
    !!result.decisionRule &&
    typeof result.decisionRule.continue === "string" &&
    typeof result.decisionRule.refine === "string" &&
    typeof result.decisionRule.pivot === "string"
  );
}

function buildPrompt(input: ScoutInput) {
  return `You are Scout, a startup validation strategist for founders.

Recommend exactly one MVP validation experiment from this list:
- problem interview outreach
- fake landing page test
- concierge MVP

Return only valid JSON with this exact shape:
{
  "experimentType": "",
  "rationale": "",
  "checklist": [""],
  "assets": [
    {
      "type": "",
      "title": "",
      "content": ""
    }
  ],
  "successMetric": "",
  "decisionRule": {
    "continue": "",
    "refine": "",
    "pivot": ""
  }
}

Founder input:
Idea name: ${input.ideaName}
Target user / ICP: ${input.targetUser}
Problem: ${input.problem}
Riskiest assumption / current belief: ${input.riskiestAssumption}
Validation stage: ${input.validationStage}

Guidelines:
- Optimize for a hackathon demo: clear, specific, useful, measurable.
- Choose the experiment that best tests the riskiest assumption with the least build effort.
- Checklist should contain 4-6 concrete steps.
- Generate 2-4 assets founders can copy into the real world.
- Success metric must include a timeframe, denominator, and threshold.
- Decision rules must be practical and measurable.
- Use the idea context in the copy.`;
}

function fallbackWithContext(input?: Partial<ScoutInput>): ScoutResult {
  if (!input?.ideaName || input.ideaName.toLowerCase().includes("robo")) {
    return roboticsSampleResult;
  }

  return {
    ...roboticsSampleResult,
    rationale: `For ${input.ideaName}, Scout is showing a demo-safe recommendation while the model is unavailable. This fallback still follows the MVP shape: choose the fastest experiment that tests whether ${input.targetUser || "the target user"} urgently cares about the stated problem before you build.`,
    assets: roboticsSampleResult.assets.map((asset) => ({
      ...asset,
      content: asset.content.replaceAll("robot route planning", input.problem || "this problem")
    }))
  };
}

export async function POST(request: Request) {
  let input: ScoutInput;

  try {
    input = (await request.json()) as ScoutInput;
  } catch {
    return NextResponse.json(fallbackWithContext(), { status: 200 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(fallbackWithContext(input), { status: 200 });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: buildPrompt(input),
        text: {
          format: {
            type: "json_object"
          }
        }
      })
    });

    if (!response.ok) {
      return NextResponse.json(fallbackWithContext(input), { status: 200 });
    }

    const payload = await response.json();
    const text =
      payload.output_text ||
      payload.output?.flatMap((item: { content?: Array<{ text?: string }> }) => item.content || [])
        ?.map((content: { text?: string }) => content.text)
        ?.join("");

    const parsed = JSON.parse(text);

    if (
      isScoutResult(parsed) &&
      allowedExperimentTypes.includes(parsed.experimentType.toLowerCase())
    ) {
      return NextResponse.json(parsed);
    }

    return NextResponse.json(fallbackWithContext(input), { status: 200 });
  } catch {
    return NextResponse.json(fallbackWithContext(input), { status: 200 });
  }
}
