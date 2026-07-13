import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Radio } from "lucide-react";
import BlogFeed from "@/components/BlogFeed";
import TacticalPageCTA from "@/components/TacticalPageCTA";
import { getBlogPosts, type BlogPost } from "@/lib/blog-api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Journal | AMR Solutions",
  description: "Field research, product updates, and practical thinking from AMR Solutions.",
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  let page = 0;
  let hasMore = false;
  let unavailable = false;

  try {
    const feed = await getBlogPosts(0, 7);
    posts = feed.content;
    page = feed.number;
    hasMore = !feed.last;
  } catch {
    unavailable = true;
  }

  return (
    <div className="bg-[#030705] text-[#edf4ea]">
      <section className="relative overflow-hidden border-b border-white/14 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(200,255,69,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(90deg,#000,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.15fr_.55fr] lg:items-end">
          <div>
            <p data-hero-item className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#c8ff45]"><Radio className="size-3.5" /> JOURNAL / FIELD NOTES</p>
            <h1 data-hero-item className="mt-6 font-display text-[clamp(4.2rem,10vw,10.5rem)] font-semibold leading-[.78] tracking-[-.085em] uppercase">SIGNALS FROM<br /><span className="text-[#c8ff45]">THE FIELD.</span></h1>
          </div>
          <div data-hero-item className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-white/58">Research, product updates, and practical perspectives at the intersection of agriculture, intelligent systems, and the living world.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#c8ff45] px-5 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#050b08]">Use the contact form <ArrowUpRight className="size-4" /></Link>
              <Link href="#journal-feed" className="inline-flex min-h-13 items-center justify-center gap-2 border border-white/25 px-5 text-[10px] font-extrabold uppercase tracking-[.1em] hover:border-[#c8ff45] hover:text-[#c8ff45]">Read field notes <ArrowDown className="size-4" /></Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-20 flex max-w-[1500px] flex-wrap gap-x-10 gap-y-3 border-t border-white/14 pt-5 font-mono text-[8px] uppercase tracking-[.14em] text-white/36">
          <span>TOPICS / AGRONOMY</span><span>PRODUCT SYSTEMS</span><span>FIELD OPERATIONS</span><span>RESILIENCE</span>
        </div>
      </section>

      <section id="journal-feed" className="bg-[#f1f4eb] px-5 py-16 text-[#050b08] sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div data-reveal className="mb-12 flex flex-col gap-5 border-b border-[#050b08]/18 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5c675f]">LATEST TRANSMISSIONS</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-[-.055em] sm:text-5xl">THE JOURNAL</h2></div>
            <span className="font-mono text-[8px] uppercase tracking-[.14em] text-[#617064]">FEED / {unavailable ? "SERVICE STANDBY" : "LIVE"}</span>
          </div>
          <BlogFeed initialPosts={posts} initialPage={page} initialHasMore={hasMore} unavailable={unavailable} />
        </div>
      </section>

      <TacticalPageCTA
        eyebrow="FROM READING TO FIELD CONTEXT"
        title="BRING US THE QUESTION BEHIND THE DATA."
        body="If a field note connects with a problem in your operation, use the contact form to tell us what you are seeing. Specific context leads to a more useful conversation."
        buttonLabel="Use the contact form"
      />
    </div>
  );
}
