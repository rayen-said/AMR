"use client";

import { Droplets, Activity, Battery, Thermometer, ChevronRight, Zap, RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";

export default function DashboardOverview() {
  const [mounted, setMounted] = useState(false);
  const [moisture, setMoisture] = useState(34.2);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setMoisture(prev => Math.max(30, Math.min(60, prev + (Math.random() - 0.5) * 0.4)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Live telemetry and infrastructure status for Farm Alpha.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">
            <RefreshCcw className="h-3.5 w-3.5" />
            Sync Now
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 shadow-green-600/20 transition-colors">
            Manage Parcels
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1 */}
        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-green-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
              <Droplets className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              Optimal
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Avg Soil Moisture</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                {mounted ? moisture.toFixed(1) : "34.2"}%
              </h3>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">+2.1%</span>
            </div>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-lime-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-600 dark:text-lime-400">
              <Activity className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
              Active
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Irrigation Status</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Running
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">Zone 2 &bull; 45 mins remaining</p>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Battery className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              100% Online
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Infrastructure Health</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                99.9%
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">12 Nodes, 2 Gateways</p>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-orange-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <Thermometer className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
              Warning
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pump Temperature</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                42&deg;C
              </h3>
              <span className="text-sm text-orange-500 font-medium">+5&deg;C</span>
            </div>
            <p className="text-xs text-orange-500/80 mt-1">Slight elevation detected</p>
          </div>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        
        {/* Main Chart / Digital Twin Preview */}
        <div className="lg:col-span-2 glass-panel rounded-xl p-6 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Water Efficiency Index</h2>
            <button className="text-sm text-green-600 dark:text-green-400 font-medium hover:underline flex items-center">
              Detailed Report <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          
          <div className="flex-1 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0a0f1d] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            
            {/* Simulated Chart */}
            <div className="w-full h-full p-4 flex items-end gap-2 px-8 z-10 opacity-80">
              {[40, 55, 45, 60, 80, 65, 75, 90, 85, 100, 95, 80].map((height, i) => (
                <div key={i} className="flex-1 bg-linear-to-t from-green-600/80 to-lime-400/80 rounded-t-sm" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* System Activity Log */}
        <div className="glass-panel rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">System Activity</h2>
          </div>
          
          <div className="flex-1 space-y-4">
            {[
              { time: "2m ago", title: "Irrigation Started", desc: "Zone 2 initiated by AI schedule", icon: Droplets, color: "text-blue-500", bg: "bg-blue-500/10" },
              { time: "15m ago", title: "Data Synced", desc: "Received 1,204 data points", icon: Activity, color: "text-green-500", bg: "bg-green-500/10" },
              { time: "1h ago", title: "Pump Warning", desc: "Temperature exceeded 40°C threshold", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
              { time: "3h ago", title: "Schedule Updated", desc: "AI optimization applied", icon: RefreshCcw, color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((log, i) => (
              <div key={i} className="flex gap-3">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${log.bg} ${log.color}`}>
                  <log.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{log.title}</p>
                  <p className="text-xs text-slate-500">{log.desc}</p>
                  <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-wider">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 py-2 border border-slate-200 dark:border-white/10 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            View All Logs
          </button>
        </div>

      </div>
    </div>
  );
}
