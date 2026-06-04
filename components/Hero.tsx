"use client";

import { scrollToSection } from "@/lib/scroll";
import {
  Activity,
  ArrowRight,
  Droplets,
  Radio,
  Shield,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

const METRIC_KEYS = [
  "soilMoisture",
  "gatewayUptime",
  "loraRssi",
  "pumpCycle",
] as const;

const METRIC_VALUES: Record<(typeof METRIC_KEYS)[number], string> = {
  soilMoisture: "34.2%",
  gatewayUptime: "99.97%",
  loraRssi: "-82 dBm",
  pumpCycle: "",
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute end-0 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/5"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Radio className="h-3.5 w-3.5" aria-hidden />
            {t("badge")}
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] dark:text-neutral-50">
            {t("titleLine1")}{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleLine2")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollToSection("quote-calculator")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition-all hover:bg-emerald-500 hover:shadow-emerald-800/40 dark:shadow-emerald-900/40"
            >
              {t("ctaQuote")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("waitlist")}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:border-teal-500/40 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              {t("ctaWaitlist")}
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-500">
            <li className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-500" aria-hidden />
              {t("featureEdge")}
            </li>
            <li className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden />
              {t("featureSensing")}
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-600 dark:text-emerald-500" aria-hidden />
              {t("featureSolar")}
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-neutral-200 bg-white/90 p-1 shadow-2xl shadow-neutral-300/50 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-black/50">
            <div className="rounded-xl border border-neutral-200/80 bg-neutral-50 p-5 sm:p-6 dark:border-neutral-800/80 dark:bg-neutral-950">
              <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {t("telemetryLive")}
                  </span>
                </div>
                <Activity className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {METRIC_KEYS.map((key) => (
                  <div
                    key={key}
                    className="rounded-lg border border-neutral-200 bg-white p-3 transition-colors hover:border-emerald-500/30 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-emerald-500/20 dark:hover:bg-neutral-900"
                  >
                    <p className="text-xs text-neutral-500">
                      {t(`metrics.${key}.label`)}
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {key === "pumpCycle"
                        ? t("metrics.pumpCycle.value")
                        : METRIC_VALUES[key]}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-emerald-600/90 dark:text-emerald-500/80">
                      {t(`metrics.${key}.status`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-4 dark:border-emerald-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-teal-700 dark:text-teal-400">
                      {t("waterEfficiency")}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      +40%
                    </p>
                  </div>
                  <Droplets className="h-10 w-10 text-emerald-500/50 dark:text-emerald-500/40" aria-hidden />
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  {t("waterEfficiencyNote")}
                </p>
              </div>

              <div className="mt-4 flex gap-1 overflow-hidden rounded-lg bg-neutral-100 p-2 dark:bg-neutral-900">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-emerald-500/40 transition-all hover:bg-emerald-500/70 dark:bg-emerald-500/30 dark:hover:bg-emerald-400/60"
                    style={{
                      height: `${20 + Math.sin(i * 0.5) * 12 + (i % 3) * 4}px`,
                      alignSelf: "flex-end",
                    }}
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
