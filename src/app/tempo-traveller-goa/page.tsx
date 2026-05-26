import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle2, Users, ChevronDown } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import SafeImage from "@/components/SafeImage";
import TempoBookingWidget from "@/components/TempoBookingWidget";
import { BUSINESS } from "@/lib/constants";

/* ─────────────── Metadata ─────────────── */
export const metadata: Metadata = {
  title: "Tempo Traveller in Goa | 12, 14, 20 Seater | Urbania Rental | ZipGoa",
  description:
    "Book Tempo Traveller in Goa — 12, 14, 20 seater AC vans. Force Urbania 17-seater luxury bus available. Group bookings, weddings, airport pickup. WhatsApp booking.",
  keywords: [
    "tempo traveller in goa",
    "tempo traveller goa",
    "12 seater tempo traveller goa",
    "14 seater tempo traveller goa",
    "20 seater tempo traveller goa",
    "force urbania goa",
    "group taxi goa",
    "tempo traveller rental goa",
    "wedding tempo traveller goa",
    "airport group transfer goa",
  ],
  openGraph: {
    title: "Tempo Traveller & Urbania in Goa | ZipGoa",
    description:
      "12, 14, 20 seater Tempo Traveller + Force Urbania 17-seater luxury bus. Group bookings, weddings, airport transfers across Goa.",
    type: "website",
  },
};

/* ─────────────── Structured Data ─────────────── */
const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tempo Traveller & Urbania Rental Goa",
  description:
    "Group vehicle rental service in Goa — 12, 14, 20 seater Tempo Travellers and Force Urbania 17-seater luxury bus for weddings, corporate trips, airport transfers and sightseeing.",
  provider: {
    "@type": "Organization",
    name: "ZipGoa",
    url: "https://zipgoa.com",
    telephone: "+91-7026889254",
  },
  areaServed: { "@type": "State", name: "Goa" },
  offers: [
    { "@type": "Offer", name: "Tempo Traveller 12 Seater", price: "25", priceCurrency: "INR", description: "Per km, starting price" },
    { "@type": "Offer", name: "Tempo Traveller 14 Seater", price: "28", priceCurrency: "INR", description: "Per km, starting price" },
    { "@type": "Offer", name: "Tempo Traveller 20 Seater", price: "35", priceCurrency: "INR", description: "Per km, starting price" },
    { "@type": "Offer", name: "Force Urbania 17 Seater", price: "45", priceCurrency: "INR", description: "Per km, starting price" },
  ],
};

/* ─────────────── Data ─────────────── */
const VEHICLES = [
  {
    id: "tempo-12",
    name: "Tempo Traveller 12 Seater",
    image: "/images/taxi/tempo-traveller-12.jpg",
    capacity: "12 passengers + driver",
    pricePerKm: 25,
    baggage: "8 bags",
    features: ["AC", "Push-back seats", "Music system"],
    bestFor: "Small groups, families",
    whatsapp: `Hi ZipGoa! 👋 I want to book Tempo Traveller 12-seater.\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share rates.`,
    badge: null as string | null,
    isPremium: false,
  },
  {
    id: "tempo-14",
    name: "Tempo Traveller 14 Seater",
    image: "/images/taxi/tempo-traveller-17.jpg",
    capacity: "14 passengers + driver",
    pricePerKm: 28,
    baggage: "10 bags",
    features: ["AC", "Push-back seats", "Music system"],
    bestFor: "Medium groups, corporate",
    whatsapp: `Hi ZipGoa! 👋 I want to book Tempo Traveller 14-seater.\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share rates.`,
    badge: null as string | null,
    isPremium: false,
  },
  {
    id: "tempo-20",
    name: "Tempo Traveller 20 Seater",
    image: "/images/taxi/tempo-traveller-20.jpg",
    capacity: "20 passengers + driver",
    pricePerKm: 35,
    baggage: "15 bags",
    features: ["AC", "Reclining seats", "Sound system"],
    bestFor: "Large groups, weddings, school trips",
    whatsapp: `Hi ZipGoa! 👋 I want to book Tempo Traveller 20-seater.\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share rates.`,
    badge: null as string | null,
    isPremium: false,
  },
  {
    id: "urbania-17",
    name: "Force Urbania 17 Seater",
    image: "/images/taxi/urbania-17.jpg",
    capacity: "17 passengers + driver",
    pricePerKm: 45,
    baggage: "12 bags",
    features: ["Luxury AC", "Premium leather seats", "USB charging"],
    bestFor: "Luxury group travel, VIP transport, weddings",
    whatsapp: `Hi ZipGoa! 👋 I want to book Force Urbania 17-seater Luxury Bus.\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share rates.`,
    badge: "MOST PREMIUM" as string | null,
    isPremium: true,
  },
];

