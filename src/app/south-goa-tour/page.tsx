import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, MapPin, Clock, AlertCircle, Users } from "lucide-react";
import { tourPrices, type TaxiKey } from "@/lib/data";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import SafeImage from "@/components/SafeImage";
import { BookingButton } from "@/components/BookingButton";
import NorthGoaPickupNotice, { PickupZones, NORTH_GOA_PICKUP_LABEL } from "@/components/NorthGoaPickupNotice";

export const metadata: Metadata = {
  title: "South Goa Sightseeing Tour | Full Day",
  description:
    "Full-day South Goa tour: Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, Spice Plantation, Dona Paula & Miramar Beach. Hotel pickup, all vehicle sizes.",
  keywords: [
    "South Goa sightseeing tour",
    "South Goa full day tour",
    "Old Goa churches tour",
    "Mangueshi Temple tour",
    "Goa heritage tour",
    "South Goa tempo traveller tour",
  ],
  openGraph: {
    title: "South Goa Full Day Sightseeing Tour | ZipGoa",
    description:
      "Old Goa · Mangueshi Temple · Spice Plantation · Dona Paula · Miramar. From ₹2,800 (North Goa pickup).",
    images: [{ url: "/images/locations/panjim.jpg" }],
  },
};

/* ── Data ─────────────────────────────────────────────────────────── */

const GALLERY = [
  { src: "/images/locations/panjim.jpg",     alt: "Panjim Church, Goa" },
  { src: "/images/locations/palolem.jpg",    alt: "Palolem Beach, South Goa" },
  { src: "/images/services/sightseeing.jpg", alt: "South Goa sightseeing tour" },
  { src: "/images/locations/dudhsagar.jpg",  alt: "Goa nature scenery" },
  { src: "/images/services/north-goa.jpg",   alt: "Goa coastline" },
  { src: "/images/locations/calangute.jpg",  alt: "Goa tour" },
];

const HIGHLIGHTS = [
  { emoji: "⛪", place: "Basilica of Bom Jesus", desc: "UNESCO World Heritage site — resting place of St. Francis Xavier. Baroque masterpiece." },
  { emoji: "🕌", place: "Se Cathedral & St. Cajetan", desc: "Asia's largest church and Rome of the East — stunning Portuguese-Gothic architecture" },
  { emoji: "🪔", place: "Mangueshi Temple", desc: "One of Goa's most important Hindu temples — stunning Goman architecture" },
  { emoji: "🌿", place: "Spice Plantation", desc: "Guided walk through a lush farm — cardamom, pepper, nutmeg & traditional Goan lunch" },
  { emoji: "🏛️", place: "Our Lady of Immaculate Conception", desc: "Goa's most photographed landmark — the iconic white Panjim church" },
  { emoji: "🌊", place: "Dona Paula", desc: "Scenic viewpoint where two rivers meet the Arabian Sea — stunning panoramas" },
  { emoji: "🏖️", place: "Miramar Beach", desc: "Panjim's city beach — golden sands along the Mandovi river estuary" },
  { emoji: "🚢", place: "Mandovi River Cruise", desc: "Optional sunset boat cruise on the Mandovi river (cost not included)" },
];

