"use client";

import { LineChart, BarChart2, Download, Calendar, Filter } from "lucide-react";

export default function TelemetryPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Telemetry Center</h1>
          <p className="text-sm text-slate-500 mt-1">Advanced analytics, historical data, and reporting.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">
            <Calendar className="h-4 w-4" /> Last 7 Days
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-slate-900 text-white rounded-lg shadow-md hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel rounded-xl p-6 min-h-[300px] flex flex-col">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2"><LineChart className="h-4 w-4 text-green-500" /> Soil Moisture Trends</h3>
           </div>
           <div className="flex-1 border-t border-slate-100 dark:border-white/5 pt-4 flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <div className="absolute inset-0 flex items-end opacity-60">
                 <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full stroke-green-500 fill-green-500/10 stroke-[0.5]">
                    <path d="M0,50 L0,30 Q10,20 20,35 T40,25 T60,40 T80,20 T100,10 L100,50 Z" />
                 </svg>
              </div>
           </div>
        </div>

        <div className="glass-panel rounded-xl p-6 min-h-[300px] flex flex-col">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2"><BarChart2 className="h-4 w-4 text-blue-500" /> Water Consumption (Liters)</h3>
           </div>
           <div className="flex-1 border-t border-slate-100 dark:border-white/5 pt-4 flex items-end justify-between gap-2 px-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <div key={i} className="w-full bg-blue-500/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
