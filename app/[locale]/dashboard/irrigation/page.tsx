"use client";

import { Power, Clock, Settings2, Play, Square, Droplets } from "lucide-react";
import { useState } from "react";

export default function IrrigationControlPage() {
  const [valves] = useState([
    { id: "V-01", name: "Zone 1 (Alpha)", status: "running", remaining: "45m" },
    { id: "V-02", name: "Zone 2 (Beta)", status: "scheduled", next: "14:00" },
    { id: "V-03", name: "Zone 3 (Gamma)", status: "idle" },
    { id: "V-04", name: "Main Pump", status: "running", isPump: true },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Irrigation Control</h1>
          <p className="text-sm text-slate-500 mt-1">Manual overrides, scheduling, and automation rules.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600/10 text-red-600 hover:bg-red-600 hover:text-white dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white rounded-lg font-bold transition-colors">
          <Square className="h-4 w-4 fill-current" />
          EMERGENCY STOP
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Controls */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-slate-400" /> Valve & Pump Status
            </h2>
            
            <div className="space-y-4">
              {valves.map((valve) => (
                <div key={valve.id} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${valve.status === 'running' ? 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400' : 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                      {valve.isPump ? <Power className="h-5 w-5" /> : <Droplets className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{valve.name}</h3>
                      <p className="text-sm text-slate-500">
                        {valve.status === 'running' && <span className="text-green-600 dark:text-green-400 font-medium">Running &bull; {valve.remaining} left</span>}
                        {valve.status === 'scheduled' && <span>Scheduled &bull; Next at {valve.next}</span>}
                        {valve.status === 'idle' && <span>Idle</span>}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {valve.status === 'running' ? (
                      <button className="p-2 text-slate-400 hover:text-red-500 bg-white dark:bg-slate-800 rounded shadow-sm border border-slate-200 dark:border-white/10 transition-colors">
                        <Square className="h-4 w-4 fill-current" />
                      </button>
                    ) : (
                      <button className="p-2 text-slate-400 hover:text-green-500 bg-white dark:bg-slate-800 rounded shadow-sm border border-slate-200 dark:border-white/10 transition-colors">
                        <Play className="h-4 w-4 fill-current" />
                      </button>
                    )}
                    <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 rounded shadow-sm border border-slate-200 dark:border-white/10 transition-colors">
                      <Clock className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Rules Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Active Automations</h2>
            
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-green-500/30 bg-green-50 dark:bg-green-500/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-green-700 dark:text-green-400">AI Optimization</span>
                  <div className="h-2 w-4 rounded-full bg-green-500"></div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Adjusts duration based on live evapotranspiration (ETc).</p>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Night Cycle</span>
                  <div className="h-2 w-4 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                </div>
                <p className="text-xs text-slate-500">Runs standard sequence at 02:00 AM.</p>
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Create New Rule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
