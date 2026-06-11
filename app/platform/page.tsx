"use client";

import React from "react";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { platformLayers } from "@/data/platform";
import { Radio, Database, Cloud, Cpu, Brain, Laptop, Server, HelpCircle } from "lucide-react";

export default function PlatformPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "sensors":
        return <Radio className="w-5 h-5" />;
      case "memory":
        return <Database className="w-5 h-5" />;
      case "partly_sunny":
        return <Cloud className="w-5 h-5" />;
      case "map":
        return <Cpu className="w-5 h-5" />;
      case "smart_toy":
        return <Brain className="w-5 h-5" />;
      default:
        return <Server className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full">
      {/* Platform Header */}
      <section className="bg-sub-surface py-12 sm:py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
            The Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 max-w-3xl leading-tight">
            AMR Solutions Smart Farming Operating System
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            A secure, localized hardware and cloud software ecosystem built specifically for large-scale agricultural enterprises, enabling crop transparency, predictive modeling, and automated watering loops.
          </p>
        </div>
      </section>

      {/* OS Layers */}
      <Section
        id="layers"
        bgType="default"
        tagline="Ecosystem Architecture"
        title="The Six Columns of AMR Solutions OS"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformLayers.map((layer) => (
            <FeatureCard
              key={layer.id}
              number={layer.number}
              icon={getIcon(layer.icon)}
              title={layer.name}
              description={layer.shortDesc}
              specs={layer.technicalSpecs}
            />
          ))}
        </div>
      </Section>

      {/* Hardware Section */}
      <Section
        id="hardware"
        bgType="sub"
        tagline="Hardware Specifications"
        title="Industrial Grade Telemetry Nodes"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-on-surface">
              Built for the harshest field margins.
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Our sensors and edge stations are encased in glass-reinforced IP68 polymer shells. They endure temperatures ranging from -40°C to +85°C, high UV rays, and heavy machinery vibrations.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Equipped with a built-in regional radio mesh network, edge stations process telemetry variables and cycle solenoid valves locally, ensuring crop safety even when cell tower connections fail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="p-4 bg-background border border-outline-variant/40 rounded">
                <span className="text-xs font-bold text-primary block mb-1">Battery Span</span>
                <span className="text-lg font-bold text-on-surface">Up to 10 Years</span>
              </div>
              <div className="p-4 bg-background border border-outline-variant/40 rounded">
                <span className="text-xs font-bold text-primary block mb-1">Ingress Protection</span>
                <span className="text-lg font-bold text-on-surface">IP68 Waterproof</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square bg-background hairline-border rounded-lg p-6 flex flex-col justify-between shadow-sm relative overflow-hidden bg-grid-pattern">
              <div className="flex justify-between items-center">
                <Radio className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold px-2.5 py-1 bg-primary/10 text-primary rounded">LoRaWAN Mesh</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-on-surface">Soil Sensor Node v4</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Active electromagnetic probes measuring relative permittivity of soil moisture at 15cm, 30cm, and 60cm depths simultaneously.
                </p>
              </div>
              <div className="text-[10px] text-text-secondary uppercase tracking-widest font-bold border-t border-outline-variant/30 pt-3">
                Model: SN-404-VOLUMETRIC
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-primary text-background text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to integrate the AMR Solutions Platform?
          </h2>
          <p className="text-base text-background/80 max-w-xl mx-auto leading-relaxed">
            We are actively building the platform and welcome conversations with operators interested in early integration.
          </p>
          <div className="pt-4">
            <CTAButton variant="secondary" href="/contact">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
