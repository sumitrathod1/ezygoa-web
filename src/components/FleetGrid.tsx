"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Briefcase, Zap, ArrowRight, Fuel, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vehicles, selfDriveVehicles } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/constants";
import type { Vehicle, SelfDriveVehicle } from "@/types";
import SafeImage from "@/components/SafeImage";

const TAXI_FILTERS = ["All", "Sedan", "SUV", "Premium SUV", "Van", "Mini Bus", "Luxury Bus"] as const;

const SEGMENT_THEME: Record<string, { bg: string; badge: string }> = {
  economy:   { bg: "#3b82f6", badge: "#3b82f615" },
  sedan:     { bg: "#7c3aed", badge: "#7c3aed15" },
  suv:       { bg: "#ea580c", badge: "#ea580c15" },
  family:    { bg: "#0d9488", badge: "#0d948815" },
  adventure: { bg: "#b45309", badge: "#b4530915" },
};

/* ── Taxi Vehicle Card ──────────────────────────────────────────────── */
function TaxiCard({ v }: { v: Vehicle }) {
  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm card-hover overflow-hidden group flex flex-col">
      <div
        className="h-44 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${v.color ?? "#1a365d"}18, ${v.color ?? "#1a365d"}38)` }}
      >
        {v.image ? (
          <SafeImage
            src={v.image}
            alt={v.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fallbackClassName="h-44"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="text-7xl select-none">
              {v.capacity >= 17 ? "🚌" : v.capacity >= 12 ? "🚐" : v.capacity >= 7 ? "🚕" : v.capacity >= 6 ? "🛻" : "🚖"}
            </span>
          </div>
        )}
        <div
          className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full z-10"
          style={{ background: "#1a365d15", color: "var(--brand-primary)", backdropFilter: "blur(4px)" }}
        >
          {v.type}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          {v.name}
        </h3>

        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Users className="w-4 h-4" />{v.capacity} seats</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Briefcase className="w-4 h-4" />{v.luggage} bags</span>
          {v.ac && <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Zap className="w-4 h-4" />AC</span>}
        </div>

        {v.features && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {v.features.map((f) => (
              <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{f}</span>
            ))}
          </div>
        )}

        {v.bestFor && (
          <div className="mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1">Best for:</p>
            <div className="flex flex-wrap gap-1">
              {v.bestFor.map((b) => (
                <span key={b} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "oklch(0.265 0.078 254 / 0.08)", color: "var(--brand-primary)" }}>{b}</span>
              ))}
            </div>
          </div>
        )}

        {v.packages && (
          <div className="bg-secondary/50 rounded-xl p-3 mb-4 grid grid-cols-2 gap-2">
            {v.packages["8hr80km"] && (
              <div className="text-center">
                <p className="text-xs text-muted-foreground">8hr / 80km</p>
                <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>₹{v.packages["8hr80km"].toLocaleString()}</p>
              </div>
            )}
            {v.packages["12hr120km"] && (
              <div className="text-center border-l border-border">
                <p className="text-xs text-muted-foreground">12hr / 120km</p>
                <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>₹{v.packages["12hr120km"].toLocaleString()}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-extrabold text-xl" style={{ color: "var(--brand-accent)" }}>₹{v.pricePerKm}/km</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/taxi/${v.id}`}>
              <Button size="sm" variant="outline" className="gap-1 text-xs">Details <ArrowRight className="w-3 h-3" /></Button>
            </Link>
            <a href={buildWhatsAppUrl({ vehicle: v.name })} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="text-xs font-semibold" style={{ background: "var(--brand-primary)", color: "white" }}>Book Now</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Self-Drive Vehicle Card ─────────────────────────────────────────── */
function SelfDriveCard({ v }: { v: SelfDriveVehicle }) {
  const theme = SEGMENT_THEME[v.segment] ?? SEGMENT_THEME.economy;
  const isManual = v.transmission === "Manual";
  const waMsg = `Hi EzyGoa! 🙏\n\nI want to rent *${v.name}*.\n\nPlease share price and availability for my dates.`;
  const waUrl = `https://wa.me/917026889254?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm card-hover overflow-hidden group flex flex-col">
      <div
        className="h-44 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${theme.bg}12, ${theme.bg}28)` }}
      >
        {v.image ? (
          <SafeImage
            src={v.image}
            alt={v.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fallbackClassName="h-44"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="text-7xl select-none">🚗</span>
          </div>
        )}
        {/* Transmission badge */}
        <span
          className="absolute top-3 right-3 z-10 text-xs font-extrabold px-2.5 py-1 rounded-full shadow-sm"
          style={isManual ? { background: "#1d4ed8", color: "#fff" } : { background: "linear-gradient(90deg,#d97706,#f59e0b)", color: "#1a1a1a" }}
        >
          {isManual ? "🔧 Manual" : "⚡ Auto"}
        </span>
        {v.isNewModel && (
          <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white z-10" style={{ background: "linear-gradient(90deg,#059669,#10b981)" }}>
            ✨ NEW
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-bold text-base leading-tight mb-1" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
            {v.name}
          </h3>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: theme.badge, color: theme.bg }}>{v.type}</span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {[
            { icon: <Zap className="w-3 h-3" />, label: v.transmission },
            { icon: <Fuel className="w-3 h-3" />, label: v.fuelType },
            { icon: <Gauge className="w-3 h-3" />, label: v.mileage },
            { icon: <Users className="w-3 h-3" />, label: `${v.seats} Seats` },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-100">
              {s.icon}<span className="font-medium truncate">{s.label}</span>
            </div>
          ))}
        </div>

        {v.deposit && (
          <div className="bg-secondary/50 rounded-xl p-3 mb-3">
            <p className="text-xs text-muted-foreground">Refundable deposit</p>
            <p className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>₹{v.deposit.toLocaleString()}</p>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-extrabold text-xl" style={{ color: "var(--brand-accent)" }}>₹{v.pricePerDay.toLocaleString()}/day</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/self-drive/${v.id}`}>
              <Button size="sm" variant="outline" className="gap-1 text-xs">Details <ArrowRight className="w-3 h-3" /></Button>
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="text-xs font-semibold" style={{ background: "#25d366", color: "white" }}>Book</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Fleet Grid ──────────────────────────────────────────────────────── */
export default function FleetGrid() {
  const [category, setCategory] = useState<"taxi" | "self-drive">("taxi");
  const [typeFilter, setTypeFilter] = useState("All");

  const taxiVehicles = vehicles.filter((v) => v.category === "taxi");

  const filteredTaxi =
    typeFilter === "All" ? taxiVehicles : taxiVehicles.filter((v) => v.type === typeFilter);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 p-1 bg-secondary rounded-xl w-fit">
        {(["taxi", "self-drive"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => { setCategory(cat); setTypeFilter("All"); }}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            style={
              category === cat
                ? { background: "var(--brand-primary)", color: "white", boxShadow: "0 2px 8px rgba(26,54,93,0.3)" }
                : { color: "var(--brand-primary)" }
            }
          >
            {cat === "taxi" ? "🚕 Taxi Fleet" : "🚗 Self-Drive Cars"}
          </button>
        ))}
      </div>

      {/* Type filter — taxi only */}
      {category === "taxi" && (
        <div className="flex flex-wrap gap-2 mb-8">
          {TAXI_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setTypeFilter(f)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150"
              style={
                typeFilter === f
                  ? { background: "var(--brand-accent)", color: "#1a1a1a", borderColor: "var(--brand-accent)" }
                  : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
              }
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing <strong className="text-foreground">
          {category === "taxi" ? filteredTaxi.length : selfDriveVehicles.length}
        </strong>{" "}
        {category === "taxi" ? "taxi vehicles" : "self-drive cars"}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category === "taxi"
          ? filteredTaxi.map((v) => <TaxiCard key={v.id} v={v} />)
          : selfDriveVehicles.map((v) => <SelfDriveCard key={v.id} v={v} />)
        }
      </div>
    </div>
  );
}
