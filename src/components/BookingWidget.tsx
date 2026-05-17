"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/constants";

const SERVICES = [
  "Airport Pickup",
  "Airport Drop",
  "Local Sightseeing",
  "Outstation Trip",
  "North Goa Tour",
  "South Goa Tour",
  "Dudhsagar Trip",
  "Hourly Package",
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
  "Other",
];

export default function BookingWidget() {
  const [service, setService] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState("2");

  const handleBook = () => {
    const url = buildWhatsAppUrl({
      service: service || undefined,
      from: from || undefined,
      to: to || undefined,
      date: date || undefined,
      time: time || undefined,
      passengers: pax,
    });
    window.open(url, "_blank");
  };

  return (
    <section className="relative z-20 -mt-16 sm:-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl shadow-2xl p-5 sm:p-6 border border-white/40">
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
              Quick Book
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {/* Service */}
            <div className="relative">
              <label htmlFor="bw-service" className="block text-xs font-medium text-muted-foreground mb-1">
                Service
              </label>
              <select
                id="bw-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
              >
                <option value="">Select service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* From */}
            <div>
              <label htmlFor="bw-from" className="block text-xs font-medium text-muted-foreground mb-1">
                Pickup From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="bw-from"
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
              <label htmlFor="bw-to" className="block text-xs font-medium text-muted-foreground mb-1">
                Drop To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="bw-to"
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
              <label htmlFor="bw-date" className="block text-xs font-medium text-muted-foreground mb-1">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  id="bw-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* Time */}
            <div>
              <label htmlFor="bw-time" className="block text-xs font-medium text-muted-foreground mb-1">
                Time
              </label>
              <input
                id="bw-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Passengers */}
            <div>
              <label htmlFor="bw-pax" className="block text-xs font-medium text-muted-foreground mb-1">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <select
                  id="bw-pax"
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  className="w-full h-10 pl-8 pr-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                    <option key={n} value={String(n)}>
                      {n} {Number(n) === 1 ? "person" : "people"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <Button
            onClick={handleBook}
            className="w-full sm:w-auto gap-2 px-8 h-11 text-sm font-semibold shadow-lg hover:scale-[1.02] transition-transform"
            style={{
              background: "linear-gradient(135deg, var(--brand-primary), #2a5298)",
              color: "white",
            }}
          >
            Get Instant Price via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
