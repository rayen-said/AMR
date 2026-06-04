"use client";

import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

type CellValue = "legacy-fail" | "legacy-none";

const ROW_KEYS = ["offline", "simulation", "predictive", "agronomy"] as const;

const ROW_LEGACY: Record<
  (typeof ROW_KEYS)[number],
  { traditionalIot: CellValue; standardDrip: CellValue }
> = {
  offline: { traditionalIot: "legacy-fail", standardDrip: "legacy-fail" },
  simulation: { traditionalIot: "legacy-fail", standardDrip: "legacy-none" },
  predictive: { traditionalIot: "legacy-fail", standardDrip: "legacy-none" },
  agronomy: { traditionalIot: "legacy-none", standardDrip: "legacy-none" },
};

function LegacyCell({
  value,
  failLabel,
  noneLabel,
}: {
  value: CellValue;
  failLabel: string;
  noneLabel: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-neutral-500">
      <X className="h-4 w-4 shrink-0 text-red-700/70 dark:text-red-900/80" aria-hidden />
      {value === "legacy-fail" ? failLabel : noneLabel}
    </span>
  );
}

export default function CompetitiveEdge() {
  const t = useTranslations("competitive");

  return (
    <section
      id="competitive-edge"
      className="bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-start">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/80">
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:px-6">
                    {t("capability")}
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-emerald-600 sm:px-6 dark:text-emerald-400">
                    {t("amrColumn")}
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:px-6">
                    {t("traditionalIot")}
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:px-6">
                    {t("standardDrip")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROW_KEYS.map((rowKey, i) => {
                  const legacy = ROW_LEGACY[rowKey];
                  return (
                    <tr
                      key={rowKey}
                      className={`border-b border-neutral-200/80 transition-colors hover:bg-neutral-50 dark:border-neutral-800/80 dark:hover:bg-neutral-900/50 ${
                        i === ROW_KEYS.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="px-4 py-5 text-sm font-semibold text-neutral-800 sm:px-6 dark:text-neutral-200">
                        {t(`rows.${rowKey}.feature`)}
                      </td>
                      <td className="px-4 py-5 sm:px-6">
                        <span className="inline-flex items-start gap-2 text-sm text-emerald-800 dark:text-emerald-100">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500"
                            aria-hidden
                          />
                          {t(`rows.${rowKey}.amr`)}
                        </span>
                      </td>
                      <td className="px-4 py-5 sm:px-6">
                        <LegacyCell
                          value={legacy.traditionalIot}
                          failLabel={t("legacyFail")}
                          noneLabel={t("legacyNone")}
                        />
                      </td>
                      <td className="px-4 py-5 sm:px-6">
                        <LegacyCell
                          value={legacy.standardDrip}
                          failLabel={t("legacyFail")}
                          noneLabel={t("legacyNone")}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
