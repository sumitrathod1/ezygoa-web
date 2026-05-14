"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/constants";

const VEHICLE_OPTIONS = [
  { id: "dzire", label: "Maruti Dzire (Sedan, 4 seats)", priceKey: "dzire" as const },
  { id: "ertiga", label: "Maruti Ertiga (SUV, 6 seats)", priceKey: "ertiga" as const },
  { id: "innova", label: "Toyota Innova Crysta (7 seats)", priceKey: "innova" as const },
];

const PICKUP_OPTIONS = [...new Set(routes.map((r) => r.from))];
const DROP_OPTIONS = [...new Set(routes.map((r) => r.to))];

export default function PriceCalculator() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("dzire");

  const result = useMemo(() => {
    if (!pickup || !drop) return null;
    const route = routes.find(
      (r) =>
        r.from.toLowerCase() === pickup.toLowerCase() &&
        r.to.toLowerCase() === drop.toLowerCase()
    );
    if (!route) return null;
    const veh = VEHICLE_OPTIONS.find((v) => v.id === vehicle)!;
    const price = route.prices[veh.priceKey];
    if (!price) return null;
    return { route, price };
  }, [pickup, drop, vehicle]);

  const handleBook = () => {
    const vehLabel = VEHICLE_OPTIONS.find((v) => v.id === vehicle)?.label ?? vehicle;
    const url = buildWhatsAppUrl({
      vehicle: vehLabel,
      from: pickup,
      to: drop,
    });
    window.open(url, "_blank");
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "oklch(0.265 0.078 254 / 0.04)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
            Instant Estimate
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            Calculate Your Trip Cost
          </h2>
          <p className="text-muted-foreground">
            Get an instant price estimate for popular routes across Goa.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Pickup */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Pickup From
                </label>
                <select
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl border-2 border-border bg-background text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select pickup</option>
                  {PICKUP_OPTIONS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Drop */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Drop At
                </label>
                <select
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl border-2 border-border bg-background text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select drop</option>
                  {DROP_OPTIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Vehicle
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl border-2 border-border bg-background text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  {VEHICLE_OPTIONS.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            {result ? (
              <div
                className="rounded-2xl p-6 mb-6"
                style={{ backgroundColor: "oklch(0.265 0.078 254 / 0.06)" }}
              >
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Distance</p>
                    <p className="font-bold text-lg" style={{ color: "var(--brand-primary)" }}>
                      {result.route.distance} km
                    </p>
                  </div>
                  <div className="text-center border-x border-border">
                    <p className="text-xs text-muted-foreground mb-1">Duration</p>
                    <p className="font-bold text-lg" style={{ color: "var(--brand-primary)" }}>
                      {result.route.duration}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Estimated Cost</p>
                    <p
                      className="font-extrabold text-2xl"
                      style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-accent)" }}
                    >
                      ₹{result.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleBook}
                  className="w-full gap-2 font-semibold"
                  style={{ background: "var(--brand-primary)", color: "white" }}
                >
                  Book at This Price
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "oklch(0.265 0.078 254 / 0.04)" }}>
                <Calculator
                  className="w-10 h-10 mx-auto mb-3 opacity-30"
                  style={{ color: "var(--brand-primary)" }}
                />
                <p className="text-muted-foreground text-sm">
                  Select pickup and drop to see instant price
                </p>
              </div>
            )}

            <p className="text-xs text-muted-foreground text-center">
              * Prices shown are estimates. Final price confirmed via WhatsApp before booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
