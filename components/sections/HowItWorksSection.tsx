import { Section } from "@/components/ui/Section";

const steps = [
  {
    title: "Scan your AI job risk",
    description: "Identify the daily tasks most exposed to automation.",
    badge: "Scan",
  },
  {
    title: "Get your 30-day rebuild plan",
    description: "Turn the risk report into a focused weekly roadmap.",
    badge: "Plan",
  },
  {
    title: "Build proof-of-work",
    description: "Create visible samples for the direction you want next.",
    badge: "Proof",
  },
  {
    title: "Find your next opportunity",
    description: "Aim toward roles and projects where AI raises your value.",
    badge: "Next",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
          How It Works
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Turn uncertainty into a clear rebuild path.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-indigo-100 hover:bg-white hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                {step.badge}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
