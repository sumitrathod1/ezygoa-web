import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | ZipGoa Taxi Services",
  description:
    "Refund and cancellation policy for ZipGoa Taxi Services. Clear terms for taxi bookings, car rentals, and tour packages in Goa.",
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

function PolicyTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/50">
            <th className="text-left px-4 py-2.5 font-semibold text-foreground">Service Type</th>
            <th className="text-left px-4 py-2.5 font-semibold text-foreground">Notice Given</th>
            <th className="text-right px-4 py-2.5 font-semibold text-foreground">Refund</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([service, notice, refund]) => (
            <tr key={service + notice} className="border-t border-border">
              <td className="px-4 py-2.5 font-medium text-foreground">{service}</td>
              <td className="px-4 py-2.5">{notice}</td>
              <td className="px-4 py-2.5 text-right font-semibold" style={{ color: "var(--brand-primary)" }}>{refund}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RefundPolicyPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Legal"
        title="Refund &"
        titleAccent="Cancellation Policy"
        subtitle="Clear and fair cancellation terms for all our taxi, tour, and car rental services."
        breadcrumbs={[{ label: "Refund Policy" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Meta info */}
          <div className="bg-secondary/50 rounded-2xl p-5 mb-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div><span className="font-semibold text-foreground">Business:</span> ZipGoa Taxi Services</div>
            <div><span className="font-semibold text-foreground">Last Updated:</span> {LAST_UPDATED}</div>
            <div><span className="font-semibold text-foreground">Contact:</span> +91 7026889254</div>
          </div>

          <div className="space-y-10">

            <Section id="overview" title="1. Overview">
              <p>
                At ZipGoa Taxi Services we aim to be transparent and fair. This policy outlines how cancellations
                and refunds are handled for all our services — local taxi rides, airport transfers, sightseeing tours,
                outstation trips, and self-drive rentals.
              </p>
              <p>
                To cancel a booking, contact us via WhatsApp or phone at{" "}
                <a href="tel:+917026889254" className="underline" style={{ color: "var(--brand-primary)" }}>
                  +91 7026889254
                </a>{" "}
                as early as possible.
              </p>
            </Section>

            <Section id="customer-cancellations" title="2. Customer Cancellations">
              <p><strong>Local taxi &amp; airport transfers:</strong></p>
              <PolicyTable rows={[
                ["Airport / Local Transfer", "24+ hours before pickup", "Full refund"],
                ["Airport / Local Transfer", "12–24 hours before", "50% refund"],
                ["Airport / Local Transfer", "Less than 12 hours", "25% refund"],
                ["Airport / Local Transfer", "No-show", "No refund"],
              ]} />

              <p className="mt-4"><strong>Sightseeing tours &amp; day trips:</strong></p>
              <PolicyTable rows={[
                ["Day Tour / Dudhsagar", "48+ hours before", "Full refund"],
                ["Day Tour / Dudhsagar", "24–48 hours before", "50% refund"],
                ["Day Tour / Dudhsagar", "Less than 24 hours", "No refund"],
              ]} />

              <p className="mt-4"><strong>Outstation &amp; multi-day trips:</strong></p>
              <PolicyTable rows={[
                ["Outstation / Multi-day", "72+ hours before", "Full refund"],
                ["Outstation / Multi-day", "48–72 hours before", "50% refund"],
                ["Outstation / Multi-day", "Less than 48 hours", "25% refund"],
                ["Outstation / Multi-day", "No-show", "No refund"],
              ]} />

              <p className="mt-4"><strong>Self-drive car rentals:</strong></p>
              <PolicyTable rows={[
                ["Self-Drive Rental", "48+ hours before pickup", "Full refund"],
                ["Self-Drive Rental", "24–48 hours before", "50% refund"],
                ["Self-Drive Rental", "Less than 24 hours", "No refund"],
                ["Self-Drive Rental", "Vehicle collected (no damage)", "Security deposit returned in full"],
              ]} />
            </Section>

            <Section id="our-cancellations" title="3. Cancellation by ZipGoa">
              <p>
                If we cancel your booking due to vehicle breakdown, driver unavailability, severe weather, or other
                unforeseen circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>A <strong>full refund</strong> will be issued</li>
                <li>We will make every effort to arrange an alternative vehicle</li>
                <li>You will be notified as soon as possible</li>
              </ul>
            </Section>

            <Section id="refund-process" title="4. Refund Process">
              <ul className="list-disc pl-5 space-y-1">
                <li>Refunds are processed within <strong>7–10 business days</strong></li>
                <li>Refunds are credited to the original payment method (UPI, bank account, etc.)</li>
                <li>Cash payments are refunded via bank transfer or UPI — provide your account details</li>
                <li>Partial refunds will reflect the applicable cancellation percentage</li>
              </ul>
            </Section>

            <Section id="modifications" title="5. Trip Modifications">
              <p>
                You may modify your booking (date, time, vehicle type) subject to availability:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modifications 24+ hours before: No charge</li>
                <li>Modifications within 12 hours: ₹200 modification fee may apply</li>
                <li>Vehicle upgrades: Price difference is charged</li>
                <li>Contact us via WhatsApp for any changes</li>
              </ul>
            </Section>

            <Section id="no-refund" title="6. Non-Refundable Situations">
              <ul className="list-disc pl-5 space-y-1">
                <li>Trip completed (full or partial)</li>
                <li>Customer no-show without prior cancellation</li>
                <li>Cancellation caused by customer providing incorrect information</li>
                <li>Service refused due to violation of our Terms of Service</li>
                <li>Dudhsagar trip affected by government-ordered waterfall closure (jeep safari charges)</li>
              </ul>
            </Section>

            <Section id="disputes" title="7. Disputes">
              <p>
                If you disagree with a cancellation or refund decision, contact us with your booking details and we
                will review the case within 48 hours. Unresolved disputes will be handled through arbitration in
                Goa, India.
              </p>
            </Section>

            {/* Contact card */}
            <Section id="contact" title="8. Contact for Cancellations">
              <div
                className="rounded-2xl p-6 space-y-1.5 text-sm"
                style={{ background: "oklch(0.265 0.078 254 / 0.06)" }}
              >
                <p className="font-bold text-foreground text-base">ZipGoa Taxi Services</p>
                <p>
                  WhatsApp / Phone:{" "}
                  <a href="https://wa.me/917026889254" className="underline" style={{ color: "var(--brand-primary)" }}>
                    +91 7026889254
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:contact@zipgoa.com" className="underline" style={{ color: "var(--brand-primary)" }}>
                    contact@zipgoa.com
                  </a>
                </p>
                <p>Available: 24/7 for cancellation requests</p>
              </div>
            </Section>

          </div>

          {/* Cross-links */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="underline" style={{ color: "var(--brand-primary)" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="underline" style={{ color: "var(--brand-primary)" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
