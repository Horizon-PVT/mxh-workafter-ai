import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const appNavItems = [
  { href: "/dashboard", labelKey: "dashboard" },
  { href: "/scanner", labelKey: "riskReport" },
  { href: "/rebuild-plan", labelKey: "rebuildPlan" },
];

export function AppNav() {
  const t = useTranslations("common");

  return (
    <nav
      aria-label={t("nav.dashboard")}
      className="mb-6 rounded-lg border border-white/80 bg-white/90 px-4 py-3 shadow-sm shadow-indigo-100/50"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="text-sm font-semibold text-indigo-700 transition hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href="/"
        >
          {t("backToHome")}
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {appNavItems.map((item) => (
            <Link
              key={item.href}
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href={item.href}
            >
              {t(`nav.${item.labelKey}`)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
