"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Radio, ShieldCheck, Cpu, Brain, Zap, ChevronRight } from "lucide-react";

interface PipelineStep {
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  telemetryInput: string;
  outputDataType: string;
}

export default function TechPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: PipelineStep[] = [
    {
      name: "Sensors Ingest",
      icon: <Radio className="w-5 h-5" />,
      title: "Physical Data Capture",
      description: "Captures raw volumetric water content, spectral infrared reflections, and local humidity every 60 seconds directly in the crop zone.",
      telemetryInput: "Raw electrical current & wave reflection",
      outputDataType: "Raw telemetry JSON mesh packets",
    },
    {
      name: "Edge Compute",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Local Signal Sanitization",
      description: "Gathers telemetry mesh, filters sensor noise, checks integrity metrics, and runs localized automation loops offline.",
      telemetryInput: "Raw telemetry packets via LoRaWAN",
      outputDataType: "Clean database values & local logs",
    },
    {
      name: "Digital Twin",
      icon: <Cpu className="w-5 h-5" />,
      title: "Spatial Hydrology Rendering",
      description: "Maps structured sensor feeds onto the volumetric terrain grid. Computes moisture diffusion models between probes.",
      telemetryInput: "Normalized moisture database fields",
      outputDataType: "3D moisture vector grid & canopy health index",
    },
    {
      name: "AI Engine",
      icon: <Brain className="w-5 h-5" />,
      title: "Predictive Analytics",
      description: "Processes digital twin simulations using specialized agronomy models to evaluate pathogen outbreaks and final harvest dates.",
      telemetryInput: "3D moisture vector grids & temperature indices",
      outputDataType: "Fertilizer schedules & yield estimates",
    },
    {
      name: "Actuation Loop",
      icon: <Zap className="w-5 h-5" />,
      title: "Autonomous Closed-loop Controls",
      description: "Sends optimized irrigation flow volumes to edge nodes, triggering localized solenoid valves and logging performance metrics.",
      telemetryInput: "Calculated drip irrigation flow rates",
      outputDataType: "Automatic valve trigger command",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
      {/* Pipeline Stepper selector */}
      <div className="md:w-5/12 flex flex-col gap-3 justify-center">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <button
              key={step.name}
              onClick={() => setActiveStep(index)}
              className={`text-left p-4 rounded-lg border flex items-center justify-between transition-all duration-300 ${
                isActive
                  ? "bg-primary border-primary text-background shadow-md"
                  : "bg-surface-container-lowest border-outline-variant/60 text-on-surface hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded ${isActive ? "bg-background/10" : "bg-sub-surface"}`}>
                  {step.icon}
                </div>
                <span className="text-sm font-semibold tracking-tight">{step.name}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90" : ""}`} />
            </button>
          );
        })}
      </div>

      {/* Details Display panel */}
      <div className="md:w-7/12 hairline-border bg-surface-container-lowest p-8 rounded-lg flex flex-col justify-between shadow-sm min-h-[300px]">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
            Data Stream Pipelines — Step 0{activeStep + 1}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-on-surface mb-4">
            {steps[activeStep].title}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {steps[activeStep].description}
          </p>
        </div>

        {/* Telemetry pipeline properties */}
        <div className="mt-8 pt-4 border-t border-outline-variant/30 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
              Data Input
            </span>
            <span className="text-xs font-semibold text-on-surface">
              {steps[activeStep].telemetryInput}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-1">
              Data Output
            </span>
            <span className="text-xs font-semibold text-on-surface">
              {steps[activeStep].outputDataType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
