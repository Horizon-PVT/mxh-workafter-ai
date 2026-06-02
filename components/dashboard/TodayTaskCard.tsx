import { CTAButton } from "@/components/ui/CTAButton";
import type { DailyRebuildTask } from "@/types";
import { useTranslations } from "next-intl";

type TodayTaskCardProps = {
  task: DailyRebuildTask;
};

const statusLabelKeys = {
  Done: "done",
  "In progress": "inProgress",
  Next: "next",
  Upcoming: "upcoming",
} as const;

const difficultyLabelKeys = {
  Easy: "easy",
  Medium: "medium",
} as const;

export function TodayTaskCard({ task }: TodayTaskCardProps) {
  const t = useTranslations("dashboard.todayTask");
  const common = useTranslations("common");

  return (
    <section className="rounded-lg border border-indigo-100 bg-white/90 p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
        {t("eyebrow")}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{task.title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
          {common(`status.${statusLabelKeys[task.status]}`)}
        </span>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-100">
          {task.estimatedTime}
        </span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
          {common(`status.${difficultyLabelKeys[task.difficulty]}`)}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        {t("body")}
      </p>
      <div className="mt-5">
        <CTAButton href="/rebuild-plan">{common("cta.continueTask")}</CTAButton>
      </div>
    </section>
  );
}
