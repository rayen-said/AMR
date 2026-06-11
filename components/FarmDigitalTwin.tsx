"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { farmFields } from "@/data/farm";
import { Droplet, Wind, ShieldAlert, Sparkles, RefreshCw } from "lucide-react";

export default function FarmDigitalTwin() {
  const [selectedFieldId, setSelectedFieldId] = useState("field-a");
  const [activeOverlay, setActiveOverlay] = useState<"none" | "moisture" | "nitrogen">("moisture");
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationFields, setSimulationFields] = useState(farmFields);

  const selectedField = simulationFields.find((f) => f.id === selectedFieldId) || simulationFields[0];

  // Map overlays color styles
  const getFieldColor = (fieldId: string) => {
    const field = simulationFields.find((f) => f.id === fieldId);
    if (!field) return "bg-outline-variant";

    if (activeOverlay === "moisture") {
      // Moisture overlays (blue gradients)
      const val = parseInt(field.moisture);
      if (val > 30) return "fill-emerald-800/20 stroke-emerald-700/80";
      if (val > 25) return "fill-primary/20 stroke-primary/70";
      return "fill-amber-600/20 stroke-amber-500/70 animate-pulse";
    }

    if (activeOverlay === "nitrogen") {
      // Nitrogen overlays (greenish-yellow gradients)
      if (field.nitrogen.includes("Optimal")) return "fill-emerald-700/20 stroke-emerald-600/80";
      if (field.nitrogen.includes("Low")) return "fill-amber-500/20 stroke-amber-400/80";
      return "fill-rose-700/25 stroke-rose-600/80 animate-pulse";
    }

    // Default crop view (green shades)
    return "fill-primary/10 stroke-primary/30";
  };

  const handleSimulateIrrigation = () => {
    if (simulationRunning) return;
    setSimulationRunning(true);

    // Animate moisture percentages rising for dry fields
    setTimeout(() => {
      setSimulationFields((prev) =>
        prev.map((f) => {
          if (f.id === "field-d") {
            return {
              ...f,
              moisture: "31%",
              nitrogen: "Optimal",
              healthIndex: 92,
              status: "Optimal",
            };
          }
          if (f.id === "field-b") {
            return {
              ...f,
              moisture: "33%",
              healthIndex: 94,
              status: "Optimal",
            };
          }
          return f;
        })
      );
      setSimulationRunning(false);
    }, 2500);
  };

  const handleResetSimulation = () => {
    setSimulationFields(farmFields);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Interactive Twin Visualization Panel */}
      <div className="lg:col-span-7 hairline-border bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between shadow-sm min-h-[420px]">
        {/* Visualization Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-ping" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Digital Twin Demo
            </span>
          </div>

          {/* Toggle buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveOverlay("moisture")}
              className={`text-xs font-bold px-3 py-1.5 rounded transition-all duration-200 border ${
                activeOverlay === "moisture"
                  ? "bg-primary text-background border-primary"
                  : "hairline-border bg-transparent text-text-secondary hover:bg-sub-surface"
              }`}
            >
              Moisture
            </button>
            <button
              onClick={() => setActiveOverlay("nitrogen")}
              className={`text-xs font-bold px-3 py-1.5 rounded transition-all duration-200 border ${
                activeOverlay === "nitrogen"
                  ? "bg-primary text-background border-primary"
                  : "hairline-border bg-transparent text-text-secondary hover:bg-sub-surface"
              }`}
            >
              Nitrogen
            </button>
            <button
              onClick={() => setActiveOverlay("none")}
              className={`text-xs font-bold px-3 py-1.5 rounded transition-all duration-200 border ${
                activeOverlay === "none"
                  ? "bg-primary text-background border-primary"
                  : "hairline-border bg-transparent text-text-secondary hover:bg-sub-surface"
              }`}
            >
              Default
            </button>
          </div>
        </div>

        {/* Vector Field Layout Grid */}
        <div className="relative flex-1 flex items-center justify-center p-4 min-h-[260px]">
          <svg viewBox="0 0 400 240" className="w-full max-w-[480px] h-auto drop-shadow-md">
            {/* Field A Layout */}
            <path
              d="M 20,40 L 160,20 L 180,100 L 40,120 Z"
              className={`transition-all duration-500 cursor-pointer stroke-[1.5] ${getFieldColor("field-a")} ${
                selectedFieldId === "field-a" ? "stroke-primary stroke-2" : ""
              }`}
              onClick={() => setSelectedFieldId("field-a")}
            />
            <text x="75" y="75" className="text-[10px] font-bold fill-text-secondary pointer-events-none">
              North Alfa (A)
            </text>

            {/* Field B Layout */}
            <path
              d="M 160,20 L 360,30 L 380,100 L 180,100 Z"
              className={`transition-all duration-500 cursor-pointer stroke-[1.5] ${getFieldColor("field-b")} ${
                selectedFieldId === "field-b" ? "stroke-primary stroke-2" : ""
              }`}
              onClick={() => setSelectedFieldId("field-b")}
            />
            <text x="240" y="65" className="text-[10px] font-bold fill-text-secondary pointer-events-none">
              South Clover (B)
            </text>

            {/* Field C Layout */}
            <path
              d="M 40,120 L 180,100 L 200,200 L 60,210 Z"
              className={`transition-all duration-500 cursor-pointer stroke-[1.5] ${getFieldColor("field-c")} ${
                selectedFieldId === "field-c" ? "stroke-primary stroke-2" : ""
              }`}
              onClick={() => setSelectedFieldId("field-c")}
            />
            <text x="95" y="165" className="text-[10px] font-bold fill-text-secondary pointer-events-none">
              East Orchard (C)
            </text>

            {/* Field D Layout */}
            <path
              d="M 180,100 L 380,100 L 360,220 L 200,200 Z"
              className={`transition-all duration-500 cursor-pointer stroke-[1.5] ${getFieldColor("field-d")} ${
                selectedFieldId === "field-d" ? "stroke-primary stroke-2" : ""
              }`}
              onClick={() => setSelectedFieldId("field-d")}
            />
            <text x="260" y="165" className="text-[10px] font-bold fill-text-secondary pointer-events-none">
              West Corn (D)
            </text>
          </svg>

          {/* Active Sim Overlay indicator */}
          {simulationRunning && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] flex items-center justify-center rounded">
              <div className="flex flex-col items-center gap-2 bg-background p-4 rounded shadow border border-outline-variant">
                <RefreshCw className="w-6 h-6 animate-spin text-primary" />
                <span className="text-xs font-semibold text-primary">Hydrating field zones...</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4 pt-4 border-t border-outline-variant/30">
          <div className="text-[10px] text-text-secondary order-2 sm:order-1">
            * Click sector on spatial map to view specific live readings.
          </div>
          <div className="flex gap-2 order-1 sm:order-2 w-full sm:w-auto">
            <button
              onClick={handleResetSimulation}
              className="p-2 border hairline-border rounded text-text-secondary hover:bg-sub-surface"
              title="Reset Model"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleSimulateIrrigation}
              disabled={simulationRunning}
              className="flex-1 sm:flex-none bg-primary text-background font-semibold text-xs px-4 py-2.5 rounded hover:bg-primary-hover transition-colors"
            >
              Simulate Fertigation Cycle
            </button>
          </div>
        </div>
      </div>

      {/* Field Details Inspector Panel */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        {/* Readings card */}
        <div className="hairline-border bg-surface-container-lowest p-6 rounded-lg flex-1 flex flex-col justify-between shadow-sm">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
              Field Telemetry Analysis
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-on-surface mb-6">
              {selectedField.name}
            </h3>

            {/* Metrics list */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant/30">
                <span className="text-xs font-semibold text-text-secondary">Crop Variety</span>
                <span className="text-sm font-bold text-on-surface">{selectedField.crop}</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant/30">
                <span className="text-xs font-semibold text-text-secondary">Canopy Health Index</span>
                <span className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  {selectedField.healthIndex}%
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant/30">
                <span className="text-xs font-semibold text-text-secondary">Soil Moisture (VWC)</span>
                <span className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-sky-600" />
                  {selectedField.moisture}
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-outline-variant/30">
                <span className="text-xs font-semibold text-text-secondary">Canopy Temperature</span>
                <span className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-amber-600" />
                  {selectedField.temp}
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-xs font-semibold text-text-secondary">Nitrogen Density</span>
                <span className="text-sm font-bold text-on-surface">{selectedField.nitrogen}</span>
              </div>
            </div>
          </div>

          {/* Status Indicator Bar */}
          <div className="mt-8 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
            <span className="text-xs font-semibold text-text-secondary">Field Alert Level</span>
            <div className="flex items-center gap-2">
              {selectedField.status !== "Optimal" && (
                <ShieldAlert className={`w-4 h-4 ${
                  selectedField.status === "Critical" ? "text-rose-600" : "text-amber-500"
                }`} />
              )}
              <span className={`text-xs font-bold px-3 py-1.5 rounded uppercase ${
                selectedField.status === "Optimal"
                  ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300"
                  : selectedField.status === "Critical"
                  ? "bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300"
                  : "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300"
              }`}>
                {selectedField.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
