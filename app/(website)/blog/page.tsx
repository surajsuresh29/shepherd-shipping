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
    }
  })

  // Merge: Prioritize the 7 design mockup posts in their exact order, merging any Outstatic updates
  const dbPostsMap = new Map(serializedDbPosts.map((p) => [p.slug, p]))
  const primaryPosts: BlogPostItem[] = DEFAULT_POSTS.map((dp) => {
    const fromDb = dbPostsMap.get(dp.slug)
    if (fromDb) {
      return {
        ...dp,
        ...fromDb,
        description: fromDb.description || dp.description,
        photoCaption: fromDb.photoCaption || dp.photoCaption,
        readTime: fromDb.readTime || dp.readTime,
        category: fromDb.category || dp.category,
      }
    }
    return dp
  })

  const primarySlugs = new Set(primaryPosts.map((p) => p.slug))
  const remainingDbPosts = serializedDbPosts.filter((p) => !primarySlugs.has(p.slug))
  const mergedPosts: BlogPostItem[] = [...primaryPosts, ...remainingDbPosts]

  return (
    <main className="min-h-screen bg-white">
      <BlogIndexClient posts={mergedPosts} />
    </main>
  )
}
