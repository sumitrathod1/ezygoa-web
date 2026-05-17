import type { Metadata } from "next";
import { MapPin, Car, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { buildWhatsAppUrl } from "@/lib/constants";
import { BookingButton } from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Outstation Taxi from Goa | Mumbai, Pune, Bangalore | EzyGoa",
  description:
    "Outstation cab service from Goa. Travel to Mumbai, Pune, Bangalore, Hampi, Gokarna, Mangalore. Comfortable AC vehicles, experienced drivers, fixed rates.",
  keywords: ["outstation taxi Goa", "Goa to Mumbai taxi", "Goa to Pune taxi", "Goa to Bangalore", "outstation cab Goa"],
  openGraph: {
    title: "Outstation Taxi from Goa | EzyGoa",
    description: "Goa to Mumbai, Pune, Bangalore, Hampi, Gokarna — comfortable outstation cab service.",
  },
};

const ROUTES = [
  { from: "Goa", to: "Mumbai",    distance: "~580 km", duration: "10–11 hrs", dzire: 9000,  ertiga: 11000, innova: 14000, t12: 15000, t14: 17000, t20: 22000, urb: 27000, highlight: "Most popular" },
  { from: "Goa", to: "Pune",      distance: "~450 km", duration: "8–9 hrs",   dzire: 7500,  ertiga: 9000,  innova: 12000, t12: 12000, t14: 14000, t20: 18000, urb: 22000, highlight: "" },
  { from: "Goa", to: "Bangalore", distance: "~570 km", duration: "9–10 hrs",  dzire: 9000,  ertiga: 11000, innova: 14000, t12: 15000, t14: 17000, t20: 22000, urb: 27000, highlight: "" },
  { from: "Goa", to: "Hampi",     distance: "~370 km", duration: "6–7 hrs",   dzire: 6000,  ertiga: 7500,  innova: 10000, t12: 10000, t14: 12000, t20: 15000, urb: 19000, highlight: "Heritage trip" },
  { from: "Goa", to: "Gokarna",   distance: "~150 km", duration: "3 hrs",     dzire: 2800,  ertiga: 3500,  innova: 4500,  t12: 4500,  t14: 5000,  t20: 6500,  urb: 8000,  highlight: "Short trip" },
  { from: "Goa", to: "Mangalore", distance: "~360 km", duration: "6–7 hrs",   dzire: 6000,  ertiga: 7500,  innova: 10000, t12: 9500,  t14: 11000, t20: 14000, urb: 18000, highlight: "" },
  { from: "Goa", to: "Kolhapur",  distance: "~230 km", duration: "4–5 hrs",   dzire: 4000,  ertiga: 5000,  innova: 6500,  t12: 6500,  t14: 7500,  t20: 9500,  urb: 12000, highlight: "" },
  { from: "Goa", to: "Hubli",     distance: "~180 km", duration: "3.5 hrs",   dzire: 3200,  ertiga: 4000,  innova: 5200,  t12: 5000,  t14: 6000,  t20: 7500,  urb: 9500,  highlight: "" },
];

const CHARGES = [
  { label: "Per km — Dzire (4 seats)",        value: "₹14/km" },
  { label: "Per km — Ertiga (6 seats)",        value: "₹18/km" },
  { label: "Per km — Innova Crysta (7 seats)", value: "₹22/km" },
  { label: "Per km — Tempo Traveller 12",      value: "₹28/km" },
  { label: "Per km — Tempo Traveller 14",      value: "₹30/km" },
  { label: "Per km — Tempo Traveller 20",      value: "₹30/km" },
  { label: "Per km — Force Urbania 17",        value: "₹35/km" },
  { label: "Driver food allowance",            value: "₹500/day" },
  { label: "Night halt allowance",             value: "₹500/night" },
  { label: "Toll charges",                     value: "Extra (paid at toll)" },
  { label: "Waiting charges (after 30 min)",   value: "₹150/hr" },
];

export default function OutstationPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Outstation Service"
        title="Outstation Trips"
        titleAccent="from Goa"
        subtitle="Travel beyond Goa in comfort. Mumbai, Pune, Bangalore, Hampi, Gokarna and more — experienced drivers, AC vehicles, fixed rates."
        breadcrumbs={[{ label: "Outstation" }]}
      />

      {/* Routes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>Popular Routes</p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Outstation Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {ROUTES.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border shadow-sm card-hover overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                          {r.from} → {r.to}
                        </h3>
                        {r.highlight && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>
                            {r.highlight}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{r.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{r.duration}</span>
                      </div>
                    </div>
                    <Car className="w-8 h-8 opacity-20" style={{ color: "var(--brand-primary)" }} />
                  </div>

                  {/* Small & Medium */}
                  <div className="mb-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">🚖 Small &amp; Medium</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Dzire (4)", price: r.dzire, perKm: 14 },
                        { label: "Ertiga (6)", price: r.ertiga, perKm: 18 },
                        { label: "Innova (7)", price: r.innova, perKm: 22 },
                      ].map(({ label, price, perKm }) => (
                        <div key={label} className="text-center p-2 bg-secondary/50 rounded-xl">
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>₹{price.toLocaleString()}</p>
                          <p className="text-[10px] text-muted-foreground">₹{perKm}/km</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Group Vehicles */}
                  <div className="mb-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">🚐 Group Vehicles</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: "Tempo 12", price: r.t12, perKm: 28 },
                        { label: "Tempo 14", price: r.t14, perKm: 30 },
                        { label: "Tempo 20", price: r.t20, perKm: 30 },
                        { label: "Urbania 17", price: r.urb, perKm: 35 },
                      ].map(({ label, price, perKm }) => (
                        <div key={label} className="text-center p-2 bg-blue-50 rounded-xl border border-blue-100">
                          <p className="text-[10px] text-muted-foreground leading-tight">{label}</p>
                          <p className="font-bold text-xs mt-0.5" style={{ color: "var(--brand-primary)" }}>₹{price.toLocaleString()}</p>
                          <p className="text-[10px] text-muted-foreground">₹{perKm}/km</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <BookingButton
                    label="Book This Route"
                    modalTitle={`Outstation: ${r.from} → ${r.to}`}
                    service="Outstation Trip"
                    from={r.from}
                    to={r.to}
                    className="w-full text-sm gap-1.5"
                    style={{ background: "var(--brand-primary)", color: "white" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Charges breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <Info className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Additional Charges
                </h3>
              </div>
              <div className="space-y-3">
                {CHARGES.map((c) => (
                  <div key={c.label} className="flex justify-between items-center text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{c.label}</span>
                    <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>{c.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6" style={{ background: "var(--brand-primary)" }}>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Custom Destination?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Don&apos;t see your destination? We go anywhere in India. WhatsApp us with your route and we&apos;ll share the best rate immediately.
                </p>
                <a
                  href={buildWhatsAppUrl({ service: "Outstation Trip — Custom Route" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white/15 hover:bg-white/25 text-white border-0 gap-2 font-semibold">
                    Get Custom Quote
                  </Button>
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  Why Book Outstation with EzyGoa?
                </h3>
                <ul className="space-y-2">
                  {[
                    "Experienced long-distance drivers",
                    "Regular breaks every 2–3 hours",
                    "Well-maintained highway-ready vehicles",
                    "Transparent pricing before you confirm",
                    "Real-time trip tracking option",
                    "On-call support throughout journey",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
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
