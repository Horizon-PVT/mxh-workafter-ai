import { CTAButton } from "@/components/ui/CTAButton";
import { RiskReportPreview } from "@/components/ui/RiskReportPreview";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("landing.hero");
  const common = useTranslations("common");
  const trustPills = t.raw("trustPills") as string[];

  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_48%,#fff8ed_100%)] px-6 py-10 sm:py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-teal-100">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {t("subtitle")}
          </p>
          <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-indigo-700">
            {t("audience")}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href="/onboarding"
              analyticsEvent="landing_cta_clicked"
              analyticsProperties={{ placement: "hero_primary" }}
            >
              {common("cta.checkRisk")}
            </CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              {common("cta.seeHow")}
            </CTAButton>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white bg-white/75 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-indigo-300/35 via-teal-200/30 to-amber-200/35 blur-xl" />
          <div className="relative">
            <RiskReportPreview premium />
          </div>
        </div>
      </div>
    </section>
  );
}
