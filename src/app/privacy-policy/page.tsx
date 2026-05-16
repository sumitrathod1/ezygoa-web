import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | EzyGoa Taxi Services",
  description:
    "Privacy Policy for EzyGoa Taxi Services. Learn how we collect, use, and protect your personal information when you book a taxi or car rental in Goa.",
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

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Legal"
        title="Privacy"
        titleAccent="Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Meta info */}
          <div className="bg-secondary/50 rounded-2xl p-5 mb-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div><span className="font-semibold text-foreground">Business:</span> EzyGoa Taxi Services</div>
            <div><span className="font-semibold text-foreground">Last Updated:</span> {LAST_UPDATED}</div>
            <div><span className="font-semibold text-foreground">Applies to:</span> ezygoataxiservices.in</div>
          </div>

          <div className="space-y-10">

            <Section id="introduction" title="1. Introduction">
              <p>
                Welcome to EzyGoa Taxi Services ("we," "our," or "us"), operated by Sumit Rathod from Parra, North Goa,
                India. We are committed to protecting your personal information and your right to privacy.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                visit our website <strong>ezygoataxiservices.in</strong> or use our taxi booking, car rental, and
                sightseeing services. Please read it carefully.
              </p>
            </Section>

            <Section id="information-collected" title="2. Information We Collect">
              <p><strong>Personal information you provide:</strong></p>
              <Ul items={[
                "Full name",
                "Phone number (for WhatsApp / SMS communication)",
                "Email address",
                "Pickup and drop-off locations",
                "Travel dates and times",
                "Number of passengers",
                "Payment information (UPI, bank transfer references)",
                "Government ID (for self-drive rental verification)",
              ]} />
              <p className="mt-2"><strong>Information collected automatically:</strong></p>
              <Ul items={[
                "IP address and device information",
                "Browser type and version",
                "Pages visited and time spent",
                "Referring URLs",
                "Cookies and similar tracking technologies",
                "Location data (only with your explicit permission)",
              ]} />
            </Section>

            <Section id="how-we-use" title="3. How We Use Your Information">
              <Ul items={[
                "To process and confirm taxi / car rental bookings",
                "To send booking confirmations via WhatsApp and SMS",
                "To share driver details and trip updates",
                "To provide customer support and resolve disputes",
                "To process payments and issue receipts",
                "To analyse website performance (Google Analytics)",
                "To run advertising campaigns (Google Ads)",
                "To send promotional offers — only with your consent",
                "To comply with legal and regulatory obligations",
                "To detect and prevent fraud",
              ]} />
            </Section>

            <Section id="sharing" title="4. Information Sharing">
              <p>We may share your information with:</p>
              <Ul items={[
                "Drivers — name, phone, pickup location for service delivery",
                "Payment processors — for secure transaction handling",
                "Service providers — Google Maps, WhatsApp, SMS gateways",
                "Legal authorities — when required by Indian law",
              ]} />
              <p className="mt-3 font-semibold" style={{ color: "var(--brand-primary)" }}>
                We do NOT sell your personal information to any third party.
              </p>
            </Section>

            <Section id="cookies" title="5. Cookies & Tracking">
              <p>We use cookies for:</p>
              <Ul items={[
                "Remembering your preferences and session data",
                "Website analytics via Google Analytics",
                "Advertising via Google Ads",
                "Security and fraud prevention",
              ]} />
              <p>
                You can control or disable cookies through your browser settings. Disabling some cookies may affect
                website functionality.
              </p>
            </Section>

            <Section id="google-services" title="6. Google Services">
              <p>
                Our website uses Google Analytics, Google Ads, and Google Maps. These services collect usage data
                under{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Google&apos;s Privacy Policy
                </a>
                . You may opt out of Google Analytics using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </Section>

            <Section id="security" title="7. Data Security">
              <p>We implement security measures including:</p>
              <Ul items={[
                "SSL/TLS encryption on all web traffic",
                "Restricted access to customer data",
                "Secure WhatsApp Business communication",
                "Regular review of data handling practices",
              ]} />
              <p>
                No internet transmission is 100% secure. While we use commercially reasonable efforts to protect your
                data, we cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="your-rights" title="8. Your Rights">
              <p>Under applicable law you have the right to:</p>
              <Ul items={[
                "Access the personal data we hold about you",
                "Correct inaccurate or incomplete information",
                "Request deletion of your data",
                "Withdraw consent for marketing communications",
                "Opt out of promotional messages at any time",
                "File a complaint with the relevant authority",
              ]} />
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:ezygoataxiservices@gmail.com" className="underline" style={{ color: "var(--brand-primary)" }}>
                  ezygoataxiservices@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section id="retention" title="9. Data Retention">
              <Ul items={[
                "Booking records: 7 years (required by Indian tax law)",
                "Marketing consent data: Until you opt out",
                "Google Analytics data: 26 months",
                "Customer support conversations: 2 years",
              ]} />
            </Section>

            <Section id="children" title="10. Children's Privacy">
              <p>
                Our services are intended for individuals aged 18 and above. We do not knowingly collect personal
                information from minors. If you believe we have inadvertently collected such data, please contact us
                immediately and we will delete it.
              </p>
            </Section>

            <Section id="whatsapp" title="11. WhatsApp Communication">
              <p>
                By booking with us you consent to receive WhatsApp messages for booking confirmations, driver details,
                trip updates, payment receipts, and customer support. You may opt out of promotional messages at any
                time by replying "STOP".
              </p>
            </Section>

            <Section id="third-party" title="12. Third-Party Links">
              <p>
                Our website may contain links to external sites (Google Maps, payment gateways, etc.). We are not
                responsible for the privacy practices of those sites. Please review their policies before sharing
                personal information.
              </p>
            </Section>

            <Section id="changes" title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date at the top of
                this page will reflect any changes. Continued use of our services after changes are posted constitutes
                your acceptance of the updated policy.
              </p>
            </Section>

            <Section id="governing-law" title="14. Governing Law">
              <p>
                This Privacy Policy is governed by the laws of India. Any disputes arising from this policy will be
                subject to the exclusive jurisdiction of courts in Goa, India.
              </p>
            </Section>

            {/* Contact card */}
            <Section id="contact" title="15. Contact Us">
              <p>For privacy concerns or data requests:</p>
              <div
                className="rounded-2xl p-6 mt-3 space-y-1.5 text-sm"
                style={{ background: "oklch(0.265 0.078 254 / 0.06)" }}
              >
                <p className="font-bold text-foreground text-base">EzyGoa Taxi Services</p>
                <p>Owner: Sumit Rathod</p>
                <p>Parra, North Goa, 403510, India</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+917026889254" className="underline" style={{ color: "var(--brand-primary)" }}>
                    +91 7026889254
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a href="https://wa.me/917026889254" className="underline" style={{ color: "var(--brand-primary)" }}>
                    +91 7026889254
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:ezygoataxiservices@gmail.com" className="underline" style={{ color: "var(--brand-primary)" }}>
                    ezygoataxiservices@gmail.com
                  </a>
                </p>
              </div>
            </Section>

          </div>

          {/* Cross-links */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/terms-of-service" className="underline" style={{ color: "var(--brand-primary)" }}>
              Terms of Service
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
