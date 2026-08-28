import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, MapPin, Clock, Star, AlertCircle, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import SafeImage from "@/components/SafeImage";
import { BookingButton } from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "North Goa Sightseeing Tour | Full Day | ZipGoa Taxi",
  description:
    "Full-day North Goa sightseeing tour: Fort Aguada, Calangute, Baga, Anjuna, Chapora Fort & Vagator. All vehicles — Sedan to Tempo Traveller. Transparent pricing, hotel pickup.",
  keywords: [
    "North Goa sightseeing tour",
    "North Goa full day tour",
    "Calangute Baga tour package",
    "Anjuna Chapora tour Goa",
    "Goa one day tour",
    "North Goa tempo traveller tour",
  ],
  openGraph: {
    title: "North Goa Full Day Sightseeing Tour | ZipGoa",
    description:
      "Fort Aguada · Calangute · Baga · Anjuna · Chapora Fort · Vagator. From ₹2,500. Hotel pickup included.",
    images: [{ url: "/images/services/north-goa.jpg" }],
  },
};

/* ── Data ─────────────────────────────────────────────────────────── */

const GALLERY = [
  { src: "/images/locations/aguada-fort.jpg",  alt: "Fort Aguada, North Goa" },
  { src: "/images/locations/calangute.jpg",    alt: "Calangute Beach, North Goa" },
  { src: "/images/locations/anjuna.jpg",       alt: "Anjuna Beach cliffs" },
  { src: "/images/locations/vagator.jpg",      alt: "Vagator Beach sunset view" },
  { src: "/images/locations/baga.jpg",         alt: "Baga Beach, Goa" },
  { src: "/images/services/north-goa.jpg",     alt: "North Goa sightseeing" },
];

const HIGHLIGHTS = [
  { emoji: "🏰", place: "Fort Aguada", desc: "17th-century Portuguese fortress with panoramic Arabian Sea views" },
  { emoji: "🏖️", place: "Calangute Beach", desc: "The 'Queen of Beaches' — Goa's largest and most famous beach" },
  { emoji: "🌊", place: "Baga Beach", desc: "Vibrant beach with water sports, shacks, and nightlife strip" },
  { emoji: "🐬", place: "Dolphin Sightseeing", desc: "Optional boat ride to spot wild dolphins (cost not included)" },
  { emoji: "🪨", place: "Anjuna Beach", desc: "Rocky cliffs, stunning viewpoints and laid-back Bohemian vibe" },
  { emoji: "🎬", place: "Chapora Fort", desc: "The iconic 'Dil Chahta Hai' fort with sweeping views of Vagator" },
  { emoji: "🌅", place: "Vagator Beach", desc: "Dramatic cliff views over Little Vagator and the Arabian Sea" },
  { emoji: "🏝️", place: "Candolim Beach", desc: "Serene, less-crowded stretch perfect for a morning stroll" },
];

