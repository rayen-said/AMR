import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FlaskConical, Leaf, Radio, ShieldCheck } from "lucide-react";
import TacticalPageCTA from "@/components/TacticalPageCTA";

export const metadata: Metadata = {
  title: "About | AMR Solutions",
  description: "Meet the mission, operating principles, and field-readiness roadmap behind AMR Solutions.",
};

const pillars = [
  { number: "01", icon: FlaskConical, title: "Scientific integrity", desc: "Every model output should trace back to physical measurements, agronomic context, and a method the operator can inspect." },
  { number: "02", icon: Leaf, title: "Resource conservation", desc: "Field intelligence should help protect water, soil health, and input efficiency—not add another layer of noise." },
  { number: "03", icon: ShieldCheck, title: "Operator control", desc: "Automation must remain accountable. The people responsible for the field stay informed and in command." },
];

const roadmap = [
  { phase: "01", status: "COMPLETE", title: "Platform architecture", desc: "Define the integrated stack: field telemetry, edge computing, digital twins, AI guidance, and controlled action." },
  { phase: "02", status: "ACTIVE", title: "Hardware and simulation", desc: "Prototype sensor nodes and validate the path from physical signal to recommendation in interactive system demos." },
  { phase: "03", status: "FORMING", title: "Pilot partner program", desc: "Work with early growers, cooperatives, and research partners to test the platform under real operational constraints." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#030705] text-[#edf4ea]">
      <section className="relative overflow-hidden border-b border-white/14 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(200,255,69,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(90deg,#000,transparent_82%)]" />
        <div className="relative mx-auto max-w-[1500px]">
          <p data-hero-item className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#c8ff45]"><span className="size-2 bg-[#c8ff45] shadow-[0_0_14px_#c8ff45]" /> ABOUT / MISSION 001</p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[1.2fr_.55fr] lg:items-end">
            <h1 data-hero-item className="max-w-6xl font-display text-[clamp(3.8rem,8.2vw,8.8rem)] font-semibold leading-[.82] tracking-[-.08em] uppercase">BUILT TO MAKE<br />THE FIELD <span className="text-[#c8ff45]">LEGIBLE.</span></h1>
            <div data-hero-item className="border-l border-[#c8ff45]/35 pl-6 lg:pb-2">
              <p className="text-base leading-8 text-white/58">AMR Solutions is an early-stage agritech company building the connected intelligence layer between what happens in the field and what operators do next.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#c8ff45] px-5 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#050b08]">Use the contact form <ArrowUpRight className="size-4" /></Link>
                <Link href="#principles" className="inline-flex min-h-13 items-center justify-center gap-2 border border-white/25 px-5 text-[10px] font-extrabold uppercase tracking-[.1em] hover:border-[#c8ff45] hover:text-[#c8ff45]">Our principles <ArrowDown className="size-4" /></Link>
              </div>
            </div>
          </div>
          <div data-hero-item className="mt-20 grid gap-px bg-white/14 sm:grid-cols-3">
            {[["BASE", "TUNISIA"], ["STAGE", "EARLY DEVELOPMENT"], ["MISSION", "FIELD RESILIENCE"]].map(([label, value]) => (
              <div key={label} className="bg-[#030705] p-5 font-mono text-[9px] uppercase tracking-[.13em]"><span className="text-white/32">{label}</span><strong className="ml-4 text-[#c8ff45]">{value}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f4eb] px-5 py-20 text-[#050b08] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div data-reveal className="lg:sticky lg:top-32">
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5c675f]">WHY AMR / THE GAP</p>
            <h2 className="mt-5 font-display text-[clamp(3.2rem,5.7vw,6rem)] font-semibold leading-[.86] tracking-[-.07em] uppercase">THE FIELD MOVES FASTER THAN THE REPORT.</h2>
          </div>
          <div data-reveal className="space-y-8 text-[clamp(1.45rem,2.6vw,2.65rem)] leading-[1.24] tracking-[-.04em] text-[#0c1710]">
            <p>Critical farm decisions still depend on fragmented tools, delayed observations, and knowledge that is difficult to transfer across a team.</p>
            <p className="text-[#8a948b]">We are building AMR to connect the physical field, its operational model, and the people who carry responsibility for the outcome.</p>
            <p>Not another dashboard. A clearer chain of evidence from signal to action.</p>
          </div>
        </div>
      </section>

      <section id="principles" className="border-y border-white/14 bg-[#08100c] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#c8ff45]">OPERATING PRINCIPLES / 003</p>
            <h2 className="mt-5 max-w-5xl font-display text-[clamp(3.2rem,6.4vw,6.8rem)] font-semibold leading-[.85] tracking-[-.07em] uppercase">SCIENCE IN THE LOOP.<br />PEOPLE IN COMMAND.</h2>
          </div>
          <div className="mt-16 border-t border-white/17 sm:mt-24">
            {pillars.map((pillar) => (
              <article key={pillar.number} data-reveal className="grid gap-6 border-b border-white/17 py-9 sm:grid-cols-[60px_60px_.8fr_1.2fr] sm:items-center sm:gap-8">
                <span className="font-mono text-[9px] font-bold text-[#c8ff45]">{pillar.number}</span>
                <pillar.icon className="size-7 text-[#c8ff45]" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{pillar.title}</h3>
                <p className="max-w-xl text-sm leading-7 text-white/52">{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f4eb] px-5 py-20 text-[#050b08] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5c675f]">ROADMAP / CURRENT POSITION</p><h2 className="mt-5 font-display text-[clamp(3.2rem,6.4vw,6.8rem)] font-semibold leading-[.85] tracking-[-.07em] uppercase">BUILDING TOWARD FIELD-READY.</h2></div>
            <p className="text-base leading-8 text-[#617064] lg:justify-self-end">We are deliberately early and transparent about it. The next useful milestone is a system tested with serious field partners.</p>
          </div>
          <div className="mt-16 grid gap-px bg-[#050b08]/18 lg:grid-cols-3 sm:mt-24">
            {roadmap.map((item) => (
              <article key={item.phase} data-reveal className="bg-[#f1f4eb] p-7 sm:p-9">
                <div className="flex items-center justify-between font-mono text-[9px] font-bold tracking-[.12em]"><span className="text-[#198049]">PHASE {item.phase}</span><span className={item.status === "ACTIVE" ? "bg-[#c8ff45] px-2 py-1 text-[#050b08]" : "text-[#617064]"}>{item.status}</span></div>
                <h3 className="mt-14 font-display text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#617064]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/14 bg-[#030705] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex size-20 items-center justify-center border border-[#c8ff45]/30"><Radio className="size-7 text-[#c8ff45]" /></div>
          <div><p className="font-mono text-[9px] font-bold uppercase tracking-[.15em] text-[#c8ff45]">PARTNER SIGNAL / OPEN</p><p className="mt-2 max-w-3xl text-sm leading-7 text-white/52">Growers, agronomy researchers, and operators can use the contact form to discuss early product feedback or potential field collaboration.</p></div>
        </div>
      </section>

      <TacticalPageCTA
        eyebrow="MISSION PARTNERS / CONTACT"
        title="HELP SHAPE THE FIELD SYSTEM."
        body="If you operate farms, study crop systems, or build field technology, tell us where today’s tools fall short. The contact form routes that context directly to the team."
        buttonLabel="Use the contact form"
      />
    </div>
  );
}
