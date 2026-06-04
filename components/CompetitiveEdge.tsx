"use client";

import { Check, Minus, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CompetitiveEdge() {
  const t = useTranslations("competitive");

  const features = [
    { name: t("rows.offline.feature"), amr: true, traditional: false },
    { name: t("rows.simulation.feature"), amr: true, traditional: false },
    { name: t("rows.predictive.feature"), amr: true, traditional: false },
    { name: t("rows.agronomy.feature"), amr: true, traditional: false },
    { name: "Cloud Analytics", amr: true, traditional: true },
    { name: "Remote Valve Control", amr: true, traditional: true },
  ];

  return (
    <section id="competitive" className="py-24 bg-white dark:bg-[#0a0f1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3">{t("eyebrow")}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t("title")}
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden shadow-2xl dark:shadow-green-900/10 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white font-semibold text-lg border-b border-slate-200 dark:border-white/10 w-1/2">
                  {t("capability")}
                </th>
                <th className="p-6 bg-slate-50 dark:bg-slate-900/50 text-slate-500 font-semibold text-center border-b border-slate-200 dark:border-white/10 w-1/4">
                  {t("traditionalIot")}
                </th>
                <th className="p-6 bg-linear-to-t from-green-500/10 to-transparent border-b-2 border-green-500 text-green-700 dark:text-green-400 font-bold text-center w-1/4 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green-400 to-lime-500"></div>
                  {t("amrColumn")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 bg-white dark:bg-[#0f172a]/50">
              {features.map((feature, idx) => (
                <tr key={idx} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-5 font-medium text-slate-900 dark:text-slate-200 flex items-center gap-2">
                    {idx === 0 && <Zap className="h-4 w-4 text-amber-500" />}
                    {feature.name}
                  </td>
                  <td className="p-5 text-center">
                    {feature.traditional ? (
                      <Check className="h-5 w-5 text-slate-400 mx-auto" />
                    ) : (
                      <Minus className="h-5 w-5 text-slate-300 dark:text-slate-700 mx-auto" />
                    )}
                  </td>
                  <td className="p-5 text-center bg-green-50/30 dark:bg-green-500/5">
                    {feature.amr ? (
                      <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                         <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                    ) : (
                      <Minus className="h-5 w-5 text-slate-300 dark:text-slate-700 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
