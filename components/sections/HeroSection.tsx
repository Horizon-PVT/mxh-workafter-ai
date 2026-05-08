import { CTAButton } from "@/components/ui/CTAButton";
import { RiskReportPreview } from "@/components/ui/RiskReportPreview";

const trustPills = ["Free risk scan", "No resume required", "Get a 30-day plan"];

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#fbf7ff_0%,#f6fbf9_48%,#fff8ed_100%)] px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-teal-100">
            From AI job anxiety to a clear next move
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Work changed. You are not finished.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Understand your AI job risk, rebuild your skills, prove your value, and find your
            next opportunity in the age of AI.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/onboarding">Check My AI Job Risk</CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white bg-white/75 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-indigo-300/35 via-teal-200/30 to-amber-200/35 blur-xl" />
          <div className="relative">
            <RiskReportPreview premium />
          </div>
        </div>
      </div>
    </section>
  );
}
