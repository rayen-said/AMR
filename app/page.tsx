import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Database,
  Droplets,
  Gauge,
  Network,
  Radio,
  ScanLine,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import fieldNetwork from "@/images/im1.png";

const systems = [
  {
    number: "01",
    icon: Radio,
    title: "Sense the field",
    body: "Rugged soil, weather, and canopy nodes turn every block into a live operational layer.",
    meta: "LoRaWAN / NB-IoT / IP68",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Model the next move",
    body: "Crop-aware AI and digital twins forecast stress, water demand, and yield risk before they surface.",
    meta: "EDGE + CLOUD INFERENCE",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Act with control",
    body: "Verified recommendations move from the control room to pumps, valves, and field teams with a human in command.",
    meta: "AUDITABLE AUTOMATION",
  },
];

const outcomes = [
  { value: "24/7", label: "field awareness", detail: "Continuous telemetry across connected operations." },
  { value: "01", label: "operational picture", detail: "Every field, asset, alert, and action in one view." },
  { value: "<60s", label: "signal cadence", detail: "Field changes reach the decision layer in near real time." },
];

function FieldOperationsGraphic() {
  return (
    <div className="field-ops-visual" role="img" aria-label="Diagram of AMR sensor nodes connected across agricultural fields">
      <svg viewBox="0 0 760 620" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="fieldFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c8ff45" stopOpacity=".16" />
            <stop offset="1" stopColor="#75d994" stopOpacity=".02" />
          </linearGradient>
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="field-ops-grid" stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 13 }, (_, index) => <path key={`v-${index}`} d={`M${20 + index * 60} 0V620`} />)}
          {Array.from({ length: 11 }, (_, index) => <path key={`h-${index}`} d={`M0 ${10 + index * 60}H760`} />)}
        </g>
        <g fill="url(#fieldFill)" stroke="currentColor" strokeWidth="1.5">
          <path d="M70 110 300 58l118 130-234 74Z" />
          <path d="m436 78 237 58-49 170-214-54Z" />
          <path d="m117 304 270-66 69 191-275 81Z" />
          <path d="m472 312 189 33-61 184-173-45Z" />
        </g>
        <g className="field-ops-links" fill="none" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2">
          <path d="M173 176 360 310 554 203" />
          <path d="m360 310-111 128" />
          <path d="m360 310 197 118" />
        </g>
        <g className="field-ops-nodes" fill="#c8ff45" filter="url(#nodeGlow)">
          {[[173,176],[360,310],[554,203],[249,438],[557,428]].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="7" />
              <circle cx={cx} cy={cy} r="20" fill="none" stroke="#c8ff45" strokeOpacity=".55" strokeWidth="1.5" />
            </g>
          ))}
        </g>
        <g className="field-ops-target" transform="translate(360 310)" fill="none" stroke="#c8ff45">
          <circle r="62" strokeOpacity=".3" />
          <circle r="92" strokeOpacity=".14" />
          <path d="M-110 0h36M74 0h36M0-110v36M0 74v36" />
        </g>
        <path className="field-ops-sweep" d="M45 505 712 116" stroke="#c8ff45" strokeWidth="2" />
      </svg>
      <div className="field-ops-hud field-ops-hud--top">
        <span>AO // NORTH BLOCK</span><strong>ALL SYSTEMS NOMINAL</strong>
      </div>
      <div className="field-ops-hud field-ops-hud--bottom">
        <span>LIVE MESH</span><strong>05 NODES</strong>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="tactical-home -mt-18 sm:-mt-22">
      <section className="tactical-scene tactical-scene--hero" data-scroll-scene>
        <div className="tactical-panel tactical-hero">
          <div className="tactical-hero-media">
            <Image
              src={fieldNetwork}
              alt="Connected agricultural fields equipped with sensors, solar power, and autonomous irrigation"
              fill
              priority
              sizes="100vw"
              className="tactical-hero-image object-cover"
            />
          </div>
          <div className="tactical-hero-shade" />
          <div className="tactical-scan-line" />
          <div className="tactical-frame" aria-hidden="true">
            <span className="tactical-corner tactical-corner--tl" />
            <span className="tactical-corner tactical-corner--tr" />
            <span className="tactical-corner tactical-corner--bl" />
            <span className="tactical-corner tactical-corner--br" />
          </div>

          <div className="tactical-hero-content">
            <div className="tactical-hero-topline" data-hero-item>
              <p><span className="status-dot" /> AUTONOMOUS FIELD INTELLIGENCE</p>
              <p className="hidden sm:block">36.8065° N / 10.1815° E</p>
            </div>

            <div className="tactical-hero-copy">
              <p className="tactical-kicker" data-hero-item>ENGINEERED FOR DECISIVE AGRICULTURE</p>
              <h1 data-hero-item>
                SEE THE FIELD.<br />
                <span>ACT FIRST.</span>
              </h1>
              <div className="tactical-hero-actions" data-hero-item>
                <Link href="/contact" className="tactical-button tactical-button--signal">
                  Start a field briefing <ArrowUpRight className="size-4" />
                </Link>
                <Link href="/product" className="tactical-button tactical-button--ghost">
                  Explore the system <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="tactical-hero-readout" data-hero-item>
              <div><span>NETWORK</span><strong>ONLINE</strong></div>
              <div><span>FIELD LAYER</span><strong>LIVE</strong></div>
              <div><span>DECISION LOOP</span><strong>CLOSED</strong></div>
            </div>
          </div>
          <div className="tactical-scroll-cue"><span>SCROLL TO ENTER SYSTEM</span><i /></div>
        </div>
      </section>

      <section className="tactical-scene tactical-scene--statement" data-scroll-scene>
        <div className="tactical-panel tactical-statement">
          <div className="tactical-statement-inner">
            <p className="tactical-kicker text-[#5c675f]">THE AMR MISSION / 001</p>
            <h2 className="tactical-progress-copy">
              AMR turns fragmented field signals into one operational picture—so growers can see change sooner, decide with evidence, and move before yield is at risk.
            </h2>
            <div className="tactical-statement-rule"><span /></div>
          </div>
        </div>
      </section>

      <section className="tactical-scene tactical-scene--threat" data-scroll-scene>
        <div className="tactical-panel tactical-threat">
          <div className="tactical-threat-grid" aria-hidden="true" />
          <div className="tactical-threat-copy">
            <p className="tactical-kicker">THE OPERATING ENVIRONMENT / 002</p>
            <h2>THE FIELD<br />DOESN&apos;T WAIT.</h2>
            <p>Water tightens. Weather shifts. Small stresses compound quietly. Static reports arrive after the moment to act has already passed.</p>
          </div>
          <div className="tactical-threat-index">
            <span>INPUT VOLATILITY</span>
            <div><i /><i /><i /><i /><i /></div>
            <strong>RISING</strong>
          </div>
        </div>
      </section>

      <section id="system" className="tactical-scene tactical-scene--system" data-scroll-scene>
        <div className="tactical-panel tactical-system">
          <div className="tactical-system-layout">
            <div className="tactical-system-copy" data-reveal>
              <p className="tactical-kicker">INTRODUCING / AMR OS</p>
              <h2>FIELD<br /><span>COMMAND.</span></h2>
              <p className="tactical-system-intro">A connected intelligence layer for soil, climate, crops, and equipment. AMR keeps the farm observable, explainable, and ready to act.</p>
              <div className="tactical-checks">
                {["Live field telemetry", "Crop-aware forecasting", "Human-controlled automation"].map((item) => (
                  <span key={item}><Check className="size-3.5" /> {item}</span>
                ))}
              </div>
              <Link href="/product" className="tactical-inline-link">SYSTEM CAPABILITIES <ArrowRight className="size-4" /></Link>
            </div>
            <div className="tactical-system-visual" data-reveal>
              <FieldOperationsGraphic />
            </div>
          </div>
        </div>
      </section>

      <section className="tactical-architecture">
        <div className="tactical-section-heading" data-reveal>
          <div>
            <p className="tactical-kicker">SYSTEM ARCHITECTURE / 003</p>
            <h2>ONE LOOP.<br />NO BLIND SPOTS.</h2>
          </div>
          <p>From the sensor node to the operator, every layer is designed to keep intelligence moving and decisions accountable.</p>
        </div>

        <div className="tactical-system-list">
          {systems.map((system) => (
            <article key={system.number} className="tactical-system-row" data-reveal>
              <span className="tactical-row-number">{system.number}</span>
              <system.icon className="tactical-row-icon" strokeWidth={1.5} />
              <h3>{system.title}</h3>
              <p>{system.body}</p>
              <span className="tactical-row-meta">{system.meta}</span>
            </article>
          ))}
        </div>

        <div className="tactical-stack-diagram" data-reveal>
          <div><Radio /><span>SENSOR MESH</span><small>FIELD SIGNALS</small></div>
          <ArrowRight />
          <div><Database /><span>DIGITAL TWIN</span><small>OPERATIONAL MODEL</small></div>
          <ArrowRight />
          <div><Network /><span>AI COPILOT</span><small>DECISION LAYER</small></div>
          <ArrowRight />
          <div><Gauge /><span>AUTOMATION</span><small>VERIFIED ACTION</small></div>
        </div>
      </section>

      <section id="outcomes" className="tactical-outcomes">
        <div className="tactical-outcomes-header" data-reveal>
          <p className="tactical-kicker">OPERATIONAL EFFECT / 004</p>
          <h2>BUILT FOR THE<br />REAL FIELD.</h2>
          <Link href="/product#architecture">EXPLORE THE PRODUCT <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="tactical-outcome-list">
          {outcomes.map((outcome) => (
            <article key={outcome.value} data-reveal>
              <strong>{outcome.value}</strong>
              <div><h3>{outcome.label}</h3><p>{outcome.detail}</p></div>
              <ArrowUpRight />
            </article>
          ))}
        </div>
      </section>

      <section className="tactical-briefing">
        <div className="tactical-briefing-grid" aria-hidden="true" />
        <div className="tactical-briefing-orbit" aria-hidden="true"><Sprout /><span /><span /></div>
        <div className="tactical-briefing-copy" data-reveal>
          <p className="tactical-kicker">MISSION READY / 005</p>
          <h2>MAKE YOUR<br />FIELD VISIBLE.</h2>
          <p>Bring us the operation you need to understand. We&apos;ll show you how AMR can connect its signals, model its risks, and build a clearer path to action.</p>
          <Link href="/contact" className="tactical-button tactical-button--dark">
            Request a field briefing <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="tactical-briefing-meta">
          <span><Droplets /> WATER INTELLIGENCE</span>
          <span><ScanLine /> LIVE MONITORING</span>
          <span><ShieldCheck /> CONTROLLED ACTION</span>
        </div>
      </section>
    </div>
  );
}
