"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl flex-shrink-0">🍪</span>
          <div>
            <h3 className="font-bold text-sm" style={{ color: "var(--brand-primary)" }}>
              We use cookies
            </h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              We use cookies to improve your browsing experience and analyse site traffic. By clicking
              &quot;Accept&quot;, you consent to our use of cookies.{" "}
              <Link href="/privacy-policy" className="underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 py-2 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--brand-primary)" }}
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 py-2 rounded-xl text-xs font-bold border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
