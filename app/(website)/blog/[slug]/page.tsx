import { getDocumentBySlug, getDocuments } from 'outstatic/server'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'
import { DEFAULT_POSTS, BlogPostFull } from '../postsData'

export async function generateStaticParams() {
  const slugs = new Set<string>()

  // Add default posts
  DEFAULT_POSTS.forEach((p) => slugs.add(p.slug))

  // Add Outstatic posts
  try {
    const posts = getDocuments('posts', ['slug'])
    posts.forEach((p) => {
      if (p.slug) slugs.add(p.slug)
    })
  } catch (e) {
    // Graceful fallback
  }

  return Array.from(slugs).map((slug) => ({ slug }))
}

function getInitials(name: string = ""): string {
  if (!name) return "SL";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(dateVal: any): string {
  if (!dateVal) return "Recent";
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return "Recent";
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post: BlogPostFull | null = null

  try {
    const outstaticPost: any = getDocumentBySlug('posts', slug, [
      'title',
      'publishedAt',
      'content',
      'category',
      'author',
      'description',
      'coverImage',
      'readTime',
      'photoCaption',
    ])

    if (outstaticPost && outstaticPost.title) {
      post = {
        title: outstaticPost.title,
        slug: slug,
        publishedAt: outstaticPost.publishedAt instanceof Date 
          ? outstaticPost.publishedAt.toISOString() 
          : String(outstaticPost.publishedAt || ''),
        content: outstaticPost.content || '',
        category: outstaticPost.category || 'Logistics',
        author: outstaticPost.author,
        description: outstaticPost.description || '',
        coverImage: outstaticPost.coverImage || '',
        readTime: outstaticPost.readTime || '4 min read',
        photoCaption: outstaticPost.photoCaption || '',
      }
    }
  } catch (e) {
    // fallback
  }

  // Fallback to default posts
  if (!post) {
    const defaultPost = DEFAULT_POSTS.find((p) => p.slug === slug)
    if (defaultPost) {
      post = defaultPost
    }
  }

  if (!post) {
    notFound()
  }

  const authorName = typeof post.author === 'string' 
    ? post.author 
    : post.author?.name || 'Shepherd Logistics Team'
  const authorPic = typeof post.author === 'object' ? post.author?.picture : undefined
  const initials = getInitials(authorName)

  return (
    <main className="min-h-screen bg-white font-sans pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <div className="mb-8 animate-fade-in-up">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-semibold text-[#18375A] hover:text-[#51B0B7] transition-colors group"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Insights &amp; News
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 animate-fade-in-up delay-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#E6F6F7] text-[#157279] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {post.category || "Logistics"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#18375A] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex items-center gap-3 py-4 border-y border-slate-100">
            {authorPic ? (
              <Image
                src={authorPic}
                alt={authorName}
                width={36}
                height={36}
                unoptimized
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                {initials}
              </div>
            )}
            <div className="text-xs sm:text-sm text-slate-500">
              <strong className="font-semibold text-slate-800">{authorName}</strong>
              <span className="mx-2">•</span>
              <span>{formatDate(post.publishedAt)}</span>
              {post.readTime && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Featured Banner / Photo container */}
        <div className="relative rounded-2xl overflow-hidden mb-10 shepherd-card-pattern min-h-[260px] flex items-end p-5">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : null}
          <span className="relative z-10 bg-[#0b1f35]/85 backdrop-blur-xs text-white/80 text-xs px-3 py-1 rounded border border-white/10 font-sans">
            {post.photoCaption || `Cover photo: ${post.title}`}
          </span>
        </div>
        
        {/* Markdown Content */}
        <div className="prose lg:prose-lg max-w-none animate-fade-in-up delay-200 text-slate-700 prose-headings:text-[#18375A] prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4 prose-li:text-slate-700 prose-strong:text-[#18375A] prose-a:text-[#51B0B7] hover:prose-a:underline prose-table:my-6 prose-th:bg-slate-50 prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-slate-100">
          <Markdown>{post.content}</Markdown>
        </div>

        {/* CTA Card at Bottom of Article */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="shepherd-stripes-bg text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Need assistance with your shipping routes?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                Our freight forwarding and customs clearance specialists are ready to tailor solutions for your cargo.
              </p>
            </div>
            <Link
              href="/#contact"
              className="bg-[#51B0B7] hover:bg-[#43a1a8] text-[#0f2640] font-semibold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 whitespace-nowrap"
            >
              Get a quote
            </Link>
          </div>
        </div>

      </article>
    </main>
  )
}
