import type { Metadata } from "next";
import { CheckCircle, XCircle } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BookingButton } from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "North Goa Sightseeing Tour | Full Day Tour | EzyGoa Taxi",
  description:
    "Full-day North Goa sightseeing tour covering Fort Aguada, Calangute, Baga, Anjuna, Chapora Fort, and Vagator Beach. Fixed fares, expert local drivers.",
  keywords: ["North Goa tour", "North Goa sightseeing", "Calangute Baga tour", "Anjuna Chapora tour", "Goa full day tour"],
  openGraph: {
    title: "North Goa Full Day Sightseeing Tour | EzyGoa",
    description: "Explore Fort Aguada, Calangute, Baga, Anjuna & Chapora Fort in one day. From ₹2,500.",
  },
};

const ITINERARY = [
  { time: "9:00 AM",  place: "Hotel Pickup",        desc: "Our driver arrives at your hotel / stay in North Goa." },
  { time: "9:30 AM",  place: "Dolphin Sightseeing", desc: "Exciting boat ride to spot wild dolphins in the Arabian Sea (cost not included)." },
  { time: "10:30 AM", place: "Fort Aguada",          desc: "Explore the iconic 17th-century Portuguese fort with panoramic sea views." },
  { time: "11:15 AM", place: "Candolim Beach",       desc: "Quick stop at the serene, less-crowded Candolim beach." },
  { time: "11:45 AM", place: "Calangute Beach & Snow Park", desc: "The Queen of Beaches — explore the main beach and shacks. Snow Park nearby (optional, tickets extra)." },
  { time: "12:30 PM", place: "Baga Beach",           desc: "Walk the famous Baga beach promenade, water sports optional." },
  { time: "1:30 PM",  place: "Lunch Break",          desc: "Lunch at a recommended beachside shack (cost not included)." },
  { time: "2:30 PM",  place: "Anjuna Beach",         desc: "Explore Anjuna's rocky coastline and stunning cliff views." },
  { time: "3:30 PM",  place: "Chapora Fort",         desc: "The famous Dil Chahta Hai fort — stunning views of Vagator Beach." },
  { time: "4:15 PM",  place: "Vagator Beach",        desc: "Sunset views from Little Vagator (Little Beach)." },
  { time: "5:30 PM",  place: "Return to Hotel",      desc: "Drop at your hotel or any preferred location." },
];

const PRICES = [
  { vehicle: "Maruti Dzire",         seats: "1–4 people",  price: 2500 },
  { vehicle: "Maruti Ertiga",        seats: "1–6 people",  price: 3000 },
  { vehicle: "Toyota Innova Crysta", seats: "1–7 people",  price: 3500 },
  { vehicle: "Tempo Traveller 12",   seats: "8–12 people", price: 4000 },
  { vehicle: "Tempo Traveller 14",   seats: "8–14 people", price: 4500 },
  { vehicle: "Tempo Traveller 20",   seats: "12–20 people",price: 4500 },
  { vehicle: "Force Urbania 17",     seats: "up to 17",    price: 8000 },
];

const INCLUDED = [
  "AC vehicle for the full day (9 AM – 5:30 PM approx.)",
  "Professional & knowledgeable driver",
  "All fuel and vehicle expenses",
  "Free waiting time at each location",
  "Hotel pickup & drop within North Goa",
];

const NOT_INCLUDED = [
  "Entry tickets to forts (usually free)",
  "Lunch and refreshments",
  "Water sports activities",
  "Personal shopping",
  "Tips for driver (appreciated!)",
];

export default function NorthGoaTourPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="North Goa Tour"
        title="North Goa"
        titleAccent="Full Day Tour"
        subtitle="Dolphin Sightseeing · Fort Aguada · Calangute · Baga · Anjuna · Chapora Fort · Vagator. The best of North Goa in one unforgettable day."
        breadcrumbs={[{ label: "Services", href: "/goa-sightseeing" }, { label: "North Goa Tour" }]}
      />

      {/* Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {[
              { label: "Duration", value: "8–10 Hours", emoji: "⏱️" },
              { label: "Stops", value: "9 Places", emoji: "📍" },
              { label: "Starts At", value: "₹2,500", emoji: "💰" },
              { label: "Pickup", value: "From Hotel", emoji: "🏨" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center card-hover">
                <div className="text-2xl mb-2">{stat.emoji}</div>
                <p className="font-extrabold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Itinerary */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Tour Itinerary
              </h2>
              <div className="space-y-0">
                {ITINERARY.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: i === 0 || i === ITINERARY.length - 1 ? "var(--brand-accent)" : "var(--brand-primary)" }}
                      >
                        {i + 1}
                      </div>
                      {i < ITINERARY.length - 1 && (
                        <div className="w-px flex-1 my-1" style={{ background: "var(--border)", minHeight: "24px" }} />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-5 ${i === ITINERARY.length - 1 ? "" : ""}`}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-muted-foreground">{item.time}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <h3 className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>{item.place}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Pricing */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>Vehicle Pricing</h3>
                </div>
                <div className="divide-y divide-border">
                  {PRICES.map((p) => (
                    <div key={p.vehicle} className="p-4 flex items-center justify-between hover:bg-secondary/20 transition-colors">
                      <div>
                        <p className="font-semibold text-sm">{p.vehicle}</p>
                        <p className="text-xs text-muted-foreground">{p.seats}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-base" style={{ color: "var(--brand-primary)" }}>
                          ₹{p.price.toLocaleString()}
                        </p>
                        <BookingButton
                          asText
                          label="Book →"
                          modalTitle={`North Goa Tour · ${p.vehicle}`}
                          service="North Goa Full Day Tour"
                          vehicle={p.vehicle}
                          className="text-xs font-semibold hover:underline"
                          style={{ color: "var(--brand-accent)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                  <CheckCircle className="w-4 h-4 text-green-500" /> Included
                </h3>
                <ul className="space-y-2">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                  <XCircle className="w-4 h-4 text-red-400" /> Not Included
                </h3>
                <ul className="space-y-2">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <BookingButton
                label="Book This Tour"
                modalTitle="North Goa Full Day Tour"
                service="North Goa Full Day Tour"
                className="w-full h-12 text-base font-bold"
                style={{ background: "var(--brand-primary)", color: "white" }}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
