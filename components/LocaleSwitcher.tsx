"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative">
      <label htmlFor="locale-select" className="sr-only">
        {t("language")}
      </label>
      <Globe
        className="pointer-events-none absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-500 dark:text-teal-400"
        aria-hidden
      />
      <select
        id="locale-select"
        value={locale}
        onChange={(e) => handleChange(e.target.value as Locale)}
        className="h-9 appearance-none rounded-lg border border-neutral-200 bg-neutral-100 ps-8 pe-8 text-sm font-medium text-neutral-700 transition-colors hover:border-emerald-500/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeLabels[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
