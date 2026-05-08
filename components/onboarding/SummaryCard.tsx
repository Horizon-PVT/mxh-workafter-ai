import type { OnboardingAnswers } from "@/types";

type SummaryCardProps = {
  answers: OnboardingAnswers;
};

export function SummaryCard({ answers }: SummaryCardProps) {
  return (
    <div>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        Your scan is ready.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        We&apos;ve prepared a personalized AI Job Risk starting point based on your situation.
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <SummaryItem label="Situation" value={answers.situation} />
        <SummaryItem label="Role" value={answers.currentJobTitle} />
        <SummaryItem label="Industry" value={answers.industry} />
        <SummaryItem label="Experience" value={answers.yearsOfExperience} />
        <SummaryItem label="AI comfort" value={answers.aiSkillLevel} />
        <SummaryItem label="Goal" value={answers.goal} />
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Daily tasks
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {answers.dailyTasks.length > 0 ? (
              answers.dailyTasks.map((task) => (
                <span
                  key={task}
                  className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-teal-100"
                >
                  {task}
                </span>
              ))
            ) : (
              <p className="text-sm font-semibold text-slate-900">Not provided</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
        {value.trim() || "Not provided"}
      </p>
    </div>
  );
}
