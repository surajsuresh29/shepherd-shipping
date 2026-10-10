import Link from 'next/link'
import { getDocuments } from 'outstatic/server'

export default async function BlogIndex() {
  let posts: any[] = []
  
  try {
    posts = getDocuments('posts', ['title', 'slug', 'publishedAt', 'description'])
  } catch (error) {
    // If the outstatic/content/posts directory is missing, getDocuments throws a cryptic `{}` error.
    // We catch it here and default to an empty array so the page gracefully renders 0 posts.
  }

  return (
    <main className="min-h-screen bg-bg-gray font-sans pt-28 pb-20">
      {/* Blog Hero Section */}
      <section className="bg-primary text-text-white py-20 px-5 mb-16 shadow-lg hero-overlay relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Insights & News
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in-up delay-100">
            Stay updated with the latest trends in global freight forwarding, logistics, and supply chain management.
          </p>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className={`block bg-bg-white p-8 border border-border-light rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-${(i % 5 + 2) * 100} group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Logistics</span>
                <time className="text-text-gray text-sm">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-text-dark/80 line-clamp-3">
                {post.description}
              </p>
              
              <div className="mt-6 flex items-center text-primary font-semibold group-hover:text-secondary transition-colors text-sm">
                Read Article
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
             <div className="col-span-full py-12 text-center text-text-gray">
               <p className="text-xl">No posts published yet. Check back soon!</p>
             </div>
          )}
        </div>
      </section>
    </main>
  )
}
