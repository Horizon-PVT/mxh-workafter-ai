import Link from "next/link";

type RiskSummaryCardProps = {
  riskLevel: string;
  topRiskTask: string;
  strongestHumanStrength: string;
};

export function RiskSummaryCard({
  riskLevel,
  topRiskTask,
  strongestHumanStrength,
}: RiskSummaryCardProps) {
  return (
    <section className="rounded-lg border border-amber-100 bg-white/90 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
            AI Risk Summary
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{riskLevel}</h2>
        </div>
        <Link
          className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href="/scanner"
        >
          View Risk Report
        </Link>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-amber-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
            Top high-risk task
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{topRiskTask}</p>
        </div>
        <div className="rounded-lg bg-teal-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Strongest human strength
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">
            {strongestHumanStrength}
          </p>
        </div>
      </div>
    </section>
  );
}
