"use client";

import { Droplets, Leaf, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0f1d] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="fade-in-up">
            <h2 className="text-sm font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3">{t("eyebrow")}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              {t("title")}
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </div>

            <div className="mt-8 flex items-center gap-4">
               {/* Simulated Startup Act Badge */}
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{t("startupAct.title")}</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
             
             <div className="glass-panel p-6 rounded-2xl">
               <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                 <Droplets className="h-6 w-6" />
               </div>
               <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">40%</h4>
               <p className="text-sm text-slate-600 dark:text-slate-400">Average reduction in water consumption.</p>
             </div>

             <div className="glass-panel p-6 rounded-2xl sm:translate-y-8">
               <div className="h-12 w-12 rounded-xl bg-lime-100 dark:bg-lime-500/20 text-lime-600 dark:text-lime-400 flex items-center justify-center mb-4">
                 <Leaf className="h-6 w-6" />
               </div>
               <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">15%</h4>
               <p className="text-sm text-slate-600 dark:text-slate-400">Average increase in crop yield quality.</p>
             </div>

             <div className="glass-panel p-6 rounded-2xl">
               <div className="h-12 w-12 rounded-xl bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                 <Globe className="h-6 w-6" />
               </div>
               <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">MENA</h4>
               <p className="text-sm text-slate-600 dark:text-slate-400">Designed specifically for arid environments.</p>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
}
