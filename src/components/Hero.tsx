"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRUST_BADGES, buildWhatsAppUrl } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background: real photo with dark overlay */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero/goa-hero.jpg"
          alt="Goa Taxi Service"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #f6ad55, transparent)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #48bb78, transparent)" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-40 sm:pb-48">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
            <span className="text-white/90 text-sm font-medium">24/7 Service Available</span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Complete{" "}
            <span style={{ color: "var(--brand-accent)" }}>Goa</span>
            <br />
            Travel Partner
          </h1>

          {/* Subheading */}
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            From airport transfers to self-drive cars, sightseeing tours to
            adventure trips — we make every Goa experience seamless.
            Book via WhatsApp in 30 seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/booking">
              <Button
                size="lg"
                className="gap-2 px-7 text-base font-semibold shadow-xl hover:scale-105 transition-transform"
                style={{
                  background: "var(--brand-accent)",
                  color: "#1a1a1a",
                }}
              >
                Book Taxi Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/self-drive">
              <Button
                size="lg"
                className="gap-2 px-7 text-base font-semibold border-2 border-white/60 text-white hover:bg-white/20 hover:border-white transition-all"
                style={{ background: "transparent" }}
              >
                <Car className="w-4 h-4" />
                Rent a Car
              </Button>
            </Link>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero_section")}
            >
              <Button
                size="lg"
                className="gap-2 px-7 text-base font-semibold bg-brand-success hover:opacity-90 text-white shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <span className="text-base">{badge.icon}</span>
                <span className="text-white/90 text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.993 0.003 57)"
          />
        </svg>
      </div>
    </section>
  );
}
