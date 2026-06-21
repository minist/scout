export type ScoutInput = {
  ideaName: string;
  targetUser: string;
  problem: string;
  riskiestAssumption: string;
  validationStage: string;
};

export type ScoutAsset = {
  type: string;
  title: string;
  content: string;
  setupAction?: {
    label: string;
    service: string;
    description: string;
  };
};

export type ScoutReasoning = {
  observedSignals?: string[];
  interpretation?: string;
  recommendationLogic?: string;
  thresholdLogic?: string;
  checklistLogic: string[];
  decisionRuleLogic: string;
  assumptionFocus?: string;
  experimentChoice?: string;
  successThreshold?: string;
};

export type ScoutResult = {
  experimentType: string;
  rationale: string;
  checklist: string[];
  assets: ScoutAsset[];
  successMetric: string;
  reasoning?: ScoutReasoning;
  decisionRule: {
    continue: string;
    refine: string;
    pivot: string;
  };
};

export type ScoutSample = {
  id: string;
  label: string;
  description: string;
  input: ScoutInput;
  result: ScoutResult;
};

export const roboticsSampleInput: ScoutInput = {
  ideaName: "RoboRoute",
  targetUser: "Operations leads at small warehouses with 20-150 employees",
  problem:
    "Teams lose hours manually planning safe, efficient paths for mobile robots before every layout change.",
  riskiestAssumption:
    "Ops leads will try a planning workflow before committing to a hardware integration.",
  validationStage: "Problem discovery"
};

export const roboticsSampleResult: ScoutResult = {
  experimentType: "problem interview outreach",
  rationale:
    "The riskiest assumption is behavioral: whether warehouse operators feel enough pain to try a workflow before hardware is connected. A focused interview sprint validates urgency, current workarounds, buying context, and willingness to review a lightweight planning prototype before you build robot integrations.",
  reasoning: {
    observedSignals: [
      "Problem discovery stage",
      "Behavior change before hardware integration",
      "Warehouse ops teams with recent layout or automation pressure"
    ],
    interpretation:
      "The riskiest belief is not robot performance yet. It is whether ops leads feel enough workflow pain to trust a planning step before hardware is connected.",
    recommendationLogic:
      "Problem interviews are the lowest-build test for urgency, current workarounds, buyer ownership, and trust barriers.",
    thresholdLogic:
      "The threshold combines booked-call evidence, high pain intensity, and a prototype-review commitment so the team sees both urgency and next-step intent.",
    checklistLogic: [
      "Targeting leads with recent automation or layout-change signals increases the odds that interviews cover active pain.",
      "Problem-first outreach avoids false positives from people reacting to a product pitch.",
      "Recent-example questions and the scorecard turn qualitative interviews into comparable evidence."
    ],
    decisionRuleLogic:
      "The continue/refine/pivot rules separate urgent, buyer-owned pain from cases where the segment, trigger, or pre-integration workflow is still too unclear to justify building."
  },
  checklist: [
    "Create a list of 25 small warehouse operations leads with recent layout, automation, or labor efficiency signals.",
    "Send a concise outreach note that names the manual routing problem without pitching a product.",
    "Book 8-10 interviews and ask for recent examples, current workaround cost, owner of the problem, and what would make them trial a planning workflow.",
    "Show a low-fidelity route planning mock only after the pain is confirmed.",
    "Track replies, booked calls, pain intensity, current workaround, and commitment to a follow-up pilot."
  ],
  assets: [
    {
      type: "Outreach email",
      title: "Problem interview request",
      content:
        "Subject: Quick question about robot route planning\n\nHi {{first_name}}, I am researching how smaller warehouses update mobile robot routes after layout changes. A few ops teams told me the planning work still happens in spreadsheets, floor walks, or ad hoc vendor calls.\n\nCould I ask you 4-5 questions about how your team handles this today? No sales pitch. I am trying to understand whether this is a painful enough workflow to solve.\n\nIf useful, I can also share the patterns I hear from other warehouse operators.",
      setupAction: {
        label: "Set up outreach sequence",
        service: "Gmail or HubSpot",
        description:
          "Create a draft sequence, add personalization fields, and prepare reply tracking for the interview sprint."
      }
    },
    {
      type: "Interview guide",
      title: "8-question discovery script",
      content:
        "1. When did your team last change a robot route or warehouse layout?\n2. What triggered the change?\n3. Walk me through the exact planning steps.\n4. Where does the process slow down or break?\n5. Who gets pulled in, and how much time does it take?\n6. What tools or documents do you use now?\n7. What would make you trust a planning workflow before hardware integration?\n8. If this saved a day per layout update, what would the next step be?",
      setupAction: {
        label: "Generate interview form",
        service: "Google Forms or Tally",
        description:
          "Turn the guide into a structured response form with pain score, notes, and follow-up commitment fields."
      }
    },
    {
      type: "Tracking sheet",
      title: "Interview scorecard columns",
      content:
        "Lead, company size, automation maturity, recent routing event, current workaround, time cost, pain score 1-5, owner/budget, agreed to prototype review, notes, next step.",
      setupAction: {
        label: "Create tracking workspace",
        service: "Google Sheets",
        description:
          "Create a scorecard sheet and sync interview outcomes into the success threshold dashboard."
      }
    }
  ],
  successMetric:
    "Within 10 business days, book 8 interviews from 25 targeted leads and get at least 5 participants to rate the pain 4/5 or higher, with 3 agreeing to review a workflow prototype.",
  decisionRule: {
    continue:
      "Continue if at least 5 interviews confirm urgent pain and at least 3 qualified leads commit to a prototype review or pilot conversation.",
    refine:
      "Refine if pain exists but the buyer, trigger event, or trusted workflow format is unclear.",
    pivot:
      "Pivot if most leads describe routing updates as infrequent, vendor-owned, or not worth solving before hardware integration."
  }
};

