import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  Cloud,
  Database,
  Gauge,
  Map,
  Radio,
  Server,
} from "lucide-react";
import TacticalPageCTA from "@/components/TacticalPageCTA";
import { platformLayers } from "@/data/platform";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Product | AMR Solutions",
  description: "Explore the AMR field operating system—from rugged telemetry and digital twins to explainable AI and controlled automation.",
};

const icons = {
  sensors: Radio,
  memory: Database,
  partly_sunny: Cloud,
  map: Map,
  smart_toy: Brain,
  cloud: Server,
} as const;

const loop = [
  { number: "01", icon: Radio, title: "Sense", body: "Collect soil, climate, canopy, and equipment signals at field cadence." },
  { number: "02", icon: Brain, title: "Understand", body: "Combine agronomic models, history, and context into explainable priorities." },
  { number: "03", icon: Gauge, title: "Act", body: "Move approved decisions to crews, pumps, valves, and operational systems." },
];

export default function ProductPage() {
  return (
    <div className="bg-[#030705] text-[#edf4ea]">
      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden border-b border-white/15 px-5 py-16 sm:min-h-[calc(100svh-5.5rem)] sm:px-8 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(200,255,69,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(90deg,#000,transparent_78%)]" />
        <div className="pointer-events-none absolute -right-[18vw] top-1/2 size-[68vw] -translate-y-1/2 rounded-full border border-[#c8ff45]/15 sm:size-[52vw]" />

        <div className="relative mx-auto grid min-h-[calc(100svh-12rem)] max-w-[1500px] items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <p data-hero-item className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#c8ff45]">
              <span className="size-2 bg-[#c8ff45] shadow-[0_0_14px_#c8ff45]" /> PRODUCT / AMR OS
            </p>
            <h1 data-hero-item className="mt-6 max-w-5xl font-display text-[clamp(3.8rem,7.6vw,8.4rem)] font-semibold leading-[.82] tracking-[-.075em] uppercase">
              FROM FIELD<br /><span className="text-[#c8ff45]">SIGNAL</span> TO<br />VERIFIED ACTION.
            </h1>
            <p data-hero-item className="mt-8 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
              One connected operating picture for soil, weather, crops, equipment, and the people responsible for the next move.
            </p>
            <div data-hero-item className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#c8ff45] px-6 text-xs font-extrabold uppercase tracking-[.1em] text-[#050b08] transition-transform hover:-translate-y-1">
                Use the contact form <ArrowUpRight className="size-4" />
              </Link>
              <Link href="#architecture" className="inline-flex min-h-13 items-center justify-center gap-2 border border-white/28 px-6 text-xs font-extrabold uppercase tracking-[.1em] text-white transition-colors hover:border-[#c8ff45] hover:text-[#c8ff45]">
                Inspect the system <ArrowDown className="size-4" />
              </Link>
            </div>
          </div>

          <div data-hero-item className="relative border border-[#c8ff45]/30 bg-[#06100a]/85 p-4 shadow-[0_40px_120px_rgba(0,0,0,.55)] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/14 pb-4 font-mono text-[9px] font-bold uppercase tracking-[.14em]">
              <span className="text-white/45">AMR / FIELD CONSOLE</span>
              <span className="flex items-center gap-2 text-[#c8ff45]"><i className="size-1.5 animate-pulse rounded-full bg-[#c8ff45]" /> SYSTEM ONLINE</span>
            </div>
            <div className="grid gap-px bg-white/12 sm:grid-cols-2">
              <div className="bg-[#06100a] p-6 sm:p-7">
                <p className="font-mono text-[9px] uppercase tracking-[.14em] text-white/38">Operational area</p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-.05em]">NORTH BLOCK</p>
                <div className="mt-8 space-y-5">
                  {[["SOIL VWC", "61%"], ["CANOPY INDEX", "0.84"], ["NETWORK", "05/05"]].map(([label, value], index) => (
                    <div key={label}>
                      <div className="flex justify-between font-mono text-[9px] tracking-[.12em]"><span className="text-white/45">{label}</span><span className="text-[#c8ff45]">{value}</span></div>
                      <div className="mt-2 h-px bg-white/12"><span className="block h-px bg-[#c8ff45]" style={{ width: `${[61,84,100][index]}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-72 overflow-hidden bg-[#07150d] p-6 sm:p-7">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(200,255,69,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute left-[22%] top-[26%] size-3 bg-[#c8ff45] shadow-[0_0_24px_#c8ff45]" />
                <div className="absolute right-[24%] top-[42%] size-3 bg-[#c8ff45] shadow-[0_0_24px_#c8ff45]" />
                <div className="absolute bottom-[22%] left-[44%] size-3 bg-[#c8ff45] shadow-[0_0_24px_#c8ff45]" />
                <svg className="absolute inset-0 size-full text-[#c8ff45]/45" viewBox="0 0 300 280" aria-hidden="true">
                  <path d="M65 72 225 118 134 218Z" fill="none" stroke="currentColor" strokeDasharray="6 7" />
                  <circle cx="65" cy="72" r="38" fill="none" stroke="currentColor" />
                  <circle cx="225" cy="118" r="28" fill="none" stroke="currentColor" />
                  <circle cx="134" cy="218" r="44" fill="none" stroke="currentColor" />
                </svg>
                <p className="relative font-mono text-[9px] uppercase tracking-[.14em] text-[#c8ff45]">LIVE MESH / 05 NODES</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3 border-t border-white/14 pt-4 font-mono text-[9px] uppercase tracking-[.13em] text-white/38">
              <span>Signal cadence / &lt;60s</span><span>Human approval / armed</span>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-[#f1f4eb] px-5 py-20 text-[#050b08] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5c675f]">SYSTEM ARCHITECTURE / 006 LAYERS</p>
              <h2 className="mt-5 font-display text-[clamp(3.2rem,6.6vw,7rem)] font-semibold leading-[.84] tracking-[-.07em] uppercase">ONE PRODUCT.<br />EVERY FIELD SIGNAL.</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#617064] lg:justify-self-end">Each layer can stand on its own. Together they form a resilient path from physical measurement to controlled action.</p>
          </div>

          <div className="mt-16 border-t border-[#050b08]/20 sm:mt-24">
            {platformLayers.map((layer, index) => {
              const Icon = icons[layer.icon as keyof typeof icons] ?? Server;
              return (
                <article key={layer.id} data-reveal className="grid gap-5 border-b border-[#050b08]/18 py-8 sm:grid-cols-[52px_52px_1fr_1.15fr] sm:items-center sm:gap-7 lg:py-10">
                  <span className="font-mono text-[10px] font-bold tracking-[.14em] text-[#198049]">0{index + 1}</span>
                  <Icon className="size-7 text-[#198049]" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{layer.name}</h3>
                  <div>
                    <p className="text-sm leading-7 text-[#617064]">{layer.shortDesc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {layer.technicalSpecs.slice(0, 2).map((spec) => <span key={spec} className="border border-[#050b08]/15 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.08em] text-[#465249]">{spec}</span>)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/15 bg-[#08100c] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="max-w-4xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#c8ff45]">THE CLOSED LOOP / 003 MOVES</p>
            <h2 className="mt-5 font-display text-[clamp(3.2rem,6.6vw,7rem)] font-semibold leading-[.84] tracking-[-.07em] uppercase">SENSE. UNDERSTAND. ACT.</h2>
          </div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-3 sm:mt-20">
            {loop.map((item) => (
              <article key={item.number} data-reveal className="group bg-[#08100c] p-7 transition-colors hover:bg-[#0d1a12] sm:p-9">
                <div className="flex items-center justify-between"><item.icon className="size-8 text-[#c8ff45]" strokeWidth={1.5} /><span className="font-mono text-[10px] tracking-[.14em] text-white/35">{item.number}</span></div>
                <h3 className="mt-14 font-display text-3xl font-semibold tracking-[-.05em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/52">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f4eb] px-5 py-20 text-[#050b08] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5c675f]">OPERATIONAL FIT / 004</p><h2 className="mt-5 font-display text-[clamp(3.2rem,6.2vw,6.5rem)] font-semibold leading-[.86] tracking-[-.07em] uppercase">BUILT AROUND THE OPERATION.</h2></div>
            <div className="grid grid-cols-2 gap-px bg-[#050b08]/15 lg:justify-self-end">
              {[["10 YEARS", "Projected node battery"], ["IP68", "Field-ready enclosure"], ["-40° / 85°C", "Operating range"], ["LORAWAN", "Long-range mesh"]].map(([value, label]) => (
                <div key={label} className="min-w-36 bg-[#f1f4eb] p-5 sm:min-w-48"><strong className="font-display text-2xl tracking-[-.04em] text-[#198049]">{value}</strong><span className="mt-2 block text-[9px] font-bold uppercase tracking-[.12em] text-[#617064]">{label}</span></div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid border-l border-t border-[#050b08]/18 md:grid-cols-2 sm:mt-24">
            {solutions.map((solution, index) => (
              <article key={solution.id} data-reveal className="border-b border-r border-[#050b08]/18 p-7 sm:p-9">
                <div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.14em] text-[#198049]">FIT / 0{index + 1}</span><ArrowRight className="size-4 text-[#617064]" /></div>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{solution.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#617064]">{solution.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {solution.benefits.slice(0, 2).map((benefit) => <li key={benefit} className="flex gap-3 text-xs leading-6 text-[#465249]"><Check className="mt-1 size-3.5 shrink-0 text-[#198049]" />{benefit}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TacticalPageCTA
        eyebrow="PRODUCT BRIEFING / CONTACT"
        title="MAP AMR TO YOUR FIELD."
        body="Tell us what you grow, what data you already have, and where your operation needs more certainty. We’ll use the contact form to prepare a focused product conversation."
        buttonLabel="Start with the contact form"
      />
    </div>
  );
}
