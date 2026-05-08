import { CTAButton } from "@/components/ui/CTAButton";

export function PlanCTA() {
  return (
    <section className="mt-10 rounded-lg bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950 p-6 text-center shadow-2xl shadow-indigo-200 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
        Continue The Rebuild
      </p>
      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Your next task is clear enough to start.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
        Keep this practical. One finished task creates more momentum than a perfect plan.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <CTAButton href="/rebuild-plan" className="bg-amber-400 text-slate-950 hover:bg-amber-300">
          Continue Today&apos;s Rebuild Task
        </CTAButton>
        <CTAButton href="/dashboard" variant="secondary">
          Go to Dashboard
        </CTAButton>
        <CTAButton href="/scanner" variant="secondary">
          Review My AI Risk Report
        </CTAButton>
      </div>
    </section>
  );
}
