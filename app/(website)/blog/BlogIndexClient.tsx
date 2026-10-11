"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogPostItem {
  title: string;
  slug: string;
  publishedAt: string;
  description?: string;
  coverImage?: string;
  author?: {
    name?: string;
    picture?: string;
  } | string;
  category?: string;
  readTime?: string;
  photoCaption?: string;
  featured?: boolean;
}

const CATEGORIES = [
  "All",
  "Logistics",
  "Customs",
  "Warehousing",
  "Industry News",
  "Company Updates",
];

function getInitials(name: string = ""): string {
  if (!name) return "SL";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(dateVal: string | undefined): string {
  if (!dateVal) return "Oct 2026";
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return "Oct 2026";
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "Oct 2026";
  }
}

function getAuthorName(author: BlogPostItem["author"]): string {
  if (!author) return "Shepherd Team";
  if (typeof author === "string") return author;
  return author.name || "Shepherd Team";
}

function getAuthorPicture(author: BlogPostItem["author"]): string | undefined {
  if (!author || typeof author === "string") return undefined;
  return author.picture;
}

export default function BlogIndexClient({
  posts,
}: {
  posts: BlogPostItem[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const postCategory = post.category || "Logistics";
      const matchesCategory =
        selectedCategory === "All" ||
        postCategory.toLowerCase() === selectedCategory.toLowerCase();

      const query = activeSearch.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        (post.description && post.description.toLowerCase().includes(query)) ||
        postCategory.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, activeSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  // Determine featured post: latest article with featured: true flag (or fallback to latest article)
  const isDefaultView = selectedCategory === "All" && !activeSearch && currentPage === 1;
  const latestFeaturedPost = useMemo(() => {
    return (
      filteredPosts.find((p) => p.featured === true) ||
      (filteredPosts.length > 0 ? filteredPosts[0] : null)
    );
  }, [filteredPosts]);

  const featuredPost = isDefaultView ? latestFeaturedPost : null;
  const gridCandidates = isDefaultView && featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  const POSTS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(gridCandidates.length / POSTS_PER_PAGE));
  const currentGridPosts = gridCandidates.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="shepherd-stripes-bg text-white pt-36 pb-20 px-6 sm:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#51B0B7] inline-block"></span>
            <span className="text-[#51B0B7] text-xs font-bold tracking-widest uppercase">
              INSIGHTS &amp; NEWS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Our insights &amp; news
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
            Stay updated with the latest trends in global freight forwarding, logistics, and supply chain management.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="flex items-center max-w-md w-full gap-2.5">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#1b3a5e]/80 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#51B0B7] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#51B0B7] hover:bg-[#43a1a8] text-[#0f2640] font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#18375A] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
        {/* Featured Card (shown on page 1 of All) */}
        {featuredPost && (
          <div className="mb-10">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Image / Textured Block */}
                <div className="relative min-h-[260px] md:min-h-[340px] shepherd-card-pattern flex items-end p-5 overflow-hidden">
                  {featuredPost.coverImage && (
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span className="relative z-10 bg-[#0b1f35]/80 backdrop-blur-xs text-white/80 text-[11px] px-3 py-1 rounded border border-white/10 font-sans tracking-wide">
                    {featuredPost.photoCaption ||
                      "Cover photo: cargo ship departing a container terminal at dawn"}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-[#E6F6F7] text-[#157279] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      {featuredPost.category || "LOGISTICS"}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#18375A] leading-snug group-hover:text-[#51B0B7] transition-colors mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {featuredPost.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      {getAuthorPicture(featuredPost.author) ? (
                        <Image
                          src={getAuthorPicture(featuredPost.author)!}
                          alt={getAuthorName(featuredPost.author)}
                          width={28}
                          height={28}
                          unoptimized
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-300/80 flex items-center justify-center text-[10px] font-bold text-slate-700">
                          {getInitials(getAuthorName(featuredPost.author))}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-medium text-slate-700">
                          {getAuthorName(featuredPost.author)}
                        </span>
                        <span>•</span>
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime || "5 min read"}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center text-[#18375A] font-semibold text-sm group-hover:text-[#51B0B7] transition-colors">
                      Read article <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 3-Column Post Cards Grid */}
        {currentGridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
            {currentGridPosts.map((post) => {
              const authorName = getAuthorName(post.author);
              const authorPic = getAuthorPicture(post.author);
              const initials = getInitials(authorName);

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {/* Top Image / Pattern */}
                  <div className="h-48 relative shepherd-card-pattern overflow-hidden flex items-end p-3.5">
                    {post.coverImage && (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <span className="relative z-10 bg-[#0b1f35]/80 backdrop-blur-xs text-white/80 text-[10px] sm:text-[11px] px-2.5 py-1 rounded border border-white/10 truncate max-w-full font-sans">
                      {post.photoCaption || `Photo: ${post.title}`}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="inline-block bg-[#E6F6F7] text-[#157279] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3 w-fit">
                        {post.category || "LOGISTICS"}
                      </span>
                      <h3 className="text-lg font-bold text-[#18375A] group-hover:text-[#51B0B7] transition-colors leading-snug mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.description || "Insights and analysis from the Shepherd logistics team."}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        {authorPic ? (
                          <Image
                            src={authorPic}
                            alt={authorName}
                            width={24}
                            height={24}
                            unoptimized
                            className="w-6 h-6 rounded-full object-cover border border-slate-200"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300/80 flex items-center justify-center text-[9px] font-bold text-slate-700">
                            {initials}
                          </div>
                        )}
                        <span className="text-xs text-slate-500">
                          <strong className="font-medium text-slate-700">{authorName}</strong> • {formatDate(post.publishedAt)}
                        </span>
                      </div>

                      <div className="flex items-center text-[#18375A] font-semibold text-xs sm:text-sm group-hover:text-[#51B0B7] transition-colors">
                        Read article <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 mb-12">
            <p className="text-slate-600 font-medium text-base mb-2">No articles found</p>
            <p className="text-slate-400 text-sm mb-4">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setActiveSearch("");
              }}
              className="text-xs font-semibold text-[#51B0B7] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm disabled:opacity-40 disabled:pointer-events-none"
          >
            ‹
          </button>

          {[1, 2, 3].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${
                currentPage === pageNum
                  ? "bg-[#18375A] text-white shadow-xs font-semibold"
                  : "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            disabled={currentPage === 3}
            aria-label="Next page"
            className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm disabled:opacity-40 disabled:pointer-events-none"
          >
            ›
          </button>
        </div>

        {/* Newsletter CTA Banner */}
        <section className="shepherd-stripes-bg rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-md relative overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Stay ahead of the shipping curve
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                One email a month — rate trends, customs updates and the occasional port story. No spam, unsubscribe anytime.
              </p>
            </div>

            {newsletterSubmitted ? (
              <div className="bg-[#51B0B7]/20 border border-[#51B0B7] text-[#51B0B7] px-6 py-3 rounded-lg text-sm font-semibold">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2.5 w-full lg:w-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full sm:w-64 lg:w-72 bg-[#1b3a5e]/80 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#51B0B7] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#51B0B7] hover:bg-[#43a1a8] text-[#0f2640] font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
