import type { RebuildPlan } from "@/types";
import { useTranslations } from "next-intl";

type PlanSummaryProps = {
  plan: RebuildPlan;
};

export function PlanSummary({ plan }: PlanSummaryProps) {
  const t = useTranslations("rebuildPlan.summary");
  const common = useTranslations("common");
  const summaryItems = [
    { label: t("cards.score"), value: common("labels.scoreOutOf100", { score: plan.currentScore }) },
    { label: t("cards.targetRole"), value: plan.targetRole },
    { label: t("cards.nextSkill"), value: plan.nextSkill },
    { label: t("cards.progress"), value: `${plan.progressPercent}%` },
  ];

  return (
    <section className="rounded-lg border border-white/80 bg-white/90 p-6 shadow-xl shadow-indigo-100/50 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
        {t("eyebrow")}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        {t("body")}
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryItems.map((item) => (
          <article key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-2 text-base font-semibold leading-6 text-slate-950">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
