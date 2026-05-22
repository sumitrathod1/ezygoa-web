import type { Metadata } from "next";
import { Award, Users, ThumbsUp, MapPin, Heart, Star } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | ZipGoa Taxi Services — Trusted Since 2015",
  description:
    "Learn about ZipGoa Taxi Services — Goa's trusted taxi and car rental company since 2015. Our story, our values, and our commitment to your comfort.",
  keywords: ["ZipGoa about", "Goa taxi company", "best taxi company Goa", "ZipGoa story"],
  openGraph: {
    title: "About ZipGoa Taxi Services",
    description: "Goa's trusted taxi and car rental company since 2015.",
  },
};

const STATS = [
  { value: "10,000+", label: "Trips Completed", icon: "🚕" },
  { value: "5,000+", label: "Happy Customers", icon: "😊" },
  { value: "4.9★", label: "Average Rating", icon: "⭐" },
  { value: "10+", label: "Fleet Vehicles", icon: "🚌" },
];

const VALUES = [
  { icon: Heart, title: "Customer First", desc: "Every decision we make starts with the customer's comfort, safety, and satisfaction." },
  { icon: Star, title: "Excellence", desc: "We raise the bar on every trip — punctuality, cleanliness, courtesy, and value." },
  { icon: Award, title: "Integrity", desc: "Transparent pricing, honest communication, no shortcuts. Always." },
  { icon: ThumbsUp, title: "Reliability", desc: "We've never missed an airport pickup. Not once. That's our track record." },
];

const SERVICE_AREAS = [
  "North Goa (Calangute, Baga, Anjuna, Vagator, Arambol, Mapusa)",
  "South Goa (Margao, Colva, Benaulim, Palolem, Canacona)",
  "Central Goa (Panjim, Old Goa, Porvorim)",
  "Mopa International Airport (GOX)",
  "Dabolim Airport (GOI)",
  "Outstation: Mumbai, Pune, Bangalore, Hampi, Gokarna",
];

const TEAM = [
  { name: "Rajan Naik", role: "Founder & Director", emoji: "👨‍💼", years: "10+ years in transport" },
  { name: "Suresh Dessai", role: "Fleet Manager", emoji: "🔧", years: "Expert in vehicle maintenance" },
  { name: "Preetam Gaonkar", role: "Senior Driver", emoji: "🚗", years: "8+ years, 5000+ trips" },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        badge={"Est. " + BUSINESS.established}
        title="About"
        titleAccent="ZipGoa"
        subtitle="We started with one car and a simple belief: every traveller in Goa deserves a comfortable, honest, and reliable taxi experience."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
                Our Story
              </p>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                From One Car to Goa&apos;s Most Trusted Taxi Service
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ZipGoa Taxi Services was founded in {BUSINESS.established} in Parra, North Goa, with a single Maruti Dzire and a dream: to give tourists and locals the kind of taxi experience they actually deserve.
                </p>
                <p>
                  What started as solo rides to Mopa Airport quickly grew through word-of-mouth into a full fleet operation covering all of Goa — from Arambol in the north to Palolem in the south, and outstation trips across the Konkan coast.
                </p>
                <p>
                  Today, we operate 10+ vehicles, from compact sedans to luxury buses, and have served over 10,000 happy travellers. Every trip we take is a reflection of our commitment to punctuality, transparency, and genuine Goa hospitality.
                </p>
                <p>
                  <strong style={{ color: "var(--brand-primary)" }}>Our mission:</strong> Make every journey in Goa easy, comfortable, and memorable — so you can focus on the incredible destination, not the logistics.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover text-center"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div
                    className="text-3xl font-extrabold mb-1"
                    style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}>
                  <Icon className="w-6 h-6" style={{ color: "var(--brand-primary)" }} />
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Meet Our Team
            </h2>
            <p className="text-muted-foreground mt-2">Friendly professionals who live and breathe Goa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}
                >
                  {member.emoji}
                </div>
                <h3 className="font-bold mb-0.5" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Areas We Cover
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border shadow-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-accent)" }} />
                <span className="text-sm text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
