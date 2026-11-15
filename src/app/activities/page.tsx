import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Users, CheckCircle } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SafeImage from "@/components/SafeImage";
import { activities, buildActivityWhatsAppUrl } from "@/lib/activities";

export const metadata: Metadata = {
  title: "Goa Activities & Experiences",
  description:
    "Book Goa activities through ZipGoa — North Goa AC coach tours, South Goa coach tours, dolphin trips, and evening dinner cruises. Per-person pricing, WhatsApp booking.",
  keywords: [
    "Goa activities",
    "North Goa coach tour",
    "South Goa coach tour",
    "dolphin trip Goa",
    "dinner cruise Goa",
    "Goa experiences",
    "Goa group tours",
  ],
  openGraph: {
    title: "Goa Activities & Experiences | ZipGoa",
    description:
      "Coach tours, dolphin trips, evening cruises — per-person group activities in Goa. Book via WhatsApp.",
  },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Group Coach Tour": { bg: "#dbeafe", text: "#1e40af" },
  "Boat Trip":        { bg: "#dcfce7", text: "#166534" },
  "Cruise":           { bg: "#f3e8ff", text: "#6b21a8" },
};

function categoryStyle(cat: string) {
  return CATEGORY_COLORS[cat] ?? { bg: "oklch(0.265 0.078 254 / 0.08)", text: "var(--brand-primary)" };
}

export default function ActivitiesPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Activities & Experiences"
        title="Goa Activities"
        titleAccent="& Experiences"
        subtitle="Group coach tours, dolphin boat rides, and evening cruises — booked through ZipGoa's WhatsApp. Per-person pricing, no private hire needed."
        breadcrumbs={[{ label: "Activities" }]}
      />

      {/* Listing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--brand-accent)" }}
            >
              Per-Person Pricing
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
            >
              Choose Your Experience
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
              These are shared / group activities priced per person. ZipGoa books on your behalf —
              just tap &quot;Book on WhatsApp&quot; and we&apos;ll confirm everything.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activities.map((act) => {
              const { bg, text } = categoryStyle(act.category);
              const waUrl = buildActivityWhatsAppUrl(act.title);

              return (
                <div
                  key={act.id}
                  className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <SafeImage
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold rounded-full px-2.5 py-1"
                      style={{ background: bg, color: text }}
                    >
                      {act.category}
                    </span>

                    {/* Duration badge */}
                    <span className="absolute top-3 right-3 flex items-center gap-1 text-xs text-white font-medium bg-black/50 rounded-full px-2.5 py-1">
                      <Clock className="w-3 h-3" />
                      {act.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-base mb-1.5"
                      style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
                    >
                      {act.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {act.shortDescription}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {act.highlights.slice(0, 4).map((h) => (
                        <span
                          key={h}
                          className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                        >
                          {h}
                        </span>
                      ))}
                      {act.highlights.length > 4 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                          +{act.highlights.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Inclusions (compact) */}
                    <div className="space-y-1 mb-4">
                      {act.inclusions.map((inc) => (
                        <div key={inc} className="flex items-center gap-1.5 text-xs text-foreground">
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 text-green-500" />
                          {inc}
                        </div>
                      ))}
                    </div>

                    {/* Pickup note */}
                    {act.pickupNote && (
                      <div className="flex items-start gap-1.5 text-xs text-muted-foreground mb-4">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "var(--brand-accent)" }} />
                        {act.pickupNote}
                      </div>
                    )}

                    {/* Pricing — push to bottom */}
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-1.5 mb-3">
                        <span
                          className="text-2xl font-extrabold"
                          style={{ color: "var(--brand-primary)" }}
                        >
                          ₹{act.priceFrom.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          {act.priceUnit}
                        </span>
                      </div>

                      <Link
                        href={`/activities/${act.slug}`}
                        className="flex items-center justify-center gap-2 w-full h-11 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 mb-2"
                        style={{ background: "var(--brand-primary)" }}
                      >
                        View Details & Book
                      </Link>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full h-10 rounded-xl font-semibold text-sm border-2 transition-colors hover:bg-green-50"
                        style={{ borderColor: "#25d366", color: "#25d366" }}
                      >
                        📲 Quick WhatsApp Enquiry
                      </a>

                      <p className="text-[10px] text-muted-foreground text-center mt-2">
                        Prices are indicative and confirmed at the time of booking.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info note */}
          <div
            className="mt-12 max-w-2xl mx-auto rounded-2xl border border-border p-6 text-center"
            style={{ background: "oklch(0.265 0.078 254 / 0.04)" }}
          >
            <p className="font-semibold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>
              How Booking Works
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              ZipGoa acts as a booking agent for these group activities. Tap &quot;Book on WhatsApp&quot;,
              share your preferred date and number of people, and we&apos;ll confirm availability and
              the exact price within minutes. No advance payment until booking is confirmed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { icon: <Users className="w-3.5 h-3.5" />, text: "Group & solo welcome" },
                { icon: "📅", text: "Book for any date" },
                { icon: "💬", text: "Reply within minutes" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            Looking for a Private Tour Instead?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/north-goa-tour",
                img: "/images/locations/aguada-fort.jpg",
                badge: "Private Tour",
                title: "North Goa Private Tour",
                desc: "Your own vehicle, your own schedule. Full-day North Goa sightseeing for your group.",
                from: "₹2,500",
              },
              {
                href: "/south-goa-tour",
                img: "/images/locations/panjim.jpg",
                badge: "Private Tour",
                title: "South Goa Private Tour",
                desc: "Private full-day tour to Old Goa, Mangueshi Temple, Dona Paula and Miramar Beach.",
                from: "₹2,800",
              },
              {
                href: "/dudhsagar-trip",
                img: "/images/locations/dudhsagar.jpg",
                badge: "Adventure",
                title: "Dudhsagar Waterfall Trip",
                desc: "Private taxi to India's 4th tallest waterfall. Jeep safari through jungle terrain.",
                from: "₹3,500",
              },
            ].map((tour) => (
              <Link
                key={tour.href}
                href={tour.href}
                className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 overflow-hidden">
                  <SafeImage
                    src={tour.img}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white font-semibold bg-black/40 rounded-full px-2.5 py-0.5">
                    {tour.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>
                    {tour.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{tour.desc}</p>
                  <p className="text-xs font-semibold" style={{ color: "var(--brand-accent)" }}>
                    From {tour.from} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