export const b2cAiSampleInput: ScoutInput = {
  ideaName: "FitChef AI",
  targetUser: "Busy professionals trying to eat healthier without meal planning",
  problem:
    "People want personalized healthy meals but abandon meal plans because shopping, substitutions, and prep feel like extra work.",
  riskiestAssumption:
    "Users will share diet preferences and pay attention to AI meal suggestions if the app turns them into a simple weekly grocery plan.",
  validationStage: "Pre-launch demand"
};

export const b2cAiSampleResult: ScoutResult = {
  experimentType: "fake landing page test",
  rationale:
    "FitChef AI needs proof that consumers want the outcome enough to join a waitlist before the app is built. A fake landing page can test the promise, collect dietary intent, and measure whether the audience wants AI-generated meal plans that turn into an actionable grocery workflow.",
  reasoning: {
    observedSignals: [
      "Pre-launch demand stage",
      "Consumer willingness to share preferences",
      "Outcome depends on grocery-plan follow-through"
    ],
    interpretation:
      "The main risk is demand quality: users must want the promise enough to sign up and provide the inputs a personalized plan needs.",
    recommendationLogic:
      "A fake landing page validates the promise, segment, and signup motivation before the team builds personalization or grocery workflows.",
    thresholdLogic:
      "Qualified traffic plus waitlist conversion proves attention, while preference completions show users will provide the data needed for the product.",
    checklistLogic: [
      "A single sharp promise tests whether the outcome is clear enough to earn attention.",
      "Preference intake checks whether users will provide the inputs required for personalization.",
      "Motivation notes and manual previews separate real grocery-workflow demand from generic recipe curiosity."
    ],
    decisionRuleLogic:
      "The rules distinguish real demand for a planning-to-grocery workflow from weak curiosity, channel-specific noise, or a product that users perceive as another recipe app."
  },
  checklist: [
    "Publish a one-page promise focused on weekly meals, grocery planning, and fewer abandoned health goals.",
    "Add a waitlist CTA with one qualifying question about diet style, household size, and current planning frustration.",
    "Drive 250 qualified visitors from wellness communities, creator posts, and a small paid social test.",
    "Track visitor-to-waitlist conversion, motivation notes, and which audience segments convert.",
    "Invite the strongest 20 signups to preview a manual AI-generated plan before app development."
  ],
  assets: [
    {
      type: "Landing page copy",
      title: "FitChef AI waitlist page",
      content:
        "Headline: Healthy meal planning that becomes your grocery list.\n\nSubhead: FitChef AI learns your tastes, schedule, and nutrition goals, then turns the week into simple meals and a shopping plan you can actually follow.\n\nCTA: Join the early access list\n\nSignup question: What makes meal planning fall apart for you today?",
      setupAction: {
        label: "Create waitlist landing page",
        service: "Framer or Vercel",
        description:
          "Generate a polished smoke-test page with signup capture, thank-you copy, and conversion tracking."
      }
    },
    {
      type: "Signup form",
      title: "Diet preference intake",
      content:
        "Fields: email, diet style, meals per week, grocery budget, cooking time, household size, biggest meal planning frustration, willingness to try a sample plan.",
      setupAction: {
        label: "Generate preference form",
        service: "Typeform, Tally, or Google Forms",
        description:
          "Create a lightweight intake form that segments users and feeds the first manual meal-plan batch."
      }
    },
    {
      type: "Ad copy",
      title: "B2C demand test creative",
      content:
        "Primary text: Tired of healthy meal plans that die at the grocery store? FitChef AI turns your tastes and schedule into meals plus a shopping plan.\n\nCTA: Join early access\n\nCreative angle: Before/after weekly grocery chaos versus a clean 5-meal plan.",
      setupAction: {
        label: "Prepare paid social test",
        service: "Meta Ads",
        description:
          "Draft two campaign angles, audience notes, and conversion event mapping for the waitlist test."
      }
    }
  ],
  successMetric:
    "Within 7 days, reach 250 qualified visitors and convert at least 10% to waitlist signups, with 25 signups completing diet preferences and 10 agreeing to preview a sample plan.",
  decisionRule: {
    continue:
      "Continue if conversion reaches 10% or higher and preference responses show repeated frustration with shopping and planning.",
    refine:
      "Refine if people like the concept but only one diet segment or acquisition channel converts.",
    pivot:
      "Pivot if visitors treat the product as a generic recipe app and do not complete the preference intake."
  }
};

