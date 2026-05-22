import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | ZipGoa Taxi Services",
  description:
    "Terms and conditions for using ZipGoa Taxi Services in Goa — taxi booking, car rental, airport transfers, and sightseeing tours.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "17 May 2025";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2
        className="text-xl font-bold mb-3 pb-2 border-b border-border"
        style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
      >
        {title}
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function TermsOfServicePage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Legal"
        title="Terms of"
        titleAccent="Service"
        subtitle="Please read these terms carefully before booking or using our services."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Meta info */}
          <div className="bg-secondary/50 rounded-2xl p-5 mb-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div><span className="font-semibold text-foreground">Business:</span> ZipGoa Taxi Services</div>
            <div><span className="font-semibold text-foreground">Last Updated:</span> {LAST_UPDATED}</div>
            <div><span className="font-semibold text-foreground">Jurisdiction:</span> Goa, India</div>
          </div>

          <div className="space-y-10">

            <Section id="acceptance" title="1. Acceptance of Terms">
              <p>
                By accessing <strong>zipgoataxiservices.in</strong> or using any of our taxi, car rental, or
                sightseeing services, you agree to be bound by these Terms of Service and our{" "}
                <Link href="/privacy-policy" className="underline" style={{ color: "var(--brand-primary)" }}>
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use our services.
              </p>
            </Section>

            <Section id="services" title="2. Services Offered">
              <p>ZipGoa Taxi Services provides:</p>
              <Ul items={[
                "Local taxi booking across Goa",
                "Airport transfers — Dabolim (GOI) & Mopa (GOX)",
                "Self-drive car rentals",
                "North Goa & South Goa full-day sightseeing tours",
                "Dudhsagar Waterfall day trips",
                "Outstation taxi services (Mumbai, Pune, Bangalore, etc.)",
                "Multi-day tour packages",
                "Hourly rental packages (8hr/80km, 12hr/120km)",
                "Group transport — Tempo Traveller & Urbania",
              ]} />
            </Section>

            <Section id="booking" title="3. Booking Terms">
              <p><strong>Booking process:</strong></p>
              <Ul items={[
                "Bookings accepted via website form, WhatsApp, or phone call",
                "A booking is confirmed only after you receive a written confirmation via WhatsApp or SMS",
                "Driver details are shared 1–2 hours before scheduled pickup",
                "Advance payment may be required for outstation and multi-day trips",
              ]} />
              <p className="mt-2"><strong>Accuracy of information:</strong></p>
              <p>
                You are responsible for providing accurate pickup location, date, time, and passenger count. Errors
                may result in failed pickups or additional charges.
              </p>
            </Section>

            <Section id="pricing" title="4. Pricing & Payment">
              <p><strong>Pricing:</strong></p>
              <Ul items={[
                "Rates are as displayed on the website at the time of booking",
                "Toll charges, parking fees, and interstate permit charges are extra",
                "Night charges (10 PM – 6 AM): 25% surcharge applies",
                "Driver allowance for trips requiring overnight stays: ₹500/night",
                "Outstation trips: Quoted as one-way or round-trip — confirm before booking",
              ]} />
              <p className="mt-2"><strong>Payment methods accepted:</strong></p>
              <Ul items={[
                "Cash",
                "UPI — Google Pay, PhonePe, Paytm",
                "Bank transfer (NEFT/IMPS)",
              ]} />
              <p className="mt-2"><strong>Advance payment:</strong></p>
              <Ul items={[
                "Local day trips: Payment after completion",
                "Outstation trips: 25–50% advance required",
                "Multi-day packages: 30% advance required",
                "Self-drive rentals: Full rental + refundable security deposit",
              ]} />
            </Section>

            <Section id="cancellation" title="5. Cancellation & Refund Policy">
              <p><strong>Customer cancellations:</strong></p>
              <div className="rounded-xl overflow-hidden border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Notice Given</th>
                      <th className="text-right px-4 py-2.5 font-semibold text-foreground">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["24+ hours before pickup", "Full refund"],
                      ["12–24 hours before pickup", "50% refund"],
                      ["Less than 12 hours", "25% refund"],
                      ["No-show", "No refund"],
                    ].map(([notice, refund]) => (
                      <tr key={notice} className="border-t border-border">
                        <td className="px-4 py-2.5">{notice}</td>
                        <td className="px-4 py-2.5 text-right font-medium" style={{ color: "var(--brand-primary)" }}>{refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                If <strong>we</strong> cancel due to unforeseen circumstances (vehicle breakdown, severe weather), a
                full refund will be issued and an alternative arrangement will be offered where possible.
              </p>
              <p>Refunds are processed within <strong>7–10 business days</strong> to the original payment method.</p>
            </Section>

            <Section id="customer-duties" title="6. Customer Responsibilities">
              <Ul items={[
                "Provide accurate booking details",
                "Be ready at the pickup point within 15 minutes of scheduled time",
                "Carry a valid government-issued photo ID",
                "Treat the driver and vehicle with respect",
                "No smoking inside the vehicle",
                "No consumption of alcohol or drugs during the trip",
                "Wear a seatbelt at all times",
                "Pay all dues promptly",
                "Report any issues immediately to our customer support",
              ]} />
            </Section>

            <Section id="self-drive" title="7. Self-Drive Rental Terms">
              <Ul items={[
                "A valid Indian or International driving licence is mandatory",
                "Minimum driver age: 21 years",
                "Refundable security deposit: ₹5,000 – ₹15,000 depending on vehicle",
                "Fuel: Collect and return at the same level",
                "Included kilometres: 300 km/day; excess charged at ₹10/km",
                "Vehicle damages are the customer's financial responsibility",
                "Late return: ₹200/hour penalty",
                "No off-road driving, racing, or use in prohibited areas",
                "Original documents (DL, Aadhaar/passport) to be carried at all times",
                "Basic insurance included; comprehensive insurance at additional cost",
              ]} />
            </Section>

            <Section id="vehicle-standards" title="8. Our Standards">
              <p>We provide:</p>
              <Ul items={[
                "Well-maintained, regularly serviced vehicles",
                "Police-verified, licensed drivers with 5+ years experience",
                "Fully air-conditioned vehicles",
                "GPS-enabled fleet",
                "24/7 customer support",
              ]} />
            </Section>

            <Section id="liability" title="9. Liability">
              <p><strong>We are responsible for:</strong></p>
              <Ul items={[
                "Safe transportation using licensed vehicles",
                "Third-party vehicle insurance as required by Indian law",
              ]} />
              <p><strong>We are NOT liable for:</strong></p>
              <Ul items={[
                "Lost or damaged personal belongings",
                "Delays caused by traffic, road conditions, or weather",
                "Force majeure events (natural disasters, strikes, etc.)",
                "Consequences of customer-provided incorrect information",
                "Indirect or consequential damages of any kind",
              ]} />
            </Section>

            <Section id="lost-found" title="10. Lost & Found">
              <p>
                Items left in our vehicles will be held for 30 days. Contact us immediately at{" "}
                <a href="tel:+917026889254" className="underline" style={{ color: "var(--brand-primary)" }}>+91 7026889254</a>{" "}
                with your booking details to arrange collection or courier (courier cost borne by the customer).
              </p>
            </Section>

            <Section id="prohibited" title="11. Prohibited Activities">
              <p>Customers must not:</p>
              <Ul items={[
                "Use our services for any illegal purpose",
                "Carry prohibited items — drugs, weapons, hazardous materials",
                "Intentionally damage vehicles or property",
                "Harass, threaten, or abuse drivers or staff",
                "Provide false identity or booking information",
                "Board in a heavily intoxicated state",
              ]} />
              <p>
                Violations may result in immediate termination of service (without refund) and potential legal action.
              </p>
            </Section>

            <Section id="ip" title="12. Intellectual Property">
              <p>
                All content on this website — including logos, text, images, and design — is the exclusive property
                of ZipGoa Taxi Services. Unauthorised reproduction or use is strictly prohibited.
              </p>
            </Section>

            <Section id="disputes" title="13. Complaints & Disputes">
              <p>For any complaint:</p>
              <Ul items={[
                "Contact customer support via WhatsApp or phone first",
                "Provide your booking confirmation number and details",
                "Allow 48 hours for our team to respond",
                "Unresolved disputes will be settled by arbitration in Goa, India",
              ]} />
            </Section>

            <Section id="modifications" title="14. Modifications">
              <p>
                We reserve the right to modify these Terms at any time. Changes are effective upon posting on this
                page. Continued use of our services after changes are posted constitutes acceptance.
              </p>
            </Section>

            <Section id="governing-law" title="15. Governing Law">
              <p>
                These Terms of Service are governed by the laws of India. Courts in Goa, India have exclusive
                jurisdiction over any disputes arising from these terms or your use of our services.
              </p>
            </Section>

            {/* Contact card */}
            <Section id="contact" title="16. Contact Information">
              <div
                className="rounded-2xl p-6 space-y-1.5 text-sm"
                style={{ background: "oklch(0.265 0.078 254 / 0.06)" }}
              >
                <p className="font-bold text-foreground text-base">ZipGoa Taxi Services</p>
                <p>Owner: Sumit Rathod</p>
                <p>Parra, North Goa, 403510, India</p>
                <p>
                  Phone / WhatsApp:{" "}
                  <a href="tel:+917026889254" className="underline" style={{ color: "var(--brand-primary)" }}>
                    +91 7026889254
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:ezygoataxiservices@gmail.com" className="underline" style={{ color: "var(--brand-primary)" }}>
                    ezygoataxiservices@gmail.com
                  </a>
                </p>
                <p>Support hours: 24/7</p>
              </div>
            </Section>

          </div>

          {/* Cross-links */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="underline" style={{ color: "var(--brand-primary)" }}>
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="underline" style={{ color: "var(--brand-primary)" }}>
              Refund &amp; Cancellation Policy
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