const ITINERARY = [
  { time: "9:00 AM",  place: "Hotel Pickup",                        icon: "🏨", phase: "start",
    desc: "Driver picks you up from your hotel in North Goa or Panjim — Calangute, Baga, Candolim, Anjuna, Vagator, Mapusa, etc." },
  { time: "10:00 AM", place: "Basilica of Bom Jesus",               icon: "⛪", phase: "mid",
    desc: "UNESCO-listed church housing the mortal remains of St. Francis Xavier. Stunning baroque architecture dating to 1605. Entry free." },
  { time: "10:45 AM", place: "Se Cathedral & Church of St. Cajetan", icon: "🕌", phase: "mid",
    desc: "Asia's largest church with a famous Golden Bell. The Church of St. Cajetan nearby mirrors St. Peter's Basilica in Rome. Both free to enter." },
  { time: "11:45 AM", place: "Mangueshi Temple",                    icon: "🪔", phase: "mid",
    desc: "One of Goa's most celebrated Shiva temples — visit the main shrine, lamp tower, and serene temple tank. Entry free." },
  { time: "12:30 PM", place: "Spice Plantation",                    icon: "🌿", phase: "mid",
    desc: "Guided walk through a lush spice garden — see cardamom, pepper, vanilla, nutmeg growing. Traditional Goan thali lunch available (extra)." },
  { time: "2:00 PM",  place: "Lunch Break",                         icon: "🍴", phase: "mid",
    desc: "Traditional Goan thali at the spice plantation or local restaurant nearby. Cost not included." },
  { time: "3:00 PM",  place: "Panjim Church (Our Lady of Immaculate Conception)", icon: "🏛️", phase: "mid",
    desc: "Goa's most photographed landmark — the stunning white baroque church. Great for photos. Walk through old Latin Quarter nearby." },
  { time: "3:45 PM",  place: "Dona Paula Viewpoint",                icon: "🌊", phase: "mid",
    desc: "Scenic viewpoint where the Zuari and Mandovi rivers converge with the sea. Stunning panoramic views and a romantic legend." },
  { time: "4:30 PM",  place: "Miramar Beach",                       icon: "🏖️", phase: "mid",
    desc: "Panjim's beach on the Mandovi estuary — golden sand, sea breeze, and an ideal spot for a sunset stroll." },
  { time: "5:00 PM",  place: "Mandovi River Cruise (optional)",     icon: "🚢", phase: "mid",
    desc: "Relaxing boat cruise on the Mandovi — enjoy Goa's skyline and Divar Island views. Tickets extra (~₹300/person)." },
  { time: "6:00 PM",  place: "Drop at Hotel",                       icon: "🏨", phase: "end",
    desc: "Return drop at your hotel or any preferred location in North Goa / Panjim." },
];

// Prices come from src/lib/data.ts (single source of truth).
const PRICE_ROWS: { key: TaxiKey; vehicle: string; seats: string; emoji: string }[] = [
  { key: "dzire", vehicle: "Maruti Dzire",         seats: "Up to 4",           emoji: "🚖" },
  { key: "ertiga", vehicle: "Maruti Ertiga",        seats: "Up to 6",           emoji: "🚕" },
  { key: "innova", vehicle: "Toyota Innova Crysta", seats: "Up to 7",           emoji: "🚙" },
  { key: "t12", vehicle: "Tempo Traveller 12",   seats: "Up to 12",          emoji: "🚐" },
  { key: "t14", vehicle: "Tempo Traveller 14",   seats: "Up to 14",          emoji: "🚐" },
  { key: "t20", vehicle: "Tempo Traveller 20",   seats: "Up to 20",          emoji: "🚌" },
  { key: "urb", vehicle: "Force Urbania 17",     seats: "Up to 17 · Luxury", emoji: "⭐" },
];

const PRICES = PRICE_ROWS.map((row) => ({ ...row, price: tourPrices.southGoa[row.key] }));
const FROM_PRICE = `From ₹${tourPrices.southGoa.dzire.toLocaleString("en-IN")}`;

const INCLUDED = [
  "AC vehicle for full day (9 AM – 6 PM approx.)",
  "Expert driver with local knowledge",
  "All fuel & vehicle running costs",
  "Hotel pickup & drop within North Goa / Panjim",
  "Flexible stops based on your preference",
];

const NOT_INCLUDED = [
  "Entry fees (Old Goa churches are free)",
  "Lunch and personal refreshments",
  "Spice plantation entry & lunch (extra)",
  "Boat rides or river cruises",
  "Personal shopping",
];

const PICKUP_ZONES = [
  { zone: "North Goa Beaches", places: "Calangute · Baga · Candolim · Anjuna · Vagator · Siolim · Chapora" },
  { zone: "North Goa Hinterland", places: "Mapusa · Parra · Assagao" },
  { zone: "Panjim / Porvorim", places: "Panjim City · Dona Paula · Miramar · Caranzalem · Porvorim" },
  { zone: "Airport & Railway Station", places: "Dabolim Airport (GOI) · Vasco da Gama · Railway stations" },
];

const PICKUP_ON_REQUEST = [
  { zone: "South Goa", places: "Margao · Colva · Benaulim · Palolem · Agonda · Varca" },
];

