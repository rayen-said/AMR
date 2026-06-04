"use client";

import { Building2, Leaf, Scale } from "lucide-react";
import { useTranslations } from "next-intl";

const CARD_KEYS = ["startupAct", "sustainable", "enterprise"] as const;
const CARD_ICONS = [Building2, Leaf, Scale] as const;

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="border-y border-neutral-200 bg-neutral-50 dark:border-neutral-800/60 dark:bg-neutral-900/20"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
              {t("title")}
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t("paragraph1")}
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t("paragraph2")}
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-1">
            {CARD_KEYS.map((key, i) => {
              const Icon = CARD_ICONS[i];
              return (
                <li
                  key={key}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-emerald-500/25 dark:border-neutral-800 dark:bg-neutral-900/50"
                >
                  <Icon
                    className={`h-6 w-6 shrink-0 ${
                      i === 1
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-emerald-600 dark:text-emerald-400"
                    }`}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
