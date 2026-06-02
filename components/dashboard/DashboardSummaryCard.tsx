import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type DashboardSummaryCardProps = {
  label: string;
  value: string;
  tone: "indigo" | "teal" | "amber";
  href?: string;
};

const toneClasses = {
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  teal: "bg-teal-50 text-teal-700 ring-teal-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
};

export function DashboardSummaryCard({ label, value, tone, href }: DashboardSummaryCardProps) {
  const content = (
    <>
      <span
        className={cn(
          "inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1",
          toneClasses[tone],
        )}
      >
        {label}
      </span>
      <p className="mt-3 text-base font-semibold leading-6 text-slate-950">{value}</p>
    </>
  );

  const className =
    "rounded-lg border border-slate-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

  if (href) {
    return (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