const ROUTES = [
  { to: "Calangute", distance: "42km", t12: 2800, t14: 3200, t20: 4200, urb: 5500 },
  { to: "Panjim",    distance: "32km", t12: 2200, t14: 2600, t20: 3400, urb: 4500 },
  { to: "Baga",      distance: "44km", t12: 2900, t14: 3400, t20: 4400, urb: 5800 },
  { to: "Anjuna",    distance: "48km", t12: 3200, t14: 3700, t20: 4800, urb: 6200 },
  { to: "Vagator",   distance: "45km", t12: 3000, t14: 3500, t20: 4500, urb: 5900 },
  { to: "Mapusa",    distance: "28km", t12: 2000, t14: 2300, t20: 3000, urb: 4000 },
  { to: "Margao",    distance: "80km", t12: 4500, t14: 5200, t20: 6800, urb: 8800 },
];

const USE_CASES = [
  { emoji: "👨‍👩‍👧‍👦", title: "Family Group Trips",     desc: "10+ people travelling together" },
  { emoji: "💒",          title: "Wedding Transportation", desc: "Baraat, guest transfers & more" },
  { emoji: "🏢",          title: "Corporate Outings",      desc: "Team trips & office events" },
  { emoji: "🎒",          title: "School & College Trips", desc: "Educational tours & excursions" },
  { emoji: "🎂",          title: "Birthday Parties",       desc: "Celebration group outings" },
  { emoji: "✈️",          title: "Airport Group Transfers",desc: "Mopa & Dabolim airport pickup" },
  { emoji: "🛕",          title: "Religious Group Tours",  desc: "Temple & church pilgrimages" },
  { emoji: "🏖️",          title: "Group Beach Hopping",    desc: "Explore multiple beaches in one day" },
];

const WHY_US = [
  { icon: "🚐", title: "Wide Range of Vehicles",  desc: "12 to 20 seater options + luxury Urbania" },
  { icon: "🔧", title: "Well-Maintained Fleet",   desc: "Regular servicing, clean interiors" },
  { icon: "👨‍✈️", title: "Professional Drivers",  desc: "Experienced, verified, courteous" },
  { icon: "💰", title: "Transparent Pricing",     desc: "No hidden charges, price confirmed upfront" },
  { icon: "📱", title: "Easy WhatsApp Booking",   desc: "Book in 30 seconds via WhatsApp" },
  { icon: "🕐", title: "24/7 Availability",       desc: "Early morning or late night — we're available" },
  { icon: "🛡️", title: "Verified Drivers",        desc: "Background-checked, licensed drivers" },
  { icon: "📍", title: "Local Goa Experts",       desc: "We know every road in Goa" },
];

const FAQS = [
  {
    q: "How to book a Tempo Traveller in Goa?",
    a: "Use the Quick Group Booking form above, or click any \"Book on WhatsApp\" button. Fill in your travel details and send — we confirm availability and pricing within minutes.",
  },
  {
    q: "Are all vehicles AC?",
    a: "Yes — all Tempo Travellers and the Force Urbania are fully air-conditioned with powerful cooling suitable for Goa's tropical climate.",
  },
  {
    q: "What is the difference between Tempo Traveller and Force Urbania?",
    a: "Tempo Travellers are standard group vans with push-back seats (12, 14, and 20 seater). The Force Urbania is a premium luxury minibus with leather seats, USB charging, and a superior ride — ideal for VIP groups and weddings.",
  },
  {
    q: "Do you provide drivers?",
    a: "Yes. All vehicles are driver-included. Our drivers are verified, licensed, and experienced on all Goa routes.",
  },
  {
    q: "Can I book for multiple days?",
    a: "Absolutely. Multi-day packages are available at special rates. WhatsApp us your itinerary for a custom quote.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations 6+ hours before the trip are fully refunded. Under 6 hours, a partial charge may apply. WhatsApp us if your plans change — we always try to be fair.",
  },
  {
    q: "Do you provide airport group pickup?",
    a: "Yes — we specialise in airport group transfers from Mopa (GOX) and Dabolim (GOI). We track your flight and the driver waits with a name board.",
  },
  {
    q: "Are tolls and parking charges included?",
    a: "Tolls and parking are extra, paid on actuals. We communicate these clearly before your trip so there are no surprises.",
  },
];

