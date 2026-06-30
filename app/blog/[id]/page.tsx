import Link from "next/link";
import { ArrowLeft, CalendarDays, Sprout } from "lucide-react";
import { getBlogPost, type BlogPost } from "@/lib/blog-api";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

function PostMedia({ post }: { post: BlogPost }) {
  if (!post.media?.length) return null;

  return (
    <div className="mb-10 space-y-5 sm:mb-14">
      {post.media.map((media) => (
        <div key={media.id} className="overflow-hidden rounded-xl border border-outline-variant/60 bg-sub-surface">
          {media.mediaType === "VIDEO" ? (
            <video controls preload="metadata" className="max-h-[680px] w-full bg-black">
              <source src={media.fileUrl} type={media.mimeType} />
            </video>
          ) : (
            <img src={media.fileUrl} alt="" className="max-h-[680px] w-full object-cover" />
          )}
        </div>
      ))}
    </div>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let post: BlogPost | null = null;

  try {
    post = await getBlogPost(id);
  } catch {
    // Render a useful in-site state for both missing posts and service outages.
  }

  if (!post) {
    return (
      <section className="flex min-h-[60vh] items-center bg-background py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sprout className="h-6 w-6" />
          </div>
          <h1 className="mb-3 text-2xl font-bold text-on-surface">This field note isn’t available</h1>
          <p className="mb-8 text-sm leading-6 text-text-secondary">
            It may have moved, or the blog service may be briefly unavailable.
          </p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to field notes
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-background">
      <header className="border-b border-outline-variant/30 bg-sub-surface py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" /> All field notes
          </Link>
          <div className="mb-5 flex items-center gap-2 text-xs text-text-secondary">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <PostMedia post={post} />
        <div className="whitespace-pre-wrap text-base leading-8 text-on-surface sm:text-lg sm:leading-9">
          {post.content}
        </div>
      </div>
    </article>
  );
}
