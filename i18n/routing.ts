import {createNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const locales = ["en", "vi", "ja"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeCookie: {
    name: "NEXT_LOCALE",
    sameSite: "lax",
  },
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
