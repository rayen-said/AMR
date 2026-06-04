"use client";

import { useState } from "react";
import { Settings, Server, Radio, Droplets } from "lucide-react";
import { useTranslations } from "next-intl";

export type QuotePrefill = {
  hectares: number;
  valves: number;
};

export default function QuoteCalculator({ onRequestQuote }: { onRequestQuote: (prefill: QuotePrefill) => void }) {
  const t = useTranslations("quote");
  const [hectares, setHectares] = useState(50);
  
  // Real-time calculations based on hectares
  const recommendedNodes = Math.max(1, Math.ceil(hectares / 5)); // 1 node per 5 hectares
  const recommendedGateways = Math.max(1, Math.ceil(hectares / 100)); // 1 gtw per 100 hectares
  const estimatedWaterSavings = Math.round(hectares * 3000 * 0.4); // 40% of 3000m3 per hectare
  const estValves = Math.ceil(hectares * 2);

  return (
    <section id="quote-calculator" className="py-24 bg-slate-50 dark:bg-[#050816] relative animated-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3">{t("eyebrow")}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t("title")}
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
           {/* Interactive Sliders */}
           <div className="glass-panel p-8 rounded-3xl shadow-xl fade-in-up">
              <label className="block text-sm font-bold text-slate-900 dark:text-white mb-4">
                 {t("landSize")} ({t("hectares")})
              </label>
              <div className="flex items-center gap-6 mb-8">
                 <input 
                    type="range" 
                    min="1" 
                    max="500" 
                    value={hectares} 
                    onChange={(e) => setHectares(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                 />
                 <span className="text-2xl font-bold text-green-600 dark:text-green-400 font-mono w-20 shrink-0 text-right">
                    {hectares}
                 </span>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
                 <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Recommended Infrastructure</h4>
                 
                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#0a0f1d] rounded-xl border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                       <Server className="h-5 w-5 text-emerald-500" />
                       <span className="font-medium text-slate-700 dark:text-slate-300">Edge Gateways</span>
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">{recommendedGateways}</span>
                 </div>

                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#0a0f1d] rounded-xl border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                       <Radio className="h-5 w-5 text-lime-500" />
                       <span className="font-medium text-slate-700 dark:text-slate-300">Intelligent Nodes</span>
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">{recommendedNodes}</span>
                 </div>

                 <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#0a0f1d] rounded-xl border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-3">
                       <Settings className="h-5 w-5 text-teal-500" />
                       <span className="font-medium text-slate-700 dark:text-slate-300">Automated Valves</span>
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">{estValves}</span>
                 </div>
              </div>

              <button 
                 onClick={() => onRequestQuote({ hectares, valves: estValves })}
                 className="w-full mt-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                 Generate Detailed Proposal
              </button>
           </div>

           {/* Projected ROI */}
           <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative p-8 rounded-3xl bg-linear-to-br from-green-500 to-lime-500 text-white overflow-hidden shadow-2xl shadow-green-900/20">
                 {/* Decorative background shapes */}
                 <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                 
                 <h4 className="text-sm font-bold text-green-100 uppercase tracking-widest mb-2">Projected Annual Impact</h4>
                 <h3 className="text-4xl font-bold mb-8 tracking-tight">Return on Intelligence</h3>

                 <div className="space-y-8 relative z-10">
                    <div>
                       <p className="text-green-100 mb-1 flex items-center gap-2"><Droplets className="h-4 w-4" /> Water Conserved</p>
                       <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold font-mono">{estimatedWaterSavings.toLocaleString()}</span>
                          <span className="text-lg text-green-100">m³</span>
                       </div>
                       <p className="text-sm text-green-100 mt-2 opacity-80">Based on a 40% efficiency increase vs. traditional methods.</p>
                    </div>

                    <div className="h-px bg-white/20 w-full"></div>

                    <div>
                       <p className="text-green-100 mb-1">Energy Saved (Pumping)</p>
                       <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold font-mono">{Math.round(estimatedWaterSavings * 0.4).toLocaleString()}</span>
                          <span className="text-lg text-green-100">kWh</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