export const saasSampleInput: ScoutInput = {
  ideaName: "RenewalRadar",
  targetUser: "Customer success leaders at B2B SaaS companies with 50-500 employees",
  problem:
    "Teams miss expansion and churn signals because renewal notes, product usage, support tickets, and meeting follow-ups are scattered across tools.",
  riskiestAssumption:
    "CS leaders will let a founder manually compile renewal risk briefs from existing tools before a full data integration exists.",
  validationStage: "Manual delivery"
};

export const saasSampleResult: ScoutResult = {
  experimentType: "concierge MVP",
  rationale:
    "RenewalRadar should validate whether customer success teams value the synthesized renewal brief before building integrations. A concierge MVP lets the founder manually gather exported context, produce a risk summary, and see whether teams would repeat the workflow or pay for an automated version.",
  reasoning: {
    observedSignals: [
      "Manual delivery stage",
      "Data is scattered across customer tools",
      "Value can be tested before full integrations"
    ],
    interpretation:
      "The riskiest belief is whether CS leaders will share enough context and trust a synthesized renewal brief before automation exists.",
    recommendationLogic:
      "A concierge MVP lets Scout test whether the judgment layer changes renewal decisions before building CRM, support, and product-data connectors.",
    thresholdLogic:
      "Fifteen account briefs test repeatability across teams, while second-batch or paid-pilot requests show operational value beyond polite feedback.",
    checklistLogic: [
      "Recruiting leaders with near-term renewals keeps the test tied to urgent business decisions.",
      "Sanitized exports lower integration friction while still exposing whether the needed evidence exists.",
      "Live reviews and follow-up asks reveal whether the brief changes decisions and earns repeat demand."
    ],
    decisionRuleLogic:
      "The rules continue only when briefs affect renewal actions and earn repeat demand, refine when value exists but the segment or data inputs are inconsistent, and pivot when teams already solve the job or cannot share enough evidence."
  },
  checklist: [
    "Recruit 5 customer success leaders managing renewals in the next 30-60 days.",
    "Ask each team to provide sanitized notes, usage screenshots, support themes, and meeting context for 3 accounts.",
    "Manually create a renewal risk brief with risks, expansion signals, suggested next actions, and evidence links.",
    "Review the brief live with the CS leader and capture what changed their renewal plan.",
    "Ask for a second account batch, internal forward, or paid pilot commitment."
  ],
  assets: [
    {
      type: "Concierge workflow",
      title: "Renewal risk brief runbook",
      content:
        "1. Intake: collect account list, renewal date, owner, and available evidence.\n2. Synthesis: group signals into risk, expansion, adoption, and relationship themes.\n3. Recommendation: write next actions by account owner.\n4. Review: run a 30-minute calibration call and capture changes to the plan.",
      setupAction: {
        label: "Create account review workspace",
        service: "HubSpot, Salesforce, or Pipedrive",
        description:
          "Prepare fields for renewal date, account risk, next action, source evidence, and follow-up owner."
      }
    },
    {
      type: "Meeting agenda",
      title: "30-minute renewal review",
      content:
        "Agenda: 5 min context, 10 min account risk review, 10 min expansion and next-action review, 5 min commitment to the next account batch or pilot.",
      setupAction: {
        label: "Schedule review sessions",
        service: "Google Calendar, Calendly, or Zoom",
        description:
          "Create scheduling slots, meeting agenda, and reminder notes for each concierge review."
      }
    },
    {
      type: "Insight report",
      title: "Renewal brief template",
      content:
        "Account, renewal date, risk level, risk evidence, expansion signal, recommended owner action, missing context, next customer touchpoint, expected impact.",
      setupAction: {
        label: "Generate shared report",
        service: "Google Sheets or Notion",
        description:
          "Create a reusable renewal brief table and status summary that can be shared with CS leadership."
      }
    }
  ],
  successMetric:
    "Within 14 days, complete briefs for 15 accounts across 5 CS leaders and get at least 3 teams to request a second batch or paid pilot conversation.",
  decisionRule: {
    continue:
      "Continue if CS leaders use the brief to change renewal actions and ask to repeat it with more accounts.",
    refine:
      "Refine if the output is useful but the source data, buyer, or ideal account segment is inconsistent.",
    pivot:
      "Pivot if teams already have a strong renewal process or will not share enough context for Scout to create value."
  }
};

export const scoutSamples: ScoutSample[] = [
  {
    id: "robotics",
    label: "Robotics",
    description: "Problem interviews for a warehouse robotics workflow.",
    input: roboticsSampleInput,
    result: roboticsSampleResult
  },
  {
    id: "b2c-ai",
    label: "B2C AI app",
    description: "Landing page and ad test for an AI meal planning app.",
    input: b2cAiSampleInput,
    result: b2cAiSampleResult
  },
  {
    id: "saas",
    label: "SaaS service",
    description: "Concierge MVP for a B2B customer success product.",
    input: saasSampleInput,
    result: saasSampleResult
  }
];
