import { Section } from "@/components/ui/Section";

const reshapedTasks = [
  {
    label: "Writing & content",
    description: "Drafts, summaries, outlines, and repeatable content workflows.",
    badge: "WC",
  },
  {
    label: "Support & admin work",
    description: "Common replies, routing, scheduling, and routine documentation.",
    badge: "SA",
  },
  {
    label: "Research & operations",
    description: "Information gathering, comparisons, reporting, and process checks.",
    badge: "RO",
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Work is shifting faster than career advice can keep up.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-600">
            AI is changing work faster than most people can prepare. Writing, support, research,
            design, operations, and admin tasks are already being reshaped by automation.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reshapedTasks.map((task) => (
              <article
                key={task.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-700 ring-1 ring-indigo-100">
                  {task.badge}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-950">{task.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{task.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
