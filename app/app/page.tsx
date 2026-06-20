import Link from "next/link";
import {
  ArrowRight,
  CircleDashed,
  ClipboardList,
  FlaskConical,
  MessagesSquare,
  PenLine,
  Plus,
  Route,
  Sparkles
} from "lucide-react";
import { Badge, Card, PageHeader, SectionLabel, StatTile } from "@/components/ui";

const nextActions = [
  {
    title: "Run 5 problem interviews",
    context: "Riskiest assumption · Problem / Desirability",
    href: "/app/roadmap",
    icon: MessagesSquare
  },
  {
    title: "Generate the outreach asset bundle",
    context: "Outreach email · where-to-find list · interview script",
    href: "/app/assets",
    icon: Sparkles
  },
  {
    title: "Decompose your idea into assumptions",
    context: "Rank by risk × uncertainty",
    href: "/app/canvas",
    icon: PenLine
  }
];

const activeValidations = [
  {
    name: "Last-minute pet sitters",
    phase: "Phase 1 · Idea",
    riskiest: "Owners regularly face sitter gaps and lack a good solution",
    tested: 0,
    pending: 5,
    status: "In discovery"
  }
];

export default function OverviewPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader
          eyebrow="Validation overview"
          title="What should I do next?"
          description="Your validation home: the status of every idea and feature in flight, the next prescribed action, and the latest evidence — so decisions are made on proof instead of optimism."
        />
        <Link
          href="/app/canvas"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white hover:bg-teal-700"
        >
          <Plus className="h-4 w-4" />
          New validation
        </Link>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Active validations" value="1" hint="1 idea in flight" />
        <StatTile label="Assumptions tested" value="0" hint="5 pending" />
        <StatTile label="Experiments running" value="0" hint="1 prescribed" />
        <StatTile label="Decisions logged" value="0" hint="No decisions yet" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <div className="flex items-center justify-between">
            <SectionLabel>Next action queue</SectionLabel>
            <Link href="/app/roadmap" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
              View roadmap
            </Link>
          </div>
          <div className="mt-4 grid gap-3">
            {nextActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex items-center gap-4 rounded-lg border border-line p-4 transition-colors hover:border-teal-200 hover:bg-teal-50/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{action.title}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{action.context}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-teal-700" />
                </Link>
              );
            })}
          </div>
        </Card>

        <Card>
          <SectionLabel>Recent evidence</SectionLabel>
          <div className="mt-4 grid place-items-center rounded-lg border border-dashed border-line px-4 py-12 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-slate-400">
              <FlaskConical className="h-5 w-5" />
            </span>
            <p className="mt-3 text-sm font-semibold text-ink">No evidence captured yet</p>
            <p className="mt-1 max-w-xs text-sm text-slate-500">
              Run your first prescribed experiment and results will appear here.
            </p>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <SectionLabel>Active validations</SectionLabel>
          <Link href="/app/log" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
            Open decision log
          </Link>
        </div>
        <div className="grid gap-4">
          {activeValidations.map((validation) => (
            <Card key={validation.name}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-ink">{validation.name}</h3>
                    <Badge tone="teal">{validation.phase}</Badge>
                  </div>
                  <p className="mt-1.5 flex items-center gap-2 text-sm text-slate-500">
                    <CircleDashed className="h-4 w-4 text-amber-500" />
                    Riskiest: {validation.riskiest}
                  </p>
                </div>
                <div className="flex items-center gap-6 sm:gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Tested
                    </p>
                    <p className="mt-1 text-xl font-semibold text-ink">
                      {validation.tested}
                      <span className="text-sm font-normal text-slate-400">/{validation.pending}</span>
                    </p>
                  </div>
                  <Badge tone="amber">{validation.status}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-dashed bg-mist">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-teal-700">
                <Route className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">Ask Scout</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  The docked assistant — prescriptions and asset generation inline — lands in a
                  follow-up task.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">
              <ClipboardList className="h-4 w-4" />
              Placeholder
            </span>
          </div>
        </Card>
      </section>
    </div>
  );
}
