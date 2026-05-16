"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VEHICLES = [
  { id: "dzire", label: "Dzire",     seats: "4",  group: false },
  { id: "ertiga", label: "Ertiga",   seats: "6",  group: false },
  { id: "innova", label: "Innova",   seats: "7",  group: false },
  { id: "t12",    label: "Tempo 12", seats: "12", group: true },
  { id: "t14",    label: "Tempo 14", seats: "14", group: true },
  { id: "t20",    label: "Tempo 20", seats: "20", group: true },
  { id: "urb",    label: "Urbania",  seats: "17", group: true },
];

type VehicleId = typeof VEHICLES[number]["id"];

interface Package {
  name: string;
  duration: string;
  places: string[];
  prices: Record<VehicleId, number>;
  slug: string | null;
  popular?: boolean;
  badge?: string;
}

const PACKAGES: Package[] = [
  {
    name: "North Goa Full Day",
    duration: "8–10 hours",
    places: ["Dolphin Sightseeing", "Fort Aguada", "Candolim Beach", "Calangute", "Baga Beach", "Anjuna Beach", "Chapora Fort", "Vagator Beach"],
    prices: { dzire: 2500, ertiga: 3000, innova: 4000, t12: 5000, t14: 5500, t20: 7000, urb: 9000 },
    slug: "/north-goa-tour",
    popular: true,
  },
  {
    name: "South Goa Full Day",
    duration: "8–10 hours",
    places: ["Old Goa Churches", "Mangueshi Temple", "Spice Plantation", "Panjim Church", "Dona Paula", "Miramar Beach", "Boat Cruise"],
    prices: { dzire: 3000, ertiga: 3500, innova: 4500, t12: 5500, t14: 6000, t20: 7500, urb: 9500 },
    slug: "/south-goa-tour",
  },
  {
    name: "Extreme North Beaches",
    duration: "7–8 hours",
    places: ["Morjim Beach", "Ashwem Beach", "Mandrem Beach", "Arambol Beach"],
    prices: { dzire: 3000, ertiga: 3500, innova: 4500, t12: 5500, t14: 6000, t20: 7500, urb: 9500 },
    slug: null,
    badge: "Secluded",
  },
  {
    name: "Extreme South Beaches",
    duration: "8–9 hours",
    places: ["Agonda Beach", "Palolem Beach", "Galgibaga Beach", "Butterfly Beach"],
    prices: { dzire: 3500, ertiga: 4000, innova: 5500, t12: 6500, t14: 7500, t20: 9500, urb: 12000 },
    slug: null,
    badge: "Scenic",
  },
  {
    name: "Dudhsagar Special",
    duration: "10–12 hours",
    places: ["Dudhsagar Falls", "Spice Plantation", "Mollem", "Bhagwan Mahavir Sanctuary"],
    prices: { dzire: 3500, ertiga: 4500, innova: 5500, t12: 7000, t14: 8000, t20: 10000, urb: 12000 },
    slug: "/dudhsagar-trip",
    popular: true,
  },
  {
    name: "Complete Goa – 2 Days",
    duration: "2 days",
    places: ["Day 1: North Goa highlights", "Day 2: South Goa highlights"],
    prices: { dzire: 5500, ertiga: 6500, innova: 8000, t12: 10000, t14: 12000, t20: 16000, urb: 20000 },
    slug: "/booking",
  },
  {
    name: "North + South + Dudhsagar – 3 Days",
    duration: "3 days",
    places: ["Day 1: North Goa", "Day 2: South Goa", "Day 3: Dudhsagar Waterfall"],
    prices: { dzire: 8500, ertiga: 10500, innova: 13500, t12: 17000, t14: 19500, t20: 26000, urb: 33000 },
    slug: "/booking",
    badge: "Best Value",
  },
  {
    name: "Ultimate Goa – 4 Days",
    duration: "4 days",
    places: ["Day 1: North Goa", "Day 2: South Goa", "Day 3: Extreme South", "Day 4: Extreme North"],
    prices: { dzire: 11000, ertiga: 14000, innova: 18000, t12: 22000, t14: 26000, t20: 35000, urb: 44000 },
    slug: "/booking",
    popular: true,
  },
];

function PackageCard({ pkg }: { pkg: Package }) {
  const [selected, setSelected] = useState<VehicleId>("dzire");
  const price = pkg.prices[selected];
  const vehicle = VEHICLES.find((v) => v.id === selected)!;

  const waMsg = `Hi EzyGoa! 🙏\n\nI'd like to book the *${pkg.name}* tour.\n\nVehicle: ${vehicle.label} (${vehicle.seats} seats)\nPrice: ₹${price.toLocaleString()}\n\nPlease confirm availability and dates.`;
  const waUrl = `https://wa.me/917026889254?text=${encodeURIComponent(waMsg)}`;

  const badge = pkg.popular ? "Popular" : pkg.badge ?? null;

  return (
    <div className="relative bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
      {badge && (
        <div
          className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full z-10"
          style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
        >
          {badge}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "var(--brand-primary)" }} />
          <span className="text-sm text-muted-foreground">{pkg.duration}</span>
        </div>
        <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          {pkg.name}
        </h3>

        {/* Places */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.places.map((p) => (
            <span key={p} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              <MapPin className="w-2.5 h-2.5 flex-shrink-0" /> {p}
            </span>
          ))}
        </div>

        {/* Vehicle selector */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Select Vehicle</p>
          <div className="flex flex-wrap gap-1.5">
            {VEHICLES.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v.id)}
                className="text-xs px-2.5 py-1 rounded-lg border transition-all duration-150 font-medium"
                style={
                  selected === v.id
                    ? { background: "var(--brand-primary)", color: "white", borderColor: "var(--brand-primary)" }
                    : v.group
                    ? { borderColor: "#93c5fd", color: "#1d4ed8", background: "#eff6ff" }
                    : { borderColor: "var(--border)", color: "var(--muted-foreground)", background: "transparent" }
                }
              >
                {v.label} <span className="opacity-60">({v.seats})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price display */}
        <div
          className="flex items-center justify-between rounded-xl px-4 py-3 mb-4"
          style={{ background: "oklch(0.265 0.078 254 / 0.06)" }}
        >
          <div>
            <p className="text-xs text-muted-foreground">{vehicle.label} · {vehicle.seats} seats</p>
            <p className="font-extrabold text-xl" style={{ color: "var(--brand-accent)" }}>
              ₹{price.toLocaleString()}
            </p>
          </div>
          <div className="text-2xl">
            {vehicle.group ? "🚐" : vehicle.id === "innova" ? "🚙" : "🚕"}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          {pkg.slug && pkg.slug !== "/booking" ? (
            <Link href={pkg.slug} className="flex-1">
              <Button variant="outline" className="w-full text-xs gap-1">
                Itinerary <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button
              className="w-full text-xs font-semibold gap-1"
              style={{ background: "#25d366", color: "white" }}
            >
              Book {vehicle.label}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SightseeingPackages() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {PACKAGES.map((pkg) => (
        <PackageCard key={pkg.name} pkg={pkg} />
      ))}
    </div>
  );
}
