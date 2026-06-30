import type { Metadata } from "next";
import BlogFeed from "@/components/BlogFeed";
import { getBlogPosts, type BlogPost } from "@/lib/blog-api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Field Notes | AMR Solutions",
  description: "Research, product updates, and practical thinking from the AMR Solutions team.",
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
    <div className="w-full">
      <section className="relative overflow-hidden border-b border-outline-variant/30 bg-sub-surface py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-70" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
            Field notes
          </span>
          <h1 className="mb-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl md:text-5xl">
            Ideas for a more resilient food system.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Research, product updates, and practical perspectives at the intersection of agriculture, intelligent systems, and the living world.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-16">
          <BlogFeed
            initialPosts={posts}
            initialPage={page}
            initialHasMore={hasMore}
            unavailable={unavailable}
          />
        </div>
      </section>
    </div>
  );
}
