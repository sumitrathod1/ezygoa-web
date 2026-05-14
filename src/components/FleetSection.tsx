import Link from "next/link";
import { Users, Briefcase, Zap, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vehicles, selfDriveVehicles } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/constants";
import type { Vehicle, SelfDriveVehicle } from "@/types";
import SafeImage from "@/components/SafeImage";

function TaxiCard({ v }: { v: Vehicle }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-sm border border-border overflow-hidden card-hover group">
      <div
        className="h-40 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${v.color ?? "#1a365d"}22, ${v.color ?? "#1a365d"}44)` }}
      >
        {v.image ? (
          <SafeImage
            src={v.image}
            alt={v.name}
            fill
            sizes="288px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fallbackClassName="h-40"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="text-7xl select-none">
              {v.capacity >= 17 ? "🚌" : v.capacity >= 12 ? "🚐" : v.capacity >= 7 ? "🚕" : v.capacity >= 6 ? "🛻" : "🚖"}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full z-10" style={{ background: "#1a365d20", color: "#1a365d" }}>
          Taxi
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>{v.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{v.type}</p>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="w-3 h-3" />{v.capacity} seats</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground"><Briefcase className="w-3 h-3" />{v.luggage} bags</div>
          {v.ac && <div className="flex items-center gap-1 text-xs text-muted-foreground"><Zap className="w-3 h-3" />AC</div>}
        </div>
        {v.features && (
          <div className="flex flex-wrap gap-1 mb-3">
            {v.features.slice(0, 3).map((f) => (
              <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{f}</span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting</p>
            <p className="font-bold text-base" style={{ color: "var(--brand-primary)" }}>₹{v.pricePerKm}/km</p>
          </div>
          <a href={buildWhatsAppUrl({ vehicle: v.name })} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="text-xs px-4 font-semibold" style={{ background: "var(--brand-primary)", color: "white" }}>Book Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function SelfDriveCard({ v }: { v: SelfDriveVehicle }) {
  const waMsg = `Hi EzyGoa! 🙏\n\nI want to rent *${v.name}*.\n\nPlease share price and availability for my dates.`;
  const waUrl = `https://wa.me/917026889254?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-sm border border-border overflow-hidden card-hover group">
      <div className="h-40 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#22c55e12,#22c55e28)" }}>
        {v.image ? (
          <SafeImage
            src={v.image}
            alt={v.name}
            fill
            sizes="288px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fallbackClassName="h-40"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="text-7xl select-none">🚗</span>
          </div>
        )}
        <div className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full z-10" style={{ background: "#48bb7820", color: "#48bb78" }}>
          Self-Drive
        </div>
        {v.isNewModel && (
          <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full text-white z-10" style={{ background: "#059669" }}>NEW</span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>{v.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{v.type}</span>
          <span className="text-xs font-semibold" style={v.transmission === "Manual" ? { color: "#1d4ed8" } : { color: "#d97706" }}>
            {v.transmission === "Manual" ? "🔧 Manual" : "⚡ Auto"}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="w-3 h-3" />{v.seats} seats</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground"><Fuel className="w-3 h-3" />{v.fuelType}</div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting</p>
            <p className="font-bold text-base" style={{ color: "var(--brand-primary)" }}>₹{v.pricePerDay.toLocaleString()}/day</p>
          </div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="text-xs px-4 font-semibold" style={{ background: "#25d366", color: "white" }}>Book Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FleetSection() {
  const taxiVehicles = vehicles.filter((v) => v.category === "taxi");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>Our Fleet</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
              Vehicles for Every Need
            </h2>
          </div>
          <Link href="/fleet" className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--brand-primary)" }}>
            View Full Fleet →
          </Link>
        </div>

        {/* Taxi Fleet */}
        <div className="mb-10">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">🚕 Taxi Fleet</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {taxiVehicles.map((v) => (
              <div key={v.id} className="snap-start">
                <TaxiCard v={v} />
              </div>
            ))}
          </div>
        </div>

        {/* Self Drive */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-5">🚗 Self-Drive Cars</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {selfDriveVehicles.map((v) => (
              <div key={v.id} className="snap-start">
                <SelfDriveCard v={v} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
