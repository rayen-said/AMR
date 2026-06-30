"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  LoaderCircle,
  Sprout,
  WifiOff,
} from "lucide-react";
import type { BlogFeedResponse, BlogPost } from "@/lib/blog-api";

interface BlogFeedProps {
  initialPosts: BlogPost[];
  initialPage: number;
  initialHasMore: boolean;
  unavailable?: boolean;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

function excerpt(content: string, length = 155) {
  const clean = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return clean.length > length ? `${clean.slice(0, length).trimEnd()}…` : clean;
}

function PostImage({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const image = post.media?.find((item) => item.mediaType === "IMAGE");

  if (image) {
    return (
      <img
        src={image.fileUrl}
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-primary/10 bg-grid-pattern">
      <div className={`${featured ? "h-24 w-24" : "h-16 w-16"} rounded-full bg-primary/10`} />
      <Sprout className={`absolute text-primary/70 ${featured ? "h-12 w-12" : "h-8 w-8"}`} />
    </div>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="group grid overflow-hidden rounded-xl border border-outline-variant/60 bg-surface-container-lowest shadow-sm md:grid-cols-12">
      <Link href={`/blog/${post.id}`} className="block min-h-64 overflow-hidden md:col-span-7 md:min-h-[410px]">
        <PostImage post={post} featured />
      </Link>
      <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-5 lg:p-10">
        <span className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          Latest field note
        </span>
        <div className="mb-4 flex items-center gap-2 text-xs text-text-secondary">
          <CalendarDays className="h-3.5 w-3.5" />
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-on-surface sm:text-3xl">
          <Link href={`/blog/${post.id}`} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </h2>
        <p className="mb-8 text-sm leading-7 text-text-secondary">{excerpt(post.content, 220)}</p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
        >
          Read field note <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant/60 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <Link href={`/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden">
        <PostImage post={post} />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-text-secondary">
          <CalendarDays className="h-3.5 w-3.5" />
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
        <h2 className="mb-3 text-xl font-bold leading-snug tracking-tight text-on-surface">
          <Link href={`/blog/${post.id}`} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </h2>
        <p className="mb-6 text-sm leading-6 text-text-secondary">{excerpt(post.content)}</p>
        <Link
          href={`/blog/${post.id}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogFeed({
  initialPosts,
  initialPage,
  initialHasMore,
  unavailable = false,
}: BlogFeedProps) {
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
      <div className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest px-6 py-16 text-center shadow-sm sm:py-20">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          {unavailable ? <WifiOff className="h-6 w-6" /> : <Sprout className="h-6 w-6" />}
        </div>
        <h2 className="mb-3 text-xl font-bold text-on-surface">
          {unavailable ? "Field notes are temporarily out of reach" : "The first story is taking root"}
        </h2>
        <p className="mx-auto max-w-md text-sm leading-6 text-text-secondary">
          {unavailable
            ? "The website is ready, but it could not reach the blog service. Please try again shortly."
            : "Research updates, product thinking, and stories from the field will appear here as they are published."}
        </p>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div className="space-y-10 sm:space-y-12">
      <FeaturedPost post={featured} />

      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      )}

      {(hasMore || loadError) && (
        <div className="flex flex-col items-center gap-3 pt-2">
          <button
            type="button"
            onClick={loadMore}
            disabled={loading}
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-md border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-background disabled:cursor-wait disabled:opacity-60"
          >
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            {loading ? "Loading" : loadError ? "Try again" : "Load more stories"}
          </button>
          {loadError && <p className="text-xs text-text-secondary">We couldn’t load the next stories.</p>}
        </div>
      )}
    </div>
  );
}
