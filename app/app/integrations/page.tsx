import {
  BarChart3,
  Calendar,
  Check,
  FileText,
  Globe2,
  Mail,
  Megaphone,
  MessagesSquare,
  PlugZap,
  Users
} from "lucide-react";
import { Badge, Card, PageHeader, SectionLabel, StatTile } from "@/components/ui";

const connectorGroups = [
  {
    category: "Email / outreach",
    description: "Send interview outreach and follow-up sequences without leaving Scout.",
    icon: Mail,
    status: "Preview",
    tools: ["Gmail", "Outlook", "Mailchimp", "HubSpot"]
  },
  {
    category: "Ads",
    description: "Turn validation assets into smoke-test campaigns and read the signal back.",
    icon: Megaphone,
    status: "Planned",
    tools: ["Google Ads", "Meta Ads"]
  },
  {
    category: "Landing pages",
    description: "Publish fake-door pages and capture waitlist or request-access conversion.",
    icon: Globe2,
    status: "Preview",
    tools: ["Webflow", "Framer", "WordPress", "Vercel"]
  },
  {
    category: "Forms / surveys",
    description: "Convert interview guides into structured response forms and scorecards.",
    icon: FileText,
    status: "Preview",
    tools: ["Typeform", "Google Forms", "Tally"]
  },
  {
    category: "Meetings",
    description: "Schedule interviews, attach agendas, and sync recordings or notes.",
    icon: MessagesSquare,
    status: "Planned",
    tools: ["Zoom", "Google Meet", "Microsoft Teams"]
  },
  {
    category: "CRM",
    description: "Keep leads, interview status, commitments, and pilot opportunities together.",
    icon: Users,
    status: "Premium",
    tools: ["HubSpot", "Salesforce", "Pipedrive"]
  },
  {
    category: "Analytics",
    description: "Connect campaign and product signals to the customer language behind them.",
    icon: BarChart3,
    status: "Premium",
    tools: ["Google Analytics", "Mixpanel", "PostHog"]
  },
  {
    category: "Scheduling",
    description: "Coordinate research sessions and decision reviews with managed reminders.",
    icon: Calendar,
    status: "Preview",
    tools: ["Google Calendar", "Calendly"]
  }
];

const setupQueue = [
  "Create Google Forms draft for the robotics interview guide",
  "Prepare Gmail sequence for 25 warehouse ops leads",
  "Map landing-page conversion event to the FitChef AI waitlist",
  "Create HubSpot fields for RenewalRadar concierge accounts"
];

function statusTone(status: string) {
  if (status === "Premium") return "amber";
  if (status === "Preview") return "teal";
  return "neutral";
}

export default function IntegrationsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <PageHeader
          eyebrow="Execution integrations"
          title="Connect the tools founders already use"
          description="Scout keeps vendor complexity behind the scenes. Customers choose the workflow they want to run, and Scout prepares the email, form, page, CRM, analytics, or campaign setup as a managed execution layer."
        />
        <div className="rounded-[10px] border border-line bg-white p-4 shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            Product principle
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
            Customers buy Scout. Tool setup, orchestration, and provider choices stay managed inside
            the workspace.
          </p>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Connector categories" value="8" hint="Execution roadmap" />
        <StatTile label="Preview workflows" value="4" hint="Demo-ready setup flows" />
        <StatTile label="Premium controls" value="2" hint="CRM + analytics layers" />
        <StatTile label="Vendor bills" value="0" hint="Consolidated through Scout" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <SectionLabel>Connector library</SectionLabel>
            <Badge tone="teal">Managed by Scout</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {connectorGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.category}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge tone={statusTone(group.status)}>{group.status}</Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{group.category}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-line bg-mist px-2.5 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-ink hover:bg-mist"
                  >
                    <PlugZap className="h-4 w-4 text-teal-700" />
                    Configure preview
                  </button>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid content-start gap-5">
          <Card>
            <SectionLabel>Managed setup queue</SectionLabel>
            <div className="mt-4 grid gap-3">
              {setupQueue.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-lg border border-line bg-mist p-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-sm font-semibold text-ink">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-ink text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-teal-100">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <SectionLabel>Default experience</SectionLabel>
                <h3 className="mt-1 text-lg font-semibold text-white">No vendor maze</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Advanced teams can request provider preferences later. The default paid experience
              keeps setup simple, centralized, and billed through Scout.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
