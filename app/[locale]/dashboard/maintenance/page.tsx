"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Predictive Maintenance</h1>
        <p className="text-sm text-slate-500 mt-1">AI-driven equipment health scores and failure predictions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-green-500">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg"><CheckCircle2 className="h-5 w-5" /></div>
               <h3 className="font-semibold text-slate-900 dark:text-white">Main Pump System</h3>
             </div>
             <span className="text-2xl font-bold text-green-600 dark:text-green-400">94%</span>
           </div>
           <p className="text-sm text-slate-600 dark:text-slate-400">All mechanical metrics nominal. Estimated time to next scheduled service: 45 days.</p>
        </div>

        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-orange-500">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg"><AlertTriangle className="h-5 w-5" /></div>
               <h3 className="font-semibold text-slate-900 dark:text-white">Valve Array Beta</h3>
             </div>
             <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">62%</span>
           </div>
           <p className="text-sm text-slate-600 dark:text-slate-400">Slight latency detected in actuator response. Recommend inspection within 7 days.</p>
           <button className="mt-4 px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90">Schedule Inspection</button>
        </div>
      </div>
    </div>
  );
}
