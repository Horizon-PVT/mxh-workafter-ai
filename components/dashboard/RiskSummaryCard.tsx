import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type RiskSummaryCardProps = {
  riskLevel: string;
  topRiskTask: string;
  strongestHumanStrength: string;
};

export function RiskSummaryCard({
  riskLevel,
  topRiskTask,
  strongestHumanStrength,
}: RiskSummaryCardProps) {
  const t = useTranslations("dashboard.risk");
  const common = useTranslations("common");

  return (
    <section className="rounded-lg border border-amber-100 bg-white/90 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{riskLevel}</h2>
        </div>
        <Link
          className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 self-start sm:self-auto"
          href="/scanner"
        >
          {common("cta.viewRiskReport")} &rarr;
        </Link>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-amber-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
            {t("topTask")}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{topRiskTask}</p>
        </div>
        <div className="rounded-lg bg-teal-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            {t("strongestStrength")}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">
            {strongestHumanStrength}
          </p>
        </div>
      </div>
    </section>
  );
}
