"use client";

import type { QuotePrefill } from "@/components/QuoteCalculator";
import { CheckCircle2, Loader2, MapPin, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const TUNISIA_GOVERNORATES = [
  "Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabès",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kébili",
  "Kef",
  "Mahdia",
  "Manouba",
  "Médenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
] as const;

export interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
  governorate: string;
  configurationNote: string;
}

interface WaitlistFormProps {
  quotePrefill: QuotePrefill | null;
  onPrefillConsumed: () => void;
}

const INITIAL_FORM: WaitlistFormData = {
  fullName: "",
  email: "",
  phone: "",
  governorate: "",
  configurationNote: "",
};

export default function WaitlistForm({
  quotePrefill,
  onPrefillConsumed,
}: WaitlistFormProps) {
  const t = useTranslations("waitlist");
  const [form, setForm] = useState<WaitlistFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (quotePrefill) {
      setForm((prev) => ({
        ...prev,
        configurationNote: quotePrefill.note,
      }));
      onPrefillConsumed();
    }
  }, [quotePrefill, onPrefillConsumed]);

  const handleChange = (
    field: keyof WaitlistFormData,
    value: string
  ): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100";

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800/60 dark:bg-neutral-950"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(20,184,166,0.06),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(20,184,166,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center">
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

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-black/20 sm:p-10">
          {submitted ? (
            <div
              className="flex flex-col items-center py-8 text-center"
              role="status"
              aria-live="polite"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-9 w-9" aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {t("successTitle")}
              </h3>
              <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
                {t("successMessage")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  {t("fullName")}
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={inputClass}
                  placeholder={t("namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={inputClass}
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  {t("phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputClass}
                  placeholder={t("phonePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="governorate"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400" aria-hidden />
                  {t("governorate")}
                </label>
                <select
                  id="governorate"
                  required
                  value={form.governorate}
                  onChange={(e) => handleChange("governorate", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("selectGovernorate")}</option>
                  {TUNISIA_GOVERNORATES.map((gov) => (
                    <option key={gov} value={gov}>
                      {gov}
                    </option>
                  ))}
                </select>
              </div>

              {form.configurationNote ? (
                <div>
                  <label
                    htmlFor="configuration-note"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {t("configurationNote")}
                  </label>
                  <textarea
                    id="configuration-note"
                    readOnly
                    rows={3}
                    value={form.configurationNote}
                    className="w-full resize-none rounded-lg border border-emerald-500/25 bg-emerald-500/5 px-4 py-3 font-mono text-xs text-emerald-800 dark:text-emerald-100/90"
                  />
                </div>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    {t("submitting")}
                  </>
                ) : (
                  <>
                    {t("submit")}
                    <Send className="h-4 w-4 rtl:rotate-180" aria-hidden />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
