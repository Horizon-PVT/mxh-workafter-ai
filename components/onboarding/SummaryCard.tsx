import type { OnboardingAnswers } from "@/types";
import { useTranslations } from "next-intl";

type SummaryCardProps = {
  answers: OnboardingAnswers;
};

export function SummaryCard({ answers }: SummaryCardProps) {
  const t = useTranslations("onboarding.summary");
  const common = useTranslations("common");

  return (
    <div>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        {t("body")}
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <SummaryItem label={t("labels.situation")} value={answers.situation} />
        <SummaryItem label={t("labels.role")} value={answers.currentJobTitle} />
        <SummaryItem label={t("labels.industry")} value={answers.industry} />
        <SummaryItem label={t("labels.experience")} value={answers.yearsOfExperience} />
        <SummaryItem label={t("labels.aiComfort")} value={answers.aiSkillLevel} />
        <SummaryItem label={t("labels.goal")} value={answers.goal} />
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {t("labels.dailyTasks")}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {answers.dailyTasks.length > 0 ? (
              answers.dailyTasks.map((task) => (
                <span
                  key={task}
                  className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-100"
                >
                  {task}
                </span>
              ))
            ) : (
              <p className="text-sm font-semibold text-slate-900">
                {common("labels.notProvided")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  const common = useTranslations("common");

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
        {value.trim() || common("labels.notProvided")}
      </p>
    </div>
  );
}
