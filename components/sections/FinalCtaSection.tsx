import { CTAButton } from "@/components/ui/CTAButton";
import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export function FinalCtaSection() {
  const t = useTranslations("landing.finalCta");
  const common = useTranslations("common");

  return (
    <Section>
      <div className="rounded-lg bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950 px-6 py-12 text-center shadow-2xl shadow-indigo-200 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
          {t("eyebrow")}
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          {t("body")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton
            href="/onboarding"
            className="bg-amber-400 text-slate-950 hover:bg-amber-300"
            analyticsEvent="landing_cta_clicked"
            analyticsProperties={{ placement: "final_cta" }}
          >
            {common("cta.checkRisk")}
          </CTAButton>
          <span className="text-sm font-medium text-slate-300">{t("note")}</span>
        </div>
      </div>
    </Section>
  );
}
