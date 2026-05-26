import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";


export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | ZipGoa Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);
  const headings = post.sections.filter((s) => s.heading).map((s) => s.heading!);
  const categoryClass = categoryColors[post.category] ?? "bg-gray-100 text-gray-700";

  const whatsappMessage = post.ctaText
    ? `Hi ZipGoa! I read your blog post "${post.title}" and would like to book: ${post.ctaService ?? "taxi"}`
    : `Hi ZipGoa! I read your blog and would like to book a taxi.`;
  const whatsappUrl = `https://wa.me/917026889254?text=${encodeURIComponent(whatsappMessage)}`;

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.publishedDate,
    publisher: {
      "@type": "Organization",
      name: "ZipGoa",
      url: "https://zipgoa.com",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <Header />
      <main className="flex-1">
        {/* Cover */}
        <div className={`bg-gradient-to-br ${post.coverGradient} py-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <span className="text-8xl mb-6 block filter drop-shadow-2xl">{post.coverEmoji}</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block ${categoryClass}`}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight mt-2">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-white/80 text-sm">
              <span>✍️ {post.author}</span>
              <span>·</span>
              <span>📅 {new Date(post.publishedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>·</span>
              <span>⏱ {post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Article */}
            <article>
              {/* Excerpt lead */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-100 font-medium">
                {post.excerpt}
              </p>

              {/* Share buttons */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-sm text-gray-500 font-medium">Share:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " https://zipgoa.com/blog/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  📱 WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://zipgoa.com/blog/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  📘 Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent("https://zipgoa.com/blog/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                >
                  🐦 Twitter
                </a>
              </div>

              {/* Content sections */}
              <div className="prose prose-lg max-w-none">
                {post.sections.map((section, i) => (
                  <div key={i} className="mb-8">
                    {section.heading && (
                      <h2
                        className="text-2xl font-bold mt-10 mb-4"
                        style={{ color: "var(--brand-primary)" }}
                        id={`section-${i}`}
                      >
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs?.map((para, j) => (
                      <p key={j} className="text-gray-700 leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                    {section.list && section.list.length > 0 && (
                      <ul className="space-y-2 my-4">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-700">
                            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--brand-accent)" }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.tip && (
                      <div
                        className="rounded-xl p-4 my-4 border-l-4 text-sm"
                        style={{
                          background: "rgba(246,173,85,0.1)",
                          borderColor: "var(--brand-accent)",
                        }}
                      >
                        <span className="font-bold" style={{ color: "var(--brand-primary)" }}>
                          💡 Tip:{" "}
                        </span>
                        <span className="text-gray-700">{section.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* CTA Block */}
              <div
                className="rounded-2xl p-8 text-center text-white mt-10"
                style={{ background: "linear-gradient(135deg, var(--brand-primary) 0%, #2d5a9e 100%)" }}
              >
                <div className="text-4xl mb-3">🚕</div>
                <h3 className="text-xl font-bold mb-2">
                  {post.ctaText ?? "Ready to Explore Goa?"}
                </h3>
                <p className="text-white/80 mb-5 text-sm">
                  Book with ZipGoa for reliable, affordable taxi services across Goa. Available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl font-bold text-sm transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--brand-accent)", color: "var(--brand-primary)" }}
                  >
                    📱 {post.ctaText ?? "Book a Taxi"}
                  </a>
                  <Link
                    href="/booking"
                    className="px-6 py-2.5 rounded-xl font-bold text-sm border-2 border-white/40 hover:border-white transition-colors"
                  >
                    Book Online
                  </Link>
                </div>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="mt-12">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1 h-6 rounded-full" style={{ background: "var(--brand-accent)" }} />
                    <h2 className="text-xl font-bold" style={{ color: "var(--brand-primary)" }}>
                      Related Articles
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {related.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                        <div className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                          <div className={`bg-gradient-to-br ${rp.coverGradient} h-28 flex items-center justify-center`}>
                            <span className="text-5xl">{rp.coverEmoji}</span>
                          </div>
                          <div className="p-4">
                            <p className="text-xs text-gray-500 mb-1">{rp.readTime}</p>
                            <h4
                              className="font-semibold text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2"
                              style={{ color: "var(--brand-primary)" }}
                            >
                              {rp.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "var(--brand-primary)" }}>
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {headings.map((h, i) => {
                      const sectionIdx = post.sections.findIndex((s) => s.heading === h);
                      return (
                        <a
                          key={i}
                          href={`#section-${sectionIdx}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-gray-100 hover:border-blue-400 pl-3 leading-snug"
                        >
                          {h}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Booking Card */}
              <div
                className="rounded-2xl p-6 text-white text-center"
                style={{ background: "linear-gradient(135deg, var(--brand-primary) 0%, #2d5a9e 100%)" }}
              >
                <div className="text-3xl mb-2">🚕</div>
                <h3 className="font-bold mb-1">Book Your Ride</h3>
                <p className="text-white/75 text-xs mb-4">Trusted Goa taxi — 24/7 available</p>
                <Link
                  href="/booking"
                  className="block w-full py-2.5 rounded-xl font-bold text-sm transition-transform hover:-translate-y-0.5 text-center"
                  style={{ background: "var(--brand-accent)", color: "var(--brand-primary)" }}
                >
                  Book Now
                </Link>
                <a
                  href="tel:+917026889254"
                  className="block w-full mt-2 py-2.5 rounded-xl font-bold text-sm border border-white/30 hover:border-white transition-colors text-center"
                >
                  📞 Call Us
                </a>
              </div>

              {/* Browse More */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "var(--brand-primary)" }}>
                  More Articles
                </h3>
                <div className="space-y-3">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 5)
                    .map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-start gap-2">
                        <span className="text-xl flex-shrink-0 mt-0.5">{p.coverEmoji}</span>
                        <span
                          className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2"
                        >
                          {p.title}
                        </span>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/blog"
                  className="block mt-4 text-center text-xs font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  View All Articles →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
