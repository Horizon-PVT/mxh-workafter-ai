"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { AppNav } from "@/components/layout/AppNav";
import { TrackPageView } from "@/components/analytics/TrackPageView";
import { ChoiceCard } from "@/components/onboarding/ChoiceCard";
import { OnboardingProgress } from "@/components/onboarding/OnboardingProgress";
import { RoleFields } from "@/components/onboarding/RoleFields";
import { SummaryCard } from "@/components/onboarding/SummaryCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";
import type { OnboardingAnswers } from "@/types";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "workafterai:onboarding";

const initialAnswers: OnboardingAnswers = {
  situation: "",
  currentJobTitle: "",
  industry: "",
  yearsOfExperience: "",
  dailyTasks: [],
  aiSkillLevel: "",
  goal: "",
};

export function OnboardingFlow() {
  const t = useTranslations("onboarding");
  const common = useTranslations("common");
  const situationOptions = t.raw("situation.options") as string[];
  const taskOptions = t.raw("tasks.options") as string[];
  const aiSkillOptions = t.raw("aiSkill.options") as string[];
  const goalOptions = t.raw("goal.options") as string[];
  const steps = t.raw("steps") as Array<{ label: string; eyebrow: string }>;
  const focusItems = t.raw("focus.items") as string[];
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<OnboardingAnswers>(initialAnswers);
  const restoredAnswers = useRef(false);
  const isFinalStep = currentStep === steps.length - 1;

  useEffect(() => {
    const restoreAnswers = window.setTimeout(() => {
      const storedAnswers = window.localStorage.getItem(STORAGE_KEY);

      if (storedAnswers) {
        try {
          setAnswers({ ...initialAnswers, ...JSON.parse(storedAnswers) });
        } catch {
          setAnswers(initialAnswers);
        }
      }

      restoredAnswers.current = true;
    }, 0);

    return () => window.clearTimeout(restoreAnswers);
  }, []);

  useEffect(() => {
    if (!restoredAnswers.current) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers]);

  const canContinue = useMemo(() => {
    if (currentStep === 0 || currentStep === 6) {
      return true;
    }

    if (currentStep === 1) {
      return Boolean(answers.situation);
    }

    if (currentStep === 2) {
      return Boolean(
        answers.currentJobTitle.trim() &&
          answers.industry.trim() &&
          answers.yearsOfExperience.trim() &&
          /^\d+$/.test(answers.yearsOfExperience.trim()),
      );
    }

    if (currentStep === 3) {
      return answers.dailyTasks.length > 0;
    }

    if (currentStep === 4) {
      return Boolean(answers.aiSkillLevel);
    }

    if (currentStep === 5) {
      return Boolean(answers.goal);
    }

    return false;
  }, [answers, currentStep]);

  function updateAnswer<Key extends keyof OnboardingAnswers>(
    key: Key,
    value: OnboardingAnswers[Key],
  ) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function toggleTask(task: string) {
    setAnswers((current) => {
      const hasTask = current.dailyTasks.includes(task);

      return {
        ...current,
        dailyTasks: hasTask
          ? current.dailyTasks.filter((item) => item !== task)
          : [...current.dailyTasks, task],
      };
    });
  }

  function goBack() {
    setCurrentStep((step) => Math.max(0, step - 1));
  }

  function goNext() {
    if (!canContinue) {
      return;
    }

    setCurrentStep((step) => Math.min(steps.length - 1, step + 1));
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <TrackPageView eventName="onboarding_started" />
      <div className="mx-auto max-w-5xl">
        <AppNav />

        <section className="rounded-lg border border-white/80 bg-white/90 p-5 shadow-xl shadow-indigo-100/50 sm:p-8">
          <OnboardingProgress
            currentStep={currentStep}
            steps={steps.map((step) => step.label)}
          />

          <div className="mt-7 grid gap-7 lg:grid-cols-[0.72fr_0.28fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                {steps[currentStep].eyebrow}
              </p>
              {currentStep === 0 && <WelcomeStep />}
              {currentStep === 1 && (
                <ChoiceStep
                  title={t("situation.title")}
                  options={situationOptions}
                  selectedValues={answers.situation ? [answers.situation] : []}
                  onSelect={(value) => updateAnswer("situation", value)}
                />
              )}
              {currentStep === 2 && (
                <RoleFields
                  answers={answers}
                  onChange={(key, value) => updateAnswer(key, value)}
                />
              )}
              {currentStep === 3 && (
                <ChoiceStep
                  title={t("tasks.title")}
                  description={t("tasks.description")}
                  options={taskOptions}
                  selectedValues={answers.dailyTasks}
                  onSelect={toggleTask}
                  multiple
                  compact
                />
              )}
              {currentStep === 4 && (
                <ChoiceStep
                  title={t("aiSkill.title")}
                  description={t("aiSkill.description")}
                  options={aiSkillOptions}
                  selectedValues={answers.aiSkillLevel ? [answers.aiSkillLevel] : []}
                  onSelect={(value) => updateAnswer("aiSkillLevel", value)}
                />
              )}
              {currentStep === 5 && (
                <ChoiceStep
                  title={t("goal.title")}
                  options={goalOptions}
                  selectedValues={answers.goal ? [answers.goal] : []}
                  onSelect={(value) => updateAnswer("goal", value)}
                />
              )}
              {currentStep === 6 && <SummaryCard answers={answers} />}
            </div>

            <aside className="rounded-lg border border-indigo-100 bg-indigo-50/70 p-5">
              <p className="text-sm font-semibold text-indigo-800">{t("focus.title")}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-950">
                {focusItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between bg-transparent">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-400"
              disabled={currentStep === 0}
              onClick={goBack}
              type="button"
            >
              {t("buttons.back")}
            </button>

            {isFinalStep ? (
              <CTAButton href="/scanner" analyticsEvent="onboarding_completed">
                {common("cta.viewRiskReport")}
              </CTAButton>
            ) : (
              <button
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition",
                  canContinue
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700"
                    : "cursor-not-allowed bg-slate-200 text-slate-500 shadow-none",
                )}
                disabled={!canContinue}
                onClick={goNext}
                type="button"
              >
                {t("buttons.continue")}
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function WelcomeStep() {
  const t = useTranslations("onboarding.welcome");

  return (
    <div>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        {t("body")}
      </p>
    </div>
  );
}

function ChoiceStep({
  title,
  description,
  options,
  selectedValues,
  onSelect,
  multiple = false,
  compact = false,
}: {
  title: string;
  description?: string;
  options: string[];
  selectedValues: string[];
  onSelect: (value: string) => void;
  multiple?: boolean;
  compact?: boolean;
}) {
  return (
    <div>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
      )}
      <div className={cn("mt-6 grid gap-3 sm:grid-cols-2", compact && "lg:grid-cols-3")}>
        {options.map((option) => (
          <ChoiceCard
            key={option}
            label={option}
            selected={selectedValues.includes(option)}
            multiple={multiple}
            compact={compact}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
