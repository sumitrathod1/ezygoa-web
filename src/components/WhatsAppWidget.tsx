"use client";

import { useState } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "917026889254";

const quickActions = [
  { label: "Book Airport Taxi", emoji: "✈️", message: "Hi ZipGoa! I need an airport taxi booking." },
  { label: "Goa Sightseeing", emoji: "🏖️", message: "Hi ZipGoa! I'm interested in a Goa sightseeing tour." },
  { label: "Self Drive Car", emoji: "🚗", message: "Hi ZipGoa! I'd like to rent a self-drive car." },
  { label: "Get a Quote", emoji: "💰", message: "Hi ZipGoa! Can I get a price quote for my trip?" },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  function openChat(message: string, label: string) {
    trackWhatsAppClick(`floating_${label}`);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick action panel */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 text-white" style={{ background: "#25d366" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                🚕
              </div>
              <div>
                <div className="font-bold text-sm">ZipGoa Taxi</div>
                <div className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                  Typically replies instantly
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-3 font-medium">How can we help you?</p>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => openChat(action.message, action.label.toLowerCase().replace(/\s+/g, "_"))}
                  className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left border border-gray-100 hover:border-gray-200"
                >
                  <span className="text-lg flex-shrink-0">{action.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  <span className="ml-auto text-gray-300">→</span>
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                openChat("Hi ZipGoa! I'd like to get in touch.", "open_chat")
              }
              className="w-full mt-3 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#25d366" }}
            >
              💬 Open Chat
            </button>
          </div>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 relative"
        style={{ background: "#25d366" }}
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#25d366" }} />
        )}
      </button>
    </div>
  );
}
