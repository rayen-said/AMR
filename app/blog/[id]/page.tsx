import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Radio } from "lucide-react";
import { BlogApiError, getBlogPost, type BlogPost } from "@/lib/blog-api";
import MarkdownArticle from "@/components/MarkdownArticle";
import TacticalPageCTA from "@/components/TacticalPageCTA";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}

function PostMedia({ post }: { post: BlogPost }) {
  if (!post.media?.length) return null;

  return (
    <div className="mb-12 space-y-5 sm:mb-16">
      {post.media.map((media, index) => (
        <div key={media.id} className="overflow-hidden border border-[#050b08]/18 bg-[#e7ebe0]">
          {media.mediaType === "VIDEO" ? (
            <video controls preload="metadata" aria-label={`${post.title} — journal video ${index + 1}`} className="max-h-[720px] w-full bg-black"><source src={media.fileUrl} type={media.mimeType} /></video>
          ) : (
            <img src={media.fileUrl} alt={`${post.title} — journal image ${index + 1}`} className="max-h-[720px] w-full object-cover saturate-75" />
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
  } catch (error) {
    if (error instanceof BlogApiError && error.status === 404) notFound();
    throw error;
  }

  if (!post) notFound();

  return (
    <article className="bg-[#030705] text-[#edf4ea]">
      <header className="relative overflow-hidden border-b border-white/14 px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(200,255,69,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,69,.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(90deg,#000,transparent_75%)]" />
        <div className="relative mx-auto max-w-[1250px]">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-white/42 transition-colors hover:text-[#c8ff45]"><ArrowLeft className="size-4" /> All field notes</Link>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[9px] uppercase tracking-[.14em]"><span className="flex items-center gap-2 text-[#c8ff45]"><Radio className="size-3.5" /> JOURNAL / NOTE</span><span className="flex items-center gap-2 text-white/38"><CalendarDays className="size-3.5" /><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></span></div>
          <h1 className="mt-6 max-w-6xl font-display text-[clamp(3.2rem,7vw,7.4rem)] font-semibold leading-[.88] tracking-[-.07em] uppercase">{post.title}</h1>
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/14 pt-5 font-mono text-[8px] uppercase tracking-[.13em] text-white/32"><span>AMR SOLUTIONS / FIELD NOTES</span><span className="text-[#c8ff45]">READING CHANNEL / OPEN</span></div>
        </div>
      </header>

      <div className="bg-[#f1f4eb] px-5 py-12 text-[#050b08] sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <PostMedia post={post} />
          <div className="grid gap-10 lg:grid-cols-[160px_1fr]">
            <aside className="font-mono text-[8px] uppercase tracking-[.13em] text-[#617064] lg:sticky lg:top-32 lg:self-start">
              <p className="border-t border-[#050b08]/18 pt-4">PUBLISHED<br /><strong className="mt-2 block text-[#198049]">{formatDate(post.publishedAt)}</strong></p>
              <p className="mt-6 border-t border-[#050b08]/18 pt-4">SOURCE<br /><strong className="mt-2 block text-[#198049]">AMR JOURNAL</strong></p>
            </aside>
            <div className="min-w-0"><MarkdownArticle content={post.content} /></div>
          </div>
        </div>
      </div>

      <TacticalPageCTA eyebrow="CONTINUE THE CONVERSATION" title="CONNECT THE NOTE TO YOUR FIELD." body="If this article raises a question about your own operation, use the contact form to share the context. We will respond with the most relevant next step." buttonLabel="Use the contact form" />
    </article>
  );
}
