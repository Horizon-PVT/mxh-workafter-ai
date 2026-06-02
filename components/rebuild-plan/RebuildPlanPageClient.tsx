"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { AppNav } from "@/components/layout/AppNav";
import { PlanCTA } from "@/components/rebuild-plan/PlanCTA";
import { PlanSummary } from "@/components/rebuild-plan/PlanSummary";
import { ProofOfWorkCard } from "@/components/rebuild-plan/ProofOfWorkCard";
import { SkillGapCard } from "@/components/rebuild-plan/SkillGapCard";
import { TaskCard } from "@/components/rebuild-plan/TaskCard";
import { WeeklyRoadmap } from "@/components/rebuild-plan/WeeklyRoadmap";
import { CTAButton } from "@/components/ui/CTAButton";
import type { DailyRebuildTask, RebuildPlan, RebuildPlanWeek } from "@/types";
import { getStoredOnboardingAnswers, generateScannerResult, generateRebuildPlan } from "@/lib/scanner-engine";

function SampleDataBanner() {
  const t = useTranslations("common.banners.sampleData");
  return (
    <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/80 p-4 shadow-sm backdrop-blur">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold text-amber-900">{t("title")}</p>
          <p className="text-sm text-amber-700 mt-1">{t("description")}</p>
        </div>
        <CTAButton
          href="/onboarding"
          className="bg-amber-500 hover:bg-amber-400 text-white whitespace-nowrap self-start sm:self-center shrink-0"
        >
          {t("cta")}
        </CTAButton>
      </div>
    </div>
  );
}

function ProgressStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{value}</p>
    </div>
  );
}

export function RebuildPlanPageClient() {
  const t = useTranslations("rebuildPlan");
  const common = useTranslations("common");
  const activeLocale = useLocale();

  const [state, setState] = useState<{
    mounted: boolean;
    hasAnswers: boolean;
    personalizedPlan: RebuildPlan | null;
  }>({
    mounted: false,
    hasAnswers: false,
    personalizedPlan: null,
  });

  // Fallback translation-based mock data
  const fallbackPlan = {
    title: t("plan.title"),
    currentScore: t.raw("plan.currentScore"),
    targetRole: t("plan.targetRole"),
    nextSkill: t("plan.nextSkill"),
    progressPercent: t.raw("plan.progressPercent"),
    currentWeek: t.raw("plan.currentWeek"),
    completedTasksCount: t.raw("plan.completedTasksCount"),
    nextAction: t("plan.nextAction"),
    weeklyRoadmap: t.raw("roadmap.weeks") as RebuildPlanWeek[],
    dailyTasks: t.raw("dailyTasks.items") as DailyRebuildTask[],
    currentStrengths: t.raw("skillGap.currentStrengthItems") as string[],
    skillsToBuildNext: t.raw("skillGap.skillsNextItems") as string[],
    skillGapSummary: t("skillGap.summary"),
    proofOfWorkGoals: t.raw("proof.goals") as string[],
  } satisfies RebuildPlan;

  const encouragementMessages = t.raw("encouragement.messages") as string[];

  useEffect(() => {
    const timer = setTimeout(() => {
      const answers = getStoredOnboardingAnswers();
      const hasAns = !!(answers && answers.dailyTasks && answers.dailyTasks.length > 0);
      let plan: RebuildPlan | null = null;

      if (hasAns) {
        const scannerRes = generateScannerResult(answers!, activeLocale);
        plan = generateRebuildPlan(answers!, scannerRes, activeLocale);
      }

      setState({
        mounted: true,
        hasAnswers: hasAns,
        personalizedPlan: plan,
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [activeLocale]);

  if (!state.mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const rebuildPlan = state.personalizedPlan || fallbackPlan;
  const hasAnswers = state.hasAnswers;

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNav />
        
        {!hasAnswers && <SampleDataBanner />}

        <PlanSummary plan={rebuildPlan} />

        <section className="mt-8 rounded-lg border border-indigo-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                {t("progress.eyebrow")}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {t("progress.title")}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {t("progress.body")}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-700">{t("progress.overall")}</span>
                <span className="text-sm font-bold text-indigo-700">{rebuildPlan.progressPercent}%</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-teal-500 to-amber-400"
                  style={{ width: `${rebuildPlan.progressPercent}%` }}
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <ProgressStat
                  label={t("progress.currentWeek")}
                  value={common("labels.week", { week: rebuildPlan.currentWeek })}
                />
                <ProgressStat
                  label={t("progress.completedTasks")}
                  value={`${rebuildPlan.completedTasksCount}`}
                />
                <ProgressStat label={t("progress.nextAction")} value={rebuildPlan.nextAction} />
              </div>
            </div>
          </div>
        </section>

        <WeeklyRoadmap weeks={rebuildPlan.weeklyRoadmap} />

        <section id="daily-tasks" className="mt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              {t("dailyTasks.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {t("dailyTasks.title")}
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rebuildPlan.dailyTasks.map((task) => (
              <TaskCard key={task.title} task={task} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SkillGapCard plan={rebuildPlan} />
          <ProofOfWorkCard goals={rebuildPlan.proofOfWorkGoals} />
        </section>

        <section className="mt-10 rounded-lg border border-teal-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            {t("encouragement.eyebrow")}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {encouragementMessages.map((message) => (
              <p
                key={message}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-base font-semibold leading-7 text-slate-800"
              >
                {message}
              </p>
            ))}
          </div>
        </section>

        <PlanCTA />
      </div>
    </main>
  );
}
