"use client";

import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/constants";
import { selfDriveVehicles, taxiRates, airportPrices, type TaxiKey, type Airport } from "@/lib/data";

const TABS = ["Per Km", "Packages", "Airport", "Self-Drive"] as const;
type Tab = typeof TABS[number];

/* ── Pricing data — all numbers come from src/lib/data.ts ─────────── */

const TAXI_ROWS: { key: TaxiKey; vehicle: string; short: string; seats: number }[] = [
  { key: "dzire",  vehicle: "Maruti Dzire",              short: "Maruti Dzire",         seats: 4 },
  { key: "ertiga", vehicle: "Maruti Ertiga",             short: "Maruti Ertiga",        seats: 6 },
  { key: "innova", vehicle: "Toyota Innova Crysta",      short: "Toyota Innova Crysta", seats: 7 },
  { key: "t12",    vehicle: "Tempo Traveller 12 Seater", short: "Tempo Traveller 12",   seats: 12 },
  { key: "t14",    vehicle: "Tempo Traveller 14 Seater", short: "Tempo Traveller 14",   seats: 14 },
  { key: "t20",    vehicle: "Tempo Traveller 20 Seater", short: "Tempo Traveller 20",   seats: 20 },
  { key: "urb",    vehicle: "Force Urbania 17 Seater",   short: "Force Urbania 17",     seats: 17 },
];

const PER_KM = TAXI_ROWS.map((r) => ({ vehicle: r.vehicle, seats: r.seats, rate: taxiRates[r.key].perKm, minKm: taxiRates[r.key].minKm }));

const PACKAGES = TAXI_ROWS.map((r) => ({ vehicle: r.short, seats: r.seats, pkg8: taxiRates[r.key].pkg8, pkg12: taxiRates[r.key].pkg12 }));

const AIRPORT_ROUTE_LIST: [Airport, string][] = [
  ["Mopa Airport", "Calangute"],
  ["Mopa Airport", "Panjim"],
  ["Mopa Airport", "Anjuna"],
  ["Mopa Airport", "Margao"],
  ["Dabolim Airport", "Calangute"],
  ["Dabolim Airport", "Panjim"],
  ["Dabolim Airport", "Margao"],
  ["Dabolim Airport", "Palolem"],
];

const AIRPORT_RATES = AIRPORT_ROUTE_LIST.map(([airport, place]) => ({ route: `${airport} → ${place}`, ...airportPrices(airport, place) }));

const range = (nums: number[]) => `${Math.min(...nums)}–${Math.max(...nums)}`;
const KM_RANGE = range(TAXI_ROWS.map((r) => taxiRates[r.key].perKm));
const HOUR_RANGE = range(TAXI_ROWS.map((r) => taxiRates[r.key].perHour));
const MIN_KM_RANGE = range(TAXI_ROWS.map((r) => taxiRates[r.key].minKm));

const NOTES = [
  "Toll charges are extra (paid by passenger at the toll plaza).",
  "Parking charges extra if applicable.",
  "Driver food & accommodation for outstation trips: ₹500/day.",
  "Night charges (10 PM – 6 AM) for outstation: ₹500 extra.",
  "Waiting charges beyond 30 min: ₹150/hour.",
  `Per km rates (₹${KM_RANGE}/km) include driver allowance for local trips.`,
  `Minimum km billing applies for outstation (${MIN_KM_RANGE} km).`,
  "All prices are one-way unless specified as round-trip.",
];

const SELF_DRIVE_NOTES = [
  "Minimum 2-day booking. Pickup and drop: 9 AM.",
  "Fuel not included — receive full tank, return full tank.",
  "Valid driving licence (original) + Aadhaar/Passport required.",
  "Refundable deposit collected at pickup, returned on drop.",
  "Weekly & monthly rates available — WhatsApp for quote.",
];

const SEGMENT_LABEL: Record<string, string> = {
  economy: "Economy",
  sedan: "Sedan",
  suv: "SUV",
  family: "7-Seater / Family",
  adventure: "Adventure 4×4",
};

const SEGMENT_ORDER = ["economy", "sedan", "suv", "family", "adventure"];

const theadClass = "bg-secondary/60 text-xs font-semibold text-muted-foreground uppercase tracking-wide";
const tdClass = "px-4 py-3.5 text-sm";
const priceClass = "px-4 py-3.5 text-sm font-semibold text-right";

