import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("common");
  const landing = useTranslations("landing.hero");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="font-medium text-slate-800">{t("brand")}</p>
        <p>{landing("title")}</p>
        <Link className="font-semibold text-indigo-700 transition hover:text-indigo-900" href="/onboarding">
          {t("cta.checkRisk")}
        </Link>
      </div>
    </footer>
  );
}
