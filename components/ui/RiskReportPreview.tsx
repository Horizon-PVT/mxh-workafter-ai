import { cn } from "@/lib/utils";

const highRiskTasks = ["Basic writing", "Data entry", "Repetitive customer replies"];

const pivotPaths = [
  "AI Content Strategist",
  "Workflow Automation Assistant",
  "Customer Success AI Operator",
];

export function RiskReportPreview({ premium = false }: { premium?: boolean }) {
  return (
    <aside
      className={cn(
        "rounded-lg border border-indigo-100 bg-white p-5 shadow-xl shadow-indigo-100/70 sm:p-6",
        premium && "bg-white/95 shadow-2xl shadow-indigo-200/60 ring-1 ring-white/80",
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <p className="text-sm font-semibold text-indigo-700">AI Job Risk Report</p>
          <div className="mt-3 flex items-end gap-4">
            <h2 className="text-5xl font-semibold tracking-tight text-slate-950">
              68<span className="text-xl text-slate-500">/100</span>
            </h2>
            <div className="mb-2 h-2 w-24 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-indigo-500 via-teal-500 to-amber-400" />
            </div>
          </div>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
          Changing fast
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <PreviewList title="High-risk tasks" items={highRiskTasks} tone="amber" />
        <PreviewList title="Safer pivot paths" items={pivotPaths} tone="teal" />
      </div>

      <div className="mt-5 rounded-lg border border-teal-100 bg-teal-50/70 p-4">
        <p className="text-sm font-semibold text-teal-800">Next move</p>
        <p className="mt-1 text-sm leading-6 text-teal-900">
          Turn repetitive support work into AI-assisted customer workflows.
        </p>
      </div>
    </aside>
  );
}

function PreviewList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "amber" | "teal";
}) {
  const dotClass = tone === "amber" ? "bg-amber-400" : "bg-teal-500";

  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className={`mt-2 size-2 shrink-0 rounded-full ${dotClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
