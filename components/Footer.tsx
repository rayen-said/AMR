"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 dark:border-white/10 dark:bg-[#0a0f1d] sm:px-6 lg:px-8 mt-auto">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-6 w-6 rounded bg-linear-to-br from-green-500 to-lime-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs leading-none">A</span>
          </div>
          <span className="font-bold tracking-tight text-slate-900 dark:text-white">
            AMR Solutions
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t("copyright")}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 dark:text-slate-500">
          {t("compliance")}
        </p>
      </div>
    </footer>
  );
}
