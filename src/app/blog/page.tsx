import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Goa Travel Blog & Guides 2026 | ZipGoa",
  description:
    "Expert Goa travel guides, taxi tips, beach guides, and trip planning advice from ZipGoa — your trusted Goa taxi service.",
  keywords: [
    "Goa travel blog",
    "Goa travel guide",
    "Goa taxi tips",
    "best places in Goa",
    "Goa beaches guide",
    "Goa trip planning",
  ],
  openGraph: {
    title: "Goa Travel Blog & Guides | ZipGoa",
    description: "Expert travel guides for Goa — beaches, heritage, waterfalls, taxi rates and more.",
    type: "website",
  },
};

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const categoryColors: Record<string, string> = {
  "Travel Guide": "bg-blue-100 text-blue-700",
  "Airport Transfer": "bg-purple-100 text-purple-700",
  "Adventure": "bg-green-100 text-green-700",
  "Destination": "bg-orange-100 text-orange-700",
  "Pricing Guide": "bg-yellow-100 text-yellow-700",
  "Self Drive": "bg-teal-100 text-teal-700",
  "Nightlife": "bg-pink-100 text-pink-700",
  "Group Travel": "bg-indigo-100 text-indigo-700",
  "Seasonal Guide": "bg-cyan-100 text-cyan-700",
};

function categoryBadge(category: string) {
  return categoryColors[category] ?? "bg-gray-100 text-gray-700";
}

const [featured, ...rest] = blogPosts;

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section
          className="py-20 text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--brand-primary) 0%, #2d5a9e 100%)" }}
        >
          <div className="absolute inset-0 opacity-10">
            {["✈️", "🏖️", "🌴", "🚕", "🏔️", "🎭"].map((e, i) => (
              <span
                key={i}
                className="absolute text-6xl select-none"
                style={{ top: `${10 + i * 14}%`, left: `${5 + i * 16}%`, opacity: 0.5 }}
              >
                {e}
              </span>
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div
              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(246,173,85,0.2)", color: "var(--brand-accent)" }}
            >
              Travel Guides & Tips
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Goa Travel Blog & Guides</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Expert guides on Goa's beaches, heritage sites, waterfalls, taxi rates, and hidden gems — written by
              people who live here.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-1 h-6 rounded-full"
                style={{ background: "var(--brand-accent)" }}
              />
              <h2 className="text-2xl font-bold" style={{ color: "var(--brand-primary)" }}>
                Featured Article
              </h2>
            </div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100">
                <div className={`bg-gradient-to-br ${featured.coverGradient} h-64 md:h-80 flex items-center justify-center relative`}>
                  <span className="text-9xl filter drop-shadow-lg">{featured.coverEmoji}</span>
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryBadge(featured.category)}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>📅 {new Date(featured.publishedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>⏱ {featured.readTime}</span>
                    <span>✍️ {featured.author}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors" style={{ color: "var(--brand-primary)" }}>
                    {featured.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-2 font-semibold text-sm"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    Read Full Guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Filter (static display — server component) */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-default ${
                  cat === "All"
                    ? "border-transparent text-white"
                    : "border-gray-200 text-gray-600 bg-white hover:border-gray-300"
                }`}
                style={cat === "All" ? { background: "var(--brand-primary)" } : {}}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* All Posts Grid */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-1 h-6 rounded-full"
                style={{ background: "var(--brand-accent)" }}
              />
              <h2 className="text-2xl font-bold" style={{ color: "var(--brand-primary)" }}>
                All Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${post.coverGradient} h-44 flex items-center justify-center relative`}>
                      <span className="text-7xl filter drop-shadow">{post.coverEmoji}</span>
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryBadge(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span>{new Date(post.publishedDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3
                        className="font-bold text-base mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
                        style={{ color: "var(--brand-primary)" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold mt-4"
                        style={{ color: "var(--brand-primary)" }}
                      >
                        Read More →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div
            className="rounded-2xl p-8 text-center text-white mt-12"
            style={{ background: "linear-gradient(135deg, var(--brand-primary) 0%, #2d5a9e 100%)" }}
          >
            <div className="text-4xl mb-3">🚕</div>
            <h3 className="text-2xl font-bold mb-2">Ready to Explore Goa?</h3>
            <p className="text-white/80 mb-6">
              Book a taxi with ZipGoa and discover every corner of Goa comfortably and affordably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-3 rounded-xl font-bold text-sm transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--brand-accent)", color: "var(--brand-primary)" }}
              >
                Book a Taxi Now
              </Link>
              <Link
                href="/goa-sightseeing"
                className="px-8 py-3 rounded-xl font-bold text-sm border-2 border-white/40 hover:border-white transition-colors"
              >
                View Sightseeing Tours
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
