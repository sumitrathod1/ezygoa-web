import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, Phone, CheckCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import { vehicles } from "@/lib/data";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export async function generateStaticParams() {
  return vehicles
    .filter((v) => v.category === "taxi")
    .map((v) => ({ vehicle: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vehicle: string }>;
}): Promise<Metadata> {
  const { vehicle: id } = await params;
  const v = vehicles.find((v) => v.id === id && v.category === "taxi");
  if (!v) return { title: "Not Found" };
  return {
    title: `${v.name} Taxi Goa | Book Online | EzyGoa`,
    description: `Book ${v.name} taxi in Goa. ${v.tagline}. ₹${v.pricePerKm}/km, 8hr/80km ₹${v.packages?.["8hr80km"]?.toLocaleString()}, airport transfers from ₹${v.airportRates?.mopa?.toLocaleString()}. Instant WhatsApp booking.`,
    keywords: [
      `${v.name} taxi Goa`,
      `${v.name} cab Goa`,
      `book ${v.name} Goa`,
      `${v.name} airport transfer Goa`,
      `${v.type} taxi Goa`,
      "EzyGoa",
    ],
    openGraph: {
      title: `${v.name} Taxi in Goa | EzyGoa`,
      description: `${v.tagline}. ₹${v.pricePerKm}/km. Instant booking via WhatsApp.`,
    },
  };
}

const FEATURES = [
  { emoji: "❄️", label: "Air Conditioning" },
  { emoji: "🎵", label: "Music System" },
  { emoji: "🔌", label: "Phone Charger" },
  { emoji: "💧", label: "Bottled Water" },
  { emoji: "🩹", label: "First Aid Kit" },
  { emoji: "💺", label: "Comfortable Seats" },
  { emoji: "👨‍✈️", label: "Verified Driver" },
  { emoji: "✨", label: "Clean Interior" },
];

const BEST_FOR_ICONS: Record<string, string> = {
  "Airport Transfer": "✈️",
  "Family Outing": "👨‍👩‍👧‍👦",
  "Long Trips": "🛣️",
  "Sightseeing": "📸",
  "Wedding Events": "💒",
  "Corporate Travel": "💼",
  "Group Tours": "👥",
  "Adventure Travel": "🏕️",
  "City Tours": "🏙️",
  "Premium Travel": "⭐",
  "2–4 People": "👤",
  "10–12 People": "👥",
  "12–14 People": "👥",
  "Large Groups": "👥",
  "Group of 5–6": "👥",
  "Tour Packages": "🗺️",
  "Corporate Events": "🏢",
  "Pilgrimages": "🙏",
  "Wedding Parties": "🥂",
  "Premium Events": "🌟",
};

export default async function TaxiVehiclePage({
  params,
}: {
  params: Promise<{ vehicle: string }>;
}) {
  const { vehicle: id } = await params;
  const v = vehicles.find((v) => v.id === id && v.category === "taxi");
  if (!v) notFound();

  const related = vehicles.filter(
    (r) => v.relatedVehicles?.includes(r.id)
  );

  const bookingUrl = buildWhatsAppUrl({ service: `Taxi Booking — ${v.name}` });

  const labelClass = "text-xs font-semibold text-muted-foreground uppercase tracking-wider";

  return (
    <PageWrapper>
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #1a365d 0%, #2a5298 60%, #1e3a5f 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
                style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
              >
                {v.type} · {v.capacity} Seats
              </span>
              <h1
                className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {v.name}
              </h1>
              <p className="text-xl text-white/80 mb-8">{v.tagline}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { label: "Per Km", value: `₹${v.pricePerKm}` },
                  { label: "8hr / 80km", value: `₹${v.packages?.["8hr80km"]?.toLocaleString()}` },
                  { label: "Mopa Airport", value: `₹${v.airportRates?.mopa?.toLocaleString()}` },
                  { label: "Capacity", value: `${v.capacity} seats` },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/20">
                    <p className="text-xs text-white/60 mb-0.5">{label}</p>
                    <p className="font-bold text-white text-sm">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="h-12 px-6 font-bold gap-2" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp
                  </Button>
                </a>
                <a href={`tel:${BUSINESS.phone}`}>
                  <Button variant="outline" className="h-12 px-6 font-bold gap-2 border-white/40 text-white hover:bg-white/10">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div
                className="w-64 h-64 rounded-3xl flex items-center justify-center text-9xl shadow-2xl"
                style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)" }}
              >
                <Car className="w-32 h-32 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* About */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  About the {v.name}
                </h2>
                <div className="space-y-4">
                  {v.longDescription?.split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              {v.specifications && (
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Specifications
                  </h2>
                  <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                    {Object.entries(v.specifications).map(([key, val], i) => (
                      <div
                        key={key}
                        className={`flex items-center justify-between px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-secondary/30" : "bg-white"}`}
                      >
                        <span className="font-medium text-muted-foreground">{key}</span>
                        <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FEATURES.map((f) => (
                    <div key={f.label} className="bg-white rounded-xl border border-border shadow-sm p-4 text-center">
                      <div className="text-2xl mb-2">{f.emoji}</div>
                      <p className="text-xs font-semibold text-foreground">{f.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For */}
              {v.bestFor && v.bestFor.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Best For
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {v.bestFor.map((item) => (
                      <div key={item} className="bg-white rounded-xl border border-border shadow-sm p-4 flex items-center gap-3">
                        <span className="text-2xl">{BEST_FOR_ICONS[item] ?? "✅"}</span>
                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ))}
                    {["Airport Transfer", "Family Outing", "Sightseeing", "Corporate Travel", "Wedding Events", "Long Trips"]
                      .filter((i) => !v.bestFor?.includes(i))
                      .slice(0, Math.max(0, 6 - (v.bestFor?.length ?? 0)))
                      .map((item) => (
                        <div key={item} className="bg-white rounded-xl border border-border shadow-sm p-4 flex items-center gap-3">
                          <span className="text-2xl">{BEST_FOR_ICONS[item] ?? "✅"}</span>
                          <span className="text-sm font-semibold">{item}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* How to Book */}
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  How to Book
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { step: "1", title: "Contact Us", desc: "WhatsApp, call, or fill our online booking form with your trip details." },
                    { step: "2", title: "Confirm Details", desc: "We confirm availability, share the final rate, and assign your driver." },
                    { step: "3", title: "We Arrive", desc: "Your driver arrives at the pickup point on time. Pay after the trip." },
                  ].map((s) => (
                    <div key={s.step} className="bg-white rounded-2xl border border-border shadow-sm p-5">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3"
                        style={{ background: "var(--brand-primary)" }}
                      >
                        {s.step}
                      </div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {v.vehicleFaq && (
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {v.vehicleFaq.map((item, i) => (
                      <details key={i} className="bg-white rounded-xl border border-border shadow-sm group">
                        <summary className="px-5 py-4 cursor-pointer font-semibold text-sm list-none flex items-center justify-between" style={{ color: "var(--brand-primary)" }}>
                          {item.q}
                          <span className="text-muted-foreground ml-2 flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="px-5 pb-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Vehicles */}
              {related.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    You Might Also Like
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <a
                        key={r.id}
                        href={`/taxi/${r.id}`}
                        className="bg-white rounded-2xl border-2 border-border shadow-sm p-5 hover:border-primary transition-colors block"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}
                          >
                            <Car className="w-5 h-5" style={{ color: "var(--brand-primary)" }} />
                          </div>
                          <div>
                            <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>{r.name}</p>
                            <p className="text-xs text-muted-foreground">{r.capacity} seats · {r.type}</p>
                          </div>
                        </div>
                        <p className="text-xs font-bold" style={{ color: "var(--brand-accent)" }}>
                          ₹{r.pricePerKm}/km · 8hr ₹{r.packages?.["8hr80km"]?.toLocaleString()}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Pricing table */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden sticky top-24">
                <div className="p-4 border-b border-border" style={{ background: "var(--brand-primary)" }}>
                  <h3 className="font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                    {v.name} Pricing
                  </h3>
                  <p className="text-white/70 text-xs mt-0.5">Transparent rates, no hidden charges</p>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { label: "Per Km Rate", value: `₹${v.pricePerKm}/km` },
                    { label: "8hr / 80km Package", value: `₹${v.packages?.["8hr80km"]?.toLocaleString()}` },
                    { label: "12hr / 120km Package", value: `₹${v.packages?.["12hr120km"]?.toLocaleString()}` },
                    { label: "Mopa Airport Drop", value: `₹${v.airportRates?.mopa?.toLocaleString()}` },
                    { label: "Dabolim Airport Drop", value: `₹${v.airportRates?.dabolim?.toLocaleString()}` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between px-4 py-3 text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-bold" style={{ color: "var(--brand-primary)" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-secondary/30 text-xs text-muted-foreground">
                  + Toll charges extra on outstation trips · Driver allowance ₹500/day for overnight
                </div>
                <div className="p-4 space-y-2">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full font-bold gap-2" style={{ background: "var(--brand-primary)", color: "white" }}>
                      <MessageCircle className="w-4 h-4" />
                      Book on WhatsApp
                    </Button>
                  </a>
                  <a href={`tel:${BUSINESS.phone}`} className="block">
                    <Button variant="outline" className="w-full font-bold gap-2">
                      <Phone className="w-4 h-4" />
                      {BUSINESS.phoneDisplay}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Popular Routes */}
              {v.popularRoutes && (
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                      Popular Routes
                    </h3>
                  </div>
                  <div className="divide-y divide-border">
                    {v.popularRoutes.map(({ route, price }) => (
                      <div key={route} className="flex items-center justify-between px-4 py-3 text-sm hover:bg-secondary/20">
                        <span className="text-muted-foreground">{route}</span>
                        <span className="font-bold" style={{ color: "var(--brand-accent)" }}>₹{price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why EzyGoa */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Why Book with EzyGoa?
                </h3>
                <ul className="space-y-2">
                  {[
                    "Verified, experienced drivers",
                    "No surge pricing — fixed rates",
                    "24/7 customer support",
                    "Backup vehicle guarantee",
                    "Instant WhatsApp confirmation",
                    "Clean, well-maintained vehicles",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
