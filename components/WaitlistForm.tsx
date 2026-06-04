"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { QuotePrefill } from "@/components/QuoteCalculator";

import { useTranslations } from "next-intl";

type Props = {
  quotePrefill: QuotePrefill | null;
  onPrefillConsumed: () => void;
};

export default function WaitlistForm({ quotePrefill, onPrefillConsumed }: Props) {
  const t = useTranslations("waitlist");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      if (quotePrefill) onPrefillConsumed();
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 bg-slate-50 dark:bg-[#050816] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl dark:shadow-green-900/10 fade-in-up border-t-4 border-t-green-500 text-center">
          
          {status === "success" ? (
             <div className="py-12 animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t("successTitle")}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t("successMessage")}</p>
             </div>
          ) : (
             <>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                  {t("title")}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  {t("subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
                   {quotePrefill && (
                     <div className="p-3 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-lg mb-4 text-sm text-green-800 dark:text-green-400 flex items-center gap-2">
                       <CheckCircle2 className="h-4 w-4" />
                       {t("configurationNote")}: {quotePrefill.hectares} Hectares, {quotePrefill.valves} Valves
                     </div>
                   )}
                   
                   <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t("email")}</label>
                     <input 
                       type="email" 
                       required
                       className="w-full px-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white"
                       placeholder={t("emailPlaceholder")}
                     />
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company / Farm Name</label>
                     <input 
                       type="text" 
                       required
                       className="w-full px-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white"
                       placeholder="AgriCorp Alpha"
                     />
                   </div>

                   <button 
                     type="submit" 
                     disabled={status === "submitting"}
                     className="w-full mt-4 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                   >
                     {status === "submitting" ? t("submitting") : t("submit")}
                     <ArrowRight className="h-5 w-5" />
                   </button>
                </form>
             </>
          )}

        </div>

      </div>
    </section>
  );
}
