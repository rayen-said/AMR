import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const companyLinks = [
  ["Product", "/product"],
  ["About", "/about"],
  ["Journal", "/blog"],
];

const resourceLinks = [
  ["Product briefing", "/contact"],
  ["Pilot conversation", "/contact"],
  ["General enquiry", "/contact"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/14 bg-[#030705] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(200,255,69,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-[1500px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-12 border-b border-white/16 pb-14 lg:grid-cols-[1.3fr_.7fr_.7fr_.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center overflow-hidden bg-white">
                <Image src="/brand/amr-mark.png" alt="" width={52} height={52} className="size-12 object-cover" />
              </span>
              <span className="display-type text-xl font-extrabold tracking-[-.04em]">AMR <span className="text-[#c8ff45]">Solutions</span></span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/52">A connected field-intelligence system for operations that need to see change sooner and act with evidence.</p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#c8ff45]">System</p>
            <div className="flex flex-col gap-3.5 text-sm text-white/58">
              {companyLinks.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-white">{label}</Link>)}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#c8ff45]">Company</p>
            <div className="flex flex-col gap-3.5 text-sm text-white/58">
              {resourceLinks.map(([label, href]) => <Link key={label} href={href} className="transition-colors hover:text-white">{label}</Link>)}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#c8ff45]">Start a conversation</p>
            <Link href="/contact" className="group mt-5 inline-flex items-center gap-3 border-b border-white/35 pb-2 text-xl font-bold tracking-[-.03em] transition-colors hover:border-[#c8ff45] hover:text-[#c8ff45]">
              Use the contact form <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
            <Link href="mailto:contact@amrsolutions.tech" className="mt-6 flex items-center gap-2 text-xs text-white/48 transition-colors hover:text-white">
              <Mail className="size-3.5" /> contact@amrsolutions.tech
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[11px] font-semibold uppercase tracking-[.12em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AMR Solutions</p>
          <p>Built in Tunisia / Deployed for farms everywhere</p>
        </div>

        <p className="pointer-events-none -mb-[.16em] whitespace-nowrap text-center font-display text-[clamp(3.8rem,11.6vw,11rem)] font-semibold leading-none tracking-[-.085em] text-white/[.055]">
          AMR SOLUTIONS
        </p>
      </div>
    </footer>
  );
}
