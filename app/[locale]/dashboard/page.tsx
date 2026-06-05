"use client";

import { useGreenhouseData } from "@/hooks/useGreenhouseData";
import { getOverviewStatusMessage } from "@/lib/greenhouse/messages";
import {
  humidityStatus,
  moistureStatus,
  temperatureStatus,
} from "@/lib/greenhouse/status";
import {
  Activity,
  Battery,
  ChevronRight,
  Droplets,
  Loader2,
  RefreshCcw,
  Sun,
  Thermometer,
  Zap,
} from "lucide-react";
import { useState } from "react";

function statusBadgeClass(tone: "optimal" | "warning" | "critical") {
  if (tone === "optimal") {
    return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  }
  if (tone === "warning") {
    return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
  }
  return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
}

export default function DashboardOverview() {
  const { data, isLoading, isLive, isOffline, lastUpdated, refresh } =
    useGreenhouseData();
  const [isSyncing, setIsSyncing] = useState(false);

  const moistStatus = moistureStatus(data?.moist ?? 0);
  const tempStatus = temperatureStatus(data?.temp ?? 0);
  const humidStatus = humidityStatus(data?.humid ?? 0);

  const handleSync = async () => {
    setIsSyncing(true);
    await refresh();
    setIsSyncing(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Overview
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {getOverviewStatusMessage(isOffline, isLive)}
          </p>
          {lastUpdated && !isOffline && (
            <p className="text-xs text-slate-400 mt-1">
              Last sync: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 disabled:opacity-60 dark:bg-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {isSyncing ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <RefreshCcw className="h-3.5 w-3.5" />
            )}
            Sync Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-green-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
              <Droplets className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadgeClass(moistStatus.tone)}`}
            >
              {isLoading ? "..." : moistStatus.label}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Soil Moisture</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                {data ? `${data.moist.toFixed(1)}%` : "--"}
              </h3>
            </div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-lime-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-600 dark:text-lime-400">
              <Activity className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadgeClass(humidStatus.tone)}`}
            >
              {isLoading ? "..." : humidStatus.label}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Humidity</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                {data ? `${data.humid.toFixed(1)}%` : "--"}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {data?.diagnosis ?? "No diagnosis yet"}
            </p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Sun className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${isLive ? statusBadgeClass("optimal") : statusBadgeClass("warning")}`}
            >
              {isLive ? "Streaming" : "Idle"}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Light Level</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                {data ? `${Math.round(data.lux)} lux` : "--"}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">greenhouse/data topic</p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-orange-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <Thermometer className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadgeClass(tempStatus.tone)}`}
            >
              {isLoading ? "..." : tempStatus.label}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Air Temperature</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                {data ? `${data.temp.toFixed(1)}°C` : "--"}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 glass-panel rounded-xl p-6 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Moisture Trend
            </h2>
            <button className="text-sm text-green-600 dark:text-green-400 font-medium hover:underline flex items-center">
              Telemetry Center <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>

          <div className="flex-1 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0a0f1d] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="w-full h-full p-4 flex items-end gap-2 px-8 z-10 opacity-80">
              {(data ? [data.moist] : []).length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-sm text-slate-500">
                  Chart fills as live readings arrive every 3 seconds.
                </div>
              ) : (
                Array.from({ length: 12 }).map((_, i) => {
                  const moist = data?.moist ?? 0;
                  const height = Math.max(12, Math.min(100, moist + (i - 6) * 2));
                  return (
                    <div
                      key={i}
                      className="flex-1 bg-linear-to-t from-green-600/80 to-lime-400/80 rounded-t-sm transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              System Activity
            </h2>
          </div>

          <div className="flex-1 space-y-4">
            {[
              {
                title: isOffline
                  ? "System Offline"
                  : isLive
                    ? "MQTT Stream Active"
                    : "Awaiting MQTT Data",
                desc: isOffline
                  ? "system is currently offline"
                  : isLive
                    ? `Latest diagnosis: ${data?.diagnosis}`
                    : "ESP32 has not published telemetry yet",
                icon: Activity,
                color: isOffline ? "text-red-500" : isLive ? "text-green-500" : "text-amber-500",
                bg: isOffline ? "bg-red-500/10" : isLive ? "bg-green-500/10" : "bg-amber-500/10",
                time: isOffline ? "Offline" : lastUpdated ? lastUpdated.toLocaleTimeString() : "Pending",
              },
              {
                title: "Soil Moisture Reading",
                desc: data
                  ? `Current level at ${data.moist.toFixed(1)}%`
                  : "No moisture reading available",
                icon: Droplets,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                time: "Live",
              },
              {
                title: "Temperature Check",
                desc: data
                  ? `Greenhouse air temp ${data.temp.toFixed(1)}°C`
                  : "No temperature reading available",
                icon: Thermometer,
                color: "text-orange-500",
                bg: "bg-orange-500/10",
                time: "Live",
              },
              {
                title: "Bridge Status",
                desc: isOffline
                  ? "system is currently offline"
                  : "Flask bridge responding to /data",
                icon: isOffline ? Zap : Battery,
                color: isOffline ? "text-red-500" : "text-purple-500",
                bg: isOffline ? "bg-red-500/10" : "bg-purple-500/10",
                time: isOffline ? "Offline" : "Healthy",
              },
            ].map((log, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${log.bg} ${log.color}`}
                >
                  <log.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {log.title}
                  </p>
                  <p className="text-xs text-slate-500">{log.desc}</p>
                  <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-wider">
                    {log.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
