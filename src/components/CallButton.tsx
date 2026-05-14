"use client";

import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CallButton() {
  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      aria-label={`Call ${BUSINESS.phoneDisplay}`}
      className="fixed bottom-6 left-6 z-50 group sm:hidden"
    >
      <div className="relative">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200 animate-float"
          style={{ backgroundColor: "var(--brand-primary)" }}
        >
          <Phone className="w-6 h-6 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {BUSINESS.phoneDisplay}
          <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
        </div>
      </div>
    </a>
  );
}
