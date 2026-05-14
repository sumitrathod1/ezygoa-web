"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="text-7xl mb-6">😓</div>
      <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--brand-primary)" }}>
        Something went wrong
      </h1>
      <p className="text-gray-500 mb-8 max-w-md">
        We hit a bump in the road. Don&apos;t worry — our team has been notified. Try again or go back to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--brand-primary)" }}
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-bold text-sm border-2 transition-colors"
          style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}
        >
          Back to Home
        </Link>
      </div>
      <p className="text-xs text-gray-400 mt-8">
        Need help?{" "}
        <a href="tel:+917026889254" className="underline">
          Call +91 7026889254
        </a>
      </p>
    </div>
  );
}
