import type { Metadata } from "next";
import { Plane, Clock, Bell, Shield, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BookingButton } from "@/components/BookingButton";
import { airportRoute, type Airport } from "@/lib/data";

export const metadata: Metadata = {
  title: "Airport Taxi Goa | Mopa & Dabolim Airport Transfer",
  description:
    "Reliable airport taxi in Goa. Pickup and drop service from Mopa (GOX) and Dabolim (GOI) airports. Flight tracking, no waiting charges. Book now!",
  keywords: ["Mopa airport taxi", "Dabolim airport taxi", "Goa airport transfer", "GOX taxi", "GOI taxi Goa"],
  openGraph: {
    title: "Airport Taxi Goa | ZipGoa",
    description: "Reliable airport transfers from Mopa & Dabolim. Flight tracking included. Book now!",
  },
};

// Fares, distances and durations come from src/lib/data.ts (single source of truth).
function airportRows(airport: Airport, rows: { to: string; place: string }[]) {
  return rows.map(({ to, place }) => {
    const r = airportRoute(airport, place);
    return { to, distance: `${r.distance} km`, duration: r.duration, ...r.prices };
  });
}

const MOPA_ROUTES = airportRows("Mopa Airport", [
  { to: "Calangute / Baga", place: "Calangute" },
  { to: "Panjim (Panaji)", place: "Panjim" },
  { to: "Anjuna / Vagator", place: "Anjuna" },
  { to: "Mapusa", place: "Mapusa" },
  { to: "Margao (South Goa)", place: "Margao" },
]);

const DABOLIM_ROUTES = airportRows("Dabolim Airport", [
  { to: "Calangute / Baga", place: "Calangute" },
  { to: "Panjim (Panaji)", place: "Panjim" },
  { to: "Margao / Colva", place: "Margao" },
  { to: "Palolem Beach", place: "Palolem" },
  { to: "Anjuna / Vagator", place: "Anjuna" },
]);

const WHY_AIRPORT = [
  { icon: Bell, title: "Flight Tracking", desc: "We track your flight in real-time. No extra charge for delays — driver waits." },
  { icon: Clock, title: "On-Time Pickup", desc: "Your driver aims to arrive 15 minutes before the scheduled pickup." },
  { icon: Shield, title: "Fixed Fares", desc: "Price confirmed before booking. All extra charges (tolls, parking, night charges) listed upfront." },
  { icon: Users, title: "Meet & Greet", desc: "Driver with name board inside the arrival hall. Easy to spot, stress-free." },
];

function RouteTable({ routes, airportName }: { routes: typeof MOPA_ROUTES; airportName: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      <div className="p-5 border-b border-border">
        <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          {airportName} Routes
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground">Destination</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground">Dist / Time</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground">Dzire</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground">Ertiga</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground">Innova</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-blue-600">Tempo 12</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-blue-600">Tempo 14</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-blue-600">Tempo 20</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-blue-600">Urbania 17</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r, i) => (
              <tr key={i} className="border-t border-border hover:bg-secondary/20 transition-colors">
                <td className="px-4 py-3 font-medium">{r.to}</td>
                <td className="px-4 py-3 text-muted-foreground text-xs">
                  {r.distance} · {r.duration}
                </td>
                <td className="px-4 py-3 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>
                  ₹{r.dzire.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>
                  ₹{r.ertiga.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>
                  ₹{r.innova.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-blue-700">₹{r.t12.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-semibold text-blue-700">₹{r.t14.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-semibold text-blue-700">₹{r.t20.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-semibold text-blue-700">₹{r.urb.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <BookingButton
                    label="Book"
                    modalTitle={`Airport Transfer · ${airportName} → ${r.to}`}
                    service="Airport Transfer"
                    from={airportName.split(" ")[0] + " Airport"}
                    to={r.to}
                    size="sm"
                    className="text-xs px-3"
                    style={{ background: "var(--brand-primary)", color: "white" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AirportTaxiPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Airport Transfers"
        title="Goa Airport"
        titleAccent="Taxi Service"
        subtitle="Reliable, punctual airport transfers from Mopa (GOX) and Dabolim (GOI). Flight tracking included. Fixed prices, no waiting stress."
        breadcrumbs={[{ label: "Airport Taxi" }]}
      />

      {/* Airport Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {[
              {
                code: "GOX",
                name: "Mopa International Airport",
                fullName: "Manohar International Airport",
                location: "Pernem, North Goa",
                note: "New airport serving North Goa. Opened 2022.",
                emoji: "✈️",
              },
              {
                code: "GOI",
                name: "Dabolim Airport",
                fullName: "Goa International Airport",
                location: "Vasco da Gama, South Goa",
                note: "The original Goa airport, near Vasco da Gama.",
                emoji: "🛩️",
              },
            ].map((airport) => (
              <div
                key={airport.code}
                className="rounded-2xl p-6 flex items-start gap-4 border border-border bg-white shadow-sm card-hover"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}
                >
                  {airport.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
                    >
                      {airport.code}
                    </span>
                    <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                      {airport.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{airport.fullName}</p>
                  <p className="text-xs text-muted-foreground mb-3">{airport.location} · {airport.note}</p>
                  <BookingButton
                    label={<><Plane className="w-3.5 h-3.5 inline mr-1" /> Book Transfer</>}
                    modalTitle={`Airport Transfer · ${airport.name}`}
                    service={`Airport Transfer from ${airport.name}`}
                    size="sm"
                    className="gap-1.5 text-xs font-semibold"
                    style={{ background: "var(--brand-primary)", color: "white" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Route Tables */}
          <div className="space-y-6">
            <RouteTable routes={MOPA_ROUTES} airportName="Mopa (GOX)" />
            <RouteTable routes={DABOLIM_ROUTES} airportName="Dabolim (GOI)" />
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            * All prices are one-way, per vehicle (not per person). Toll charges extra.
          </p>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Why Book Airport Taxi with Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_AIRPORT.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-border shadow-sm card-hover text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.265 0.078 254 / 0.08)" }}>
                  <Icon className="w-6 h-6" style={{ color: "var(--brand-primary)" }} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
