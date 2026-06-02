import { Section } from "@/components/ui/Section";
import { useTranslations } from "next-intl";

export function HowItWorksSection() {
  const t = useTranslations("landing.how");
  const steps = t.raw("steps") as Array<{
    title: string;
    description: string;
    badge: string;
  }>;

  return (
    <Section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-indigo-100 hover:bg-white hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                {step.badge}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
