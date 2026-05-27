"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, Clock, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/constants";

/* ─── Time slots ─── */
const TIME_SLOTS = [
  "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM",
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
  "10:00 PM", "11:00 PM",
];

/* ─── Vehicle options ─── */
const VEHICLES = [
  { id: "dzire",    label: "Dzire",         sub: "4 seats",  emoji: "🚖" },
  { id: "ertiga",   label: "Ertiga",         sub: "6 seats",  emoji: "🚕" },
  { id: "innova",   label: "Innova Crysta",  sub: "7 seats",  emoji: "🚙" },
  { id: "tempo-12", label: "Tempo 12",       sub: "12 seats", emoji: "🚐" },
  { id: "tempo-14", label: "Tempo 14",       sub: "14 seats", emoji: "🚐" },
  { id: "tempo-20", label: "Tempo 20",       sub: "20 seats", emoji: "🚌" },
  { id: "urbania",  label: "Urbania 17",     sub: "17 seats · Luxury", emoji: "🚌" },
];

/* ─── Props ─── */
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  service?: string;
  vehicle?: string;   // if passed, pre-selects and hides the picker
  from?: string;
  to?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  title,
  service,
  vehicle: vehicleProp,
  from,
  to,
}: BookingModalProps) {
  const [date, setDate]           = useState("");
  const [time, setTime]           = useState("");
  const [vehicle, setVehicle]     = useState(vehicleProp ?? "");
  const [mounted, setMounted]     = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // sync if prop changes between opens
  useEffect(() => { setVehicle(vehicleProp ?? ""); }, [vehicleProp]);

  const today = new Date().toISOString().split("T")[0];

  function handleConfirm() {
    if (!date) return;
    const d = new Date(date + "T12:00:00");
    const formattedDate = d.toLocaleDateString("en-IN", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    const url = buildWhatsAppUrl({
      service,
      vehicle: vehicle || undefined,
      from,
      to,
      date: formattedDate,
      time: time || "Flexible",
    });
    window.open(url, "_blank");
    onClose();
    setDate("");
    setTime("");
    if (!vehicleProp) setVehicle("");
  }

  if (!isOpen || !mounted) return null;

  /* ─── whether to show the picker or just a "pre-selected" badge ─── */
  const showPicker = !vehicleProp;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-sm p-6 z-10 max-h-[92dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="w-10 h-1 bg-border rounded-full mx-auto mb-5 sm:hidden" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3
          className="font-bold text-lg mb-0.5"
          style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
        >
          Confirm Your Booking
        </h3>
        <p className="text-xs text-muted-foreground mb-5 line-clamp-1">{title}</p>

        {/* ── Vehicle Section ── */}
        {showPicker ? (
          <div className="mb-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
              <Bus className="w-3.5 h-3.5" /> Select Vehicle
              <span className="normal-case font-normal">(optional)</span>
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {VEHICLES.map((v) => {
                const selected = vehicle === v.label;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVehicle(selected ? "" : v.label)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition-all"
                    style={
                      selected
                        ? { background: "var(--brand-primary)", borderColor: "var(--brand-primary)", color: "white" }
                        : { borderColor: "var(--border)", color: "var(--foreground)" }
                    }
                  >
                    <span className="text-lg leading-none">{v.emoji}</span>
                    <span>
                      <span className="block text-xs font-semibold leading-tight">{v.label}</span>
                      <span
                        className="block text-[10px] leading-tight mt-0.5"
                        style={{ opacity: selected ? 0.75 : undefined, color: selected ? "inherit" : "var(--muted-foreground)" }}
                      >
                        {v.sub}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Pre-selected vehicle badge */
          <div className="mb-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              <Bus className="w-3.5 h-3.5" /> Vehicle
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "oklch(0.265 0.078 254 / 0.08)", color: "var(--brand-primary)" }}
            >
              🚐 {vehicleProp}
            </div>
          </div>
        )}

        {/* ── Date picker ── */}
        <div className="mb-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <Calendar className="w-3.5 h-3.5" /> Pickup Date
          </p>
          <input
            type="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-shadow"
            style={{ colorScheme: "light" }}
          />
        </div>

        {/* ── Time slots ── */}
        <div className="mb-6">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <Clock className="w-3.5 h-3.5" /> Pickup Time
            <span className="normal-case font-normal text-muted-foreground">(optional)</span>
          </p>
          <div className="grid grid-cols-4 gap-1.5 max-h-36 overflow-y-auto">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(time === slot ? "" : slot)}
                className="text-[11px] px-1 py-2 rounded-lg border transition-all font-medium leading-none"
                style={
                  time === slot
                    ? { background: "var(--brand-primary)", color: "white", borderColor: "var(--brand-primary)" }
                    : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
                }
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleConfirm}
          disabled={!date}
          className="w-full h-11 text-sm font-bold gap-2"
          style={date ? { background: "#25d366", color: "white" } : undefined}
        >
          📲 Book via WhatsApp
        </Button>
        {!date && (
          <p className="text-center text-[10px] text-muted-foreground mt-2">
            Select a date to continue
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}
