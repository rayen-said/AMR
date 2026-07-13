"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, LoaderCircle, Radio, Sprout, WifiOff } from "lucide-react";
import type { BlogFeedResponse, BlogPost } from "@/lib/blog-api";
import { markdownToPlainText } from "@/lib/markdown";

interface BlogFeedProps {
  initialPosts: BlogPost[];
  initialPage: number;
  initialHasMore: boolean;
  unavailable?: boolean;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}

function excerpt(content: string, length = 155) {
  const clean = markdownToPlainText(content);
  return clean.length > length ? `${clean.slice(0, length).trimEnd()}…` : clean;
}

function PostImage({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const image = post.media?.find((item) => item.mediaType === "IMAGE");

  if (image) {
    return <img src={image.fileUrl} alt={`Illustration for ${post.title}`} className="h-full w-full object-cover saturate-75 transition-transform duration-700 group-hover:scale-[1.035]" />;
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#07150d] text-[#c8ff45]">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(200,255,69,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.18)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className={`${featured ? "size-40" : "size-24"} absolute rounded-full border border-[#c8ff45]/25`} />
      <div className={`${featured ? "size-24" : "size-16"} absolute rounded-full border border-[#c8ff45]/35`} />
      <Sprout className={`relative ${featured ? "size-14" : "size-9"}`} strokeWidth={1.2} />
    </div>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article data-reveal className="group grid overflow-hidden border border-[#050b08]/20 bg-[#030705] text-[#edf4ea] md:grid-cols-12">
      <Link href={`/blog/${post.id}`} className="block min-h-72 overflow-hidden md:col-span-7 md:min-h-[470px]" aria-label={`Read ${post.title}`}>
        <PostImage post={post} featured />
      </Link>
      <div className="flex flex-col justify-center p-7 sm:p-9 md:col-span-5 lg:p-12">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#c8ff45]">FEATURED / LATEST</span>
          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.12em] text-white/35"><Radio className="size-3" /> LIVE</span>
        </div>
        <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[.1em] text-white/42"><CalendarDays className="size-3.5" /><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></div>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.02] tracking-[-.05em] sm:text-4xl"><Link href={`/blog/${post.id}`} className="transition-colors hover:text-[#c8ff45]">{post.title}</Link></h2>
        <p className="mt-5 text-sm leading-7 text-white/52">{excerpt(post.content, 220)}</p>
        <Link href={`/blog/${post.id}`} className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#c8ff45] pb-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#c8ff45]">Read field note <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
      </div>
    </article>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <article data-reveal className="group flex h-full flex-col border border-[#050b08]/18 bg-[#f1f4eb] transition-colors hover:bg-white">
      <Link href={`/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden border-b border-[#050b08]/18" aria-label={`Read ${post.title}`}><PostImage post={post} /></Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[.12em] text-[#617064]"><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time><span>NOTE / {String(index + 2).padStart(2, "0")}</span></div>
        <h2 className="mt-6 font-display text-2xl font-semibold leading-[1.08] tracking-[-.045em]"><Link href={`/blog/${post.id}`} className="transition-colors hover:text-[#198049]">{post.title}</Link></h2>
        <p className="mt-4 text-sm leading-7 text-[#617064]">{excerpt(post.content)}</p>
        <Link href={`/blog/${post.id}`} className="mt-8 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.11em] text-[#198049]">Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
      </div>
    </article>
  );
}

export default function BlogFeed({ initialPosts, initialPage, initialHasMore, unavailable = false }: BlogFeedProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  async function loadMore() {
    setLoading(true);
    setLoadError(false);
    try {
      const response = await fetch(`/api/blog?page=${page + 1}&size=7`);
      if (!response.ok) throw new Error("Unable to load posts");
      const feed = (await response.json()) as BlogFeedResponse;
      setPosts((current) => [...current, ...feed.content]);
      setPage(feed.number);
      setHasMore(!feed.last);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }

  if (posts.length === 0) {
    return (
      <div data-reveal className="grid min-h-96 place-items-center border border-[#050b08]/20 bg-[#e9ede3] px-6 py-16 text-center">
        <div>
          <div className="mx-auto grid size-16 place-items-center border border-[#198049]/35 text-[#198049]">{unavailable ? <WifiOff className="size-6" /> : <Sprout className="size-6" />}</div>
          <p className="mt-7 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#198049]">{unavailable ? "FEED / STANDBY" : "FEED / FORMING"}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.045em]">{unavailable ? "FIELD NOTES ARE TEMPORARILY OUT OF REACH" : "THE FIRST STORY IS TAKING ROOT"}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#617064]">{unavailable ? "The journal could not reach its publishing service. Please try again shortly." : "Research updates, product thinking, and stories from the field will appear here as they are published."}</p>
        </div>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div className="space-y-10 sm:space-y-12">
      <FeaturedPost post={featured} />
      {rest.length > 0 && <div className="grid gap-px bg-[#050b08]/18 sm:grid-cols-2 lg:grid-cols-3">{rest.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}</div>}
      {(hasMore || loadError) && (
        <div className="flex flex-col items-center gap-3 pt-4">
          <button type="button" onClick={loadMore} disabled={loading} className="inline-flex min-h-13 min-w-48 items-center justify-center gap-2 bg-[#050b08] px-6 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#c8ff45] disabled:cursor-wait disabled:opacity-60">
            {loading ? <LoaderCircle className="size-4 animate-spin" /> : null}{loading ? "Loading" : loadError ? "Try again" : "Load more notes"}
          </button>
          {loadError && <p className="text-xs text-[#617064]">We could not load the next field notes.</p>}
        </div>
      )}
    </div>
  );
}
