import { AppNav } from "@/components/layout/AppNav";
import { DashboardCTA } from "@/components/dashboard/DashboardCTA";
import { DashboardSummaryCard } from "@/components/dashboard/DashboardSummaryCard";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { ProfileCompletionCard } from "@/components/dashboard/ProfileCompletionCard";
import { ProgressOverview } from "@/components/dashboard/ProgressOverview";
import { RiskSummaryCard } from "@/components/dashboard/RiskSummaryCard";
import { TodayTaskCard } from "@/components/dashboard/TodayTaskCard";
import { dashboardSummary } from "@/data/mock-user";
import { rebuildPlan } from "@/data/mock-plan";
import { scannerResult } from "@/data/mock-scanner";

export default function DashboardPage() {
  const todayTask = rebuildPlan.dailyTasks[0];
  const strongestHumanStrength = scannerResult.humanStrengths[0];
  const topRiskTask = scannerResult.tasksAtRisk[0];

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNav />
        <section className="rounded-lg border border-white/80 bg-white/90 p-5 shadow-xl shadow-indigo-100/50 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Welcome back. Your next move is clear.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Track your AI risk, rebuild progress, and next useful action.
          </p>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardSummaryCard
            label="AI Disruption Score"
            value={`${dashboardSummary.disruptionScore}/100`}
            tone="indigo"
          />
          <DashboardSummaryCard
            label="Next Skill to Build"
            value={dashboardSummary.nextSkill}
            tone="teal"
          />
          <DashboardSummaryCard
            label="Best Opportunity Match"
            value={dashboardSummary.bestOpportunityMatch}
            tone="amber"
          />
          <DashboardSummaryCard
            label="30-Day Plan Progress"
            value={`${dashboardSummary.planProgressPercent}%`}
            tone="indigo"
          />
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <TodayTaskCard task={todayTask} />
          <ProgressOverview
            completedTasksCount={rebuildPlan.completedTasksCount}
            currentWeek={rebuildPlan.currentWeek}
            nextMilestone={dashboardSummary.nextMilestone}
            progressPercent={dashboardSummary.planProgressPercent}
          />
        </section>

        <section className="mt-5 grid items-start gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <RiskSummaryCard
            riskLevel={scannerResult.riskLevel}
            strongestHumanStrength={strongestHumanStrength.title}
            topRiskTask={topRiskTask.title}
          />

          <div className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Recommended Next Actions
            </p>
            <div className="mt-5 grid gap-3">
              {dashboardSummary.recommendedActions.map((action) => (
                <DashboardSummaryCard
                  key={action.title}
                  label={action.title}
                  value={action.description}
                  href={action.href}
                  tone="teal"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
              Closest Opportunity
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Rebuild-friendly paths to keep in view.
            </h2>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {dashboardSummary.opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.title} opportunity={opportunity} />
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <ProfileCompletionCard
            nextStep={dashboardSummary.profileNextStep}
            percent={dashboardSummary.profileCompletionPercent}
          />
          <DashboardCTA />
        </section>
      </div>
    </main>
  );
}
