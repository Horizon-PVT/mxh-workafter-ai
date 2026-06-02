import type { OnboardingAnswers } from "@/types";
import { useTranslations } from "next-intl";

type RoleFieldsProps = {
  answers: OnboardingAnswers;
  onChange: (
    key: "currentJobTitle" | "industry" | "yearsOfExperience",
    value: string,
  ) => void;
};

const fields = [
  {
    key: "currentJobTitle" as const,
    labelKey: "currentJobTitle.label",
    placeholderKey: "currentJobTitle.placeholder",
    type: "text",
  },
  {
    key: "industry" as const,
    labelKey: "industry.label",
    placeholderKey: "industry.placeholder",
    type: "text",
  },
  {
    key: "yearsOfExperience" as const,
    labelKey: "yearsOfExperience.label",
    placeholderKey: "yearsOfExperience.placeholder",
    type: "number",
  },
];

export function RoleFields({ answers, onChange }: RoleFieldsProps) {
  const t = useTranslations("onboarding.role");

  return (
    <div>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {t("body")}
      </p>
      <div className="mt-7 grid gap-4">
        {fields.map((field) => (
          <label key={field.key} className="block">
            <span className="text-sm font-semibold text-slate-800">
              {t(`fields.${field.labelKey}`)}
            </span>
            <input
              className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
              onChange={(event) => onChange(field.key, event.target.value)}
              placeholder={t(`fields.${field.placeholderKey}`)}
              inputMode={field.type === "number" ? "numeric" : undefined}
              min={field.type === "number" ? "0" : undefined}
              type={field.type}
              value={answers[field.key]}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
