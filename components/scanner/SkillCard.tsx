import type { SkillToBuild } from "@/types";

type SkillCardProps = {
  skill: SkillToBuild;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-100 hover:shadow-md">
      <span className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-xs font-bold text-teal-700 ring-1 ring-teal-100">
        {skill.title
          .split(" ")
          .map((word) => word[0])
          .slice(0, 2)
          .join("")}
      </span>
      <h3 className="mt-4 text-base font-semibold leading-6 text-slate-950">{skill.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{skill.description}</p>
    </article>
  );
}
