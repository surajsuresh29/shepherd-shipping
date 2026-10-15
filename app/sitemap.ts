import type { MetadataRoute } from 'next'
import { getDocuments } from 'outstatic/server'
import { DEFAULT_POSTS } from './(website)/blog/postsData'

const BASE_URL = 'https://shepherdshipping.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/air-freight`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/sea-freight`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/customs-clearance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/warehousing-distribution`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Track unique slugs to merge default posts with Outstatic posts cleanly
  const postEntries = new Map<string, MetadataRoute.Sitemap[number]>()

  // 1. Seed fallback default posts
  for (const post of DEFAULT_POSTS) {
    if (!post.slug) continue
    postEntries.set(post.slug, {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  // 2. Fetch and merge published Outstatic CMS posts
  try {
    const outstaticPosts = getDocuments('posts', ['slug', 'publishedAt', 'status'])
    for (const post of outstaticPosts) {
      if (!post.slug) continue
      // Skip draft articles
      if (post.status && post.status !== 'published') continue

      let lastModified = new Date()
      if (post.publishedAt) {
        const parsed = new Date(post.publishedAt)
        if (!isNaN(parsed.getTime())) {
          lastModified = parsed
        }
      }

      postEntries.set(post.slug, {
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  } catch {
    // Graceful fallback to default posts if CMS directory cannot be read
  }

  return [...staticRoutes, ...Array.from(postEntries.values())]
}