const ITINERARY = [
  { time: "9:00 AM",  place: "Hotel Pickup",                icon: "🏨", phase: "start",
    desc: "Our driver arrives at your hotel / stay anywhere in North Goa — Calangute, Baga, Anjuna, Vagator, Panjim, etc." },
  { time: "9:30 AM",  place: "Dolphin Sightseeing",         icon: "🐬", phase: "mid",
    desc: "Exciting boat ride to spot wild dolphins in the Arabian Sea. Boat is optional — ₹300–400 per person, not included." },
  { time: "10:30 AM", place: "Fort Aguada",                 icon: "🏰", phase: "mid",
    desc: "Explore the iconic 17th-century Portuguese fort built in 1612. Stunning lighthouse, panoramic sea views. Entry free." },
  { time: "11:15 AM", place: "Candolim Beach",              icon: "🏝️", phase: "mid",
    desc: "Quick stop at the serene Candolim beach — calm waters, swaying palms, and a more relaxed vibe than Calangute." },
  { time: "11:45 AM", place: "Calangute & Snow Park",       icon: "🏖️", phase: "mid",
    desc: "The Queen of Beaches — explore the main market, beach shacks. Snow Park nearby is optional (entry extra)." },
  { time: "12:30 PM", place: "Baga Beach",                  icon: "🌊", phase: "mid",
    desc: "Walk the famous Baga beach promenade. Water sports optional. Great shacks for a quick snack." },
  { time: "1:30 PM",  place: "Lunch Break",                 icon: "🍴", phase: "mid",
    desc: "Lunch at a recommended beachside shack — Goan fish curry or seafood platter. Cost not included." },
  { time: "2:30 PM",  place: "Anjuna Beach",                icon: "🪨", phase: "mid",
    desc: "Explore Anjuna's rocky coastline, dramatic cliffs, and stunning sea views. Famous Wednesday flea market (seasonal)." },
  { time: "3:30 PM",  place: "Chapora Fort",                icon: "🎬", phase: "mid",
    desc: "The famous 'Dil Chahta Hai' fort. Sweeping 360° views of Vagator Beach and the Arabian Sea. Entry free." },
  { time: "4:15 PM",  place: "Vagator Beach",               icon: "🌅", phase: "mid",
    desc: "Clifftop views of Little Vagator (Little Beach) with golden sands and turquoise waters below." },
  { time: "5:30 PM",  place: "Drop at Hotel",               icon: "🏨", phase: "end",
    desc: "Return drop at your hotel or any preferred location in North Goa / Panjim." },
];

const PRICES = [
  { vehicle: "Maruti Dzire",         seats: "Up to 4",            emoji: "🚖", price: 2500 },
  { vehicle: "Maruti Ertiga",        seats: "Up to 6",            emoji: "🚕", price: 3000 },
  { vehicle: "Toyota Innova Crysta", seats: "Up to 7",            emoji: "🚙", price: 3500 },
  { vehicle: "Tempo Traveller 12",   seats: "Up to 12",           emoji: "🚐", price: 3500 },
  { vehicle: "Tempo Traveller 14",   seats: "Up to 14",           emoji: "🚐", price: 4000 },
  { vehicle: "Tempo Traveller 20",   seats: "Up to 20",           emoji: "🚌", price: 4500 },
  { vehicle: "Force Urbania 17",     seats: "Up to 17 · Luxury",  emoji: "⭐", price: 7000 },
];

const INCLUDED = [
  "AC vehicle for the full day (9 AM – 5:30 PM)",
  "Professional driver with local knowledge",
  "All fuel & vehicle running costs",
  "Comfortable waiting time at each stop",
  "Hotel pickup & drop within North Goa / Panjim",
];

const NOT_INCLUDED = [
  "Dolphin boat ride (~₹300–400/person)",
  "Entry tickets (most forts are free)",
  "Lunch and personal refreshments",
  "Water sports activities",
  "Tips for driver (appreciated!)",
];

const PICKUP_ZONES = [
  { zone: "North Goa Beaches", places: "Calangute · Baga · Candolim · Sinquerim · Anjuna · Vagator · Siolim · Chapora" },
  { zone: "North Goa Hinterland", places: "Mapusa · Parra · Assagao · Aldona · Moira" },
  { zone: "Panjim / Panaji", places: "Panjim City · Dona Paula · Miramar · Caranzalem · Porvorim" },
  { zone: "Airport Areas", places: "Mopa Airport (North Goa) · Dabolim Airport (additional charge may apply)" },
];