/* ─────────────── Helpers ─────────────── */
function waUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

function routeWaMsg(to: string) {
  return `Hi ZipGoa! 👋 I want to book a group vehicle.\nFrom: Mopa Airport\nTo: ${to}\nDate: ___\nPassengers: ___\nPlease share available vehicles and rates.`;
}

/* ─────────────── Page ─────────────── */
export default function TempoTravellerPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden gradient-hero py-20 sm:py-24 pb-24">
        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--brand-accent), transparent)" }}
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #48bb78, transparent)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-5 text-white/60 text-xs" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/90">Tempo Traveller Goa</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-success" />
            <span className="text-white/90 text-sm font-medium">Group Vehicle Booking</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tempo Traveller &{" "}
            <span style={{ color: "var(--brand-accent)" }}>Urbania</span> in Goa
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            Perfect for groups, families, weddings &amp; corporate trips. 12, 14, 20 seater Tempo
            Travellers and luxury Force Urbania — all with AC, professional drivers, and transparent
            pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={waUrl("Hi ZipGoa! 👋 I want to book a group vehicle (Tempo Traveller / Urbania).\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share available vehicles and rates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:scale-105 transition-transform"
              style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3">
            {["👥 Group Booking", "❄️ AC Vehicles", "🛡️ Verified Drivers", "🕐 24/7 Service"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-12">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="oklch(0.993 0.003 57)" />
          </svg>
        </div>
      </section>

      {/* ── Quick Group Booking Widget ── */}
      <TempoBookingWidget />

      {/* ── Vehicle Cards ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              Our Fleet
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Choose Your Vehicle
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              All vehicles are AC-equipped, well-maintained, and driven by professional drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {VEHICLES.map((v) => (
              <div
                key={v.id}
                id={v.id}
                className={`relative bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg ${
                  v.isPremium ? "border-yellow-400 ring-2 ring-yellow-300" : "border-border"
                }`}
              >
                {/* Premium badge */}
                {v.badge && (
                  <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-yellow-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-wide shadow">
                    {v.badge}
                  </div>
                )}

                {/* Image — SafeImage handles missing files gracefully */}
                <div
                  className="relative w-full h-44 overflow-hidden"
                  style={{ background: v.isPremium ? "linear-gradient(135deg,#b7791f22,#b7791f44)" : "linear-gradient(135deg,#1a365d22,#1a365d44)" }}
                >
                  <SafeImage
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                    fallbackClassName="h-44"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-bold text-base mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
                  >
                    {v.name}
                  </h3>

                  {/* Capacity */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>{v.capacity}</span>
                    <span>·</span>
                    <span>{v.baggage}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Best for */}
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Best for:</span> {v.bestFor}
                  </p>

                  {/* Price + CTA */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-2xl font-extrabold" style={{ color: "var(--brand-primary)" }}>
                        ₹{v.pricePerKm}
                      </span>
                      <span className="text-xs text-muted-foreground">/km starting</span>
                    </div>
                    <a
                      href={waUrl(v.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-transform hover:scale-[1.02] active:scale-95"
                      style={
                        v.isPremium
                          ? { background: "#b7791f", color: "white" }
                          : { background: "var(--brand-primary)", color: "white" }
                      }
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              When to Book
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Perfect For
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {USE_CASES.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <span className="text-4xl block mb-3">{emoji}</span>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Routes Pricing Table ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              Route Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Popular Routes from Mopa Airport
            </h2>
            <p className="text-muted-foreground mt-2">One-way, per vehicle fares. Tolls extra.</p>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "oklch(0.265 0.078 254 / 0.06)" }}>
                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground min-w-[130px]">Route</th>
                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground">Dist</th>
                    <th className="text-right px-4 py-3.5 text-xs font-semibold text-muted-foreground min-w-[80px]">Tempo 12</th>
                    <th className="text-right px-4 py-3.5 text-xs font-semibold text-muted-foreground min-w-[80px]">Tempo 14</th>
                    <th className="text-right px-4 py-3.5 text-xs font-semibold text-muted-foreground min-w-[80px]">Tempo 20</th>
                    <th className="text-right px-4 py-3.5 text-xs font-semibold text-yellow-700 min-w-[90px]">Urbania 17</th>
                    <th className="px-4 py-3.5 min-w-[100px]"></th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTES.map((r, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/20 transition-colors">
                      <td className="px-4 py-3.5 font-medium text-sm">
                        <span className="text-muted-foreground text-xs block leading-tight">Mopa →</span>
                        {r.to}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-muted-foreground whitespace-nowrap">{r.distance}</td>
                      <td className="px-4 py-3.5 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>₹{r.t12.toLocaleString()}</td>
                      <td className="px-4 py-3.5 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>₹{r.t14.toLocaleString()}</td>
                      <td className="px-4 py-3.5 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>₹{r.t20.toLocaleString()}</td>
                      <td className="px-4 py-3.5 text-right font-bold text-yellow-700">₹{r.urb.toLocaleString()}</td>
                      <td className="px-4 py-3.5">
                        <a
                          href={waUrl(routeWaMsg(r.to))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                          style={{ background: "var(--brand-primary)" }}
                        >
                          <MessageCircle className="w-3 h-3" />
                          Book Route
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            * Prices are one-way, per vehicle (not per person). Toll &amp; parking charges extra. Confirm final rate on WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Why Choose ZipGoa ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              Why ZipGoa
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Why Travel Groups Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {WHY_US.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl block mb-3">{icon}</span>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Packages ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              Group Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Special Packages
            </h2>
          </div>

          {/* Full Day Package */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                  🌴 Full Day Goa Tour
                </div>
                <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Full Day Goa Tour Package
                </h3>
                <p className="text-sm text-muted-foreground mt-1">8 hours · 80 km included · Driver included · AC vehicle</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Tempo 12 Seater", price: 4500, vehicleName: "Tempo Traveller 12-seater" },
                { label: "Tempo 14 Seater", price: 5000, vehicleName: "Tempo Traveller 14-seater" },
                { label: "Tempo 20 Seater", price: 6500, vehicleName: "Tempo Traveller 20-seater" },
                { label: "Force Urbania",   price: 8500, vehicleName: "Force Urbania 17-seater" },
              ].map(({ label, price, vehicleName }) => (
                <div key={label} className="bg-secondary/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1 font-medium">{label}</p>
                  <p className="text-xl font-extrabold mb-3" style={{ color: "var(--brand-primary)" }}>
                    ₹{price.toLocaleString()}
                  </p>
                  <a
                    href={waUrl(`Hi ZipGoa! 👋 I want to book the Full Day Goa Tour Package in ${vehicleName}.\nDate: ___\nPassengers: ___\nPickup: ___\nPlease confirm availability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
                    style={{ background: "var(--brand-primary)" }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                emoji: "📅",
                title: "Multi-Day Goa Trip",
                desc: "2, 3, 4 or more day packages with accommodation stop options.",
                cta: "Get Custom Quote",
                waMsg: "Hi ZipGoa! 👋 I'm interested in a multi-day Goa trip package for a group.\nDays: ___\nPassengers: ___\nPlease share available options and rates.",
              },
              {
                emoji: "🛣️",
                title: "Outstation Trips",
                desc: "Mumbai, Pune, Kolhapur and other outstation destinations from Goa.",
                cta: "Get Quote",
                waMsg: "Hi ZipGoa! 👋 I need a group vehicle for an outstation trip.\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share rates.",
              },
              {
                emoji: "💒",
                title: "Wedding & Events",
                desc: "Custom pricing for wedding baraat, guest transfers and multi-vehicle event logistics.",
                cta: "Enquire Now",
                waMsg: "Hi ZipGoa! 👋 I need group vehicles for a wedding / event.\nDate: ___\nNumber of vehicles needed: ___\nPassengers: ___\nPlease share rates and availability.",
              },
            ].map(({ emoji, title, desc, cta, waMsg }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col"
              >
                <span className="text-3xl mb-3 block">{emoji}</span>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{desc}</p>
                <a
                  href={waUrl(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: "var(--brand-primary)" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-border shadow-sm group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-sm" style={{ color: "var(--brand-primary)" }}>
                  <span>{q}</span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
            Ready to Book? Let&apos;s Talk.
          </h2>
          <p className="text-muted-foreground mb-8">
            WhatsApp us with your group size and travel dates — we&apos;ll reply in minutes with availability and rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={waUrl("Hi ZipGoa! 👋 I want to book a group vehicle (Tempo Traveller / Urbania).\nFrom: ___\nTo: ___\nDate: ___\nPassengers: ___\nPlease share available vehicles and rates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base shadow-lg hover:scale-105 transition-transform"
              style={{ background: "#25d366", color: "white" }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base border-2 transition-colors"
              style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            📧 {BUSINESS.email} &nbsp;·&nbsp; 🕐 Available 24/7
          </p>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
