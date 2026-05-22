"use client";

import { useState, useMemo } from "react";
import { MessageCircle, ArrowRight, User, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vehicles } from "@/lib/data";
import { BUSINESS } from "@/lib/constants";
import { trackBookingComplete } from "@/lib/analytics";

const SERVICES = [
  "Airport Pickup",
  "Airport Drop",
  "North Goa Full Day Tour",
  "South Goa Full Day Tour",
  "Dudhsagar Waterfall Trip",
  "Local Sightseeing (8hr / 80km)",
  "Local Sightseeing (12hr / 120km)",
  "Outstation Trip",
  "Self-Drive Rental",
  "Hotel Transfer",
  "Wedding / Event Transport",
  "Custom Trip",
];

const LOCATIONS = [
  "Mopa Airport (GOX)",
  "Dabolim Airport (GOI)",
  "Panjim",
  "Calangute",
  "Baga",
  "Anjuna",
  "Vagator",
  "Arambol",
  "Mapusa",
  "Margao",
  "Vasco",
  "Colva",
  "Palolem",
  "Other (specify in notes)",
];

interface FormState {
  service: string;
  vehicle: string;
  from: string;
  to: string;
  date: string;
  time: string;
  returnDate: string;
  passengers: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const INITIAL: FormState = {
  service: "",
  vehicle: "",
  from: "",
  to: "",
  date: "",
  time: "",
  returnDate: "",
  passengers: "2",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [step, setStep] = useState(1);

  const taxiVehicles = vehicles.filter((v) => v.category === "taxi");
  const selfDriveVehicles = vehicles.filter((v) => v.category === "self-drive");

  const displayVehicles =
    form.service.toLowerCase().includes("self-drive")
      ? selfDriveVehicles
      : taxiVehicles;

  const selectedVehicle = vehicles.find((v) => v.id === form.vehicle);

  const priceEstimate = useMemo(() => {
    if (!selectedVehicle) return null;
    if (selectedVehicle.category === "self-drive") {
      return { label: "per day", amount: selectedVehicle.pricePerDay ?? 0 };
    }
    if (form.service.includes("8hr")) {
      return { label: "8hr/80km package", amount: selectedVehicle.packages?.["8hr80km"] ?? 0 };
    }
    if (form.service.includes("12hr")) {
      return { label: "12hr/120km package", amount: selectedVehicle.packages?.["12hr120km"] ?? 0 };
    }
    return { label: "starting from per km", amount: selectedVehicle.pricePerKm ?? 0 };
  }, [selectedVehicle, form.service]);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (field === "service") setForm((prev) => ({ ...prev, vehicle: "", service: e.target.value }));
  };

  const buildMessage = () => {
    const lines = [
      `Hello ZipGoa! 👋`,
      ``,
      `📋 BOOKING REQUEST`,
      `─────────────────`,
      `Service: ${form.service || "—"}`,
      `Vehicle: ${selectedVehicle?.name ?? form.vehicle ?? "—"}`,
      `From: ${form.from || "—"}`,
      `To: ${form.to || "—"}`,
      `Date: ${form.date || "—"}`,
      `Time: ${form.time || "—"}`,
      form.returnDate ? `Return: ${form.returnDate}` : null,
      `Passengers: ${form.passengers}`,
      ``,
      `👤 CUSTOMER DETAILS`,
      `─────────────────`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.notes ? `\nNotes: ${form.notes}` : null,
      ``,
      `Please confirm availability and share the final rate. Thank you!`,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackBookingComplete(selectedVehicle?.name ?? form.vehicle);
    window.open(buildMessage(), "_blank");
  };

  const labelClass = "block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5";
  const inputClass = "w-full h-11 px-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors";
  const selectClass = inputClass + " appearance-none cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step 1: Trip Details */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
        <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          <span className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ background: "var(--brand-primary)" }}>1</span>
          Trip Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={labelClass}>Service Type *</label>
            <select value={form.service} onChange={set("service")} required className={selectClass}>
              <option value="">Select service...</option>
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Pickup From *</label>
            <select value={form.from} onChange={set("from")} required className={selectClass}>
              <option value="">Select pickup location...</option>
              {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Drop To *</label>
            <select value={form.to} onChange={set("to")} required className={selectClass}>
              <option value="">Select drop location...</option>
              {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Date *</label>
            <input type="date" value={form.date} onChange={set("date")} required className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Time *</label>
            <input type="time" value={form.time} onChange={set("time")} required className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Return Date (if round trip)</label>
            <input type="date" value={form.returnDate} onChange={set("returnDate")} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Passengers *</label>
            <select value={form.passengers} onChange={set("passengers")} className={selectClass}>
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                <option key={n} value={String(n)}>{n} {n === 1 ? "person" : "people"}</option>
              ))}
              <option value="12+">12+ (large group)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Step 2: Vehicle */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
        <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          <span className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ background: "var(--brand-primary)" }}>2</span>
          Choose Vehicle
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayVehicles.map((v) => {
            const price = v.category === "self-drive"
              ? `₹${v.pricePerDay?.toLocaleString()}/day`
              : `₹${v.pricePerKm}/km`;
            const isSelected = form.vehicle === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, vehicle: v.id }))}
                className="text-left p-4 rounded-xl border-2 transition-all duration-150"
                style={{
                  borderColor: isSelected ? "var(--brand-primary)" : "var(--border)",
                  background: isSelected ? "oklch(0.265 0.078 254 / 0.06)" : "white",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-sm" style={{ color: isSelected ? "var(--brand-primary)" : undefined }}>{v.name}</p>
                  {isSelected && <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: "var(--brand-primary)" }}>✓</span>}
                </div>
                <p className="text-xs text-muted-foreground">{v.capacity} seats · {v.type}</p>
                <p className="text-sm font-bold mt-1" style={{ color: "var(--brand-accent)" }}>{price}</p>
              </button>
            );
          })}
        </div>

        {/* Price estimate */}
        {priceEstimate && selectedVehicle && (
          <div className="mt-4 rounded-xl p-4 flex items-center justify-between" style={{ background: "oklch(0.265 0.078 254 / 0.06)" }}>
            <div>
              <p className="text-xs text-muted-foreground">Estimated price ({priceEstimate.label})</p>
              <p className="font-extrabold text-2xl" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-accent)" }}>
                ₹{priceEstimate.amount.toLocaleString()}
              </p>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs text-right">Final price confirmed via WhatsApp before booking is confirmed.</p>
          </div>
        )}
      </div>

      {/* Step 3: Your Details */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
        <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
          <span className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ background: "var(--brand-primary)" }}>3</span>
          Your Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name *</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" value={form.name} onChange={set("name")} required placeholder="Your name"
                className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div>
            <label className={labelClass}>Phone Number *</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="tel" value={form.phone} onChange={set("phone")} required placeholder="+91 98765 43210"
                className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" value={form.email} onChange={set("email")} placeholder="your@email.com"
                className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>Special Requests / Notes</label>
            <div className="relative">
              <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
              <textarea value={form.notes} onChange={set("notes")} rows={3} placeholder="Child seat needed, extra luggage, wheelchair access, specific stops..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full h-14 text-base font-bold gap-3 shadow-xl"
        style={{ background: "var(--brand-primary)", color: "white" }}
      >
        <MessageCircle className="w-5 h-5" />
        Confirm Booking via WhatsApp
        <ArrowRight className="w-5 h-5" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Clicking confirm opens WhatsApp with all details pre-filled. We confirm within 5 minutes.
      </p>
    </form>
  );
}
