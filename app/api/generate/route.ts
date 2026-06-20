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

const scoutResultSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "experimentType",
    "rationale",
    "checklist",
    "assets",
    "successMetric",
    "decisionRule"
  ],
  properties: {
    experimentType: {
      type: "string",
      enum: allowedExperimentTypes
    },
    rationale: { type: "string" },
    checklist: {
      type: "array",
      minItems: 4,
      maxItems: 6,
      items: { type: "string" }
    },
    assets: {
      type: "array",
      minItems: 2,
      maxItems: 4,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["type", "title", "content", "setupAction"],
        properties: {
          type: { type: "string" },
          title: { type: "string" },
          content: { type: "string" },
          setupAction: {
            type: "object",
            additionalProperties: false,
            required: ["label", "service", "description"],
            properties: {
              label: { type: "string" },
              service: { type: "string" },
              description: { type: "string" }
            }
          }
        }
      }
    },
    successMetric: { type: "string" },
    decisionRule: {
      type: "object",
      additionalProperties: false,
      required: ["continue", "refine", "pivot"],
      properties: {
        continue: { type: "string" },
        refine: { type: "string" },
        pivot: { type: "string" }
      }
    }
  }
};

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
      "content": "",
      "setupAction": {
        "label": "",
        "service": "",
        "description": ""
      }
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
- Every asset must include a setupAction that shows how Scout would turn the asset into an execution step through a managed connector.
- Examples: outreach email -> set up Gmail or HubSpot sequence; interview guide -> generate Google Forms or Tally form; landing page copy -> create Webflow, Framer, WordPress, or Vercel draft; concierge workflow -> create calendar, CRM, and tracking workflow.
- Present connector setup as a future/premium managed action. Do not imply the integration is live today.
- Success metric must include a timeframe, denominator, and threshold.
- Decision rules must be practical and measurable.
- Use the idea context in the copy.
- The result must feel specific to this founder input, not a generic robotics example.`;
}

function fallbackWithContext(input?: Partial<ScoutInput>): ScoutResult {
  if (!input?.ideaName || input.ideaName.toLowerCase().includes("robo")) {
    return roboticsSampleResult;
  }

  const ideaName = input.ideaName || "your idea";
  const targetUser = input.targetUser || "your target users";
  const problem = input.problem || "the problem you described";
  const assumption = input.riskiestAssumption || "your riskiest assumption";
  const lowerStage = input.validationStage?.toLowerCase() || "";
  const lowerAssumption = assumption.toLowerCase();
  const experimentType =
    lowerStage.includes("launch") || lowerAssumption.includes("sign") || lowerAssumption.includes("pay")
      ? "fake landing page test"
      : lowerStage.includes("manual") || lowerAssumption.includes("deliver")
        ? "concierge MVP"
        : "problem interview outreach";

  if (experimentType === "fake landing page test") {
    return {
      experimentType,
      rationale: `${ideaName} needs a fast demand signal before building. A fake landing page test checks whether ${targetUser} will respond to the promise of solving "${problem}" strongly enough to leave contact information or request access.`,
      checklist: [
        "Write one clear promise that names the target user, problem, and expected outcome.",
        "Publish a single-page test with a waitlist or request-access CTA.",
        "Drive 150-300 qualified visitors from founder channels, niche communities, or small paid tests.",
        "Track visitor-to-signup conversion and collect one open-ended motivation question.",
        "Review signups by ICP fit before deciding whether demand is real."
      ],
      assets: [
        {
          type: "Landing page copy",
          title: `${ideaName} smoke-test page`,
          content: `Headline: Solve ${problem}\n\nSubhead: ${ideaName} helps ${targetUser} move from today's workaround to a faster, clearer workflow.\n\nCTA: Request early access\n\nQuestion after signup: What made this worth trying now?`,
          setupAction: {
            label: "Create landing page draft",
            service: "Webflow, Framer, WordPress, or Vercel",
            description:
              "Generate a one-page draft with CTA tracking, thank-you state, and motivation question."
          }
        },
        {
          type: "Ad copy",
          title: "Small-budget demand test",
          content: `Primary text: Still dealing with ${problem}? ${ideaName} is exploring a simpler way for ${targetUser} to validate the workflow before committing resources.\n\nCTA: Request early access`,
          setupAction: {
            label: "Prepare campaign setup",
            service: "Google Ads or Meta Ads",
            description:
              "Create draft campaign copy, audience notes, and conversion event mapping for the smoke test."
          }
        }
      ],
      successMetric:
        "Within 7 days, reach at least 200 qualified visitors and convert 12% or more into waitlist signups, with at least 10 signups matching the target ICP.",
      decisionRule: {
        continue:
          "Continue if qualified signup conversion is 12% or higher and signup notes mention the problem without prompting.",
        refine:
          "Refine if traffic engages but conversion is below target or only one segment responds.",
        pivot:
          "Pivot if qualified visitors do not understand the promise or signups come from the wrong audience."
      }
    };
  }

  if (experimentType === "concierge MVP") {
    return {
      experimentType,
      rationale: `${ideaName} should test whether ${targetUser} will accept a manually delivered version of the outcome before software is built. A concierge MVP validates urgency, workflow fit, and willingness to collaborate around "${problem}".`,
      checklist: [
        "Recruit 5-7 target users who recently experienced the problem.",
        "Manually deliver the promised outcome with lightweight tools and founder involvement.",
        "Time every step and record where users need help, trust, or clarification.",
        "Ask each participant to commit to a second run, referral, or paid pilot.",
        "Compare delivery effort against the value users say they received."
      ],
      assets: [
        {
          type: "Concierge workflow",
          title: `${ideaName} manual delivery runbook`,
          content: `1. Intake: collect the user's current situation around ${problem}.\n2. Manual analysis: founder reviews the context and prepares the recommendation.\n3. Delivery: send the result within 24 hours.\n4. Follow-up: ask what changed, what was missing, and whether they would repeat it.`,
          setupAction: {
            label: "Create concierge workspace",
            service: "Google Calendar, Google Sheets, and HubSpot",
            description:
              "Set up intake tracking, delivery deadlines, participant status, and follow-up reminders."
          }
        },
        {
          type: "Participant invite",
          title: "Concierge MVP invitation",
          content: `Hi {{first_name}}, I am testing ${ideaName}, a hands-on service for ${targetUser} dealing with ${problem}. I am not asking you to use software yet. I would manually help with the workflow once and ask for blunt feedback on whether the outcome is valuable.`,
          setupAction: {
            label: "Set up invite and scheduling",
            service: "Gmail, Calendly, or Google Calendar",
            description:
              "Create the outbound draft, scheduling link, and reminders for each participant."
          }
        }
      ],
      successMetric:
        "Within 14 days, complete 5 concierge runs and get at least 3 participants to request a second run, referral, or paid pilot conversation.",
      decisionRule: {
        continue:
          "Continue if participants repeatedly ask for the outcome again and the manual workflow reveals a repeatable product path.",
        refine:
          "Refine if users value the result but delivery is too slow, unclear, or dependent on one-off founder expertise.",
        pivot:
          "Pivot if users treat the concierge run as nice-to-have or will not commit to a follow-up action."
      }
    };
  }

  return {
    experimentType,
    rationale: `${ideaName} needs direct evidence that ${targetUser} feel urgent pain around "${problem}" before the team invests in building. A focused interview sprint tests ${assumption} with the least product work.`,
    checklist: [
      `Create a list of 25-30 ${targetUser} with signs they recently encountered the problem.`,
      "Send a short problem-first outreach message without pitching the solution.",
      "Book 8-10 interviews and ask for recent examples, current workaround, cost, and trigger events.",
      "Score each call by pain intensity, frequency, existing spend, and commitment to a follow-up.",
      "Only show solution concepts after the participant confirms the problem is real."
    ],
    assets: [
      {
        type: "Outreach email",
        title: `${ideaName} problem interview request`,
        content: `Subject: Quick question about ${problem}\n\nHi {{first_name}}, I am researching how ${targetUser} deal with ${problem}. I am not selling anything yet. I am trying to understand whether this is painful enough to solve.\n\nCould I ask you 4-5 questions about how you handle this today?`,
        setupAction: {
          label: "Set up outreach sequence",
          service: "Gmail or HubSpot",
          description:
            "Create a draft outreach sequence, personalization fields, and reply tracking for the interview sprint."
        }
      },
      {
        type: "Interview guide",
        title: "Discovery script",
        content: `1. When did ${problem} last happen?\n2. What triggered it?\n3. How do you solve it today?\n4. What does the workaround cost in time, money, or risk?\n5. Who else gets involved?\n6. What would make this worth changing now?\n7. Would you review a prototype or pilot if this matched your workflow?`,
        setupAction: {
          label: "Generate interview form",
          service: "Google Forms or Tally",
          description:
            "Turn the guide into a structured form with pain score, workaround, ICP fit, and follow-up commitment fields."
        }
      },
      {
        type: "Tracking sheet",
        title: "Interview scorecard",
        content:
          "Lead, ICP fit, recent trigger, current workaround, pain score 1-5, frequency, current spend, follow-up commitment, notes, decision.",
        setupAction: {
          label: "Create tracking sheet",
          service: "Google Sheets",
          description:
            "Create a scorecard sheet and roll up interview outcomes against the success threshold."
        }
      }
    ],
    successMetric:
      "Within 10 business days, interview 8 qualified users and get at least 5 to rate the problem 4/5 or higher, with 3 agreeing to review a prototype or pilot.",
    decisionRule: {
      continue:
        "Continue if qualified users describe the problem as urgent and commit to a concrete next step.",
      refine:
        "Refine if the pain is real but the ICP, trigger event, or preferred workflow is unclear.",
      pivot:
        "Pivot if users describe the problem as infrequent, low-cost, or already solved well enough."
    }
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
            type: "json_schema",
            name: "scout_result",
            strict: true,
            schema: scoutResultSchema
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
