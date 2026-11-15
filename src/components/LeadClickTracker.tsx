"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/track";

const WHATSAPP_HREF = /^(https?:\/\/)?(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|chat\.whatsapp\.com)\/|^whatsapp:/i;

/**
 * Where on the page the click happened. An explicit `data-track-location` on the
 * link or any ancestor wins; otherwise fall back to the surrounding landmark.
 */
function locationOf(el: Element): string {
  const tagged = el.closest("[data-track-location]");
  if (tagged) return tagged.getAttribute("data-track-location") || "page";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("table")) return "price_table";
  return "page";
}

/**
 * Tour / vehicle name for the click. An explicit `data-track-service` wins;
 * otherwise read it from the prefilled WhatsApp message ("Tour: …", "Service: …",
 * "Vehicle: …", "book the …", "rent *…*"). Link messages are templates written by
 * the site, so they never contain customer details.
 */
function serviceOf(el: Element, href: string): string | undefined {
  const tagged = el.closest("[data-track-service]");
  if (tagged) return tagged.getAttribute("data-track-service") || undefined;
  let text = "";
  try {
    text = new URL(href, window.location.href).searchParams.get("text") ?? "";
  } catch {
    return undefined;
  }
  const patterns = [
    /Tour:\s*([^\n.]+)/i,
    /Service:\s*([^\n]+)/i,
    /Vehicle:\s*([^\n]+)/i,
    /rent \*([^*\n]+)\*/i,
    /book (?:the |a )?([^\n.]+?)(?:\.|\n|$)/i,
  ];
  for (const p of patterns) {
    const value = text.match(p)?.[1]?.trim();
    // Skip blanks, placeholders and the generic "book a trip in Goa" greeting.
    if (value && value !== "—" && !/^_+$/.test(value) && !/^trip\b/i.test(value)) return value.slice(0, 100);
  }
  return undefined;
}

/**
 * One document-level listener that reports every WhatsApp link and tel: link
 * click to the dataLayer, so new buttons are tracked without extra code.
 * Buttons that open WhatsApp with window.open() call trackLead() themselves.
 */
export default function LeadClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (WHATSAPP_HREF.test(href)) {
        trackLead("whatsapp_click", { button_location: locationOf(link), service: serviceOf(link, href) });
      } else if (/^tel:/i.test(href)) {
        trackLead("call_click", { button_location: locationOf(link) });
      }
    }
    // Capture phase: still fires if a component stops propagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
