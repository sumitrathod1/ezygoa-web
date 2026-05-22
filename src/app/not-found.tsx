import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | ZipGoa Taxi",
  description: "The page you're looking for doesn't exist. Browse ZipGoa's taxi services.",
};

const quickLinks = [
  { href: "/booking", label: "Book a Taxi", emoji: "🚕" },
  { href: "/airport-taxi", label: "Airport Transfer", emoji: "✈️" },
  { href: "/goa-sightseeing", label: "Sightseeing Tours", emoji: "🏖️" },
  { href: "/fleet", label: "Our Fleet", emoji: "🚗" },
  { href: "/pricing", label: "Pricing", emoji: "💰" },
  { href: "/contact", label: "Contact Us", emoji: "📞" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="max-w-lg w-full">
        {/* 404 visual */}
        <div className="relative mb-8">
          <div
            className="text-[8rem] font-black leading-none opacity-5 select-none"
            style={{ color: "var(--brand-primary)" }}
          >
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-7xl">
            🗺️
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--brand-primary)" }}>
          Lost on the road?
        </h1>
        <p className="text-gray-500 mb-8">
          This page doesn&apos;t exist. But don&apos;t worry — let ZipGoa get you where you need to go!
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-700"
            >
              <span>{link.emoji}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--brand-primary)" }}
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
