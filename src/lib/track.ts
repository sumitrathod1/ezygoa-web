/**
 * Lead-event tracking through gtag.js (loaded in components/Analytics.tsx).
 *
 * Each lead action sends exactly two hits:
 *   1. a GA4 event            gtag('event', <event>, params)
 *   2. a Google Ads conversion gtag('event', 'conversion', { send_to: 'AW-…/<label>' })
 *      — skipped when the label env var for that event is empty.
 *
 * Events:
 *   whatsapp_click       { button_location, service? }
 *   call_click           { button_location }
 *   booking_form_submit  { service?, form_name }
 *
 * Never pass personal data (name, phone, email, free-text messages) in params.
 */
import { ADS_ID } from "@/lib/analytics";

export type LeadEvent = "whatsapp_click" | "call_click" | "booking_form_submit";

export type LeadParams = {
  button_location?: string;
  service?: string;
  form_name?: string;
};

// NEXT_PUBLIC_* values are inlined at build time, so each must be referenced literally.
const ADS_LABELS: Record<LeadEvent, string | undefined> = {
  whatsapp_click: process.env.NEXT_PUBLIC_ADS_LABEL_WHATSAPP,
  call_click: process.env.NEXT_PUBLIC_ADS_LABEL_CALL,
  booking_form_submit: process.env.NEXT_PUBLIC_ADS_LABEL_FORM,
};

type GtagArgs = [string, string, Record<string, unknown>];

/* gtag.js is loaded lazily, so a visitor can click before window.gtag exists.
   Hold those calls and send them once it is ready; give up quietly after 30s
   (e.g. scripts disabled) so nothing ever throws or leaks. */
const pending: GtagArgs[] = [];
let timer: ReturnType<typeof setInterval> | null = null;
let attempts = 0;

function flush() {
  if (typeof window.gtag !== "function") return false;
  while (pending.length) {
    const args = pending.shift()!;
    try {
      window.gtag(...args);
    } catch {
      /* tracking must never break the page */
    }
  }
  return true;
}

function send(args: GtagArgs) {
  pending.push(args);
  if (flush() || timer) return;
  attempts = 0;
  timer = setInterval(() => {
    attempts += 1;
    if (flush() || attempts >= 60) {
      if (timer) clearInterval(timer);
      timer = null;
      pending.length = 0;
    }
  }, 500);
}

export function trackLead(event: LeadEvent, params: LeadParams = {}) {
  if (typeof window === "undefined") return;

  // Drop empty values so GA4 does not record blank parameters.
  const clean = Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined && v !== ""));

  // 1. GA4 event
  send(["event", event, { page_path: window.location.pathname, ...clean }]);

  // 2. Google Ads conversion (only when a label is configured for this event)
  const label = ADS_LABELS[event]?.trim();
  if (label) send(["event", "conversion", { send_to: `${ADS_ID}/${label}` }]);
}
