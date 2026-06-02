import { RiskReportPreview } from "@/components/ui/RiskReportPreview";
import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export function RiskReportPreviewSection() {
  const t = useTranslations("landing.preview");

  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t("body")}
          </p>
        </div>
        <RiskReportPreview />
      </div>
    </Section>
  );
}
