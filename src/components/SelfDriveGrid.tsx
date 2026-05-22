"use client";

import { useState, useMemo } from "react";
import type { SelfDriveVehicle } from "@/types";
import SelfDriveCard from "./SelfDriveCard";

const SEGMENTS = [
  { id: "all",       label: "All Cars",    emoji: "🚗" },
  { id: "economy",   label: "Economy",     emoji: "🏷️" },
  { id: "sedan",     label: "Sedan",       emoji: "🚙" },
  { id: "suv",       label: "SUV",         emoji: "🚘" },
  { id: "family",    label: "7 Seater",    emoji: "👨‍👩‍👧" },
  { id: "adventure", label: "Adventure",   emoji: "🏔️" },
  { id: "premium",   label: "Premium",     emoji: "⭐" },
];

const SECTION_META: Record<string, { title: string; emoji: string; desc: string }> = {
  economy:   { emoji: "🚗", title: "Economy Hatchbacks",    desc: "Budget-friendly, fuel-efficient picks for couples and small groups" },
  sedan:     { emoji: "🚙", title: "Sedans",                desc: "Comfortable boot space and smooth ride for business or leisure" },
  suv:       { emoji: "🚘", title: "SUVs",                  desc: "Elevated comfort with sunroof and modern tech features" },
  family:    { emoji: "👨‍👩‍👧", title: "Family 7-Seaters",     desc: "Spacious MPVs for families and groups of up to 7 people" },
  adventure: { emoji: "🏔️", title: "Adventure 4x4",         desc: "Go off-road, hit the Dudhsagar trail, or cruise Goa in style" },
};

const SEGMENT_ORDER = ["economy", "sedan", "suv", "family", "adventure"];

interface Props {
  vehicles: SelfDriveVehicle[];
}

