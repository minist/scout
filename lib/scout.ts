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

export type ScoutResult = {
  experimentType: string;
  rationale: string;
  checklist: string[];
  assets: ScoutAsset[];
  successMetric: string;
  decisionRule: {
    continue: string;
    refine: string;
    pivot: string;
  };
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
