import { CTAButton } from "@/components/ui/CTAButton";
import { AppNav } from "@/components/layout/AppNav";
import { PivotPathCard } from "@/components/scanner/PivotPathCard";
import { RiskTaskCard } from "@/components/scanner/RiskTaskCard";
import { RoadmapPreview } from "@/components/scanner/RoadmapPreview";
import { ScoreSummary } from "@/components/scanner/ScoreSummary";
import { SkillCard } from "@/components/scanner/SkillCard";
import { scannerResult } from "@/data/mock-scanner";
import { rebuildPlan } from "@/data/mock-plan";

export default function ScannerPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_50%,#fff8ed_100%)] px-5 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AppNav />
        <ScoreSummary result={scannerResult} />

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {scannerResult.tasksAtRisk.map((task) => (
            <RiskTaskCard key={task.title} task={task} />
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-teal-100 bg-white/90 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Human Strengths To Protect
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              These strengths keep you valuable.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              AI can speed up routine output, but your value grows when you pair tools with human
              judgment, context, and care.
            </p>
            <div className="mt-6 grid gap-3">
              {scannerResult.humanStrengths.map((strength) => (
                <article
                  key={strength.title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="font-semibold text-slate-950">{strength.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{strength.explanation}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
              Safer Pivot Paths
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Directions that build on your existing experience.
            </h2>
            <div className="mt-6 grid gap-4">
              {scannerResult.pivotPaths.map((path) => (
                <PivotPathCard key={path.title} path={path} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Skills To Build Next
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Start with practical skills that make your work more AI-ready.
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {scannerResult.skillsToBuild.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </section>

        <RoadmapPreview weeks={rebuildPlan.weeklyRoadmap} />

        <section className="mt-10 rounded-lg bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950 p-6 text-center shadow-2xl shadow-indigo-200 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
            Your Next Move
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Turn this report into a focused 30-day rebuild plan.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Keep the momentum while the next step is clear and specific.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href="/rebuild-plan" className="bg-amber-400 text-slate-950 hover:bg-amber-300">
              Start My Rebuild Plan
            </CTAButton>
            <CTAButton href="/dashboard" variant="secondary">
              Go to Dashboard
            </CTAButton>
            <CTAButton href="/onboarding" variant="secondary">
              Re-scan My Role
            </CTAButton>
          </div>
        </section>
      </div>
    </main>
  );
}
