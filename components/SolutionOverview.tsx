"use client";

import { BarChart3, ArrowDown, Cpu, Server } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PlatformArchitecture() {
  const t = useTranslations("solutions");

  return (
    <section id="solution" className="py-24 bg-slate-50 dark:bg-[#050816] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3">Platform Architecture</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            End-to-End <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-lime-500">Intelligence</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our 3-layer architecture seamlessly bridges physical infrastructure with enterprise analytics, delivering autonomous precision irrigation.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
           {/* Vertical Connecting Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-green-500/50 to-transparent hidden md:block z-0"></div>

           <div className="space-y-8 md:space-y-16 relative z-10">
              
              {/* Layer 3: Precision Informatics */}
              <div className="glass-panel p-8 rounded-2xl md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8 fade-in-up border-t-4 border-t-lime-500 shadow-2xl dark:shadow-lime-900/10">
                 <div className="p-4 bg-lime-100 dark:bg-lime-500/10 rounded-2xl text-lime-600 dark:text-lime-400 shrink-0">
                    <BarChart3 className="h-10 w-10" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Layer 3: Precision Informatics</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       The enterprise dashboard. Digital twin visualization, predictive maintenance AI, advanced telemetry analytics, and centralized multi-farm administration. 
                    </p>
                 </div>
              </div>

              {/* Arrow Down */}
              <div className="hidden md:flex justify-center -my-10 z-20 relative text-green-500/50">
                <ArrowDown className="h-6 w-6 animate-bounce" />
              </div>

              {/* Layer 2: Enterprise Core */}
              <div className="glass-panel p-8 rounded-2xl md:w-[80%] mx-auto flex flex-col md:flex-row-reverse items-center gap-8 fade-in-up border-t-4 border-t-green-500 shadow-2xl dark:shadow-green-900/10" style={{ animationDelay: '0.2s' }}>
                 <div className="p-4 bg-green-100 dark:bg-green-500/10 rounded-2xl text-green-600 dark:text-green-400 shrink-0">
                    <Server className="h-10 w-10" />
                 </div>
                 <div className="text-left md:text-right">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Layer 2: Enterprise Core</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       High-availability cloud backend and secure LoRaWAN network server. Handles data ingestion, ML model training, external weather API integration, and secure data routing.
                    </p>
                 </div>
              </div>

              {/* Arrow Down */}
              <div className="hidden md:flex justify-center -my-10 z-20 relative text-green-500/50">
                <ArrowDown className="h-6 w-6 animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>

              {/* Layer 1: Edge Intelligence */}
              <div className="glass-panel p-8 rounded-2xl md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8 fade-in-up border-t-4 border-t-emerald-600 shadow-2xl dark:shadow-emerald-900/10" style={{ animationDelay: '0.4s' }}>
                 <div className="p-4 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Cpu className="h-10 w-10" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Layer 1: Edge Intelligence</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                       Offline-first intelligent nodes deployed in the field. Solar-powered, processing local sensor data, and executing autonomous irrigation decisions even when internet connectivity is lost.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
