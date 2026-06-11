"use client";

import React from "react";
import Section from "@/components/Section";
import TechPipeline from "@/components/TechPipeline";
import CTAButton from "@/components/CTAButton";
import { Brain, Cpu, Database, ThermometerSun, Leaf, Compass } from "lucide-react";

export default function TechnologyPage() {
  const scienceMetrics = [
    { name: "Evapotranspiration (ETc)", value: "FAO-56 Penman-Monteith", desc: "Our engine uses microclimate humidity and canopy temp logs to solve dynamic watering needs." },
    { name: "NDVI Analysis", value: "Hyper-spectral Ingestion", desc: "Recognizes minor chlorophyll shifts through aerial and ground canopy cams." },
    { name: "Soil Permittivity", value: "TDR electromagnetic waves", desc: "Computes water volume ratios by analyzing wave travel times in soil." }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-sub-surface py-12 sm:py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
            The Deep Science
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 max-w-3xl leading-tight">
            Predictive Crop Physics & AI Models
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            By aligning physical principles of hydrology and botany with fine-tuned neural models, AMR Solutions translates chaotic natural patterns into precise calculations.
          </p>
        </div>
      </section>

      {/* Tech Pipeline Selector */}
      <Section
        id="data-pipeline"
        bgType="default"
        tagline="Closed-Loop Pipeline"
        title="Processing Data from Soil to Actuator"
      >
        <div className="space-y-12">
          <p className="text-text-secondary text-base max-w-2xl">
            Watch how physical soil moisture properties are translated into digitized telemetry nodes, simulated in the volumetric digital twin, verified by AI models, and sent back to field margin valves in seconds.
          </p>
          <TechPipeline />
        </div>
      </Section>

      {/* Science Principles */}
      <Section
        id="physics"
        bgType="sub"
        tagline="Scientific Frameworks"
        title="Physics-Based Crop Modeling"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scienceMetrics.map((item) => (
            <div key={item.name} className="hairline-border bg-background p-8 rounded-lg shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
                  Core Equation
                </span>
                <h3 className="text-xl font-bold text-on-surface tracking-tight">
                  {item.name}
                </h3>
                <span className="text-sm font-semibold text-primary block">
                  {item.value}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Fine-tuning Details */}
      <Section
        id="ai-details"
        bgType="default"
        tagline="AI Model Fine-tuning"
        title="Neural Models Trained in Crop Botany"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-on-surface">
              Moving beyond generic text models.
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              AMR Solutions neural copilot isn't a simple chatbot. It is trained on localized agronomic journals, soil water diffusion equations, and crop leaf rust spectral profiles.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              When you ask about Field moisture, the engine compiles the Penman-Monteith crop model equations, compares soil Permittivity logs, and runs simulations to recommend water adjustments.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex gap-3 items-center text-sm font-semibold text-on-surface">
                <Leaf className="w-5 h-5 text-primary" />
                <span>Pathogen Identification via Optical Canopy Scans</span>
              </li>
              <li className="flex gap-3 items-center text-sm font-semibold text-on-surface">
                <ThermometerSun className="w-5 h-5 text-primary" />
                <span>Heat stress forecasting and dynamic shade logic</span>
              </li>
              <li className="flex gap-3 items-center text-sm font-semibold text-on-surface">
                <Compass className="w-5 h-5 text-primary" />
                <span>Volumetric nutrient diffusion predictions</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-sub-surface hairline-border rounded-lg p-8 space-y-6 shadow-sm">
              <h4 className="text-lg font-bold text-on-surface">AMR Solutions AI Context Layers</h4>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-bold px-2 py-1 bg-primary text-background rounded">Layer 1</span>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface">FAO-56 Evapotranspiration Calculations</h5>
                    <p className="text-[11px] text-text-secondary mt-0.5">Determines water loss through canopy leaves & soil layer.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-bold px-2 py-1 bg-primary text-background rounded">Layer 2</span>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface">Spectral NDVI Crop Canopy Heatmaps</h5>
                    <p className="text-[11px] text-text-secondary mt-0.5">Identifies chlorophyll levels and localized plant stress indicators.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-bold px-2 py-1 bg-primary text-background rounded">Layer 3</span>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface">Solenoid Actuator Edge Verification</h5>
                    <p className="text-[11px] text-text-secondary mt-0.5">Validates flow rate commands before running field cycles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-sub-surface border-t border-outline-variant/30 text-center relative overflow-hidden bg-grid-pattern">
        <div className="max-w-3xl mx-auto px-6 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            Read the AMR Solutions Whitepaper
          </h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Download our scientific whitepaper detailing Penman-Monteith crop modeling, LoRaWAN mesh networks, and agentic yield forecasting algorithms.
          </p>
          <div className="pt-4">
            <CTAButton variant="primary" href="/contact">
              Download Scientific Whitepaper
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
