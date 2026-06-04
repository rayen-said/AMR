"use client";

import { scrollToSection } from "@/lib/scroll";
import {
  Activity,
  ArrowRight,
  Droplets,
  Radio,
  Cpu,
  Wifi,
  Database
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);
  const [simulatedMoisture, setSimulatedMoisture] = useState(34.2);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSimulatedMoisture(prev => {
        const jitter = (Math.random() - 0.5) * 0.4;
        return Math.max(30, Math.min(60, prev + jitter));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 animated-grid"
    >
      {/* Background Glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-green-500/10 blur-[100px] dark:bg-green-500/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-lime-500/10 blur-[100px] dark:bg-lime-500/5"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 w-full z-10">
        
        {/* Left Column - Copy */}
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-green-700 dark:text-green-400 glass-panel">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            {t("badge")}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t("titleLine1")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-lime-500 dark:from-green-400 dark:to-lime-400">
              {t("titleHighlight")}
            </span> <br className="hidden md:block" />
            {t("titleLine2")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 fade-in-up mt-10" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/quote-calculator"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 group"
            >
              {t("ctaQuote")}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/waitlist"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              {t("ctaWaitlist")}
            </Link>
          </div>

          <ul className="pt-8 flex flex-col sm:flex-row items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <li className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-green-500" /> {t("featureEdge")}
            </li>
            <li className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-lime-500" /> {t("featureSensing")}
            </li>
            <li className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-teal-500" /> {t("featureSolar")}
            </li>
          </ul>
        </div>

        {/* Right Column - Digital Twin Visualization */}
        <div className="relative lg:h-[600px] flex items-center justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full max-w-lg">
            
            {/* Main Holographic Platform */}
            <div className="relative z-10 glass-panel rounded-2xl p-6 shadow-2xl dark:shadow-green-900/20 border-t border-l border-white/20">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/50 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Active Parcel Alpha</h3>
                    <p className="text-xs text-slate-500">Live Telemetry &bull; Syncing</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-mono font-bold">
                  99.9% UPTIME
                </div>
              </div>

              {/* Simulated 3D Topography / Parcel */}
              <div className="relative h-48 w-full rounded-xl bg-slate-100 dark:bg-[#0a0f1d] overflow-hidden mb-6 border border-slate-200 dark:border-white/5 flex items-center justify-center">
                 {/* Topo lines grid */}
                 <div className="absolute inset-0 opacity-20 dark:opacity-40" style={{
                    backgroundImage: `repeating-radial-gradient( circle at 50% 50%, transparent 0, transparent 20px, rgba(34, 197, 94, 0.4) 21px, transparent 22px )`
                 }}></div>
                 
                 {/* Floating Nodes */}
                 <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                    <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse"></div>
                    <div className="absolute -top-8 -left-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">Node 01: 34%</div>
                 </div>
                 <div className="absolute top-2/3 left-1/2 group cursor-pointer">
                    <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -top-8 -left-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">Node 02: 41%</div>
                 </div>
                 <div className="absolute top-1/3 right-1/4 group cursor-pointer">
                    <div className="h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.8)]"></div>
                    <div className="absolute -top-8 -left-8 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">Gateway Active</div>
                 </div>

                 {/* Center Hologram visual */}
                 <div className="absolute inset-0 bg-linear-to-t from-green-500/10 to-transparent"></div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5">
                  <p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Droplets className="h-3 w-3"/> Soil Moisture</p>
                  <p className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                    {mounted ? simulatedMoisture.toFixed(1) : "34.2"}%
                  </p>
                  <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[34%]" style={{ width: `${simulatedMoisture}%`, transition: 'width 1s ease-in-out' }}></div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5">
                  <p className="text-xs text-slate-500 mb-1 flex items-center gap-1"><Radio className="h-3 w-3"/> Network Status</p>
                  <p className="text-2xl font-mono font-bold text-slate-900 dark:text-white">Optimal</p>
                  <p className="text-[10px] font-mono text-green-600 dark:text-green-400 mt-1 uppercase">LoRa RSSI: -82 dBm</p>
                </div>
              </div>

            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -right-12 top-10 p-3 rounded-xl glass-panel animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-lime-500"></div>
                <p className="text-xs font-mono font-bold text-slate-900 dark:text-white">AI Engine Active</p>
              </div>
            </div>

            <div className="absolute -left-8 bottom-20 p-3 rounded-xl glass-panel animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                Water Saved: <span className="text-green-600 dark:text-green-400">42%</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
