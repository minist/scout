import { MessagesSquare, Upload } from "lucide-react";
import { Card, PageHeader, Placeholder, SectionLabel } from "@/components/ui";

const tagLegend = [
  { label: "Pain", tone: "bg-amber-50 text-amber-700" },
  { label: "Objection", tone: "bg-slate-100 text-slate-600" },
  { label: "Desire", tone: "bg-teal-50 text-teal-700" },
  { label: "Opportunity", tone: "bg-teal-50 text-teal-700" }
];

export default function InterviewsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader
          eyebrow="Interviews"
          title="Capture evidence from your conversations"
          description="The research repository: upload or import interviews, get AI transcripts and summaries, and extract themes, quotes, and tags — each quote linked to the assumption it supports or refutes."
        />
        <button
          type="button"
          disabled
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white opacity-70"
        >
          <Upload className="h-4 w-4" />
          Upload interview
        </button>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <SectionLabel>Interview list</SectionLabel>
          <div className="mt-4">
            <Placeholder
              icon={MessagesSquare}
              title="No interviews yet"
              description="Upload a recording or paste a transcript. Scout transcribes, summarizes, and extracts tagged quotes you can promote to evidence."
            />
          </div>
        </div>

        <Card>
          <SectionLabel>Quote tags</SectionLabel>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Extracted quotes are tagged so the signal is easy to scan across every conversation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tagLegend.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${tag.tone}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
