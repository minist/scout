import { PageHeader } from "@/components/ui";
import { PlanGenerator } from "@/components/plan-generator";

export default function CanvasPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Idea Canvas"
        title="Turn your idea into a validation plan"
        description="Describe the idea or feature and the belief it depends on. Scout finds the cheapest experiment that tests the riskiest assumption, generates the assets to run it, and sets the bar that decides persevere, pivot, or kill."
      />

      <PlanGenerator />
    </div>
  );
}
