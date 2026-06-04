"use client";

import { useGreenhouseData } from "@/hooks/useGreenhouseData";
import {
  BarChart2,
  Calendar,
  Download,
  Droplets,
  Filter,
  LineChart,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";

function buildSparklinePath(values: number[], width: number, height: number) {
  if (values.length === 0) return "";

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return values
    .map((value, index) => {
      const x = (index / Math.max(values.length - 1, 1)) * width;
      const y = height - ((value - min) / range) * (height - 8) - 4;
      return `${index === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

export default function TelemetryPage() {
  const { data, history, error, isLive, lastUpdated } = useGreenhouseData();

  const moistHistory = history.map((entry) => entry.moist);
  const tempHistory = history.map((entry) => entry.temp);
  const sparklinePath = buildSparklinePath(moistHistory, 100, 50);

  return (
    <div className="max-w-7xl mx-auto space-y-6 fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Telemetry Center
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {isLive
              ? "Streaming sensor readings from the MQTT bridge."
              : "Connected to the API, waiting for ESP32 payloads."}
          </p>
          {lastUpdated && (
            <p className="text-xs text-slate-400 mt-1">
              Last update: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">
            <Calendar className="h-4 w-4" /> Live Session
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">
            <Filter className="h-4 w-4" /> Sensors
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-slate-900 text-white rounded-lg shadow-md hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Soil Moisture",
            value: data ? `${data.moist.toFixed(1)}%` : "--",
            icon: Droplets,
            color: "text-green-500",
          },
          {
            label: "Temperature",
            value: data ? `${data.temp.toFixed(1)}°C` : "--",
            icon: Thermometer,
            color: "text-orange-500",
          },
          {
            label: "Humidity",
            value: data ? `${data.humid.toFixed(1)}%` : "--",
            icon: Wind,
            color: "text-blue-500",
          },
          {
            label: "Light",
            value: data ? `${Math.round(data.lux)} lux` : "--",
            icon: Sun,
            color: "text-amber-500",
          },
        ].map((metric) => (
          <div key={metric.label} className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
              {metric.label}
            </div>
            <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-xl p-5">
        <p className="text-sm font-medium text-slate-500 mb-1">AI Diagnosis</p>
        <p className="text-base text-slate-900 dark:text-white">
          {data?.diagnosis ?? "Waiting for data..."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel rounded-xl p-6 min-h-[300px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <LineChart className="h-4 w-4 text-green-500" /> Soil Moisture Trends
            </h3>
            <span className="text-xs text-slate-400">{history.length} samples</span>
          </div>
          <div className="flex-1 border-t border-slate-100 dark:border-white/5 pt-4 flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-lg">
            {sparklinePath ? (
              <svg
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                className="w-full h-full stroke-green-500 fill-green-500/10 stroke-[1.5]"
              >
                <path d={`${sparklinePath} L100,50 L0,50 Z`} />
              </svg>
            ) : (
              <p className="text-sm text-slate-500">
                Trend chart appears after the first live readings arrive.
              </p>
            )}
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 min-h-[300px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-blue-500" /> Temperature Samples
            </h3>
          </div>
          <div className="flex-1 border-t border-slate-100 dark:border-white/5 pt-4 flex items-end justify-between gap-2 px-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
            {tempHistory.length > 0 ? (
              tempHistory.map((temp, i) => {
                const height = Math.max(12, Math.min(100, (temp / 50) * 100));
                return (
                  <div
                    key={i}
                    className="w-full bg-orange-500/80 rounded-t-sm transition-all duration-500"
                    style={{ height: `${height}%` }}
                    title={`${temp.toFixed(1)}°C`}
                  />
                );
              })
            ) : (
              <p className="text-sm text-slate-500 m-auto">
                Temperature bars populate from live MQTT samples.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
