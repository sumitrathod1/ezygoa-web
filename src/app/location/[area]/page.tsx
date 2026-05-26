import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, CheckCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import CTASection from "@/components/CTASection";
import { locations, vehicles } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/constants";

export async function generateStaticParams() {
  return locations.map((l) => ({ area: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: id } = await params;
  const loc = locations.find((l) => l.id === id);
  if (!loc) return { title: "Not Found" };
  return {
    title: `Taxi in ${loc.name}, Goa | ZipGoa`,
    description: `Book a reliable taxi in ${loc.name}, Goa. Airport transfers, sightseeing tours, local trips. Dzire from ₹${loc.routes[0]?.prices.dzire ?? 300}. Book via WhatsApp.`,
    keywords: [
      `taxi ${loc.name} Goa`,
      `cab service ${loc.name}`,
      `${loc.name} to airport taxi`,
      `taxi from ${loc.name}`,
      `${loc.name} sightseeing taxi`,
      "ZipGoa taxi",
    ],
    openGraph: {
      title: `Taxi Service in ${loc.name} | ZipGoa Goa`,
      description: `Reliable taxi in ${loc.name}. ${loc.shortDesc} Instant booking, fixed rates.`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: id } = await params;
  const loc = locations.find((l) => l.id === id);
  if (!loc) notFound();

  const taxiVehicles = vehicles.filter((v) => v.category === "taxi");
  const bookingUrl = buildWhatsAppUrl({ service: `Taxi from ${loc.name}`, from: loc.name });

  const areaLabel = loc.area === "north" ? "North Goa" : loc.area === "south" ? "South Goa" : "Central Goa";

  return (
    <PageWrapper>
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #1a365d 0%, #2a5298 60%, #1e3a5f 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-4">{loc.emoji}</div>
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
              style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
            >
              {areaLabel}
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Taxi Service in {loc.name}
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book reliable taxi from / to {loc.name}. Airport transfers, sightseeing tours, outstation trips — confirmed in 5 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {loc.famous.map((tag) => (
                <span key={tag} className="bg-white/15 border border-white/25 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 px-6 font-bold gap-2" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>
                  Book Taxi from {loc.name}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* About */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
                About {loc.name}
              </p>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                {loc.shortDesc}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{loc.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Best Time to Visit", value: loc.bestTimeToVisit, emoji: "🌤️" },
                { label: "Peak Season", value: loc.peakSeason, emoji: "🌟" },
                { label: "Off Season", value: loc.offSeason, emoji: "🌧️" },
                { label: "Area", value: areaLabel, emoji: "📍" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-border shadow-sm p-5 text-center">
                  <div className="text-2xl mb-2">{s.emoji}</div>
                  <p className="font-bold text-sm mb-0.5" style={{ color: "var(--brand-primary)" }}>{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Route Price Table */}
          <div>
            <div className="text-center mb-8">
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
                Taxi Fares
              </p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                From {loc.name} to Popular Places
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div
                className="grid grid-cols-6 gap-0 px-5 py-3 text-xs font-bold uppercase tracking-wider"
                style={{ background: "var(--brand-primary)", color: "white" }}
              >
                <div className="col-span-2">Destination</div>
                <div className="text-center">Distance</div>
                <div className="text-center">Dzire</div>
                <div className="text-center">Ertiga</div>
                <div className="text-center">Innova</div>
              </div>
              {loc.routes.map((route, i) => (
                <div
                  key={route.to}
                  className={`grid grid-cols-6 gap-0 px-5 py-4 items-center ${i % 2 === 0 ? "bg-secondary/20" : "bg-white"}`}
                >
                  <div className="col-span-2">
                    <p className="font-semibold text-sm">{route.to}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />{route.time}
                    </p>
                  </div>
                  <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />{route.distance} km
                  </div>
                  <div className="text-center">
                    <a
                      href={buildWhatsAppUrl({ service: "Taxi", from: loc.name, to: route.to })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm hover:underline"
                      style={{ color: "var(--brand-primary)" }}
                    >
                      ₹{route.prices.dzire.toLocaleString()}
                    </a>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-sm text-muted-foreground">
                      ₹{route.prices.ertiga.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-sm text-muted-foreground">
                      ₹{route.prices.innova.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Rates are one-way and approximate. Final price confirmed via WhatsApp before booking.
            </p>
          </div>

          {/* Nearby Attractions + Vehicles side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Nearby Attractions */}
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Nearby Attractions
              </h2>
              <div className="space-y-3">
                {loc.nearbyAttractions.map((a) => (
                  <div key={a.name} className="bg-white rounded-xl border border-border shadow-sm p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}>
                        <MapPin className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{a.name}</p>
                        <p className="text-xs text-muted-foreground">{a.distance} · {a.time}</p>
                      </div>
                    </div>
                    {a.fare > 0 ? (
                      <a
                        href={buildWhatsAppUrl({ service: "Taxi", from: loc.name, to: a.name })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-sm hover:underline flex-shrink-0"
                        style={{ color: "var(--brand-accent)" }}
                      >
                        ₹{a.fare.toLocaleString()} →
                      </a>
                    ) : (
                      <span className="text-xs text-green-600 font-semibold">Walking distance</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Things to Do + Why Us */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <h3 className="font-bold text-base mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Things to Do in {loc.name}
                </h3>
                <ul className="space-y-2">
                  {loc.thingsToDo.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brand-accent)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6" style={{ background: "var(--brand-primary)" }}>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Why Book Taxi in {loc.name} with ZipGoa?
                </h3>
                <ul className="space-y-2 mt-3">
                  {[
                    `Local drivers who know ${loc.name} well`,
                    "Fixed transparent fares — no surprises",
                    "Pickup in under 30 minutes",
                    "No surge pricing at any hour",
                    "24/7 availability including late night",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Available Vehicles */}
          <div>
            <div className="text-center mb-8">
              <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
                Fleet Available
              </p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Vehicles Available in {loc.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {taxiVehicles.map((v) => (
                <div key={v.id} className="bg-white rounded-2xl border border-border shadow-sm card-hover overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}
                      >
                        <Car className="w-5 h-5" style={{ color: "var(--brand-primary)" }} />
                      </div>
                      <div>
                        <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>{v.name}</p>
                        <p className="text-xs text-muted-foreground">{v.capacity} seats · {v.type}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="bg-secondary/40 rounded-lg px-3 py-2">
                        <p className="text-muted-foreground">Per Km</p>
                        <p className="font-bold" style={{ color: "var(--brand-primary)" }}>₹{v.pricePerKm}/km</p>
                      </div>
                      <div className="bg-secondary/40 rounded-lg px-3 py-2">
                        <p className="text-muted-foreground">8hr Package</p>
                        <p className="font-bold" style={{ color: "var(--brand-primary)" }}>₹{v.packages?.["8hr80km"]?.toLocaleString()}</p>
                      </div>
                    </div>
                    <a
                      href={buildWhatsAppUrl({ service: `Taxi from ${loc.name}`, vehicle: v.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full text-xs font-bold h-9" style={{ background: "var(--brand-primary)", color: "white" }}>
                        Book {v.name}
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Big CTA */}
          <div
            className="rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, #1a365d 0%, #2a5298 100%)" }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
              Book Your Taxi from {loc.name}
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Instant confirmation via WhatsApp. Local drivers. Fixed rates. No surge pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 px-8 font-bold text-base" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>
                  Book on WhatsApp
                </Button>
              </a>
              <a href="/booking">
                <Button variant="outline" className="h-12 px-8 font-bold text-base border-white/40 text-white hover:bg-white/10">
                  Fill Booking Form
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
