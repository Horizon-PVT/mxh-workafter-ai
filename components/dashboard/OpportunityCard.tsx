import { Link } from "@/i18n/routing";
import type { DashboardOpportunity } from "@/types";
import { useTranslations } from "next-intl";

type OpportunityCardProps = {
  opportunity: DashboardOpportunity;
};

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const t = useTranslations("dashboard.opportunities");
  const common = useTranslations("common");

  return (
    <article className="rounded-lg border border-indigo-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
        {t("badge")}
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
        {opportunity.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{opportunity.matchReason}</p>
      <div className="mt-5 rounded-lg bg-teal-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
          {t("firstSkill")}
        </p>
        <p className="mt-1 text-sm font-semibold leading-6 text-teal-950">
          {opportunity.firstSkillRequired}
        </p>
      </div>
      <Link
        className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        href="/rebuild-plan"
      >
        {common("cta.viewPath")}
      </Link>
    </article>
  );
}
