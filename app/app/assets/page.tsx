"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  WandSparkles
} from "lucide-react";
import { Badge, Card, PageHeader, Placeholder, SectionLabel } from "@/components/ui";
import { loadPlan } from "@/lib/plan-store";
import type { ScoutResult } from "@/lib/scout";

const generators = [
  { title: "Outreach emails", description: "Interview requests that open doors without pitching.", icon: Mail },
  { title: "Where-to-find list", description: "Specific places your target users actually gather.", icon: MapPin },
  {
    title: "Interview script",
    description: "A Mom Test-style guide engineered to avoid leading questions.",
    icon: MessageSquareText
  },
  {
    title: "Fake ad copy",
    description: "Smoke-test ads plus targeting suggestions to measure demand.",
    icon: Megaphone
  },
  { title: "Landing-page copy", description: "Fake-door page copy to capture sign-ups and intent.", icon: FileText }
];

function GeneratedAssets({ result }: { result: ScoutResult }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <SectionLabel>Generated assets</SectionLabel>
        <Badge tone="teal">{result.assets.length} ready</Badge>
      </div>
      <div className="grid gap-4">
        {result.assets.map((asset) => (
          <Card key={`${asset.type}-${asset.title}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">{asset.type}</p>
              <p className="text-sm font-semibold text-ink">{asset.title}</p>
            </div>
            <pre className="mt-3 whitespace-pre-wrap rounded-lg border border-line bg-mist p-4 font-sans text-sm leading-6 text-slate-700">
              {asset.content}
            </pre>
            {asset.setupAction ? (
              <div className="mt-4 rounded-lg border border-teal-100 bg-teal-50/50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                      Managed setup preview
                    </p>
                    <h4 className="mt-2 font-display text-base font-medium text-ink">{asset.setupAction.label}</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-600">{asset.setupAction.service}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{asset.setupAction.description}</p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white opacity-90"
                  >
                    Preview setup <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Want a different angle?{" "}
        <Link href="/app/canvas" className="font-semibold text-teal-700 hover:text-teal-800">
          Regenerate your plan
        </Link>{" "}
        on the Idea Canvas.
      </p>
    </section>
  );
}

function PlaceholderStudio() {
  return (
    <>
      <section>
        <SectionLabel>Generators</SectionLabel>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {generators.map((generator) => {
            const Icon = generator.icon;
            return (
              <Card key={generator.title} className="flex flex-col">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{generator.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-6 text-slate-500">{generator.description}</p>
                <Link
                  href="/app/canvas"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-ink hover:bg-mist"
                >
                  <WandSparkles className="h-4 w-4 text-teal-700" />
                  Generate
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <SectionLabel>Asset library</SectionLabel>
        <div className="mt-4">
          <Placeholder
            icon={FileText}
            title="No assets yet"
            description="Generate a validation plan on the Idea Canvas and the assets to run it — outreach, scripts, ad copy, landing pages — land here, ready to copy and run."
          />
        </div>
      </section>
    </>
  );
}

export default function AssetsPage() {
  const [result, setResult] = useState<ScoutResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(loadPlan().result);
    setReady(true);
  }, []);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Asset Studio"
        title="Everything you need to run the experiment"
        description="Beat the blank page. Scout generates the outreach, scripts, ad copy, and landing-page copy to run your prescribed experiment — each with a managed setup preview — and keeps them in one library."
      />
      {ready && result ? <GeneratedAssets result={result} /> : <PlaceholderStudio />}
    </div>
  );
}
