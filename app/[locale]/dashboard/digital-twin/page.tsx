"use client";

import { useGreenhouseData } from "@/hooks/useGreenhouseData";
import { Activity, Box, Droplet, Maximize2, Radio, Thermometer, Wind } from "lucide-react";

export default function DigitalTwinPage() {
  const { data, isLive, lastUpdated, error } = useGreenhouseData();

  return (
    <div className="h-full flex flex-col fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Digital Twin
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Live greenhouse sensor overlay from MQTT telemetry.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 glass-panel rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden relative flex flex-col">
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-white/10 rounded-lg p-1 shadow-lg flex flex-col gap-1">
            <button
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-slate-700 dark:text-slate-300"
              title="Sensors Layer"
            >
              <Activity className="h-4 w-4" />
            </button>
            <button
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10"
              title="Irrigation Network Layer"
            >
              <Droplet className="h-4 w-4" />
            </button>
            <button
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-slate-700 dark:text-slate-300"
              title="Infrastructure Layer"
            >
              <Radio className="h-4 w-4" />
            </button>
            <button
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded text-slate-700 dark:text-slate-300"
              title="Topography"
            >
              <Box className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-white/10 rounded-lg p-4 shadow-lg w-72">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-white/10 pb-2">
              Greenhouse Node
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Moisture</span>
                <span className="font-mono font-medium text-green-600 dark:text-green-400">
                  {data ? `${data.moist.toFixed(1)}%` : "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Temperature</span>
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  {data ? `${data.temp.toFixed(1)}°C` : "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Humidity</span>
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  {data ? `${data.humid.toFixed(1)}%` : "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Light</span>
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  {data ? `${Math.round(data.lux)} lux` : "--"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status</span>
                <span className="font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-green-500 animate-pulse" : "bg-amber-500"}`}
                  />
                  {isLive ? "Syncing" : "Waiting"}
                </span>
              </div>
              {lastUpdated && (
                <p className="text-[10px] text-slate-400 pt-1 border-t border-slate-200 dark:border-white/10">
                  Updated {lastUpdated.toLocaleTimeString()}
                </p>
              )}
              {error && <p className="text-[10px] text-red-500">{error}</p>}
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 shadow-lg">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Diagnosis
            </p>
            <p className="text-sm font-medium text-slate-900 dark:text-white max-w-xs">
              {data?.diagnosis ?? "Waiting for data..."}
            </p>
          </div>
        </div>

        <div className="flex-1 bg-slate-100 dark:bg-[#060a14] relative flex items-center justify-center perspective-[1000px]">
          <div
            className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative w-full max-w-4xl h-[600px] transform rotate-x-60 rotate-z-45 scale-[0.8] transform-style-preserve-3d transition-transform duration-1000">
            <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500/30 rounded-3xl shadow-[0_20px_50px_rgba(34,197,94,0.1)]" />

            <div className="absolute top-1/4 left-0 right-0 h-1 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="absolute top-2/4 left-0 right-0 h-1 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="absolute top-3/4 left-0 right-0 h-1 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-blue-600/60 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

            <div className="absolute top-1/4 left-1/4 w-8 h-8 -mt-4 -ml-4 rounded-full bg-green-500 transform rotate-x-[-60deg] -rotate-z-45 shadow-[0_0_20px_rgba(34,197,94,0.8)] flex items-center justify-center z-10 cursor-pointer animate-pulse border-2 border-white">
              <Thermometer className="h-3 w-3 text-white" />
            </div>
            <div className="absolute top-2/4 left-1/2 w-10 h-10 -mt-5 -ml-5 rounded-full bg-blue-500 transform rotate-x-[-60deg] -rotate-z-45 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center z-10 cursor-pointer border-2 border-white">
              <Droplet className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-3/4 right-1/4 w-8 h-8 -mt-4 -ml-4 rounded-full bg-lime-500 transform rotate-x-[-60deg] -rotate-z-45 shadow-[0_0_20px_rgba(132,204,22,0.8)] flex items-center justify-center z-10 cursor-pointer border-2 border-white">
              <Wind className="h-3 w-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
