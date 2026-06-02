"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { CTAButton } from "@/components/ui/CTAButton";
import { TrackPageView } from "@/components/analytics/TrackPageView";
import { AppNav } from "@/components/layout/AppNav";
import { PivotPathCard } from "@/components/scanner/PivotPathCard";
import { RiskTaskCard } from "@/components/scanner/RiskTaskCard";
import { RoadmapPreview } from "@/components/scanner/RoadmapPreview";
import { ScoreSummary } from "@/components/scanner/ScoreSummary";
import { SkillCard } from "@/components/scanner/SkillCard";
import type { RebuildPlanWeek, ScannerResult } from "@/types";
import { getStoredOnboardingAnswers, generateScannerResult } from "@/lib/scanner-engine";

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

export function ScannerPageClient() {
  const t = useTranslations("scanner");
  const common = useTranslations("common");
  const activeLocale = useLocale();

  const [state, setState] = useState<{
    mounted: boolean;
    hasAnswers: boolean;
    personalizedResult: ScannerResult | null;
  }>({
    mounted: false,
    hasAnswers: false,
    personalizedResult: null,
  });

  // Default translation-based mock data as fallback
  const fallbackResult = {
    disruptionScore: t.raw("result.disruptionScore"),
    riskLevel: t("result.riskLevel"),
    supportiveExplanation: t("result.supportiveExplanation"),
    tasksAtRisk: t.raw("tasksAtRisk"),
    humanStrengths: t.raw("humanStrengths"),
    pivotPaths: t.raw("pivotPaths"),
    skillsToBuild: t.raw("skillsToBuild"),
  } as ScannerResult;

  const weeks = useTranslations().raw("rebuildPlan.roadmap.weeks") as RebuildPlanWeek[];

  useEffect(() => {
    const timer = setTimeout(() => {
      const answers = getStoredOnboardingAnswers();
      const hasAns = !!(answers && answers.dailyTasks && answers.dailyTasks.length > 0);
      const res = hasAns ? generateScannerResult(answers!, activeLocale) : null;
      
      setState({
        mounted: true,
        hasAnswers: hasAns,
        personalizedResult: res,
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

  const result = state.personalizedResult || fallbackResult;
  const hasAnswers = state.hasAnswers;

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <TrackPageView eventName="scanner_viewed" />
      <div className="mx-auto max-w-7xl">
        <AppNav />
        
        {!hasAnswers && <SampleDataBanner />}

        <ScoreSummary result={result} />

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {result.tasksAtRisk.map((task) => (
            <RiskTaskCard key={task.title} task={task} />
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-teal-100 bg-white/90 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              {t("humanStrengthsSection.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {t("humanStrengthsSection.title")}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t("humanStrengthsSection.body")}
            </p>
            <div className="mt-6 grid gap-3">
              {result.humanStrengths.map((strength) => (
                <article
                  key={strength.title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="font-semibold text-slate-950">{strength.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{strength.explanation}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
              {t("pivotSection.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {t("pivotSection.title")}
            </h2>
            <div className="mt-6 grid gap-4">
              {result.pivotPaths.map((path) => (
                <PivotPathCard key={path.title} path={path} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              {t("skillsSection.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {t("skillsSection.title")}
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {result.skillsToBuild.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </section>

        <RoadmapPreview weeks={weeks} />

        <section className="mt-10 rounded-lg bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950 p-6 text-center shadow-2xl shadow-indigo-200 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
            {t("cta.eyebrow")}
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {t("cta.body")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton
              href="/rebuild-plan"
              className="bg-amber-400 text-slate-950 hover:bg-amber-300"
              analyticsEvent="rebuild_plan_started"
              analyticsProperties={{ source: "scanner_primary_cta" }}
            >
              {common("cta.startRebuildPlan")}
            </CTAButton>
            <CTAButton href="/dashboard" variant="secondary">
              {common("cta.goDashboard")}
            </CTAButton>
            <CTAButton href="/onboarding" variant="secondary">
              {common("cta.rescan")}
            </CTAButton>
          </div>
        </section>
      </div>
    </main>
  );
}
