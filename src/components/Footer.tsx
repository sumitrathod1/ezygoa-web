"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="border-t border-white/10 py-8 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-base mb-1">Get Goa Travel Tips & Deals</h3>
          <p className="text-white/60 text-sm">Subscribe for exclusive offers, hidden gems, and taxi rate updates.</p>
        </div>
        {submitted ? (
          <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-accent)" }}>
            ✅ Thanks! You&apos;re subscribed.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ background: "var(--brand-accent)", color: "var(--brand-primary)" }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--brand-primary)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo/logo-white.png"
                alt="EzyGoa Taxi Services"
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Goa&apos;s most trusted taxi and car rental service since {BUSINESS.established}.
              Premium fleet, transparent pricing, 24/7 availability.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "TW", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-white/20 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Our Fleet", href: "/fleet" },
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
                { label: "Book Now", href: "/booking" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Airport Taxi", href: "/airport-taxi" },
                { label: "Goa Sightseeing", href: "/goa-sightseeing" },
                { label: "North Goa Tour", href: "/north-goa-tour" },
                { label: "South Goa Tour", href: "/south-goa-tour" },
                { label: "Dudhsagar Trip", href: "/dudhsagar-trip" },
                { label: "Self-Drive Cars", href: "/self-drive" },
                { label: "Outstation", href: "/outstation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-start gap-2.5 text-white hover:text-white/80 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {BUSINESS.address}
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {BUSINESS.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterBar />

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