const CANCELLATION = [
  { label: "24 hrs+ before pickup",  policy: "Full refund",  color: "green" },
  { label: "12–24 hrs before pickup", policy: "50% refund",  color: "amber" },
  { label: "Under 12 hrs",           policy: "No refund",    color: "red"   },
  { label: "Cancelled by ZipGoa",    policy: "100% refund",  color: "green" },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function NorthGoaTourPage() {
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
            <Link href="/goa-sightseeing" className="text-white/60 hover:text-white transition-colors">Sightseeing</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/90">North Goa Tour</span>
          </nav>

          {/* Badge + Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Daily Tour
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white/70 font-normal ml-1.5 text-xs">4.9 · 500+ reviews</span>
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            North Goa{" "}
            <span style={{ color: "var(--brand-accent)" }}>Full Day Tour</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            From Portuguese forts to golden beaches — cover the best of North Goa in one unforgettable
            day. Dolphin sightseeing, beach hopping, fort exploration, and iconic viewpoints.
          </p>

          {/* Quick stats chips */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: <Clock className="w-3.5 h-3.5" />, text: "8–10 Hours" },
              { icon: <MapPin className="w-3.5 h-3.5" />, text: "8 Stops" },
              { icon: <Users className="w-3.5 h-3.5" />, text: "Any group size" },
              { icon: "📅", text: "Pickup: 9:00 AM" },
              { icon: "💰", text: "From ₹2,500" },
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
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 rounded-2xl overflow-hidden">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 sm:col-span-2" : ""}`}
                style={{ height: "160px" }}
              >
                <SafeImage
                  src={img.src}
                  alt={img.alt}
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

            {/* ── Left: Tour details ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  About This Tour
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The North Goa Sightseeing Tour takes you through the most iconic landmarks of Goa&apos;s
                  northern coastline. Starting with an optional dolphin boat ride, you&apos;ll explore Fort
                  Aguada&apos;s centuries-old ramparts, stroll Calangute and Baga beaches, admire the dramatic
                  cliffs at Anjuna, and finish with sweeping views from the legendary Chapora Fort. Suitable
                  for families, groups, and solo travellers — all vehicle sizes available, from a cozy sedan
                  to a 20-seater Tempo Traveller.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { emoji: "⏱️", label: "Duration",  value: "8–10 Hours" },
                    { emoji: "📍", label: "Stops",     value: "8 Places" },
                    { emoji: "🔁", label: "Frequency", value: "Daily" },
                    { emoji: "🕘", label: "Pickup",    value: "9:00 AM" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-2xl p-4 border border-border shadow-sm text-center">
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
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((h) => (
                    <div key={h.place}
                      className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-border shadow-sm">
                      <span className="text-2xl leading-none flex-shrink-0">{h.emoji}</span>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--brand-primary)" }}>{h.place}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-xl font-bold mb-5"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Detailed Itinerary
                </h2>
                <div className="space-y-0">
                  {ITINERARY.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 shadow-sm"
                          style={{
                            background: item.phase === "start" || item.phase === "end"
                              ? "var(--brand-accent)" : "var(--brand-primary)",
                          }}
                        >
                          {item.icon}
                        </div>
                        {i < ITINERARY.length - 1 && (
                          <div className="w-px flex-1 my-1" style={{ background: "var(--border)", minHeight: "20px" }} />
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
                            {item.place}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup Zones */}
              <div>
                <h2 className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Pickup Locations
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  We pick up from hotels, resorts, homestays, and beaches across North Goa and Panjim.
                  Just share your exact address when booking.
                </p>
                <div className="space-y-3">
                  {PICKUP_ZONES.map((z) => (
                    <div key={z.zone}
                      className="bg-white rounded-2xl border border-border shadow-sm p-4 flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-accent)" }} />
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--brand-primary)" }}>{z.zone}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{z.places}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good to Know */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-amber-800">
                  <AlertCircle className="w-4 h-4" /> Good to Know
                </h3>
                <ul className="space-y-2">
                  {[
                    "Tour is flexible — stops can be adjusted based on your preference",
                    "Dolphin sightseeing is subject to sea conditions and boat availability",
                    "The tour covers approximately 70–80 km total distance",
                    "All vehicles are clean, AC, and professionally maintained",
                    "Driver speaks basic English, Hindi, and Konkani",
                  ].map((note) => (
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
                    {CANCELLATION.map((row) => (
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
                  Cancellations must be communicated via WhatsApp or call to +91 70268 89254.
                </p>
              </div>
            </div>

            {/* ── Right: Sticky sidebar ── */}
            <div className="space-y-5 lg:sticky lg:top-4 lg:self-start">

              {/* Pricing card */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border"
                  style={{ background: "oklch(0.265 0.078 254 / 0.04)" }}>
                  <h3 className="font-bold text-base"
                    style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Vehicle Pricing
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Per vehicle · Full day · All-inclusive</p>
                </div>
                <div className="divide-y divide-border">
                  {PRICES.map((p) => (
                    <div key={p.vehicle}
                      className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl leading-none mt-0.5">{p.emoji}</span>
                        <div>
                          <p className="font-semibold text-sm">{p.vehicle}</p>
                          <p className="text-xs text-muted-foreground">{p.seats}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <p className="font-bold text-base" style={{ color: "var(--brand-primary)" }}>
                          ₹{p.price.toLocaleString()}
                        </p>
                        <BookingButton
                          asText
                          label="Book →"
                          modalTitle={`North Goa Tour · ${p.vehicle}`}
                          service="North Goa Full Day Sightseeing Tour"
                          vehicle={p.vehicle}
                          className="text-xs font-semibold hover:underline"
                          style={{ color: "var(--brand-accent)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center text-xs text-muted-foreground bg-secondary/20">
                  All prices include driver, fuel &amp; tolls
                </div>
              </div>

              {/* Book CTAs */}
              <BookingButton
                label="Book This Tour"
                modalTitle="North Goa Full Day Tour"
                service="North Goa Full Day Sightseeing Tour"
                className="w-full h-12 text-base font-bold"
                style={{ background: "var(--brand-primary)", color: "white" }}
              />

              <a
                href="https://wa.me/917026889254?text=Hi%20ZipGoa!%20%F0%9F%91%8B%20I%20want%20to%20book%20the%20North%20Goa%20Full%20Day%20Sightseeing%20Tour.%0ADate%3A%20___%0AVehicle%3A%20___%0APassengers%3A%20___%0APickup%20location%3A%20___%0APlease%20confirm%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-11 rounded-xl border-2 font-semibold text-sm transition-colors hover:bg-green-50"
                style={{ borderColor: "#25d366", color: "#25d366" }}
              >
                📲 Enquire on WhatsApp
              </a>

              {/* Inclusions */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2"
                  style={{ color: "var(--brand-primary)" }}>
                  <CheckCircle className="w-4 h-4 text-green-500" /> Included
                </h3>
                <ul className="space-y-2">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2"
                  style={{ color: "var(--brand-primary)" }}>
                  <XCircle className="w-4 h-4 text-red-400" /> Not Included
                </h3>
                <ul className="space-y-2">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div
                className="rounded-2xl border border-border p-4 text-center"
                style={{ background: "oklch(0.265 0.078 254 / 0.04)" }}
              >
                <p className="text-xs text-muted-foreground mb-2">Questions? Call us directly</p>
                <a href="tel:+917026889254"
                  className="text-base font-bold hover:underline"
                  style={{ color: "var(--brand-primary)" }}>
                  +91 70268 89254
                </a>
                <p className="text-xs text-muted-foreground mt-1">24/7 availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related tours ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-6"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
            Other Tours You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/south-goa-tour",
                img: "/images/locations/panjim.jpg",
                badge: "South Goa",
                title: "South Goa Full Day Tour",
                desc: "Old Goa churches, Mangueshi Temple, Dona Paula, Miramar Beach & sunset boat cruise.",
                from: "₹2,800",
              },
              {
                href: "/dudhsagar-trip",
                img: "/images/locations/dudhsagar.jpg",
                badge: "Adventure",
                title: "Dudhsagar Waterfall Trip",
                desc: "India's 4th tallest waterfall. Jeep safari through Bhagwan Mahavir Wildlife Sanctuary.",
                from: "₹3,500",
              },
              {
                href: "/tempo-traveller-goa",
                img: "/images/taxi/tempo-traveller-12.jpg",
                badge: "Groups",
                title: "Tempo Traveller & Urbania",
                desc: "Large group vehicles — 12 to 20 seater AC coaches for any occasion in Goa.",
                from: "₹4,000/day",
              },
            ].map((tour) => (
              <Link key={tour.href} href={tour.href}
                className="group bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>{tour.title}</h3>
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
