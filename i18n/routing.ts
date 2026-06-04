import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function isRtlLocale(locale: string): boolean {
  return locale === "ar";
}
