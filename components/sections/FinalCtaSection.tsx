import { CTAButton } from "@/components/ui/CTAButton";
import { Section } from "@/components/ui/Section";

export function FinalCtaSection() {
  return (
    <Section>
      <div className="rounded-lg bg-gradient-to-br from-indigo-950 via-slate-950 to-teal-950 px-6 py-12 text-center shadow-2xl shadow-indigo-200 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
          Start With Clarity
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Your role is changing. Your experience still has value.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Check your AI job risk and get a practical next step for your rebuild plan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/onboarding" className="bg-amber-400 text-slate-950 hover:bg-amber-300">
            Check My AI Job Risk
          </CTAButton>
          <span className="text-sm font-medium text-slate-300">Free scan. No resume required.</span>
        </div>
      </div>
    </Section>
  );
}