/* ── Price cell helper ───────────────────────────────────────────── */
function Price({ v, accent = false }: { v: number; accent?: boolean }) {
  return (
    <td className={priceClass} style={{ color: accent ? "var(--brand-accent)" : "var(--brand-primary)" }}>
      ₹{v.toLocaleString("en-IN")}
    </td>
  );
}

export default function PricingContent() {
  const [tab, setTab] = useState<Tab>("Per Km");

  /* Group self-drive vehicles by segment, deduplicate by base model */
  const sdBySegment = SEGMENT_ORDER.map((seg) => ({
    segment: seg,
    vehicles: selfDriveVehicles.filter((v) => v.segment === seg),
  })).filter((g) => g.vehicles.length > 0);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-secondary rounded-2xl w-fit">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                tab === t
                  ? { background: "var(--brand-primary)", color: "white", boxShadow: "0 2px 10px rgba(26,54,93,0.3)" }
                  : { color: "var(--brand-primary)" }
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Per Km ─────────────────────────────────────────────── */}
        {tab === "Per Km" && (
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border">
              <h2 className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Per Kilometre Rates
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Outstation and long-distance trips. Minimum km billing applies.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={theadClass}>
                    <th className="text-left px-4 py-3">Vehicle</th>
                    <th className="text-center px-4 py-3">Seats</th>
                    <th className="text-right px-4 py-3">Rate / km</th>
                    <th className="text-right px-4 py-3">Min km</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {PER_KM.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/20 transition-colors">
                      <td className={tdClass + " font-medium"}>{row.vehicle}</td>
                      <td className={tdClass + " text-center text-muted-foreground"}>{row.seats}</td>
                      <td className={priceClass} style={{ color: "var(--brand-accent)" }}>₹{row.rate}/km</td>
                      <td className={tdClass + " text-right text-muted-foreground"}>{row.minKm} km</td>
                      <td className="px-4 py-3 text-right">
                        <a href={buildWhatsAppUrl({ vehicle: row.vehicle })} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="text-xs" style={{ background: "var(--brand-primary)", color: "white" }}>
                            Book <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Packages ───────────────────────────────────────────── */}
        {tab === "Packages" && (
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border">
              <h2 className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Local Hourly Packages
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Ideal for sightseeing and full-day local trips.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={theadClass}>
                    <th className="text-left px-4 py-3">Vehicle</th>
                    <th className="text-center px-4 py-3">Seats</th>
                    <th className="text-right px-4 py-3">8hr / 80km</th>
                    <th className="text-right px-4 py-3">12hr / 120km</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGES.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/20 transition-colors">
                      <td className={tdClass + " font-medium"}>{row.vehicle}</td>
                      <td className={tdClass + " text-center text-muted-foreground"}>{row.seats}</td>
                      <td className={priceClass} style={{ color: "var(--brand-primary)" }}>₹{row.pkg8.toLocaleString()}</td>
                      <td className={priceClass} style={{ color: "var(--brand-primary)" }}>₹{row.pkg12.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right">
                        <a href={buildWhatsAppUrl({ vehicle: row.vehicle, service: "Hourly Package" })} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="text-xs" style={{ background: "var(--brand-primary)", color: "white" }}>Book</Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-secondary/20 text-xs text-muted-foreground">
              Extra km beyond package: ₹{KM_RANGE}/km depending on vehicle. Extra hour: ₹{HOUR_RANGE}/hr.
            </div>
          </div>
        )}

        {/* ── Airport ────────────────────────────────────────────── */}
        {tab === "Airport" && (
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border">
              <h2 className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Airport Transfer Rates
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Fixed one-way fares. Flight tracking included — no waiting charges for delays.</p>
            </div>

            {/* Small / Medium vehicles */}
            <div className="px-5 pt-4 pb-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">🚖 Small &amp; Medium</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={theadClass}>
                    <th className="text-left px-4 py-3 min-w-[220px]">Route</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Dzire (4)</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Ertiga (6)</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Innova (7)</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {AIRPORT_RATES.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/20 transition-colors">
                      <td className={tdClass + " font-medium whitespace-nowrap"}>{row.route}</td>
                      <Price v={row.dzire} />
                      <Price v={row.ertiga} />
                      <Price v={row.innova} />
                      <td className="px-4 py-3 text-right">
                        <a
                          href={buildWhatsAppUrl({ service: "Airport Transfer", from: row.route.split("→")[0].trim(), to: row.route.split("→")[1].trim() })}
                          target="_blank" rel="noopener noreferrer"
                        >
                          <Button size="sm" className="text-xs" style={{ background: "var(--brand-primary)", color: "white" }}>Book</Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Large group vehicles */}
            <div className="px-5 pt-6 pb-1 border-t border-border mt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">🚐 Large Group Vehicles</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={theadClass}>
                    <th className="text-left px-4 py-3 min-w-[220px]">Route</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Tempo 12</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Tempo 14</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Tempo 20</th>
                    <th className="text-right px-4 py-3 whitespace-nowrap">Urbania 17</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {AIRPORT_RATES.map((row, i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/20 transition-colors">
                      <td className={tdClass + " font-medium whitespace-nowrap"}>{row.route}</td>
                      <Price v={row.t12} />
                      <Price v={row.t14} />
                      <Price v={row.t20} />
                      <Price v={row.urb} />
                      <td className="px-4 py-3 text-right">
                        <a
                          href={buildWhatsAppUrl({ service: "Airport Transfer", from: row.route.split("→")[0].trim(), to: row.route.split("→")[1].trim() })}
                          target="_blank" rel="noopener noreferrer"
                        >
                          <Button size="sm" className="text-xs" style={{ background: "var(--brand-primary)", color: "white" }}>Book</Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-secondary/20 text-xs text-muted-foreground">
              All rates are one-way, fixed price. Group vehicles require 24-hour advance booking.
            </div>
          </div>
        )}

        {/* ── Self-Drive ─────────────────────────────────────────── */}
        {tab === "Self-Drive" && (
          <div className="space-y-6">
            {sdBySegment.map(({ segment, vehicles }) => (
              <div key={segment} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-secondary/40 border-b border-border">
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--brand-primary)" }}>
                    {SEGMENT_LABEL[segment]}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={theadClass}>
                        <th className="text-left px-4 py-3 min-w-[180px]">Vehicle</th>
                        <th className="text-left px-4 py-3">Transmission</th>
                        <th className="text-center px-4 py-3">Seats</th>
                        <th className="text-right px-4 py-3">Per Day</th>
                        <th className="text-right px-4 py-3">Deposit</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicles.map((v) => {
                        const waMsg = `Hi ZipGoa! 🙏\n\nI want to rent *${v.name}*.\n\nPlease share price and availability for my dates.`;
                        const waUrl = `https://wa.me/917026889254?text=${encodeURIComponent(waMsg)}`;
                        return (
                          <tr key={v.id} className="border-t border-border hover:bg-secondary/20 transition-colors">
                            <td className={tdClass + " font-medium"}>
                              {v.name}
                              {v.isNewModel && (
                                <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ background: "#059669" }}>NEW</span>
                              )}
                            </td>
                            <td className={tdClass}>
                              <span
                                className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={v.transmission === "Manual"
                                  ? { background: "#1d4ed820", color: "#1d4ed8" }
                                  : { background: "#d9770620", color: "#d97706" }
                                }
                              >
                                {v.transmission === "Manual" ? "🔧" : "⚡"} {v.transmission}
                              </span>
                            </td>
                            <td className={tdClass + " text-center text-muted-foreground"}>{v.seats}</td>
                            <td className={priceClass} style={{ color: "var(--brand-accent)" }}>
                              ₹{v.pricePerDay.toLocaleString("en-IN")}/day
                            </td>
                            <td className={priceClass + " text-muted-foreground"}>
                              {v.deposit ? `₹${v.deposit.toLocaleString("en-IN")}` : "—"}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="text-xs" style={{ background: "#25d366", color: "white" }}>Book</Button>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* Self-drive notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">Self-Drive Rental Terms</p>
              <ul className="space-y-1.5">
                {SELF_DRIVE_NOTES.map((n, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-500" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── General Notes ───────────────────────────────────────── */}
        {tab !== "Self-Drive" && (
          <div className="mt-8 bg-white rounded-2xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
              <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Important Notes
              </h3>
            </div>
            <ul className="space-y-2">
              {NOTES.map((n, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-brand-accent" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
