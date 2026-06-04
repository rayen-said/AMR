"use client";

import {
  Calculator,
  Cpu,
  Network,
  Radio,
  Send,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  calculateInfrastructure,
  type CropType,
  type LandUnit,
  type QuoteInputs,
  type WaterSource,
} from "@/lib/quote";
import { scrollToSection } from "@/lib/scroll";

export interface QuotePrefill {
  note: string;
}

interface QuoteCalculatorProps {
  onRequestQuote: (prefill: QuotePrefill) => void;
}

const DEFAULT_INPUTS: QuoteInputs = {
  landSize: 5,
  landUnit: "hectares",
  cropType: "olives",
  waterSource: "artesian",
};

const CROP_KEYS: CropType[] = [
  "olives",
  "dates",
  "citrus",
  "vegetables",
  "cereal",
  "other",
];

const WATER_KEYS: WaterSource[] = ["artesian", "shared-dam", "reservoir"];

export default function QuoteCalculator({ onRequestQuote }: QuoteCalculatorProps) {
  const t = useTranslations("quote");
  const [inputs, setInputs] = useState<QuoteInputs>(DEFAULT_INPUTS);

  const estimate = useMemo(
    () => calculateInfrastructure(inputs.landSize, inputs.landUnit),
    [inputs.landSize, inputs.landUnit]
  );

  const cropLabel = t(`crops.${inputs.cropType}`);
  const waterLabel = t(`water.${inputs.waterSource}`);
  const unitLabel =
    inputs.landUnit === "hectares" ? t("hectares") : t("fields");

  const handleRequestQuote = () => {
    const prefill: QuotePrefill = {
      note: [
        `${t("prefillLand")}: ${inputs.landSize} ${unitLabel}`,
        `${t("prefillCrop")}: ${cropLabel}`,
        `${t("prefillWater")}: ${waterLabel}`,
        t("prefillEstimate", {
          hectares: estimate.hectares,
          gateways: estimate.gateways,
          arrays: estimate.loraNodeArrays,
          nodes: estimate.totalNodes,
        }),
      ].join(" · "),
    };
    onRequestQuote(prefill);
    scrollToSection("waitlist");
  };

  const inputClass =
    "rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100";

  return (
    <section
      id="quote-calculator"
      className="bg-white dark:bg-neutral-950"
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

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <Calculator className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {t("parcelTitle")}
                  </h3>
                  <p className="text-sm text-neutral-500">{t("parcelHint")}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="land-size"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("landSize")}
                  </label>
                  <div className="flex gap-3">
                    <input
                      id="land-size"
                      type="number"
                      min={0.1}
                      step={0.1}
                      value={inputs.landSize || ""}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          landSize: parseFloat(e.target.value) || 0,
                        }))
                      }
                      className={`flex-1 ${inputClass}`}
                    />
                    <select
                      aria-label={t("landUnitAria")}
                      value={inputs.landUnit}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          landUnit: e.target.value as LandUnit,
                        }))
                      }
                      className={`${inputClass} text-sm`}
                    >
                      <option value="hectares">{t("hectares")}</option>
                      <option value="fields">{t("fields")}</option>
                    </select>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-500">
                    {t("fieldConversion")}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="crop-type"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("cropType")}
                  </label>
                  <select
                    id="crop-type"
                    value={inputs.cropType}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        cropType: e.target.value as CropType,
                      }))
                    }
                    className={`w-full ${inputClass}`}
                  >
                    {CROP_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {t(`crops.${key}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="water-source"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("waterSource")}
                  </label>
                  <select
                    id="water-source"
                    value={inputs.waterSource}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        waterSource: e.target.value as WaterSource,
                      }))
                    }
                    className={`w-full ${inputClass}`}
                  >
                    {WATER_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {t(`water.${key}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:shadow-emerald-800/30 dark:shadow-emerald-900/30"
                >
                  {t("requestCta")}
                  <Send className="h-4 w-4 rtl:rotate-180" aria-hidden />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-neutral-50 to-white p-6 sm:p-8 dark:border-emerald-500/20 dark:from-neutral-900 dark:to-neutral-950">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {t("layoutTitle")}
              </h3>
              <p className="mt-2 text-xs text-neutral-500">{t("layoutFormula")}</p>

              <dl className="mt-8 space-y-5">
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/80">
                  <dt className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Network className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden />
                    {t("effectiveArea")}
                  </dt>
                  <dd className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {estimate.hectares} ha
                  </dd>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/80">
                  <dt className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Cpu className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    {t("gateways")}
                  </dt>
                  <dd className="font-mono text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                    {estimate.gateways}
                  </dd>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/80">
                  <dt className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Radio className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden />
                    {t("loraArrays")}
                  </dt>
                  <dd className="font-mono text-lg font-semibold text-teal-600 dark:text-teal-400">
                    {estimate.loraNodeArrays}
                  </dd>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 dark:border-emerald-500/20">
                  <dt className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t("totalNodes")}
                  </dt>
                  <dd className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {estimate.totalNodes}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-xs leading-relaxed text-neutral-500">
                {t("disclaimer", { crop: cropLabel, water: waterLabel })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
