"use client";

import { Radio, Server } from "lucide-react";

export default function InfrastructurePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Infrastructure</h1>
        <p className="text-sm text-slate-500 mt-1">Manage gateways, LoRa nodes, and network health.</p>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
            <tr>
              <th className="px-6 py-4 font-medium">Device ID</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Signal (RSSI)</th>
              <th className="px-6 py-4 font-medium">Battery</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-white/5 bg-white dark:bg-[#0f172a]/50">
            <tr>
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-2"><Server className="h-4 w-4 text-green-500" /> GTW-Alpha</td>
              <td className="px-6 py-4 text-slate-500">Edge Gateway</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs">Online</span></td>
              <td className="px-6 py-4 text-slate-500">-</td>
              <td className="px-6 py-4 text-slate-500">Mains + Solar</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-2"><Radio className="h-4 w-4 text-blue-500" /> Node-01</td>
              <td className="px-6 py-4 text-slate-500">Sensor/Actuator</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs">Online</span></td>
              <td className="px-6 py-4 text-slate-500">-78 dBm</td>
              <td className="px-6 py-4 text-slate-500">92%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-white flex items-center gap-2"><Radio className="h-4 w-4 text-blue-500" /> Node-02</td>
              <td className="px-6 py-4 text-slate-500">Sensor Node</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs">Weak Signal</span></td>
              <td className="px-6 py-4 text-orange-500">-112 dBm</td>
              <td className="px-6 py-4 text-slate-500">88%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
