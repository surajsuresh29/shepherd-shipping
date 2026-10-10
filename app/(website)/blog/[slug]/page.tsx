import { getDocumentBySlug } from 'outstatic/server'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import Link from 'next/link'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getDocumentBySlug('posts', slug, ['title', 'publishedAt', 'content'])

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-bg-white font-sans pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-5">
        
        {/* Back Link */}
        <div className="mb-8 animate-fade-in-up">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-semibold text-secondary hover:text-primary transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 border-b border-border-light pb-10 animate-fade-in-up delay-100">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-bg-white bg-primary px-3 py-1 rounded-full">Logistics</span>
            <time className="text-text-gray text-sm font-medium">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            {post.title}
          </h1>
        </header>
        
        {/* Markdown Content */}
        <div className="prose lg:prose-lg max-w-none animate-fade-in-up delay-200 prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary prose-a:transition-colors prose-p:text-text-dark/80 prose-li:text-text-dark/80 prose-strong:text-primary prose-blockquote:border-l-secondary prose-blockquote:bg-bg-gray prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </main>
  )
}
