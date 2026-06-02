import type { RebuildPlan } from "@/types";
import { useTranslations } from "next-intl";

type SkillGapCardProps = {
  plan: RebuildPlan;
};

export function SkillGapCard({ plan }: SkillGapCardProps) {
  const t = useTranslations("rebuildPlan.skillGap");

  return (
    <section className="rounded-lg border border-indigo-100 bg-white/90 p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
        {t("eyebrow")}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {t("title")}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{plan.skillGapSummary}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <SkillList title={t("currentStrengths")} items={plan.currentStrengths} tone="teal" />
        <SkillList title={t("skillsNext")} items={plan.skillsToBuildNext} tone="indigo" />
      </div>
    </section>
  );
}

function SkillList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "teal" | "indigo";
}) {
  const badgeClass =
    tone === "teal"
      ? "bg-teal-50 text-teal-700 ring-teal-100"
      : "bg-indigo-50 text-indigo-700 ring-indigo-100";

  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <h3 className="font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${badgeClass}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
