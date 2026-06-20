import { ClipboardList, Download } from "lucide-react";
import { Badge, Card, PageHeader, Placeholder, SectionLabel } from "@/components/ui";

const decisionTypes = [
  { label: "Persevere", tone: "teal" as const, description: "Evidence supports the belief — keep going." },
  { label: "Pivot", tone: "amber" as const, description: "Change the approach based on what you learned." },
  { label: "Kill", tone: "neutral" as const, description: "The belief was wrong — stop and save the cost." }
];

export default function LogPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader
          eyebrow="Decision Log"
          title="Your cumulative source of truth"
          description="The living record of every assumption tested, the evidence for and against it, and every persevere / pivot / kill decision with its rationale and confidence. This is the moat — your evidence history compounds over time."
        />
        <button
          type="button"
          disabled
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-slate-500 opacity-70"
        >
          <Download className="h-4 w-4" />
          Export report
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-3">
        {decisionTypes.map((decision) => (
          <Card key={decision.label}>
            <Badge tone={decision.tone}>{decision.label}</Badge>
            <p className="mt-3 text-sm leading-6 text-slate-500">{decision.description}</p>
          </Card>
        ))}
      </section>

      <section>
        <SectionLabel>Decision history</SectionLabel>
        <div className="mt-4">
          <Placeholder
            icon={ClipboardList}
            title="No decisions logged yet"
            description="As you validate assumptions and decide persevere, pivot, or kill, each decision is recorded here with the evidence behind it — filterable and exportable."
          />
        </div>
      </section>
    </div>
  );
}
