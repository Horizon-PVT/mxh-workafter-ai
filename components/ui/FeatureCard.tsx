type FeatureCardProps = {
  title: string;
  description: string;
  accent: "indigo" | "teal" | "amber";
  icon?: string;
};

const accentClasses = {
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  teal: "bg-teal-50 text-teal-700 ring-teal-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
};

export function FeatureCard({ title, description, accent, icon }: FeatureCardProps) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-lg focus-within:border-indigo-200">
      <div
        className={`mb-5 flex size-11 items-center justify-center rounded-lg text-sm font-bold ring-1 transition group-hover:scale-105 ${accentClasses[accent]}`}
      >
        {icon ??
          title
          .split(" ")
          .map((word) => word[0])
          .slice(0, 2)
          .join("")}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
