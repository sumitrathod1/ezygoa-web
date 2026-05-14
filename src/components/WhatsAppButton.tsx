"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full animate-pulse-ring"
          style={{ backgroundColor: "var(--brand-success)" }}
        />
        {/* Button */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: "var(--brand-success)" }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
          <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-foreground" />
        </div>
      </div>
    </a>
  );
}
