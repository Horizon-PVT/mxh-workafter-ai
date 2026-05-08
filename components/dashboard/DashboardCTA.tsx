import { CTAButton } from "@/components/ui/CTAButton";

export function DashboardCTA() {
  return (
    <section className="rounded-lg bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950 p-6 text-center shadow-2xl shadow-indigo-200 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
        Keep Moving
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white">
        Small proof beats vague intention.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
        Stay close to the task that creates evidence today.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <CTAButton href="/rebuild-plan" className="bg-amber-400 text-slate-950 hover:bg-amber-300">
          Continue Today&apos;s Task
        </CTAButton>
        <CTAButton href="/rebuild-plan" variant="secondary">
          View Rebuild Plan
        </CTAButton>
      </div>
    </section>
  );
}
