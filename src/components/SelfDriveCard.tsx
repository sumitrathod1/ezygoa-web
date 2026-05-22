"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SelfDriveVehicle } from "@/types";

const SEGMENT_THEME: Record<string, { bg: string; glow: string; badge: string }> = {
  economy:   { bg: "#3b82f6", glow: "rgba(59,130,246,0.18)",  badge: "#3b82f620" },
  sedan:     { bg: "#7c3aed", glow: "rgba(124,58,237,0.18)",  badge: "#7c3aed20" },
  suv:       { bg: "#ea580c", glow: "rgba(234,88,12,0.18)",   badge: "#ea580c20" },
  family:    { bg: "#0d9488", glow: "rgba(13,148,136,0.18)",  badge: "#0d948820" },
  adventure: { bg: "#b45309", glow: "rgba(180,83,9,0.18)",    badge: "#b4530920" },
};

const SEGMENT_EMOJI: Record<string, string> = {
  economy: "🚗",
  sedan: "🚙",
  suv: "🚘",
  family: "👨‍👩‍👧",
  adventure: "🏔️",
};

interface Props {
  vehicle: SelfDriveVehicle;
  inCompare: boolean;
  onToggleCompare: (id: string) => void;
  compareDisabled: boolean;
}

export default function SelfDriveCard({ vehicle: v, inCompare, onToggleCompare, compareDisabled }: Props) {
  const [imgError, setImgError] = useState(false);
  const theme = SEGMENT_THEME[v.segment] ?? SEGMENT_THEME.economy;
  const emoji = SEGMENT_EMOJI[v.segment] ?? "🚗";

  const isManual = v.transmission === "Manual";
  const waMsg = `Hi ZipGoa! 🙏\n\nI want to rent *${v.name}*.\n\nPlease share price and availability for my dates.`;
  const waUrl = `https://wa.me/917026889254?text=${encodeURIComponent(waMsg)}`;

  const specs = [
    { icon: "⚙️", label: v.transmission },
    { icon: "⛽", label: v.fuelType },
    { icon: "📊", label: v.mileage },
    { icon: "👥", label: `${v.seats} Seats` },
    { icon: "🚪", label: `${v.doors} Doors` },
  ];

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1.5"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${theme.glow}, 0 4px 12px rgba(0,0,0,0.08)`;
        (e.currentTarget as HTMLDivElement).style.borderColor = theme.bg + "50";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#f3f4f6";
      }}
    >
      {/* ── Image Area ── */}
      <div
        className="relative h-48 overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${theme.bg}12 0%, ${theme.bg}28 100%)` }}
      >
        {/* Vehicle image / fallback */}
        {v.image && !imgError ? (
          <Image
            src={v.image}
            alt={v.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Placeholder — shown when no image or image fails */
          <div className="flex flex-col items-center justify-center gap-1 select-none pointer-events-none z-10">
            <span className="text-7xl filter drop-shadow-md">{emoji}</span>
            <span
              className="text-[10px] font-bold uppercase tracking-wider opacity-40"
              style={{ color: theme.bg }}
            >
              {v.type}
            </span>
          </div>
        )}

        {/* Subtle overlay when image is present */}
        {v.image && !imgError && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        )}

        {/* ── Badge: NEW MODEL — top-left ── */}
        {v.isNewModel && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white z-20"
            style={{ background: "linear-gradient(90deg,#059669,#10b981)" }}
          >
            ✨ NEW
          </span>
        )}

        {/* ── Badge: TRANSMISSION — top-right ── */}
        <span
          className="absolute top-3 right-3 z-20 flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full shadow-sm"
          style={
            isManual
              ? { background: "#1d4ed8", color: "#fff" }
              : { background: "linear-gradient(90deg,#d97706,#f59e0b)", color: "#1a1a1a" }
          }
        >
          {isManual ? "🔧" : "⚡"} {v.transmission}
        </span>

        {/* ── Badge: PREMIUM — below transmission ── */}
        {v.isPremium && (
          <span
            className="absolute top-10 right-3 z-20 text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
          >
            ⭐ PREMIUM
          </span>
        )}

        {/* ── Compare toggle — bottom-right ── */}
        <button
          onClick={() => onToggleCompare(v.id)}
          disabled={compareDisabled && !inCompare}
          className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold z-20 transition-all ${
            inCompare
              ? "bg-blue-600 text-white shadow-md"
              : compareDisabled
              ? "bg-white/70 text-gray-400 cursor-not-allowed"
              : "bg-white/90 text-gray-600 hover:bg-white hover:shadow"
          }`}
          style={{ backdropFilter: "blur(6px)" }}
        >
          {inCompare ? "✓ Added" : "+ Compare"}
        </button>
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 flex flex-col flex-1">

        {/* Name + type badge */}
        <div className="mb-3">
          <h3
            className="font-extrabold text-base leading-tight mb-1.5"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            {v.name}
          </h3>
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: theme.badge, color: theme.bg }}
          >
            {v.type}
          </span>
        </div>

        {/* Price block */}
        <div
          className="rounded-xl px-4 py-3 mb-4"
          style={{
            background: `linear-gradient(135deg, ${theme.bg}08, ${theme.bg}14)`,
            border: `1px solid ${theme.bg}25`,
          }}
        >
          <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-0.5">
            Price Starting From
          </p>
          <div className="flex items-baseline gap-1">
            <span
              className="text-3xl font-extrabold leading-none"
              style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-accent)" }}
            >
              ₹{v.pricePerDay.toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-gray-500 font-medium">/day</span>
          </div>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {specs.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-100"
            >
              <span className="text-sm">{s.icon}</span>
              <span className="font-medium truncate">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Feature chips */}
        {v.features && v.features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {v.features.map((f) => (
              <span
                key={f}
                className="text-[11px] px-2 py-0.5 rounded-full border font-medium"
                style={{ background: theme.badge, borderColor: theme.bg + "25", color: theme.bg }}
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Min booking notice */}
        <p className="text-[11px] text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5 mb-4 flex items-center gap-1.5 font-medium border border-amber-100">
          <span>⚠️</span>
          Min 2-Day Booking · 9 AM to 9 AM Next Day
        </p>

        {/* CTAs */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <a
            href="tel:+917026889254"
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border-2 transition-all hover:-translate-y-0.5"
            style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}
          >
            📞 Call Now
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "#25d366" }}
          >
            💬 Book
          </a>
        </div>

        {/* Detail link */}
        <Link
          href={`/self-drive/${v.id}`}
          className="mt-2.5 text-center text-xs font-semibold py-1 rounded-lg transition-colors hover:bg-gray-50"
          style={{ color: "var(--brand-primary)" }}
        >
          View Details & Full Specs →
        </Link>
      </div>
    </div>
  );
}
