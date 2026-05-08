import { AppNav } from "@/components/layout/AppNav";
import { PlanCTA } from "@/components/rebuild-plan/PlanCTA";
import { PlanSummary } from "@/components/rebuild-plan/PlanSummary";
import { ProofOfWorkCard } from "@/components/rebuild-plan/ProofOfWorkCard";
import { SkillGapCard } from "@/components/rebuild-plan/SkillGapCard";
import { TaskCard } from "@/components/rebuild-plan/TaskCard";
import { WeeklyRoadmap } from "@/components/rebuild-plan/WeeklyRoadmap";
import { rebuildPlan } from "@/data/mock-plan";

export default function RebuildPlanPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNav />
        <PlanSummary plan={rebuildPlan} />

        <section className="mt-8 rounded-lg border border-indigo-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                Progress Overview
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Focus on the next useful action.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                You do not need to solve the whole career shift today. Move one practical task
                forward and let the plan compound.
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-700">Overall progress</span>
                <span className="text-sm font-bold text-indigo-700">{rebuildPlan.progressPercent}%</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-teal-500 to-amber-400"
                  style={{ width: `${rebuildPlan.progressPercent}%` }}
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <ProgressStat label="Current week" value={`Week ${rebuildPlan.currentWeek}`} />
                <ProgressStat
                  label="Completed tasks"
                  value={`${rebuildPlan.completedTasksCount}`}
                />
                <ProgressStat label="Next action" value={rebuildPlan.nextAction} />
              </div>
            </div>
          </div>
        </section>

        <WeeklyRoadmap weeks={rebuildPlan.weeklyRoadmap} />

        <section id="daily-tasks" className="mt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Daily Task List
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Small tasks that make the plan real.
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rebuildPlan.dailyTasks.map((task) => (
              <TaskCard key={task.title} task={task} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SkillGapCard plan={rebuildPlan} />
          <ProofOfWorkCard goals={rebuildPlan.proofOfWorkGoals} />
        </section>

        <section className="mt-10 rounded-lg border border-teal-100 bg-white/90 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Keep This Human
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "You do not need to solve everything this week.",
              "Small proof beats vague intention.",
              "Your next move only needs to be clear enough to start.",
            ].map((message) => (
              <p
                key={message}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-base font-semibold leading-7 text-slate-800"
              >
                {message}
              </p>
            ))}
          </div>
        </section>

        <PlanCTA />
      </div>
    </main>
  );
}

function ProgressStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{value}</p>
    </div>
  );
}
