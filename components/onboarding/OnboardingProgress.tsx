import { useTranslations } from "next-intl";

type OnboardingProgressProps = {
  currentStep: number;
  steps: string[];
};

export function OnboardingProgress({ currentStep, steps }: OnboardingProgressProps) {
  const t = useTranslations("onboarding.progress");
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-700">
          {t("stepOf", { current: currentStep + 1, total: steps.length })}
        </p>
        <p className="text-sm font-medium text-slate-500">{steps[currentStep]}</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-teal-500 to-amber-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 hidden grid-cols-7 gap-2 md:grid">
        {steps.map((step, index) => (
          <div key={step} className="text-center">
            <span className="text-xs font-medium text-slate-500">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
