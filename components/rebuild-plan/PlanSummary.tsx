import type { RebuildPlan } from "@/types";

type PlanSummaryProps = {
  plan: RebuildPlan;
};

export function PlanSummary({ plan }: PlanSummaryProps) {
  const summaryItems = [
    { label: "AI Disruption Score", value: `${plan.currentScore}/100` },
    { label: "Target Role", value: plan.targetRole },
    { label: "Next Skill to Build", value: plan.nextSkill },
    { label: "Progress", value: `${plan.progressPercent}%` },
  ];

  return (
    <section className="rounded-lg border border-white/80 bg-white/90 p-6 shadow-xl shadow-indigo-100/50 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
        Career Rebuild Plan
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        Your 30-Day Career Rebuild Plan
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Turn your AI risk insight into a practical, step-by-step rebuild path.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryItems.map((item) => (
          <article key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-2 text-base font-semibold leading-6 text-slate-950">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
