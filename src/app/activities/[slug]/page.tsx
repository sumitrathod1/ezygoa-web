import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, XCircle, MapPin, Clock, Star, AlertCircle, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import SafeImage from "@/components/SafeImage";
import ActivityBookingWidget from "@/components/ActivityBookingWidget";
import { activities } from "@/lib/activities";

export async function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const act = activities.find((a) => a.slug === slug);
  if (!act) return { title: "Not Found" };
  return {
    title: `${act.title} | Goa Activities | ZipGoa`,
    description: act.shortDescription,
    keywords: [act.title, act.category, "Goa activities", "ZipGoa", act.location],
    openGraph: {
      title: `${act.title} | ZipGoa`,
      description: act.shortDescription,
      images: [{ url: act.image }],
    },
  };
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Group Coach Tour": { bg: "#dbeafe", text: "#1e40af" },
  "Boat Trip":        { bg: "#dcfce7", text: "#166534" },
  "Cruise":           { bg: "#f3e8ff", text: "#6b21a8" },
};

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const act = activities.find((a) => a.slug === slug);
  if (!act) notFound();

  const catColor = CATEGORY_COLORS[act.category] ?? {
    bg: "oklch(0.265 0.078 254 / 0.08)",
    text: "var(--brand-primary)",
  };

  const otherActivities = activities.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden gradient-hero py-16 sm:py-20">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--brand-accent), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap text-xs" aria-label="Breadcrumb">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <Link href="/activities" className="text-white/60 hover:text-white transition-colors">Activities</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/90">{act.title}</span>
          </nav>

          {/* Category + rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1"
              style={{ background: catColor.bg, color: catColor.text }}
            >
              {act.category}
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white/70 font-normal ml-1.5 text-xs">
                {act.rating} · verified reviews
              </span>
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {act.title.includes(" AC Coach Tour")
              ? act.title.replace(" AC Coach Tour", "")
              : act.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span style={{ color: "var(--brand-accent)" }}>
              {act.title.includes(" AC Coach Tour")
                ? "AC Coach Tour"
                : act.title.split(" ").slice(-1)[0]}
            </span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            {act.shortDescription}
          </p>

          {/* Quick stats chips */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: <Clock className="w-3.5 h-3.5" />, text: act.duration },
              { icon: <MapPin className="w-3.5 h-3.5" />, text: act.location },
              { icon: <Users className="w-3.5 h-3.5" />, text: "Group activity" },
              { icon: "📅", text: act.frequency },
              { icon: "💰", text: `From ₹${act.priceFrom} ${act.priceUnit}` },
            ].map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-white/90 text-xs font-medium"
              >
                {chip.icon}
                {chip.text}
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" className="w-full h-10 sm:h-12">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="oklch(0.993 0.003 57)" />
          </svg>
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 rounded-2xl overflow-hidden">
            {/* Main image — larger */}
            <div className="col-span-2 relative overflow-hidden rounded-xl" style={{ height: "220px" }}>
              <SafeImage
                src={act.image}
                alt={act.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Gallery images */}
            {act.gallery.slice(0, 3).map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl" style={{ height: "220px" }}>
                <SafeImage
                  src={img}
                  alt={`${act.title} — ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: "oklch(0.993 0.003 57)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Left: Activity details ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  About This Activity
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{act.overview}</p>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { emoji: "⏱️", label: "Duration",  value: act.duration },
                    { emoji: "📍", label: "Location",  value: act.location },
                    { emoji: "🔁", label: "Frequency", value: act.frequency },
                    { emoji: "💰", label: "From",      value: `₹${act.priceFrom}/${act.priceUnit.replace("per ", "")}` },
                  ].map((s) => (
                    <div key={s.label}
                      className="bg-white rounded-2xl p-4 border border-border shadow-sm text-center">
                      <div className="text-xl mb-1">{s.emoji}</div>
                      <p className="font-extrabold text-sm" style={{ color: "var(--brand-primary)" }}>{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {act.highlights.map((h) => (
                    <div key={h}
                      className="flex items-start gap-2.5 bg-white rounded-xl p-3.5 border border-border shadow-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary (coach tours only) */}
              {act.itinerary && act.itinerary.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-5"
                    style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Itinerary
                  </h2>
                  <div className="space-y-0">
                    {act.itinerary.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-sm"
                            style={{
                              background: i === 0 || i === act.itinerary!.length - 1
                                ? "var(--brand-accent)" : "var(--brand-primary)",
                            }}
                          >
                            {i + 1}
                          </div>
                          {i < act.itinerary!.length - 1 && (
                            <div className="w-px flex-1 my-1"
                              style={{ background: "var(--border)", minHeight: "20px" }} />
                          )}
                        </div>
                        <div className="pb-5">
                          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{ background: "oklch(0.265 0.078 254 / 0.08)", color: "var(--brand-primary)" }}
                            >
                              {item.time}
                            </span>
                            <h3 className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>
                              {item.step}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                  <h3 className="font-bold text-sm mb-3 flex items-center gap-2"
                    style={{ color: "var(--brand-primary)" }}>
                    <CheckCircle className="w-4 h-4 text-green-500" /> Included
                  </h3>
                  <ul className="space-y-2">
                    {act.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-foreground">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                  <h3 className="font-bold text-sm mb-3 flex items-center gap-2"
                    style={{ color: "var(--brand-primary)" }}>
                    <XCircle className="w-4 h-4 text-red-400" /> Not Included
                  </h3>
                  <ul className="space-y-2">
                    {act.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pickup info */}
              {act.pickupNote && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                  <h3 className="font-bold text-sm mb-2 flex items-center gap-2"
                    style={{ color: "var(--brand-primary)" }}>
                    <MapPin className="w-4 h-4" style={{ color: "var(--brand-accent)" }} />
                    Pickup Information
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{act.pickupNote}</p>
                </div>
              )}

              {/* Important Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-amber-800">
                  <AlertCircle className="w-4 h-4" /> Important Information
                </h3>
                <ul className="space-y-2">
                  {act.importantInfo.map((note) => (
                    <li key={note} className="flex items-start gap-2 text-xs text-amber-700">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h2 className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Cancellation Policy
                </h2>
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="divide-y divide-border">
                    {act.cancellationPolicy.map((row) => (
                      <div key={row.label} className="flex items-center justify-between p-4">
                        <span className="text-sm text-foreground font-medium">{row.label}</span>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={
                            row.color === "green"
                              ? { background: "#dcfce7", color: "#166534" }
                              : row.color === "amber"
                              ? { background: "#fef3c7", color: "#92400e" }
                              : { background: "#fee2e2", color: "#991b1b" }
                          }
                        >
                          {row.policy}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 px-1">
                  Communicate cancellations via WhatsApp to +91 70268 89254.
                </p>
              </div>
            </div>

            {/* ── Right: Sticky booking widget ── */}
            <div className="lg:sticky lg:top-4 lg:self-start">
              <ActivityBookingWidget
                title={act.title}
                location={act.location}
                duration={act.duration}
                pickupTime={act.pickupTime}
                frequency={act.frequency}
                rating={act.rating}
                priceFrom={act.priceFrom}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Other activities ── */}
      {otherActivities.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-6"
              style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Other Activities You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherActivities.map((other) => {
                const cc = CATEGORY_COLORS[other.category] ?? { bg: "#e0e7ff", text: "#3730a3" };
                return (
                  <Link key={other.id} href={`/activities/${other.slug}`}
                    className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-44 overflow-hidden">
                      <SafeImage
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-3 left-3 text-xs font-semibold rounded-full px-2.5 py-0.5"
                        style={{ background: cc.bg, color: cc.text }}>
                        {other.category}
                      </span>
                      <span className="absolute bottom-3 right-3 text-xs text-white font-medium bg-black/50 rounded-full px-2 py-0.5">
                        {other.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>
                        {other.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                        {other.shortDescription}
                      </p>
                      <p className="text-xs font-semibold" style={{ color: "var(--brand-accent)" }}>
                        From ₹{other.priceFrom} {other.priceUnit} →
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </PageWrapper>
  );
}
