import { RiskReportPreview } from "@/components/ui/RiskReportPreview";
import { Section } from "@/components/ui/Section";

export function RiskReportPreviewSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            AI Risk Report Preview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            See the tasks to protect, automate, or turn into a stronger skill path.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The report is designed to reduce anxiety by showing where your role is changing and
            where your experience still has value.
          </p>
        </div>
        <RiskReportPreview />
      </div>
    </Section>
  );
}
