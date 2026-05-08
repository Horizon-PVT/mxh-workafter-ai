import Link from "next/link";

type ProgressOverviewProps = {
  progressPercent: number;
  currentWeek: number;
  completedTasksCount: number;
  nextMilestone: string;
};

export function ProgressOverview({
  progressPercent,
  currentWeek,
  completedTasksCount,
  nextMilestone,
}: ProgressOverviewProps) {
  return (
    <section className="rounded-lg border border-teal-100 bg-white/90 p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            30-Day Rebuild Progress
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {progressPercent}% complete
          </h2>
        </div>
        <Link
          className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href="/rebuild-plan"
        >
          View plan
        </Link>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-teal-500 to-amber-400"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <ProgressItem label="Current week" value={`Week ${currentWeek}`} />
        <ProgressItem label="Completed tasks" value={`${completedTasksCount}`} />
        <ProgressItem label="Next milestone" value={nextMilestone} />
      </div>
    </section>
  );
}

function ProgressItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{value}</p>
    </div>
  );
}
