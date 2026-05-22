import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | ZipGoa Taxi Services Goa",
  description:
    "Get in touch with ZipGoa Taxi Services. Call, WhatsApp, or email us anytime. 24/7 support. Parra, North Goa.",
  keywords: ["ZipGoa contact", "taxi Goa phone", "book taxi Goa", "Goa taxi WhatsApp"],
  openGraph: {
    title: "Contact ZipGoa Taxi Services",
    description: "Call or WhatsApp us 24/7 to book your Goa taxi or rental car.",
  },
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    value: BUSINESS.phoneDisplay,
    sub: "Available 24/7",
    href: `tel:${BUSINESS.phone}`,
    color: "var(--brand-primary)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: BUSINESS.phoneDisplay,
    sub: "Fastest response",
    href: buildWhatsAppUrl(),
    color: "#48bb78",
    target: "_blank",
  },
  {
    icon: Mail,
    title: "Email",
    value: BUSINESS.email,
    sub: "Reply within 2 hours",
    href: `mailto:${BUSINESS.email}`,
    color: "var(--brand-accent)",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: BUSINESS.address,
    sub: "North Goa, India",
    href: "https://maps.google.com/?q=Parra,Goa,India",
    color: "#e53e3e",
    target: "_blank",
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="24/7 Support"
        title="Get in"
        titleAccent="Touch"
        subtitle="We're always here. Call, WhatsApp, or drop us a message — we respond in minutes."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {CONTACT_CARDS.map(({ icon: Icon, title, value, sub, href, color, target }) => (
              <a
                key={title}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover flex flex-col items-center text-center group"
              >
                <div
                  className="w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm font-medium break-all mb-1" style={{ color: "var(--brand-primary)" }}>{value}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </a>
            ))}
          </div>

          {/* Form + Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm p-7">
              <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                Send Us a Message
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in your details and your message will open in WhatsApp — fastest way to reach us.
              </p>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="space-y-5">
              {/* Business hours */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4" style={{ color: "var(--brand-primary)" }} />
                  <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Sunday", hours: "24 Hours" },
                    { day: "Public Holidays", hours: "24 Hours" },
                    { day: "Airport Transfers", hours: "Always Available" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold" style={{ color: "var(--brand-success)" }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick response */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "var(--brand-primary)" }}
              >
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Fastest Way to Book
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  WhatsApp us right now — bookings confirmed within 5 minutes.
                </p>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1a365d15, #1a365d30)" }}
                >
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: "var(--brand-primary)" }} />
                    <p className="text-sm font-medium" style={{ color: "var(--brand-primary)" }}>Parra, North Goa</p>
                    <a
                      href="https://maps.google.com/?q=Parra,Goa,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:underline mt-1 block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
