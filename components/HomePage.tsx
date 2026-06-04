"use client";

import { useCallback, useState } from "react";
import AboutSection from "@/components/AboutSection";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import QuoteCalculator, { type QuotePrefill } from "@/components/QuoteCalculator";
import SolutionOverview from "@/components/SolutionOverview";
import WaitlistForm from "@/components/WaitlistForm";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("footer");
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | null>(null);

  const handleRequestQuote = useCallback((prefill: QuotePrefill) => {
    setQuotePrefill(prefill);
  }, []);

  const handlePrefillConsumed = useCallback(() => {
    setQuotePrefill(null);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SolutionOverview />
        <CompetitiveEdge />
        <QuoteCalculator onRequestQuote={handleRequestQuote} />
        <AboutSection />
        <WaitlistForm
          quotePrefill={quotePrefill}
          onPrefillConsumed={handlePrefillConsumed}
        />
      </main>
      <footer className="border-t border-neutral-200 bg-white px-4 py-10 dark:border-neutral-800 dark:bg-neutral-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-500">
            {t("copyright")}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-neutral-500 dark:text-neutral-600">
            {t("compliance")}
          </p>
        </div>
      </footer>
    </>
  );
}
