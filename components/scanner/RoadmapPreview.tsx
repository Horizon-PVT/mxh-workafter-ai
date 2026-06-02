import type { RebuildPlanWeek } from "@/types";
import { useTranslations } from "next-intl";

type RoadmapPreviewProps = {
  weeks: RebuildPlanWeek[];
};

export function RoadmapPreview({ weeks }: RoadmapPreviewProps) {
  const t = useTranslations("scanner.roadmapPreview");
  const common = useTranslations("common");

  return (
    <section className="mt-10 rounded-lg border border-indigo-100 bg-white/90 p-6 shadow-sm sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {t("title")}
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-4">
        {weeks.map((week) => (
          <article key={week.week} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              {week.week}
            </span>
            <h3 className="mt-4 text-base font-semibold leading-6 text-slate-950">
              {common("labels.weekWithTitle", { week: week.week, title: week.title })}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
