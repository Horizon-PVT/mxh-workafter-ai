"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { AppNav } from "@/components/layout/AppNav";
import { TrackPageView } from "@/components/analytics/TrackPageView";
import { DashboardCTA } from "@/components/dashboard/DashboardCTA";
import { DashboardSummaryCard } from "@/components/dashboard/DashboardSummaryCard";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { ProfileCompletionCard } from "@/components/dashboard/ProfileCompletionCard";
import { ProgressOverview } from "@/components/dashboard/ProgressOverview";
import { RiskSummaryCard } from "@/components/dashboard/RiskSummaryCard";
import { TodayTaskCard } from "@/components/dashboard/TodayTaskCard";
import { CTAButton } from "@/components/ui/CTAButton";
import type {
  DailyRebuildTask,
  DashboardAction,
  DashboardOpportunity,
  HumanStrength,
  RiskTask,
  DashboardSummary,
  ScannerResult,
  RebuildPlan,
} from "@/types";
import {
  getStoredOnboardingAnswers,
  generateScannerResult,
  generateRebuildPlan,
  generateDashboardSummary,
} from "@/lib/scanner-engine";

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

export function DashboardPageClient() {
  const t = useTranslations("dashboard");
  const common = useTranslations("common");
  const scanner = useTranslations("scanner");
  const plan = useTranslations("rebuildPlan");
  const activeLocale = useLocale();

  const [state, setState] = useState<{
    mounted: boolean;
    hasAnswers: boolean;
    personalizedSummary: DashboardSummary | null;
    personalizedResult: ScannerResult | null;
    personalizedPlan: RebuildPlan | null;
  }>({
    mounted: false,
    hasAnswers: false,
    personalizedSummary: null,
    personalizedResult: null,
    personalizedPlan: null,
  });

  // Fallback defaults from translations
  const fallbackTodayTask = (plan.raw("dailyTasks.items") as DailyRebuildTask[])[0];
  const fallbackStrongestHumanStrength = (scanner.raw("humanStrengths") as HumanStrength[])[0];
  const fallbackTopRiskTask = (scanner.raw("tasksAtRisk") as RiskTask[])[0];
  const fallbackRecommendedActions = t.raw("actions.items") as DashboardAction[];
  const fallbackOpportunities = t.raw("opportunities.items") as DashboardOpportunity[];
  
  const fallbackSummary: DashboardSummary = {
    firstName: t("user.firstName"),
    disruptionScore: scanner.raw("result.disruptionScore") as number,
    nextSkill: t("summary.nextSkillValue"),
    bestOpportunityMatch: t("summary.bestOpportunityValue"),
    todayTask: fallbackTodayTask.title,
    planProgressPercent: plan.raw("plan.progressPercent") as number,
    profileCompletionPercent: t.raw("profile.percent") as number,
    profileNextStep: t("profile.nextStep"),
    nextMilestone: t("progress.nextMilestoneValue"),
    recommendedActions: fallbackRecommendedActions,
    opportunities: fallbackOpportunities,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const answers = getStoredOnboardingAnswers();
      const hasAns = !!(answers && answers.dailyTasks && answers.dailyTasks.length > 0);
      let scannerRes: ScannerResult | null = null;
      let rebuildPlan: RebuildPlan | null = null;
      let summary: DashboardSummary | null = null;

      if (hasAns) {
        scannerRes = generateScannerResult(answers!, activeLocale);
        rebuildPlan = generateRebuildPlan(answers!, scannerRes, activeLocale);
        summary = generateDashboardSummary(answers!, scannerRes, rebuildPlan, activeLocale);
      }

      setState({
        mounted: true,
        hasAnswers: hasAns,
        personalizedResult: scannerRes,
        personalizedPlan: rebuildPlan,
        personalizedSummary: summary,
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

  const summary = state.personalizedSummary || fallbackSummary;
  const hasAnswers = state.hasAnswers;
  const personalizedResult = state.personalizedResult;
  const personalizedPlan = state.personalizedPlan;

  // Derive cards/components helper data
  const todayTask: DailyRebuildTask = personalizedPlan 
    ? personalizedPlan.dailyTasks[0] 
    : fallbackTodayTask;

  const strongestHumanStrength: HumanStrength = personalizedResult 
    ? personalizedResult.humanStrengths[0] 
    : fallbackStrongestHumanStrength;

  const topRiskTask: RiskTask = personalizedResult 
    ? personalizedResult.tasksAtRisk[0] 
    : fallbackTopRiskTask;

  const currentWeek = personalizedPlan ? personalizedPlan.currentWeek : (plan.raw("plan.currentWeek") as number);
  const completedTasksCount = personalizedPlan ? personalizedPlan.completedTasksCount : (plan.raw("plan.completedTasksCount") as number);

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <TrackPageView eventName="dashboard_viewed" />
      <div className="mx-auto max-w-7xl">
        <AppNav />
        
        {!hasAnswers && <SampleDataBanner />}

        <section className="rounded-lg border border-white/80 bg-white/90 p-5 shadow-xl shadow-indigo-100/50 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            {t("header.eyebrow")}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {t("header.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {t("header.body")}
          </p>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardSummaryCard
            label={t("summary.score")}
            value={common("labels.scoreOutOf100", { score: summary.disruptionScore })}
            tone="indigo"
          />
          <DashboardSummaryCard
            label={t("summary.nextSkill")}
            value={summary.nextSkill}
            tone="teal"
          />
          <DashboardSummaryCard
            label={t("summary.bestOpportunity")}
            value={summary.bestOpportunityMatch}
            tone="amber"
          />
          <DashboardSummaryCard
            label={t("summary.progress")}
            value={`${summary.planProgressPercent}%`}
            tone="indigo"
          />
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <TodayTaskCard task={todayTask} />
          <ProgressOverview
            completedTasksCount={completedTasksCount}
            currentWeek={currentWeek}
            nextMilestone={summary.nextMilestone}
            progressPercent={summary.planProgressPercent}
          />
        </section>

        <section className="mt-5 grid items-start gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <RiskSummaryCard
            riskLevel={personalizedResult ? personalizedResult.riskLevel : scanner("result.riskLevel")}
            strongestHumanStrength={strongestHumanStrength.title}
            topRiskTask={topRiskTask.title}
          />

          <div className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              {t("actions.eyebrow")}
            </p>
            <div className="mt-5 grid gap-3">
              {summary.recommendedActions.map((action) => (
                <DashboardSummaryCard
                  key={action.title}
                  label={action.title}
                  value={action.description}
                  href={action.href}
                  tone="teal"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
              {t("opportunities.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {t("opportunities.title")}
            </h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {summary.opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.title} opportunity={opportunity} />
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <ProfileCompletionCard
            nextStep={summary.profileNextStep}
            percent={summary.profileCompletionPercent}
          />
          <DashboardCTA />
        </section>
      </div>
    </main>
  );
}
