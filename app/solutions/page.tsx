"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { solutions } from "@/data/solutions";
import { Check, Building2, Droplets, Home, BookOpen } from "lucide-react";

export default function SolutionsPage() {
  const [activeSolutionId, setActiveSolutionId] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeSolutionId) || solutions[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "enterprise-growers":
        return <Building2 className="w-5 h-5 text-primary" />;
      case "water-conservation":
        return <Droplets className="w-5 h-5 text-primary" />;
      case "cooperatives":
        return <Home className="w-5 h-5 text-primary" />;
      default:
        return <BookOpen className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-sub-surface py-12 sm:py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
            The Applications
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 max-w-3xl leading-tight">
            Tailored Smart Farming Solutions
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            From multi-state agro-conglomerates seeking unified metrics to cooperatives sharing local mesh sensor data, AMR Solutions adapts to your operational scale.
          </p>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <Section
        id="solutions-grid"
        bgType="default"
        tagline="Target Segments"
        title="Who We Help Achieve Crop Security"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tab selector */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {solutions.map((item) => {
              const isSelected = item.id === activeSolutionId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSolutionId(item.id)}
                  className={`text-left p-4 rounded-lg border flex items-center gap-3 transition-all duration-300 ${
                    isSelected
                      ? "bg-primary border-primary text-background shadow-md"
                      : "bg-surface-container-lowest border-outline-variant/60 text-on-surface hover:border-primary/40"
                  }`}
                >
                  <div className={`p-2 rounded ${isSelected ? "bg-background/10" : "bg-sub-surface"}`}>
                    {getIcon(item.id)}
                  </div>
                  <span className="text-sm font-semibold tracking-tight">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="lg:col-span-8 flex flex-col justify-between hairline-border bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-lg shadow-sm min-h-[320px] sm:min-h-[360px]">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase block mb-2">
                Operational Overview
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-on-surface mb-4">
                {activeSolution.title}
              </h3>
              <p className="text-sm font-semibold text-primary mb-6 leading-relaxed">
                {activeSolution.tagline}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                <div>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-[10px] tracking-wider text-primary">The Challenge</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{activeSolution.problem}</p>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-[10px] tracking-wider text-primary">The Solution</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{activeSolution.solution}</p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="border-t border-outline-variant/30 pt-6">
              <h4 className="font-bold text-on-surface mb-3 uppercase text-[10px] tracking-wider text-primary">
                Operational Benefits
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {activeSolution.benefits.map((benefit, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start">
                    <Check className="w-4 h-4 text-primary mt-0.5 mr-2 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-primary text-background text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How can AMR Solutions transform your crop fields?
          </h2>
          <p className="text-base text-background/80 max-w-xl mx-auto leading-relaxed">
            We are in early development and welcome conversations with growers and operators interested in piloting the platform.
          </p>
          <div className="pt-4">
            <CTAButton variant="secondary" href="/contact">
              Request Early Access
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
