import { Section } from "@/components/ui/Section";

const audiences = [
  {
    title: "Worried workers",
    description: "See which parts of your job are changing and what to protect.",
    badge: "01",
  },
  {
    title: "Recently laid off",
    description: "Find a clearer path without starting from zero.",
    badge: "02",
  },
  {
    title: "Career switchers",
    description: "Translate your experience into safer AI-era directions.",
    badge: "03",
  },
  {
    title: "Freelancers rebuilding income",
    description: "Package practical skills into proof clients can trust.",
    badge: "04",
  },
  {
    title: "AI-ready workers",
    description: "Learn where AI can strengthen the work you already do.",
    badge: "05",
  },
];

export function WhoThisIsForSection() {
  return (
    <Section id="who-this-is-for">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          Who This Is For
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Built for people who need a practical next move.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md"
          >
            <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700 ring-1 ring-teal-100">
              {audience.badge}
            </span>
            <h3 className="mt-4 text-base font-semibold leading-6 text-slate-950">
              {audience.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{audience.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
