"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Database, Cpu, Brain, Zap, ArrowRight } from "lucide-react";

interface Node {
  id: string;
  number: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  spec: string;
}

export default function ArchitectureDiagram() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [pulseIndex, setPulseIndex] = useState(0);

  const nodes: Node[] = [
    {
      id: "iot",
      number: "01",
      name: "IoT Nodes",
      icon: <Radio className="w-6 h-6" />,
      color: "border-primary text-primary",
      description: "IP68-rated soil sensors, canopy cams, and microclimate probes logging raw weather and telemetry metrics.",
      spec: "NB-IoT & LoRaWAN, 10-year battery life, 60s intervals",
    },
    {
      id: "edge",
      number: "02",
      name: "Edge Station",
      icon: <Database className="w-6 h-6" />,
      color: "border-[#8CAE82] text-[#3D7A4E]",
      description: "Field-margin processing computing volumetric moisture gradients, filtering noise, and queuing actions offline.",
      spec: "ARM Quad-core, local SQLite ledger, 24V solenoid relays",
    },
    {
      id: "twin",
      number: "03",
      name: "Digital Twin",
      icon: <Cpu className="w-6 h-6" />,
      color: "border-primary text-primary",
      description: "Continuous real-time terrain mapping. Compares live telemetry against historical weather models.",
      spec: "Volumetric spatial grids, 3D crop maps, finite-element calculations",
    },
    {
      id: "ai",
      number: "04",
      name: "AI Analytics",
      icon: <Brain className="w-6 h-6" />,
      color: "border-[#6FAF76] text-[#3D7A4E]",
      description: "Proprietary agronomy LLMs decoding plant behavior, recognizing diseases, and forecasting exact yield averages.",
      spec: "Early pathogen recognition models, customized nitrogen algorithms",
    },
    {
      id: "automation",
      number: "05",
      name: "Automation",
      icon: <Zap className="w-6 h-6" />,
      color: "border-primary text-primary",
      description: "Edge relays executing automated micro-irrigation, fertilizer releases, and crop health alerts.",
      spec: "Closed-loop feedback, <2s latency, solar valve integration",
    },
  ];

  // Automatic cycle for the active card description
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [nodes.length]);

  // Telemetry data pulse animation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % (nodes.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <div className="w-full flex flex-col space-y-8 sm:space-y-12">
      {/* Mobile / tablet: vertical stepper */}
      <div className="md:hidden space-y-4">
        {nodes.map((node, index) => {
          const isActive = index === activeNodeIndex;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeIndex(index)}
              className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 text-left ${
                isActive
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-outline-variant/60 bg-surface-container-lowest hover:border-primary/40"
              }`}
            >
              <div
                className={`w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center ${
                  isActive ? "border-primary text-primary" : "border-outline-variant/60 text-text-secondary"
                }`}
              >
                {node.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-primary">{node.number}</span>
                <span className={`block text-sm font-bold ${isActive ? "text-primary" : "text-on-surface"}`}>
                  {node.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Desktop: horizontal connected layout */}
      <div className="hidden md:block relative w-full overflow-x-auto pb-4 pt-8">
        <div className="min-w-[640px] lg:min-w-[800px] flex justify-between items-center relative px-4 lg:px-8">
          {/* Connector Line */}
          <div className="absolute top-[52px] left-8 right-8 h-0.5 bg-outline-variant/40 -z-10" />

          {/* Running Data Pulse Overlay */}
          <div className="absolute top-[52px] left-8 right-8 h-0.5 -z-10 overflow-hidden">
            <motion.div
              animate={{
                left: ["0%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 w-28 h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>

          {nodes.map((node, index) => {
            const isActive = index === activeNodeIndex;
            const isPulsing = index === pulseIndex;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeIndex(index)}
                className="flex flex-col items-center cursor-pointer relative group"
              >
                {/* Node circle */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1.0,
                  }}
                  className={`w-16 h-16 rounded-full border-2 bg-background flex items-center justify-center transition-all duration-300 relative z-10 ${
                    isActive
                      ? `${node.color} shadow-lg shadow-primary/10 border-primary stroke-[2.5]`
                      : "border-outline-variant/60 text-text-secondary hover:border-primary/50"
                  }`}
                >
                  {node.icon}

                  {/* Pulsing telemetry halo */}
                  {isPulsing && (
                    <motion.div
                      layoutId="pulse-ring"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/40 -z-10"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.6, opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  )}
                </motion.div>

                {/* Node Details */}
                <span className="text-xs font-bold text-primary mt-3 mb-1">
                  {node.number}
                </span>
                <span
                  className={`text-sm font-bold tracking-tight transition-colors duration-200 ${
                    isActive ? "text-primary font-extrabold" : "text-on-surface"
                  }`}
                >
                  {node.name}
                </span>

                {/* Arrow connectors */}
                {index < nodes.length - 1 && (
                  <div className="absolute left-[calc(100%+8px)] top-12 text-outline-variant/40 hidden md:block">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* active card content detail block */}
      <div className="relative min-h-[160px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNodeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="hairline-border bg-sub-surface p-8 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="max-w-xl">
              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
                Layer {nodes[activeNodeIndex].number} — {nodes[activeNodeIndex].name}
              </span>
              <h4 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">
                Data Integration Engine
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {nodes[activeNodeIndex].description}
              </p>
            </div>
            <div className="hairline-border bg-background px-6 py-4 rounded flex flex-col shrink-0">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1">
                Data Schema Specs
              </span>
              <span className="text-xs font-semibold text-on-surface">
                {nodes[activeNodeIndex].spec}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
