import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Phone, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import { selfDriveVehicles } from "@/lib/data";
import { BUSINESS } from "@/lib/constants";
import type { SelfDriveVehicle } from "@/types";

export async function generateStaticParams() {
  return selfDriveVehicles.map((v) => ({ vehicle: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vehicle: string }>;
}): Promise<Metadata> {
  const { vehicle: id } = await params;
  const v = selfDriveVehicles.find((v) => v.id === id);
  if (!v) return { title: "Not Found" };

  const baseName = v.name.replace(/\s*\(.*?\)\s*/g, "").trim();
  return {
    title: `Rent ${baseName} in Goa | ${v.transmission} ${v.type} | ₹${v.pricePerDay}/day | ZipGoa`,
    description: `Rent ${v.name} in Goa starting ₹${v.pricePerDay}/day. ${v.isNewModel ? "New 2024/25 model." : ""} ${v.transmission} transmission, ${v.fuelType}, ${v.seats} seats. Insured, sanitised, 24/7 support. Book now!`,
    keywords: [
      `${baseName} rental Goa`,
      `rent ${baseName} Goa`,
      `self drive ${baseName} Goa`,
      `${v.type} rental Goa`,
      `${v.transmission} car rental Goa`,
      "self drive car Goa",
      "ZipGoa self drive",
    ],
    openGraph: {
      title: `Rent ${baseName} in Goa | ${v.transmission} | ZipGoa`,
      description: `${v.name} — ₹${v.pricePerDay}/day. Insured, new model, instant booking via WhatsApp.`,
    },
  };
}

const SEGMENT_THEME: Record<string, { gradient: string; accent: string }> = {
  economy:   { gradient: "linear-gradient(135deg,#1e3a5f 0%,#2d6a9f 100%)", accent: "#3b82f6" },
  sedan:     { gradient: "linear-gradient(135deg,#2d1b69 0%,#5b21b6 100%)", accent: "#7c3aed" },
  suv:       { gradient: "linear-gradient(135deg,#7c1d10 0%,#c2410c 100%)", accent: "#ea580c" },
  family:    { gradient: "linear-gradient(135deg,#064e3b 0%,#0d9488 100%)", accent: "#0d9488" },
  adventure: { gradient: "linear-gradient(135deg,#451a03 0%,#92400e 100%)", accent: "#b45309" },
};

const SEGMENT_EMOJI: Record<string, string> = {
  economy: "🚗", sedan: "🚙", suv: "🚘", family: "👨‍👩‍👧", adventure: "🏔️",
};

function buildSpecs(v: SelfDriveVehicle): Record<string, string> {
  return {
    "Vehicle Type": v.type,
    "Seating Capacity": `${v.seats} Passengers`,
    "Doors": `${v.doors} Doors`,
    "Transmission": `${v.transmission}`,
    "Fuel Type": v.fuelType,
    "Mileage": v.mileage,
    "Model": v.isNewModel ? "2024/25 New Model" : "Current Model",
    "Category": v.segment.charAt(0).toUpperCase() + v.segment.slice(1),
  };
}

function buildDescription(v: SelfDriveVehicle): string[] {
  const segDesc: Record<string, string> = {
    economy: "ideal for solo travellers and couples who want affordable yet comfortable transport across Goa's beaches and towns",
    sedan: "perfect for families who need extra boot space for luggage while enjoying a smooth, comfortable ride",
    suv: "perfect for those who want elevated seating, modern features, and a premium driving experience in Goa",
    family: "ideal for families and groups of up to 7 who need ample space and a comfortable journey across Goa",
    adventure: "built for the adventurous soul who wants to explore Goa's off-road trails, beaches, and countryside in style",
  };

  const p1 = `The ${v.name} is ${segDesc[v.segment] ?? "a great choice for exploring Goa"}. With a ${v.transmission.toLowerCase()} gearbox and ${v.fuelType.toLowerCase()} engine delivering ${v.mileage}, this car offers the right balance of efficiency and comfort for Goa's roads.`;

  const featureStr = v.features && v.features.length > 0
    ? ` Key highlights include: ${v.features.join(", ")}.`
    : "";

  const p2 = `Goa's diverse landscape — from the beach roads of North Goa to the winding ghats of the hinterland — calls for a reliable, well-maintained vehicle.${featureStr} ZipGoa prepares every rental with a full service, sanitisation, and a complete fuel tank so you're ready to explore the moment you turn the key.`;

  const p3 = `Whether you're planning a sunrise drive to Arambol, an afternoon at Dudhsagar Falls, or a leisurely tour of Old Goa's heritage churches, the ${v.name} gives you the freedom to explore at your own pace, on your own schedule, without the constraints of a pre-booked itinerary.`;

  return [p1, p2, p3];
}

const INCLUDED = [
  "24/7 Roadside assistance",
  "Comprehensive vehicle insurance",
  "Sanitized & inspected vehicle",
  "Full tank on delivery",
  "Unlimited km within Goa",
];

const NOT_INCLUDED = [
  "Fuel (fill & return full)",
  "Toll charges",
  "Parking fees",
  "Traffic fines",
  "Damage beyond normal wear",
];

const REQUIREMENTS = [
  "Valid driving licence (original)",
  "Age 21+ years",
  "Aadhaar card or passport",
  "Security deposit (refundable)",
];

const GENERIC_FAQ = [
  { q: "What is the minimum rental period?", a: "Minimum rental is 2 days. Rental runs from 9 AM to 9 AM the next day, so a 2-day rental covers 48 hours." },
  { q: "Is fuel included in the rental price?", a: "No. The vehicle is delivered with a full tank — you return it full. You cover all fuel costs during your rental." },
  { q: "Can I drive outside Goa?", a: "Vehicles are only permitted within Goa. If you need inter-state travel, please contact us in advance for special arrangements." },
  { q: "What happens if the car breaks down?", a: "Call our 24/7 support line immediately. We'll send roadside assistance or a replacement vehicle at no extra cost for mechanical failures." },
  { q: "Is the security deposit refundable?", a: "Yes, 100% refundable provided the vehicle is returned in the same condition, on time, and with a full fuel tank." },
];

export default async function SelfDriveVehiclePage({
  params,
}: {
  params: Promise<{ vehicle: string }>;
}) {
  const { vehicle: id } = await params;
  const v = selfDriveVehicles.find((v) => v.id === id);
  if (!v) notFound();

  const theme = SEGMENT_THEME[v.segment] ?? SEGMENT_THEME.economy;
  const emoji = SEGMENT_EMOJI[v.segment] ?? "🚗";
  const specs = buildSpecs(v);
  const description = buildDescription(v);

  const deposit = v.deposit ?? v.pricePerDay * 3;
  const weeklyRate = v.weeklyRate ?? Math.round(v.pricePerDay * 0.9);
  const monthlyRate = v.monthlyRate ?? Math.round(v.pricePerDay * 0.75);

  const waMsg = `Hi ZipGoa! 🙏\n\nI want to rent *${v.name}*.\n\nPlease share price and availability for my dates.`;
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(waMsg)}`;

  const related = selfDriveVehicles
    .filter((r) => r.id !== v.id && r.segment === v.segment)
    .slice(0, 3)
    .concat(
      selfDriveVehicles
        .filter((r) => r.id !== v.id && r.segment !== v.segment)
        .slice(0, Math.max(0, 3 - selfDriveVehicles.filter((r) => r.id !== v.id && r.segment === v.segment).slice(0, 3).length))
    );

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: v.name,
    description: description[0],
    offers: {
      "@type": "Offer",
      price: v.pricePerDay,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "ZipGoa Taxi Services" },
    },
  };

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />

      {/* ── Hero ── */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: theme.gradient }}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden>
          <span className="absolute text-[20rem] top-1/2 right-0 -translate-y-1/2 -translate-x-1/4">{emoji}</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/self-drive" className="hover:text-white transition-colors">Self Drive</Link>
                <span>›</span>
                <span className="text-white/80">{v.name}</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  Self-Drive · {v.type}
                </span>
                {v.isNewModel && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#10b981", color: "white" }}>
                    ✨ New Model
                  </span>
                )}
                {v.isPremium && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>
                    ⭐ Premium
                  </span>
                )}
              </div>

              <h1
                className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {v.name}
              </h1>
              <p className="text-lg text-white/70 mb-8">
                {v.transmission} · {v.fuelType} · {v.seats} Seats · {v.mileage}
              </p>

              {/* Rate pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Daily Rate",      value: `₹${v.pricePerDay.toLocaleString("en-IN")}/day` },
                  { label: "Weekly (10% off)", value: `₹${weeklyRate.toLocaleString("en-IN")}/day` },
                  { label: "Deposit",          value: `₹${deposit.toLocaleString("en-IN")} refundable` },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl px-4 py-3 text-center border"
                    style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    <p className="text-xs text-white/60 mb-0.5">{label}</p>
                    <p className="font-bold text-white text-sm">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="h-12 px-6 font-bold gap-2 shadow-lg" style={{ background: "#25d366", color: "white" }}>
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

            {/* Visual */}
            <div className="flex items-center justify-center">
              {v.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={v.image}
                  alt={v.name}
                  className="rounded-2xl shadow-2xl max-h-72 object-cover"
                />
              ) : (
                <div
                  className="w-64 h-64 rounded-3xl flex flex-col items-center justify-center shadow-2xl"
                  style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)" }}
                >
                  <span className="text-8xl filter drop-shadow-2xl mb-2">{emoji}</span>
                  <span className="text-white/60 text-sm font-medium">{v.type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Left: main content ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* About */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  About the {v.name}
                </h2>
                <div className="space-y-4">
                  {description.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Vehicle Specifications
                </h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  {Object.entries(specs).map(([key, val], i) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    >
                      <span className="font-medium text-gray-500">{key}</span>
                      <span className="font-bold" style={{ color: "var(--brand-primary)" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              {v.features && v.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Key Features
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {v.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3"
                      >
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Rental Requirements
                </h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <ul className="space-y-3">
                    {REQUIREMENTS.map((req) => (
                      <li key={req} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Included / Not Included */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-green-50 rounded-2xl border border-green-100 p-5">
                  <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" /> What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-green-800">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
                  <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-red-700">
                    <XCircle className="w-4 h-4" /> Not Included
                  </h3>
                  <ul className="space-y-2">
                    {NOT_INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-red-800">
                        <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {GENERIC_FAQ.map((item, i) => (
                    <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                      <summary
                        className="px-5 py-4 cursor-pointer font-semibold text-sm list-none flex items-center justify-between"
                        style={{ color: "var(--brand-primary)" }}
                      >
                        {item.q}
                        <span className="text-gray-400 ml-2 flex-shrink-0 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <div className="px-5 pb-4">
                        <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related vehicles */}
              {related.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Similar Vehicles
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {related.map((r) => {
                      const rEmoji = SEGMENT_EMOJI[r.segment] ?? "🚗";
                      return (
                        <Link
                          key={r.id}
                          href={`/self-drive/${r.id}`}
                          className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 shadow-sm p-5 hover:shadow-md transition-all block group"
                        >
                          <div className="text-4xl mb-3">{rEmoji}</div>
                          <p className="font-bold text-sm mb-1 group-hover:text-blue-600 transition-colors" style={{ color: "var(--brand-primary)" }}>
                            {r.name}
                          </p>
                          <p className="text-xs text-gray-500 mb-2">{r.type} · {r.seats} seats · {r.transmission}</p>
                          <p className="text-base font-extrabold" style={{ color: "var(--brand-accent)" }}>
                            ₹{r.pricePerDay.toLocaleString("en-IN")}/day
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">
              {/* Rates card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
                <div className="p-4 text-white" style={{ background: theme.gradient }}>
                  <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)" }}>Rental Rates</h3>
                  <p className="text-white/70 text-xs mt-0.5">Minimum 2-day booking · 9 AM to 9 AM</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: "Daily Rate",          value: `₹${v.pricePerDay.toLocaleString("en-IN")}/day` },
                    { label: "Weekly (10% off)",     value: `₹${weeklyRate.toLocaleString("en-IN")}/day` },
                    { label: "Monthly (25% off)",    value: `₹${monthlyRate.toLocaleString("en-IN")}/day` },
                    { label: "Security Deposit",     value: `₹${deposit.toLocaleString("en-IN")} (refundable)` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between px-4 py-3 text-sm">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-bold" style={{ color: "var(--brand-primary)" }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 space-y-2">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full font-bold gap-2" style={{ background: "#25d366", color: "white" }}>
                      <MessageCircle className="w-4 h-4" />
                      Book via WhatsApp
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

              {/* Browse all */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3" style={{ color: "var(--brand-primary)" }}>Browse All Cars</h3>
                <Link
                  href="/self-drive"
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-sm font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  <span>View All {selfDriveVehicles.length} Vehicles</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