export default function SelfDriveGrid({ vehicles }: Props) {
  const [activeSegment, setActiveSegment] = useState("all");
  const [transmission, setTransmission] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const [compareList, setCompareList] = useState<SelfDriveVehicle[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  function toggleCompare(id: string) {
    setCompareList((prev) => {
      const exists = prev.find((v) => v.id === id);
      if (exists) return prev.filter((v) => v.id !== id);
      if (prev.length >= 3) return prev;
      const v = vehicles.find((v) => v.id === id);
      return v ? [...prev, v] : prev;
    });
  }

  const filtered = useMemo(() => {
    let list = vehicles;
    if (activeSegment === "premium") list = list.filter((v) => v.isPremium);
    else if (activeSegment !== "all") list = list.filter((v) => v.segment === activeSegment);
    if (transmission !== "all") list = list.filter((v) => v.transmission === transmission);
    return list.sort((a, b) =>
      sortBy === "price-asc" ? a.pricePerDay - b.pricePerDay : b.pricePerDay - a.pricePerDay
    );
  }, [vehicles, activeSegment, transmission, sortBy]);

  const grouped = useMemo(() => {
    if (activeSegment !== "all") return null;
    return SEGMENT_ORDER.reduce<Record<string, SelfDriveVehicle[]>>((acc, seg) => {
      const list = vehicles
        .filter((v) => v.segment === seg && (transmission === "all" || v.transmission === transmission))
        .sort((a, b) => sortBy === "price-asc" ? a.pricePerDay - b.pricePerDay : b.pricePerDay - a.pricePerDay);
      if (list.length) acc[seg] = list;
      return acc;
    }, {});
  }, [vehicles, activeSegment, transmission, sortBy]);

  const compareDisabled = compareList.length >= 3;

  return (
    <>
      {/* ── Filter Bar ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-10">
        {/* Segment pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {SEGMENTS.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setActiveSegment(seg.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeSegment === seg.id
                  ? "text-white shadow-md -translate-y-0.5"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
              style={activeSegment === seg.id ? { background: "var(--brand-primary)" } : {}}
            >
              <span>{seg.emoji}</span>
              {seg.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeSegment === seg.id ? "bg-white/20" : "bg-gray-200 text-gray-500"}`}>
                {seg.id === "all"
                  ? vehicles.length
                  : seg.id === "premium"
                  ? vehicles.filter((v) => v.isPremium).length
                  : vehicles.filter((v) => v.segment === seg.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Sort + Transmission */}
        <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-gray-500">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-blue-400"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-gray-500">Transmission:</label>
            {["all", "Manual", "Automatic"].map((t) => (
              <button
                key={t}
                onClick={() => setTransmission(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  transmission === t
                    ? "text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={transmission === t ? { background: "var(--brand-primary)" } : {}}
              >
                {t === "all" ? "All" : t}
              </button>
            ))}
          </div>
          <div className="ml-auto text-sm text-gray-400">
            {activeSegment !== "all" ? `${filtered.length} vehicle${filtered.length !== 1 ? "s" : ""}` : `${vehicles.length} vehicles`}
          </div>
        </div>
      </div>

      {/* ── Grouped sections (when "All" selected) ── */}
      {grouped ? (
        <div className="space-y-16">
          {Object.entries(grouped).map(([seg, list]) => {
            const meta = SECTION_META[seg];
            return (
              <section key={seg} id={seg}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{meta.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                      {meta.title}
                    </h2>
                    <p className="text-sm text-gray-500">{meta.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {list.map((v) => (
                    <SelfDriveCard
                      key={v.id}
                      vehicle={v}
                      inCompare={!!compareList.find((c) => c.id === v.id)}
                      onToggleCompare={toggleCompare}
                      compareDisabled={compareDisabled}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        // ── Flat filtered grid ──
        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <div className="text-5xl mb-3">🔍</div>
              <p className="font-semibold">No vehicles match this filter.</p>
              <button
                onClick={() => { setActiveSegment("all"); setTransmission("all"); }}
                className="mt-4 text-sm underline"
                style={{ color: "var(--brand-primary)" }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((v) => (
                <SelfDriveCard
                  key={v.id}
                  vehicle={v}
                  inCompare={!!compareList.find((c) => c.id === v.id)}
                  onToggleCompare={toggleCompare}
                  compareDisabled={compareDisabled}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Compare floating bar ── */}
      {compareList.length >= 1 && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 animate-in slide-in-from-bottom-4 duration-200">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {compareList.map((v) => (
                <div key={v.id} className="flex items-center gap-1.5 bg-gray-50 rounded-xl px-3 py-1.5 border border-gray-200">
                  <span className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>{v.name.split(" ").slice(0, 2).join(" ")}</span>
                  <button onClick={() => toggleCompare(v.id)} className="text-gray-400 hover:text-gray-600 ml-1 text-xs">✕</button>
                </div>
              ))}
              {compareList.length < 3 && (
                <div className="flex items-center justify-center w-24 h-8 border-2 border-dashed border-gray-300 rounded-xl text-xs text-gray-400">
                  + Add
                </div>
              )}
            </div>
            <button
              onClick={() => setCompareOpen(true)}
              disabled={compareList.length < 2}
              className="px-5 py-2 rounded-xl text-sm font-bold text-white transition-opacity disabled:opacity-40"
              style={{ background: "var(--brand-primary)" }}
            >
              Compare {compareList.length}
            </button>
            <button onClick={() => setCompareList([])} className="text-xs text-gray-400 hover:text-gray-600">Clear</button>
          </div>
        </div>
      )}

      {/* ── Compare Modal ── */}
      {compareOpen && compareList.length >= 2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setCompareOpen(false); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="font-extrabold text-xl" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Vehicle Comparison
              </h3>
              <button onClick={() => setCompareOpen(false)} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-600">
                ✕
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 w-36 text-gray-500 font-semibold">Feature</th>
                    {compareList.map((v) => (
                      <th key={v.id} className="px-6 py-4 text-center">
                        <div className="font-extrabold text-base mb-0.5" style={{ color: "var(--brand-primary)" }}>{v.name}</div>
                        <div className="text-xs text-gray-500">{v.type}</div>
                        {v.isPremium && <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block" style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}>⭐ Premium</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Price/Day",     key: (v: SelfDriveVehicle) => `₹${v.pricePerDay.toLocaleString("en-IN")}`, highlight: true },
                    { label: "Transmission",  key: (v: SelfDriveVehicle) => v.transmission },
                    { label: "Fuel Type",     key: (v: SelfDriveVehicle) => v.fuelType },
                    { label: "Mileage",       key: (v: SelfDriveVehicle) => v.mileage },
                    { label: "Seats",         key: (v: SelfDriveVehicle) => `${v.seats}` },
                    { label: "Doors",         key: (v: SelfDriveVehicle) => `${v.doors}` },
                    { label: "Deposit",       key: (v: SelfDriveVehicle) => v.deposit ? `₹${v.deposit.toLocaleString("en-IN")}` : "—" },
                    { label: "New Model",     key: (v: SelfDriveVehicle) => v.isNewModel ? "✅ Yes" : "No" },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                      <td className="px-6 py-3.5 font-semibold text-gray-500">{row.label}</td>
                      {compareList.map((v) => (
                        <td
                          key={v.id}
                          className={`px-6 py-3.5 text-center font-semibold ${row.highlight ? "text-lg" : ""}`}
                          style={row.highlight ? { color: "var(--brand-accent)", fontFamily: "var(--font-poppins)" } : { color: "var(--brand-primary)" }}
                        >
                          {row.key(v)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Features row */}
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-3.5 font-semibold text-gray-500 align-top">Features</td>
                    {compareList.map((v) => (
                      <td key={v.id} className="px-6 py-3.5 text-center">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {v.features?.map((f) => (
                            <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{f}</span>
                          )) ?? "—"}
                        </div>
                      </td>
                    ))}
                  </tr>
                  {/* Book row */}
                  <tr>
                    <td className="px-6 py-4" />
                    {compareList.map((v) => (
                      <td key={v.id} className="px-6 py-4 text-center">
                        <a
                          href={`https://wa.me/917026889254?text=${encodeURIComponent(`Hi ZipGoa! I want to rent *${v.name}*. Please share availability.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                          style={{ background: "#25d366" }}
                        >
                          💬 Book This
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
