import Link from "next/link";
import { ArrowUpRight, Radio } from "lucide-react";

interface TacticalPageCTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  buttonLabel?: string;
}

export default function TacticalPageCTA({
  eyebrow = "FIELD BRIEFING / CHANNEL OPEN",
  title,
  body,
  buttonLabel = "Use the contact form",
}: TacticalPageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#c8ff45] px-5 py-20 text-[#050b08] sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(5,11,8,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(5,11,8,.2)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_70%_45%,#000,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.25fr_.55fr] lg:items-end">
        <div data-reveal>
          <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em]">
            <Radio className="size-3.5" /> {eyebrow}
          </p>
          <h2 className="mt-5 max-w-5xl font-display text-[clamp(3.2rem,7.4vw,7.4rem)] font-semibold leading-[.84] tracking-[-.075em] uppercase">
            {title}
          </h2>
        </div>

        <div data-reveal className="lg:pb-1">
          <p className="max-w-lg text-sm leading-7 sm:text-base sm:leading-8">{body}</p>
          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 bg-[#050b08] px-6 py-3 text-xs font-extrabold uppercase tracking-[.1em] text-[#c8ff45] transition-transform hover:-translate-y-1 sm:w-auto"
          >
            {buttonLabel} <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
