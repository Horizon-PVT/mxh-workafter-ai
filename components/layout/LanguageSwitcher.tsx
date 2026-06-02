"use client";

import {Link, locales, usePathname} from "@/i18n/routing";
import {useTranslations} from "next-intl";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const t = useTranslations("common");

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          aria-label={t("languageAria", {locale})}
          className="inline-flex min-h-7 min-w-8 items-center justify-center rounded-full px-2 text-xs font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          href={pathname}
          locale={locale}
        >
          {t(`languageLabels.${locale}`)}
        </Link>
      ))}
    </div>
  );
}
