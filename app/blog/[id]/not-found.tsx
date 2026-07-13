import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sprout } from "lucide-react";

export default function JournalEntryNotFound() {
  return (
    <section className="grid min-h-[calc(100svh-5.5rem)] place-items-center bg-[#030705] px-5 py-20 text-center text-[#edf4ea]">
      <div className="max-w-2xl">
        <div className="mx-auto grid size-16 place-items-center border border-[#c8ff45]/30 text-[#c8ff45]"><Sprout className="size-7" /></div>
        <p className="mt-7 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#c8ff45]">JOURNAL / SIGNAL NOT FOUND</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">THIS FIELD NOTE ISN’T AVAILABLE.</h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/52">The entry may have moved or may no longer be published.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/blog" className="inline-flex min-h-13 items-center justify-center gap-2 border border-white/25 px-6 text-[10px] font-extrabold uppercase tracking-[.12em]"><ArrowLeft className="size-4" /> Back to journal</Link>
          <Link href="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#c8ff45] px-6 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#050b08]">Use contact form <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}
