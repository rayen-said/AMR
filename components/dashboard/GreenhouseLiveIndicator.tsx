"use client";

import { useGreenhouseData } from "@/hooks/useGreenhouseData";
import { Radio } from "lucide-react";

export default function GreenhouseLiveIndicator() {
  const { isLive, error, lastUpdated, isLoading } = useGreenhouseData(5000);

  const label = isLoading
    ? "Connecting..."
    : error
      ? "Offline"
      : isLive
        ? "Live MQTT"
        : "Awaiting ESP32";

  const tone = isLive
    ? "text-green-600 dark:text-green-400"
    : error
      ? "text-red-600 dark:text-red-400"
      : "text-amber-600 dark:text-amber-400";

  const dotTone = isLive
    ? "bg-green-500"
    : error
      ? "bg-red-500"
      : "bg-amber-500";

  return (
    <div
      className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium dark:border-white/10 dark:bg-slate-800/50"
      title={
        lastUpdated
          ? `Last sync: ${lastUpdated.toLocaleTimeString()}`
          : "Waiting for first telemetry sync"
      }
    >
      <Radio className={`h-3.5 w-3.5 ${tone}`} />
      <span className={`h-2 w-2 rounded-full ${dotTone} ${isLive ? "animate-pulse" : ""}`} />
      <span className={tone}>{label}</span>
    </div>
  );
}
