"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users, Bus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

const VEHICLES = [
  "Tempo Traveller 12 Seater",
  "Tempo Traveller 14 Seater",
  "Tempo Traveller 20 Seater",
  "Force Urbania 17 Seater (Luxury)",
];

const LOCATIONS = [
  "Mopa Airport",
  "Dabolim Airport",
  "Panjim",
  "Calangute",
  "Baga",
  "Anjuna",
  "Vagator",
  "Mapusa",
  "Margao",
  "Vasco",
  "Colva",
  "Palolem",
  "Arambol",
  "Other",
];

const PAX_OPTIONS = [
  "1–4 people",
  "5–7 people",
  "8–10 people",
  "11–12 people",
  "13–14 people",
  "15–17 people",
  "18–20 people",
  "20+ people",
];

export default function TempoBookingWidget() {
  const [vehicle, setVehicle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState("");

  const handleBook = () => {
    const msg = `Hello ZipGoa! 👋

I want to book a group vehicle:
Service: Group Booking — Tempo Traveller / Urbania
Vehicle: ${vehicle || "—"}
From: ${from || "—"}
To: ${to || "—"}
Date: ${date || "—"}
Time: ${time || "—"}
Passengers: ${pax || "—"}

Please confirm availability and share the rate.`;

    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl shadow-2xl p-5 sm:p-6 border border-white/40">
          {/* Header */}
          <div className="flex items-center gap-2 mb-5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--brand-primary)" }}
            >
              <Search className="w-3.5 h-3.5 text-white" />
            </div>
            <h2
              className="text-base font-bold"
              style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
            >
              Quick Group Booking
            </h2>
            <span className="ml-auto text-xs text-muted-foreground hidden sm:inline">
              All fields optional — fill what you know
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {/* Vehicle */}
            <div className="relative">
              <label htmlFor="tb-vehicle" className="block text-xs font-medium text-muted-foreground mb-1">
                Vehicle Type
              </label>
              <div className="relative">
                <Bus className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="tb-vehicle"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  <option value="">Any / Not sure yet</option>
                  {VEHICLES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* From */}
            <div>
              <label htmlFor="tb-from" className="block text-xs font-medium text-muted-foreground mb-1">
                Pickup From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="tb-from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  <option value="">Select pickup</option>
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* To */}
            <div>
              <label htmlFor="tb-to" className="block text-xs font-medium text-muted-foreground mb-1">
                Drop To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="tb-to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  <option value="">Select drop</option>
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="tb-date" className="block text-xs font-medium text-muted-foreground mb-1">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  id="tb-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Time */}
            <div>
              <label htmlFor="tb-time" className="block text-xs font-medium text-muted-foreground mb-1">
                Pickup Time
              </label>
              <input
                id="tb-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Passengers */}
            <div>
              <label htmlFor="tb-pax" className="block text-xs font-medium text-muted-foreground mb-1">
                Group Size
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="tb-pax"
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  <option value="">How many people?</option>
                  {PAX_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button
              onClick={handleBook}
              className="w-full sm:w-auto gap-2 px-8 h-11 text-sm font-semibold shadow-lg hover:scale-[1.02] transition-transform"
              style={{
                background: "linear-gradient(135deg, var(--brand-primary), #2a5298)",
                color: "white",
              }}
            >
              Get Instant Quote via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-muted-foreground">
              💬 We reply within minutes · No advance payment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
