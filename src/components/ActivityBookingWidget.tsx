"use client";

import { useState } from "react";
import { Star, MapPin, Clock, Users, Calendar } from "lucide-react";
import { buildActivityBookingUrl, buildActivityWhatsAppUrl } from "@/lib/activities";

interface ActivityBookingWidgetProps {
  title: string;
  location: string;
  duration: string;
  pickupTime: string;
  frequency: string;
  rating: number;
  priceFrom: number;
}

export default function ActivityBookingWidget({
  title,
  location,
  duration,
  pickupTime,
  frequency,
  rating,
  priceFrom,
}: ActivityBookingWidgetProps) {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState(2);

  const total = travellers * priceFrom;

  const formattedDate = date
    ? new Date(date + "T12:00:00").toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const bookingUrl = buildActivityBookingUrl(title, formattedDate || date, travellers, total);
  const enquiryUrl = buildActivityWhatsAppUrl(title);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">

      {/* Rating + title header */}
      <div className="p-5 border-b border-border">
        <div className="flex gap-0.5 mb-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h3
          className="font-bold text-base leading-snug mb-1"
          style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
        >
          {title}
        </h3>
        <p className="text-sm font-semibold text-muted-foreground">{rating}</p>
      </div>

      {/* Tour info grid */}
      <div className="divide-y divide-border border-b border-border">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <MapPin className="w-3.5 h-3.5" /> Location
          </span>
          <span className="text-xs font-semibold text-foreground">{location}</span>
        </div>
        <div className="flex items-center justify-between px-5 py-3">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Clock className="w-3.5 h-3.5" /> Duration
          </span>
          <span className="text-xs font-semibold text-foreground">{duration}</span>
        </div>
        <div className="flex items-center justify-between px-5 py-3">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Calendar className="w-3.5 h-3.5" /> Frequency
          </span>
          <span className="text-xs font-semibold text-foreground">{frequency}</span>
        </div>
      </div>

      {/* Date & travellers */}
      <div className="p-5 border-b border-border space-y-4">
        <p
          className="text-sm font-bold pb-2 border-b border-border"
          style={{ color: "var(--brand-primary)" }}
        >
          Select date and travellers
        </p>

        {/* Date */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Check-In Date
          </label>
          <input
            type="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-10 px-3 rounded-xl border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-offset-1 transition-shadow"
            style={{ colorScheme: "light" }}
          />
        </div>

        {/* Pickup time (read-only display) */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Check-In Time
          </label>
          <div
            className="h-10 px-3 rounded-xl border border-border text-sm flex items-center text-muted-foreground bg-secondary/30"
          >
            {pickupTime}
          </div>
        </div>

        {/* Travellers counter */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> Number of Travellers
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTravellers(Math.max(1, travellers - 1))}
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-lg font-bold transition-colors hover:bg-secondary/50"
              style={{ color: "var(--brand-primary)" }}
              aria-label="Decrease travellers"
            >
              −
            </button>
            <span className="flex-1 h-10 rounded-xl border border-border flex items-center justify-center text-sm font-bold"
              style={{ color: "var(--brand-primary)" }}>
              {travellers}
            </span>
            <button
              type="button"
              onClick={() => setTravellers(Math.min(50, travellers + 1))}
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-lg font-bold transition-colors hover:bg-secondary/50"
              style={{ color: "var(--brand-primary)" }}
              aria-label="Increase travellers"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Activity cost */}
      <div className="p-5 border-b border-border">
        <p
          className="text-sm font-bold pb-2 mb-3 border-b border-border"
          style={{ color: "var(--brand-primary)" }}
        >
          Activity Cost
        </p>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Number of ticket</span>
            <span className="font-semibold text-foreground">{travellers}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Adult Ticket Cost</span>
            <span
              className="font-extrabold text-base"
              style={{ color: "var(--brand-primary)" }}
            >
              ₹ {total.toLocaleString()}
            </span>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">
          ₹{priceFrom} × {travellers} {travellers === 1 ? "person" : "people"} · Indicative — confirmed at booking
        </p>
      </div>

      {/* CTAs */}
      <div className="p-5 space-y-2.5">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-11 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--brand-primary)" }}
        >
          📲 Book Now
        </a>
        <a
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-11 rounded-xl font-semibold text-sm border-2 transition-colors hover:bg-secondary/30"
          style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}
        >
          Enquire Now
        </a>
        <p className="text-[10px] text-muted-foreground text-center">
          No advance payment until booking is confirmed
        </p>
      </div>
    </div>
  );
}
