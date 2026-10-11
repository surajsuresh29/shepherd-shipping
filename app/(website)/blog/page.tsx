import { getDocuments } from 'outstatic/server'
import BlogIndexClient, { BlogPostItem } from './BlogIndexClient'
import { DEFAULT_POSTS } from './postsData'

export default async function BlogIndex() {
  let dbPosts: any[] = []

  try {
    dbPosts = getDocuments('posts', [
      'title',
      'slug',
      'publishedAt',
      'description',
      'coverImage',
      'author',
      'category',
      'readTime',
      'photoCaption',
      'featured',
    ])
  } catch (error) {
    // If directory missing or empty, gracefully default
    dbPosts = []
  }

  // Safely serialize posts to avoid React Date child issues
  const serializedDbPosts: BlogPostItem[] = dbPosts.map((post) => {
    let dateStr = ''
    if (post.publishedAt instanceof Date) {
      dateStr = post.publishedAt.toISOString()
    } else if (typeof post.publishedAt === 'string') {
      dateStr = post.publishedAt
    } else {
      dateStr = new Date().toISOString()
    }

    return {
      title: post.title || 'Untitled Post',
      slug: post.slug,
      publishedAt: dateStr,
      description: post.description || '',
      coverImage: post.coverImage || '',
      author: post.author,
      category: post.category || 'Logistics',
      readTime: post.readTime || '4 min read',
      photoCaption: post.photoCaption || `Photo: ${post.title}`,
      featured: Boolean(post.featured),
    }
  })

  // Merge Outstatic posts with default posts
  const dbPostsMap = new Map(serializedDbPosts.map((p) => [p.slug, p]))
  const mergedDefaultPosts: BlogPostItem[] = DEFAULT_POSTS.map((dp) => {
    const fromDb = dbPostsMap.get(dp.slug)
    if (fromDb) {
      return {
        ...dp,
        ...fromDb,
        description: fromDb.description || dp.description,
        photoCaption: fromDb.photoCaption || dp.photoCaption,
        readTime: fromDb.readTime || dp.readTime,
        category: fromDb.category || dp.category,
        featured: fromDb.featured !== undefined ? fromDb.featured : dp.featured,
      }
    }
    return dp
  })

  const defaultSlugs = new Set(mergedDefaultPosts.map((p) => p.slug))
  const additionalDbPosts = serializedDbPosts.filter((p) => !defaultSlugs.has(p.slug))
  const allPosts: BlogPostItem[] = [...mergedDefaultPosts, ...additionalDbPosts]

  // Pure chronological sort: newest publishedAt first
  allPosts.sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime() || 0
    const timeB = new Date(b.publishedAt).getTime() || 0
    return timeB - timeA
  })

  return (
    <main className="min-h-screen bg-white">
      <BlogIndexClient posts={allPosts} />
    </main>
  )
}
