import type { RebuildPlanWeek } from "@/types";
import { useTranslations } from "next-intl";

type WeeklyRoadmapProps = {
  weeks: RebuildPlanWeek[];
};

const statusClasses = {
  Done: "bg-teal-50 text-teal-700 ring-teal-100",
  "In progress": "bg-indigo-50 text-indigo-700 ring-indigo-100",
  Next: "bg-amber-50 text-amber-700 ring-amber-100",
  Upcoming: "bg-slate-100 text-slate-600 ring-slate-200",
};

const statusLabelKeys = {
  Done: "done",
  "In progress": "inProgress",
  Next: "next",
  Upcoming: "upcoming",
} as const;

export function WeeklyRoadmap({ weeks }: WeeklyRoadmapProps) {
  const t = useTranslations("rebuildPlan.roadmap");
  const common = useTranslations("common");

  return (
    <section className="mt-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {t("title")}
        </h2>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-4">
        {weeks.map((week) => (
          <article
            key={week.week}
            className="rounded-lg border border-indigo-100 bg-white/90 p-5 shadow-sm"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              {week.week}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
              {common("labels.weekWithTitle", { week: week.week, title: week.title })}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{week.description}</p>
            <ul className="mt-5 space-y-3">
              {week.tasks.map((task) => (
                <li key={task.title} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-sm font-semibold leading-6 text-slate-800">{task.title}</p>
                  <span
                    className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses[task.status]}`}
                  >
                    {common(`status.${statusLabelKeys[task.status]}`)}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
