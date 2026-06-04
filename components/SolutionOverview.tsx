"use client";

import { Box, Cloud, Cpu, Layers, Server, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

const PILLAR_CONFIG = [
  { key: "edge" as const, icon: Cpu },
  { key: "enterprise" as const, icon: Server },
  { key: "informatics" as const, icon: Box },
];

export default function SolutionOverview() {
  const t = useTranslations("solutions");

  return (
    <section
      id="solutions"
      className="relative border-y border-neutral-200 bg-white dark:border-neutral-800/60 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PILLAR_CONFIG.map(({ key, icon: Icon }, index) => {
            const highlights = t.raw(`pillars.${key}.highlights`) as string[];
            return (
              <article
                key={key}
                className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-emerald-500/30 dark:hover:bg-neutral-900/70 dark:hover:shadow-emerald-950/20"
              >
                <div className="absolute -top-3 start-8 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white font-mono text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-950">
                  {index + 1}
                </div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-500/15 dark:text-emerald-400">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  {t(`pillars.${key}.title`)}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                  {t(`pillars.${key}.tagline`)}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t(`pillars.${key}.description`)}
                </p>
                <ul className="mt-6 space-y-2 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <Layers className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-neutral-500 dark:text-neutral-600">
          <span className="flex items-center gap-2 text-xs uppercase tracking-wider">
            <Cloud className="h-4 w-4" aria-hidden />
            {t("syncOnline")}
          </span>
          <span className="flex items-center gap-2 text-xs uppercase tracking-wider">
            <Smartphone className="h-4 w-4" aria-hidden />
            {t("mobileReady")}
          </span>
        </div>
      </div>
    </section>
  );
}
