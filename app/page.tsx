"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldAlert, Sparkles } from "lucide-react";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import FarmDigitalTwin from "@/components/FarmDigitalTwin";
import AiAgentCopilot from "@/components/AiAgentCopilot";
import TechPipeline from "@/components/TechPipeline";
import heroImage from "@/images/im1.png";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-sub-surface pt-6 sm:pt-10">
        {/* Background Image with overlay gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage.src}
            alt="Immersive agricultural landscape sunset"
            className="w-full h-full object-cover opacity-75 md:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Pulsing Status Overlays */}
        <div className="hidden lg:flex absolute top-32 right-16 bg-surface-container-lowest/80 backdrop-blur-md border border-primary/20 p-5 rounded-lg items-center gap-3 animate-pulse shadow-lg z-10">
          <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
          <div>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-0.5">
              AMR Solutions Node Status
            </span>
            <span className="text-sm font-bold text-on-surface">INTERACTIVE DEMO</span>
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full py-12 sm:py-16">
          <div className="max-w-2xl">
            {/* Tagline */}
            <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wider mb-4 sm:mb-6">
              <Leaf className="w-3.5 h-3.5" />
              Next-Generation Agritech
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1] text-on-surface">
              The Operating System <br />
              <span className="text-primary">for Modern Agriculture</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg leading-relaxed text-text-secondary mb-10 max-w-xl">
              AMR Solutions combines AI decision agents, volumetric digital twins, IoT telemetry networks, and automation systems to transform crop fields into predictable, sustainable growth cycles.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" href="/contact">
                Request Demo
              </CTAButton>
              <CTAButton variant="outline" href="/platform">
                Explore Platform
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <Section
        id="mission"
        bgType="sub"
        tagline="Our Philosophy"
        title="Engineering resilience into the global food supply."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Global agriculture stands at a critical junction. Accelerating climate change, water scarcity, and fertilizer limits demand a transition from heuristic estimations to absolute precision.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              By deploying edge nodes directly at field margins and training specialized agronomic neural models, AMR Solutions translates chemical soil diffusion, evapotranspiration rates, and foliage health into clear, closed-loop action logs. We optimize every drop, ensuring sustainable yields for generations.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline group"
              >
                <span>Read Our Sustainability Charter</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden hairline-border p-2 bg-surface-container-lowest shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeW9Ps2qffhrZfw8WgQS5_OiD5HMlt3qzObQGMRzlontogRvS3ZtkCV721lx7HLfdo8Br_1Xty6ZVoxmxVglEw4AnsKD3_PvLq_omhpGCic2f5Tlmb9g5kdA6qYck1WGejb3RbJFjP1roOzHoVEQIYxEukF-CnCrdHq9h38rqv11J-iYCvzZT7zEr1L2EBXaBudGN0eeevp9L3UCz8X6TfEptaqHoxiMHoc4pIu691piaChCPUj7lUmdTBEjdb1SjqWlV_j6KQY5l_"
                alt="Agricultural scientist monitoring greenhouse plants with tablet telemetry"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Platform Architecture Diagram Section */}
      <Section
        id="architecture"
        bgType="default"
        tagline="Ecosystem Architecture"
        title="Unified Edge-to-Cloud Infrastructure"
        centeredTitle
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-text-secondary max-w-xl mx-auto mb-16">
            A secure, closed-loop pipeline feeding real-time physical telemetry into advanced virtual models to deploy localized action instructions.
          </p>
          <ArchitectureDiagram />
        </div>
      </Section>

      {/* 4. Digital Twin Section */}
      <Section
        id="digital-twin"
        bgType="sub"
        tagline="Spatial Replication"
        title="High-Fidelity Volumetric Digital Twins"
      >
        <div className="space-y-12">
          <div className="max-w-2xl">
            <p className="text-base text-text-secondary leading-relaxed">
              Model seasons, rainfall events, and nitrogen depletion before they occur. AMR Solutions digital twin engine meshes satellite scans with physical soil sensors to map spatial soil VWC gradients in real-time.
            </p>
          </div>
          <FarmDigitalTwin />
        </div>
      </Section>

      {/* 5. AI Agent Section */}
      <Section
        id="ai-agent"
        bgType="default"
        tagline="Crop Copilot"
        title="Meet Your Agentic Crop Analytics Assistant"
      >
        <div className="space-y-12">
          <div className="max-w-2xl">
            <p className="text-base text-text-secondary leading-relaxed">
              AMR Solutions Copilot monitors canopy data logs and weather indicators to compile plain-text irrigation volumes, crop safety alerts, and harvest timelines.
            </p>
          </div>
          <AiAgentCopilot />
        </div>
      </Section>

      {/* 6. Technology Pipeline Section */}
      <Section
        id="pipeline"
        bgType="default"
        tagline="Data Pipeline"
        title="Integrated Closed-loop Data Streams"
      >
        <div className="space-y-12">
          <div className="max-w-2xl">
            <p className="text-base text-text-secondary leading-relaxed">
              Understand the life of a data point. Watch how moisture indices move from physical edge sensors into neural simulation layers, and back to automated valves in seconds.
            </p>
          </div>
          <TechPipeline />
        </div>
      </Section>

      {/* 7. Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-sub-surface border-t border-outline-variant/30 text-center relative overflow-hidden bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">
            Build the Future of Smart Agriculture
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            We are building the platform now and looking for early pilot partners, researchers, and growers to help shape the future of precision agriculture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <CTAButton variant="primary" href="/contact">
              Request Demo
            </CTAButton>
            <CTAButton variant="outline" href="/platform">
              Read Documentation
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