const CANCELLATION = [
  { label: "24 hrs+ before pickup",   policy: "Full refund",  color: "green" },
  { label: "12–24 hrs before pickup", policy: "50% refund",   color: "amber" },
  { label: "Under 12 hrs",            policy: "No refund",    color: "red"   },
  { label: "Cancelled by ZipGoa",     policy: "100% refund",  color: "green" },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function SouthGoaTourPage() {
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
            <span className="text-white/90">South Goa Tour</span>
          </nav>

          {/* Badge + Rating */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Daily Tour
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            South Goa{" "}
            <span style={{ color: "var(--brand-accent)" }}>Full Day Tour</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            Goa&apos;s spiritual and colonial heart — UNESCO churches, Hindu temples, a lush spice
            plantation, Panjim&apos;s iconic church, and a serene sunset by the Mandovi. Heritage &amp; beauty in one day.
          </p>

          {/* Quick stats chips */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: <Clock className="w-3.5 h-3.5" />, sub: undefined as string | undefined, text: "9–11 Hours" },
              { icon: <MapPin className="w-3.5 h-3.5" />, text: "8 Stops" },
              { icon: <Users className="w-3.5 h-3.5" />, text: "Any group size" },
              { icon: "📅", text: "Pickup: 9:00 AM" },
              { icon: "💰", text: FROM_PRICE, sub: NORTH_GOA_PICKUP_LABEL },
            ].map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-white/90 text-xs font-medium"
              >
                {chip.icon}
                {chip.sub ? (
                  <span className="flex flex-col leading-tight">
                    <span>{chip.text}</span>
                    <span className="text-[10px] font-normal text-white/70">{chip.sub}</span>
                  </span>
                ) : (
                  chip.text
                )}
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
                  The South Goa Sightseeing Tour is a journey through Goa&apos;s rich history, spiritual
                  heritage, and natural beauty. Visit the UNESCO-listed Basilica of Bom Jesus and Se Cathedral
                  in Old Goa, pay respects at the Mangueshi Temple, experience a working spice plantation,
                  and end the day with Panjim&apos;s iconic church and a stroll along Miramar Beach. An
                  optional Mandovi river cruise rounds off a perfect day. Suitable for all group sizes —
                  from families in a sedan to large groups in a Tempo Traveller.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { emoji: "⏱️", label: "Duration",  value: "9–11 Hours" },
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
                  Listed prices cover pickup from hotels, resorts, and homestays in North Goa and Panjim / Porvorim.
                  Just share your exact address when booking.
                </p>
                <PickupZones standard={PICKUP_ZONES} onRequest={PICKUP_ON_REQUEST} />
              </div>

              {/* Good to Know */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-amber-800">
                  <AlertCircle className="w-4 h-4" /> Good to Know
                </h3>
                <ul className="space-y-2">
                  {[
                    "Old Goa churches are UNESCO World Heritage Sites — modest dress code required",
                    "Spice plantation visit includes a guided walk and optional traditional Goan lunch",
                    "The tour covers approximately 90–100 km total distance",
                    "Tour is flexible — stops can be adjusted based on your interests",
                    "Mandovi river cruise timing depends on availability (usually 5 PM)",
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

              <NorthGoaPickupNotice tourName="South Goa Full Day Tour" stacked />

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
                        <p className="text-[11px] text-muted-foreground mb-0.5">{NORTH_GOA_PICKUP_LABEL}</p>
                        <BookingButton
                          asText
                          label="Book →"
                          modalTitle={`South Goa Tour · ${p.vehicle}`}
                          service="South Goa Full Day Sightseeing Tour"
                          vehicle={p.vehicle}
                          askPickupArea
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
                modalTitle="South Goa Full Day Tour"
                service="South Goa Full Day Sightseeing Tour"
                askPickupArea
                className="w-full h-12 text-base font-bold"
                style={{ background: "var(--brand-primary)", color: "white" }}
              />

              <a
                href="https://wa.me/917026889254?text=Hi%20ZipGoa!%20%F0%9F%91%8B%20I%20want%20to%20book%20the%20South%20Goa%20Full%20Day%20Sightseeing%20Tour.%0ADate%3A%20___%0AVehicle%3A%20___%0APassengers%3A%20___%0APickup%20area%3A%20___%0APlease%20confirm%20availability."
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
                href: "/north-goa-tour",
                img: "/images/locations/aguada-fort.jpg",
                badge: "North Goa",
                title: "North Goa Full Day Tour",
                desc: "Fort Aguada, Calangute, Baga, Anjuna, Chapora Fort & Vagator in one day.",
                from: "₹2,500",
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
