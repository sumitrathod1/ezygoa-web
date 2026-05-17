import type { Metadata } from "next";
import { CheckCircle, XCircle } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BookingButton } from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "South Goa Sightseeing Tour | Full Day | EzyGoa Taxi",
  description:
    "Explore South Goa's serene beaches, Old Goa churches, Mangueshi Temple, and spice plantations in a full-day tour. Book with EzyGoa — from ₹3,000.",
  keywords: ["South Goa tour", "Old Goa churches", "Colva beach tour", "South Goa sightseeing", "Margao taxi"],
  openGraph: {
    title: "South Goa Full Day Sightseeing Tour | EzyGoa",
    description: "Old Goa, Colva, Mangueshi Temple, Palolem. Full-day South Goa tour. From ₹3,000.",
  },
};

const ITINERARY = [
  { time: "9:00 AM",  place: "Hotel Pickup",             desc: "Driver arrives at your hotel in North or South Goa." },
  { time: "10:00 AM", place: "Basilica of Bom Jesus",    desc: "UNESCO-listed church housing St. Francis Xavier's remains. Stunning baroque architecture." },
  { time: "10:45 AM", place: "Se Cathedral & Churches",  desc: "Asia's largest church and the Church of St. Cajetan — the Rome of the East." },
  { time: "11:45 AM", place: "Mangueshi Temple",         desc: "One of Goa's most important and beautiful temples with stunning architecture." },
  { time: "12:30 PM", place: "Spice Plantation",         desc: "Guided walk through a lush spice farm — see cardamom, pepper, nutmeg and more." },
  { time: "1:30 PM",  place: "Lunch Break",              desc: "Traditional Goan thali at the spice plantation or local restaurant (cost not included)." },
  { time: "2:45 PM",  place: "Panjim Church",            desc: "The famous Our Lady of the Immaculate Conception Church — Goa's most photographed landmark." },
  { time: "3:30 PM",  place: "Dona Paula",               desc: "Scenic viewpoint where two rivers meet the sea — stunning panoramic views." },
  { time: "4:15 PM",  place: "Miramar Beach",            desc: "Panjim's city beach — golden sand along the Mandovi river estuary, perfect for a sunset walk." },
  { time: "5:00 PM",  place: "Boat Cruise",              desc: "Relaxing boat cruise on the Mandovi river — enjoy Goa's skyline from the water (cost not included)." },
  { time: "6:00 PM",  place: "Return to Hotel",          desc: "Drop at your hotel or any preferred location in Goa." },
];

const PRICES = [
  { vehicle: "Maruti Dzire",         seats: "1–4 people",  price: 2800 },
  { vehicle: "Maruti Ertiga",        seats: "1–6 people",  price: 3500 },
  { vehicle: "Toyota Innova Crysta", seats: "1–7 people",  price: 4000 },
  { vehicle: "Tempo Traveller 12",   seats: "8–12 people", price: 4500 },
  { vehicle: "Tempo Traveller 14",   seats: "8–14 people", price: 5000 },
  { vehicle: "Tempo Traveller 20",   seats: "12–20 people",price: 5000 },
  { vehicle: "Force Urbania 17",     seats: "up to 17",    price: 9000 },
];

const INCLUDED = [
  "AC vehicle for full day (9 AM – 6 PM approx.)",
  "Expert driver who knows the history",
  "All fuel and vehicle expenses",
  "Hotel pickup & drop anywhere in Goa",
  "Flexible stops based on your preference",
];

const NOT_INCLUDED = [
  "Entry fees (Old Goa churches are free)",
  "Lunch and refreshments",
  "Personal shopping",
  "Boat rides or water activities",
];

export default function SouthGoaTourPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="South Goa Tour"
        title="South Goa"
        titleAccent="Full Day Tour"
        subtitle="Old Goa churches · Mangueshi Temple · Spice Plantation · Panjim Church · Dona Paula · Miramar Beach · Boat Cruise. Heritage &amp; beauty in one day."
        breadcrumbs={[{ label: "Services", href: "/goa-sightseeing" }, { label: "South Goa Tour" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {[
              { label: "Duration", value: "9–10 Hours", emoji: "⏱️" },
              { label: "Stops", value: "10 Places", emoji: "📍" },
              { label: "Starts At", value: "₹3,000", emoji: "💰" },
              { label: "Best For", value: "Heritage & Beaches", emoji: "⛪" },
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
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: i === 0 || i === ITINERARY.length - 1 ? "var(--brand-accent)" : "var(--brand-primary)" }}>
                        {i + 1}
                      </div>
                      {i < ITINERARY.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "var(--border)", minHeight: "24px" }} />}
                    </div>
                    <div className="pb-5">
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
                        <p className="font-bold text-base" style={{ color: "var(--brand-primary)" }}>₹{p.price.toLocaleString()}</p>
                        <BookingButton
                          asText
                          label="Book →"
                          modalTitle={`South Goa Tour · ${p.vehicle}`}
                          service="South Goa Full Day Tour"
                          vehicle={p.vehicle}
                          className="text-xs font-semibold hover:underline"
                          style={{ color: "var(--brand-accent)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                  <CheckCircle className="w-4 h-4 text-green-500" /> Included
                </h3>
                <ul className="space-y-2">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                  <XCircle className="w-4 h-4 text-red-400" /> Not Included
                </h3>
                <ul className="space-y-2">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-400" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <BookingButton
                label="Book This Tour"
                modalTitle="South Goa Full Day Tour"
                service="South Goa Full Day Tour"
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
