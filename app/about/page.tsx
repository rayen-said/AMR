"use client";

import React from "react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    { title: "Scientific Integrity", desc: "Every model output must map directly to verifiable physical permittivity and meteorological algorithms." },
    { title: "Resource Conservation", desc: "We are building crop intelligence to help prevent water table drops and excessive nitrate runoffs." },
    { title: "Open Research Standards", desc: "We plan to provide agronomy researchers with open API sandboxes to study crop disease and microclimates." }
  ];

  const roadmap = [
    { phase: "01", title: "Platform Architecture", desc: "Defining the integrated stack — IoT edge nodes, digital twin engine, AI copilot, and cloud orchestration layer." },
    { phase: "02", title: "Hardware & Simulation", desc: "Prototyping sensor nodes and building interactive demos to validate data flows from field telemetry to automated actuation." },
    { phase: "03", title: "Pilot Partner Program", desc: "Seeking early growers, cooperatives, and research partners to field-test the platform and refine the product roadmap." }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-sub-surface py-12 sm:py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 max-w-3xl leading-tight">
            Scientific Crop Data Integrity
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            AMR Solutions is an early-stage agritech startup founded to replace agricultural guesswork with robust physical data streams — building the tools to secure crop resilience under changing climate conditions.
          </p>
        </div>
      </section>

      {/* Philosophy Details */}
      <Section
        id="philosophy"
        bgType="default"
        tagline="Pillars of Operation"
        title="Securing Agriculture with Code and Science"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item) => (
            <div key={item.title} className="hairline-border bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold tracking-tight text-on-surface mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section
        id="roadmap"
        bgType="sub"
        tagline="Where We Are"
        title="Building Toward Field-Ready Precision Agriculture"
      >
        <div className="max-w-3xl mx-auto space-y-12">
          {roadmap.map((item) => (
            <div key={item.phase} className="flex gap-6 md:gap-10 items-start">
              <div className="w-16 shrink-0 text-right">
                <span className="text-2xl font-bold text-primary block leading-none">{item.phase}</span>
                <span className="text-[10px] text-text-secondary font-semibold uppercase tracking-widest mt-1 block">Phase</span>
              </div>
              <div className="relative pl-6 md:pl-10 border-l border-outline-variant/60 pb-8 flex-1">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                <h4 className="text-lg font-bold text-on-surface mb-2">{item.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Early Access */}
      <Section
        id="early-access"
        bgType="default"
        tagline="Get Involved"
        title="Help Shape the Platform"
        centeredTitle
      >
        <p className="text-center text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
          We do not have commercial deployments yet. If you are a grower, researcher, or agronomy institute interested in early access or pilot collaboration, we would like to hear from you.
        </p>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-sub-surface border-t border-outline-variant/30 text-center relative overflow-hidden bg-grid-pattern">
        <div className="max-w-3xl mx-auto px-6 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            Join the AMR Solutions Mission
          </h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            We are looking for growers, scientists, and software developers who want to help build the next generation of precision farm technology.
          </p>
          <div className="pt-4">
            <CTAButton variant="primary" href="/contact">
              Contact Our Team
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
