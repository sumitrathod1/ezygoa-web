import type { Metadata } from "next";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dudhsagar Waterfall Trip from Goa | Full Day Tour | EzyGoa",
  description:
    "Full-day Dudhsagar Waterfall trip from Goa. Jeep safari, spice plantation, jungle trail. India's 4th tallest waterfall. Taxi from ₹3,500. Book with EzyGoa.",
  keywords: ["Dudhsagar trip", "Dudhsagar waterfall Goa", "Dudhsagar jeep safari", "Goa waterfall tour", "Dudhsagar full day trip"],
  openGraph: {
    title: "Dudhsagar Waterfall Trip | EzyGoa Taxi",
    description: "India's 4th tallest waterfall. Full-day trip with jeep safari from Goa. From ₹3,500.",
  },
};

const TRIP_FLOW = [
  { time: "7:00 AM", step: "Hotel Pickup", desc: "Early start — we pick you up from your hotel in North or South Goa." },
  { time: "9:30 AM", step: "Arrive at Mollem", desc: "Reach Bhagwan Mahavir Wildlife Sanctuary — base point for the falls." },
  { time: "10:00 AM", step: "Jeep Safari Begins", desc: "Hop into a shared jeep (₹600/person extra) for the off-road trail to the falls through dense jungle." },
  { time: "11:00 AM", step: "Dudhsagar Falls", desc: "Arrive at India's 4th tallest waterfall — 310 metres of pure white cascade. Swim in the pools below (seasonal)." },
  { time: "1:00 PM", step: "Spice Plantation Visit", desc: "On the return, stop at a Goan spice plantation — guided walk and traditional Goan lunch (extra)." },
  { time: "3:30 PM", step: "Return Drive", desc: "Comfortable drive back in your AC vehicle." },
  { time: "5:30 PM", step: "Drop at Hotel", desc: "Back at your hotel, tired but happy." },
];

const PRICES = [
  { vehicle: "Maruti Dzire", seats: "1–4 people", price: 3500 },
  { vehicle: "Maruti Ertiga", seats: "1–6 people", price: 4500 },
  { vehicle: "Toyota Innova Crysta", seats: "1–7 people", price: 5500 },
];

const WHAT_TO_BRING = [
  "Swimwear and towel (if you want to swim)",
  "Change of clothes",
  "Waterproof bag for phone / valuables",
  "Light snacks and water bottles",
  "Comfortable footwear / flip-flops",
  "Sunscreen and insect repellent",
  "Cash (for jeep safari, lunch, etc.)",
];

const IMPORTANT_NOTES = [
  "Jeep safari is ₹600/person extra — shared jeep, not included in taxi price",
  "Dudhsagar is inside a wildlife sanctuary — no private vehicles allowed inside",
  "Best visited June–January (monsoon flows are spectacular but access may vary)",
  "May–June: Falls may be closed / restricted — confirm before booking",
  "Swimming is allowed in designated areas near the falls",
];

export default function DudhsagarTripPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Adventure Trip"
        title="Dudhsagar"
        titleAccent="Waterfall Trip"
        subtitle="India's 4th tallest waterfall — 310 metres of raw, thundering white cascade. A full-day adventure through Goa's jungle heart."
        breadcrumbs={[{ label: "Services", href: "/goa-sightseeing" }, { label: "Dudhsagar Trip" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {[
              { label: "Duration", value: "10–12 Hours", emoji: "⏱️" },
              { label: "Waterfall Height", value: "310 Metres", emoji: "🌊" },
              { label: "Taxi Starts At", value: "₹3,500", emoji: "💰" },
              { label: "Jeep Safari", value: "₹600/person", emoji: "🚙" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center card-hover">
                <div className="text-2xl mb-2">{s.emoji}</div>
                <p className="font-extrabold text-lg" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Trip Flow */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Trip Itinerary
              </h2>
              <div className="space-y-0">
                {TRIP_FLOW.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: i === 3 ? "var(--brand-accent)" : "var(--brand-primary)" }}>
                        {i + 1}
                      </div>
                      {i < TRIP_FLOW.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "var(--border)", minHeight: "24px" }} />}
                    </div>
                    <div className="pb-5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-muted-foreground">{item.time}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <h3 className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>{item.step}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Bring */}
              <div className="mt-8 bg-white rounded-2xl border border-border shadow-sm p-6">
                <h3 className="font-bold text-base mb-4" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                  What to Bring
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {WHAT_TO_BRING.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Pricing */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>Trip Cost</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Taxi price only. Jeep safari separate.</p>
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
                        <a href={buildWhatsAppUrl({ service: "Dudhsagar Trip", vehicle: p.vehicle })} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-semibold hover:underline" style={{ color: "var(--brand-accent)" }}>Book →</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-secondary/30 text-xs text-muted-foreground">
                  + Jeep safari: ₹600/person (paid at Mollem directly)
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "var(--brand-primary)" }}>
                  <AlertCircle className="w-4 h-4" style={{ color: "var(--brand-accent)" }} /> Important Notes
                </h3>
                <ul className="space-y-2">
                  {IMPORTANT_NOTES.map((note) => (
                    <li key={note} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={buildWhatsAppUrl({ service: "Dudhsagar Waterfall Trip" })} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-12 text-base font-bold" style={{ background: "var(--brand-primary)", color: "white" }}>
                  Book Dudhsagar Trip
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
