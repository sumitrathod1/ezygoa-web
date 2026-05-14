import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SelfDriveGrid from "@/components/SelfDriveGrid";
import { selfDriveVehicles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Self Drive Car Rental Goa 2026 | Swift, Creta, Thar, Innova | EzyGoa",
  description:
    "Rent self-drive cars in Goa starting ₹1,200/day. Swift, Baleno, i20, Creta, Ertiga, Innova Crysta, Hycross Hybrid, Thar 4x4. All new models, insured, 24/7 support.",
  keywords: [
    "self drive car rental Goa",
    "rent car Goa",
    "Thar rental Goa",
    "Creta rental Goa",
    "Innova Hycross Goa",
    "Swift rental Goa",
    "Baleno rental Goa",
    "i20 rental Goa",
    "Ertiga rental Goa",
  ],
  openGraph: {
    title: "Self Drive Car Rental Goa | EzyGoa — From ₹1,200/day",
    description: "18 cars available. Economy to premium. Swift, Creta, Thar, Hycross. Instant booking.",
  },
};

const WHY_RENT = [
  { emoji: "🔑", title: "Full Freedom", desc: "Go where you want, when you want — zero waiting or scheduling." },
  { emoji: "💰", title: "Transparent Rates", desc: "Fixed daily prices. No hidden charges, no surprise fees." },
  { emoji: "🚗", title: "All New Models", desc: "2023–2025 vehicles freshly serviced before every rental." },
  { emoji: "📍", title: "Flexible Pickup", desc: "Collect from Panjim, Calangute, Mapusa or any Goa airport." },
  { emoji: "📞", title: "24/7 Support", desc: "Our team is on call for help, directions or roadside assistance." },
  { emoji: "📄", title: "Simple Process", desc: "WhatsApp your documents — car delivered in 30 minutes." },
];

const REQUIREMENTS = [
  "Valid Indian Driving Licence (original)",
  "Aadhaar Card or Passport (original)",
  "Age: 21+ years",
  "Security deposit (cash / UPI) — refundable",
];

const INCLUDED = [
  "24/7 Roadside assistance",
  "Comprehensive vehicle insurance",
  "Sanitized & cleaned vehicle",
  "Full fuel tank on delivery",
  "Unlimited km within Goa",
];

const NOT_INCLUDED = [
  "Fuel cost (fill & return full)",
  "Toll charges",
  "Parking fees",
  "Traffic fines",
  "Damages beyond normal wear",
];

const PICKUP_LOCATIONS = [
  "Panjim (Panaji)", "Calangute", "Mapusa", "Mopa Airport (GOX)", "Dabolim Airport (GOI)",
];

export default function SelfDrivePage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Self-Drive Car Rental"
        title="Drive Goa"
        titleAccent="Your Way"
        subtitle={`Choose from ${selfDriveVehicles.length} vehicles — hatchbacks, sedans, SUVs, 7-seaters, and adventure 4x4s. All new models, insured, and road-ready.`}
        breadcrumbs={[{ label: "Self Drive" }]}
      />

      {/* Vehicles + Filter */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              {selfDriveVehicles.length} Vehicles Available
            </p>
            <h2
              className="text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
            >
              Choose Your Rental Car
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              Filter by category, transmission, or price — then compare side-by-side before booking.
            </p>
          </div>
          <SelfDriveGrid vehicles={selfDriveVehicles} />
        </div>
      </section>

      {/* Why Rent Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Why Rent from EzyGoa?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_RENT.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                <div
                  className="w-11 h-11 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl"
                  style={{ background: "rgba(26,54,93,0.06)" }}
                >
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--brand-primary)" }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rental Terms & Conditions ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              Important
            </p>
            <h2 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Rental Terms & Conditions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Booking Requirements */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-base mb-4 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                <span className="text-xl">📋</span> Booking Requirements
              </h3>
              <ul className="space-y-3">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✅</span> {r}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span>🕐</span> Rental Timing: 9 AM to next day 9 AM
                </p>
              </div>
            </div>

            {/* Included / Not Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-2xl border border-green-100 p-5">
                <h3 className="font-extrabold text-sm mb-3 text-green-700 flex items-center gap-2">
                  <span>✅</span> What&apos;s Included
                </h3>
                <ul className="space-y-2">
                  {INCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-green-800">
                      <span className="flex-shrink-0 mt-0.5">✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
                <h3 className="font-extrabold text-sm mb-3 text-red-700 flex items-center gap-2">
                  <span>❌</span> Not Included
                </h3>
                <ul className="space-y-2">
                  {NOT_INCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-red-800">
                      <span className="flex-shrink-0 mt-0.5">✗</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notes + Pickup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Important Notes */}
            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6">
              <h3 className="font-extrabold text-base mb-4 text-amber-800 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Important Notes
              </h3>
              <ul className="space-y-3">
                {[
                  "No refund for extra fuel left in tank at return",
                  "Vehicle cannot be taken outside Goa without prior permission",
                  "Driver must be in good physical condition — no alcohol",
                  "All damages (dents, scratches, tyre) are chargeable",
                  "Minimum booking: 2 days",
                  "Late return charged at ₹200/hour",
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-amber-900">
                    <span className="flex-shrink-0 mt-0.5">⚠️</span> {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pickup + Process */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-base mb-4 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                <span className="text-xl">📍</span> Pickup Locations
              </h3>
              <ul className="space-y-2.5 mb-5">
                {PICKUP_LOCATIONS.map((loc) => (
                  <li key={loc} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--brand-success)" }} />
                    {loc}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
                🚗 Home delivery available in North Goa for ₹200 extra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
