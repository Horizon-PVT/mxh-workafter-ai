import type { DailyRebuildTask } from "@/types";

type TaskCardProps = {
  task: DailyRebuildTask;
};

const statusClasses = {
  Done: "bg-teal-50 text-teal-700 ring-teal-100",
  "In progress": "bg-indigo-50 text-indigo-700 ring-indigo-100",
  Next: "bg-amber-50 text-amber-700 ring-amber-100",
  Upcoming: "bg-slate-100 text-slate-600 ring-slate-200",
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses[task.status]}`}>
          {task.status}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {task.estimatedTime}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-950">{task.title}</h3>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-slate-500">Difficulty: {task.difficulty}</span>
        <span className="text-sm font-semibold text-indigo-700">
          {task.status === "Done" ? "Completed" : "Ready when you are"}
        </span>
      </div>
    </article>
  );
}
