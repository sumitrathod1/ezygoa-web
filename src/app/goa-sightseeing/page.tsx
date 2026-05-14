import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Goa Sightseeing Tours | North & South Goa | EzyGoa Taxi",
  description:
    "Explore Goa's top attractions with EzyGoa sightseeing tours. Beaches, churches, forts, markets, waterfalls. Custom and fixed itinerary tours available.",
  keywords: ["Goa sightseeing", "Goa tour taxi", "North Goa tour", "South Goa tour", "Goa tourist places"],
  openGraph: {
    title: "Goa Sightseeing Tours | EzyGoa",
    description: "Explore Goa's best beaches, churches, forts, and waterfalls with EzyGoa tours.",
  },
};

const DESTINATIONS = [
  { name: "Calangute Beach", area: "North Goa", type: "Beach", emoji: "🏖️", desc: "The Queen of Beaches — Goa's most popular stretch of golden sand." },
  { name: "Baga Beach", area: "North Goa", type: "Beach", emoji: "🌊", desc: "Vibrant beach with water sports, shacks, and iconic nightlife." },
  { name: "Anjuna Beach", area: "North Goa", type: "Beach", emoji: "🏄", desc: "Famous for the Wednesday flea market and stunning cliff views." },
  { name: "Basilica of Bom Jesus", area: "Old Goa", type: "Heritage", emoji: "⛪", desc: "UNESCO World Heritage Site — home to St. Francis Xavier's relics." },
  { name: "Fort Aguada", area: "North Goa", type: "Fort", emoji: "🏰", desc: "17th-century Portuguese fort with panoramic Arabian Sea views." },
  { name: "Dudhsagar Waterfall", area: "South Goa", type: "Nature", emoji: "🌊", desc: "India's 4th tallest waterfall — a breathtaking cascade in the jungle." },
  { name: "Saturday Night Market", area: "Arpora", type: "Market", emoji: "🛍️", desc: "Goa's best flea market — live music, global food, local crafts." },
  { name: "Spice Plantation", area: "Ponda", type: "Experience", emoji: "🌿", desc: "Guided spice farm tour with traditional Goan lunch included." },
];

const PACKAGES = [
  {
    name: "North Goa Full Day",
    duration: "8–10 hours",
    places: ["Fort Aguada", "Calangute", "Baga", "Anjuna Market", "Chapora Fort", "Vagator"],
    prices: { dzire: 2500, ertiga: 3000, innova: 4000 },
    group: { t12: 5000, t14: 5500, t20: 7000, urb: 9000 },
    slug: "/north-goa-tour",
    popular: true,
  },
  {
    name: "South Goa Full Day",
    duration: "8–10 hours",
    places: ["Old Goa Churches", "Mangueshi Temple", "Colva Beach", "Benaulim", "Margao Market"],
    prices: { dzire: 3000, ertiga: 3500, innova: 4500 },
    group: { t12: 5500, t14: 6000, t20: 7500, urb: 9500 },
    slug: "/south-goa-tour",
    popular: false,
  },
  {
    name: "Dudhsagar Special",
    duration: "10–12 hours",
    places: ["Dudhsagar Falls", "Spice Plantation", "Mollem", "Bhagwan Mahavir Sanctuary"],
    prices: { dzire: 3500, ertiga: 4500, innova: 5500 },
    group: { t12: 7000, t14: 8000, t20: 10000, urb: 12000 },
    slug: "/dudhsagar-trip",
    popular: true,
  },
  {
    name: "Complete Goa (2 days)",
    duration: "2 days",
    places: ["North Goa highlights", "South Goa highlights", "Dudhsagar", "Old Goa", "Panjim"],
    prices: { dzire: 5500, ertiga: 6500, innova: 8000 },
    group: { t12: 10000, t14: 12000, t20: 16000, urb: 20000 },
    slug: "/booking",
    popular: false,
  },
];

export default function GoaSightseeingPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Guided Tours"
        title="Discover Goa"
        titleAccent="with Us"
        subtitle="Beaches, forts, churches, markets, waterfalls — experience every side of Goa with our knowledgeable local drivers."
        breadcrumbs={[{ label: "Goa Sightseeing" }]}
      />

      {/* Tour Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>Tour Packages</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Choose Your Tour
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="relative bg-white rounded-2xl border border-border shadow-sm card-hover overflow-hidden"
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                    <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    {pkg.name}
                  </h3>

                  {/* Places */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {pkg.places.map((p) => (
                      <span key={p} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        <MapPin className="w-2.5 h-2.5" /> {p}
                      </span>
                    ))}
                  </div>

                  {/* Prices — small/medium */}
                  <div className="mb-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">🚖 Small &amp; Medium</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Dzire (4)", price: pkg.prices.dzire },
                        { label: "Ertiga (6)", price: pkg.prices.ertiga },
                        { label: "Innova (7)", price: pkg.prices.innova },
                      ].map(({ label, price }) => (
                        <div key={label} className="text-center p-2.5 bg-secondary/50 rounded-xl">
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>₹{price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prices — group vehicles */}
                  <div className="mb-5 mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">🚐 Group Vehicles</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: "Tempo 12", price: pkg.group.t12 },
                        { label: "Tempo 14", price: pkg.group.t14 },
                        { label: "Tempo 20", price: pkg.group.t20 },
                        { label: "Urbania 17", price: pkg.group.urb },
                      ].map(({ label, price }) => (
                        <div key={label} className="text-center p-2 bg-blue-50 rounded-xl border border-blue-100">
                          <p className="text-[10px] text-muted-foreground leading-tight">{label}</p>
                          <p className="font-bold text-xs mt-0.5" style={{ color: "var(--brand-primary)" }}>₹{price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={pkg.slug} className="flex-1">
                      <Button variant="outline" className="w-full text-sm gap-1">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                    <a
                      href={buildWhatsAppUrl({ service: pkg.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full text-sm" style={{ background: "var(--brand-primary)", color: "white" }}>
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Popular Destinations
            </h2>
            <p className="text-muted-foreground mt-2">All covered in our sightseeing tours.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESTINATIONS.map((dest) => (
              <div key={dest.name} className="bg-white rounded-2xl p-5 border border-border shadow-sm card-hover">
                <div className="text-3xl mb-3">{dest.emoji}</div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    {dest.name}
                  </h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: "oklch(0.265 0.078 254 / 0.08)", color: "var(--brand-primary)" }}>
                  {dest.type}
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed mt-2">{dest.desc}</p>
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {dest.area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
