import { CTAButton } from "@/components/ui/CTAButton";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const navItems = [
  { href: "#problem", labelKey: "problem" },
  { href: "#who-this-is-for", labelKey: "who" },
  { href: "#how-it-works", labelKey: "how" },
  { href: "#features", labelKey: "features" },
];

export function Header() {
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-20 border-b border-indigo-100/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label={t("brand")}>
          <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-teal-600 text-sm font-bold text-white shadow-sm shadow-indigo-200">
            {t("logoText")}
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight text-slate-950">
              {t("brand")}
            </span>
            <span className="hidden text-xs font-medium text-slate-500 md:block">
              {t("tagline")}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex"
          aria-label={t("nav.features")}
        >
          {navItems.map((item) => (
            <Link key={item.href} className="transition hover:text-indigo-700" href={item.href}>
              {t(`nav.${item.labelKey}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <LanguageSwitcher />
          <CTAButton
            href="/onboarding"
            size="sm"
            analyticsEvent="landing_cta_clicked"
            analyticsProperties={{ placement: "header" }}
          >
            {t("cta.checkRisk")}
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
