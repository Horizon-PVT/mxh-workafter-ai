import type { RiskTask } from "@/types";

type RiskTaskCardProps = {
  task: RiskTask;
};

export function RiskTaskCard({ task }: RiskTaskCardProps) {
  return (
    <article className="rounded-lg border border-amber-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
        High-risk task
      </span>
      <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{task.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{task.explanation}</p>
    </article>
  );
}
