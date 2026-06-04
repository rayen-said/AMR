"use client";

import LiveEstimator from "@/components/QuoteCalculator";
import { useLocale } from "next-intl";

export default function QuoteCalculatorPage() {
  const locale = useLocale();
  return (
    <div className="pt-20 min-h-screen">
      <LiveEstimator onRequestQuote={(prefill) => {
        // In a standalone page, this might redirect to the waitlist page with query params
        window.location.href = `/${locale}/waitlist?hectares=${prefill.hectares}&valves=${prefill.valves}`;
      }} />
    </div>
  );
}
