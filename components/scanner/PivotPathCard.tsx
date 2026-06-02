import type { PivotPath } from "@/types";
import { useTranslations } from "next-intl";

type PivotPathCardProps = {
  path: PivotPath;
};

export function PivotPathCard({ path }: PivotPathCardProps) {
  const t = useTranslations("scanner");

  return (
    <article className="rounded-lg border border-indigo-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-950">{path.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{path.whyItFits}</p>
        </div>
        <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
          {path.difficulty}
        </span>
      </div>
      <div className="mt-4 rounded-lg bg-teal-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
          {t("pivotFirstSkill")}
        </p>
        <p className="mt-1 text-sm font-semibold leading-6 text-teal-950">{path.firstSkill}</p>
      </div>
    </article>
  );
}
