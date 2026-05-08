import type { ScannerResult } from "@/types";

type ScoreSummaryProps = {
  result: ScannerResult;
};

export function ScoreSummary({ result }: ScoreSummaryProps) {
  return (
    <section className="grid gap-6 rounded-lg border border-white/80 bg-white/90 p-6 shadow-xl shadow-indigo-100/50 sm:p-8 lg:grid-cols-[1fr_320px] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
          AI Job Risk Report
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Your AI Disruption Score
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
            {result.riskLevel}
          </span>
          <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 ring-1 ring-teal-100">
            Rebuild plan ready
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {result.supportiveExplanation}
        </p>
      </div>

      <div className="rounded-lg border border-indigo-100 bg-[linear-gradient(135deg,#f7f3ff,#f2fbf8)] p-6 text-center shadow-sm">
        <div
          aria-label={`AI Disruption Score ${result.disruptionScore} out of 100`}
          className="mx-auto grid size-44 place-items-center rounded-full"
          style={{
            background: `conic-gradient(#4f46e5 0deg, #14b8a6 ${
              result.disruptionScore * 3.6
            }deg, #e2e8f0 ${result.disruptionScore * 3.6}deg 360deg)`,
          }}
        >
          <div className="grid size-32 place-items-center rounded-full bg-white shadow-inner">
            <div>
              <p className="text-5xl font-semibold tracking-tight text-slate-950">
                {result.disruptionScore}
              </p>
              <p className="text-sm font-semibold text-slate-500">/100</p>
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm font-medium leading-6 text-slate-600">
          Medium risk means your role is changing, and you still have room to move early.
        </p>
      </div>
    </section>
  );
}
