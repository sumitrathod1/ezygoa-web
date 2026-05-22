import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SightseeingPackages from "@/components/SightseeingPackages";

export const metadata: Metadata = {
  title: "Goa Sightseeing Tours | North & South Goa | ZipGoa Taxi",
  description:
    "Explore Goa's top attractions with ZipGoa sightseeing tours. Beaches, churches, forts, markets, waterfalls. Custom and fixed itinerary tours available.",
  keywords: ["Goa sightseeing", "Goa tour taxi", "North Goa tour", "South Goa tour", "Goa tourist places"],
  openGraph: {
    title: "Goa Sightseeing Tours | ZipGoa",
    description: "Explore Goa's best beaches, churches, forts, and waterfalls with ZipGoa tours.",
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
            <p className="text-muted-foreground mt-2">Select your vehicle on each card and book instantly via WhatsApp.</p>
          </div>
          <SightseeingPackages />
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
