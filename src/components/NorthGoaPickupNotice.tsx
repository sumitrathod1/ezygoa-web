import { AlertCircle, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/constants";

/** Shown under every sightseeing price so the pickup basis is never ambiguous. */
export const NORTH_GOA_PICKUP_LABEL = "North Goa pickup";

/** Heading for pickup areas that are not covered by the listed prices. */
export const PICKUP_ON_REQUEST_HEADING = "Pickup on request — rate shared on WhatsApp";

export const SOUTH_GOA_RATE_CTA = "Request rate for South Goa pickup";

/** WhatsApp link asking for a South Goa pickup rate for the given tour. */
export function southGoaRateUrl(tourName: string) {
  const msg = `Hi ZipGoa, I need a sightseeing rate. Tour: ${tourName}. Pickup from: South Goa (hotel/area: ___). Date: ___. People: ___.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
}

/**
 * Notice placed directly above sightseeing prices: listed prices apply to
 * North Goa pickup only. `stacked` puts the button under the text for narrow
 * columns (tour page sidebar).
 */
export default function NorthGoaPickupNotice({
  tourName,
  stacked = false,
  className = "",
}: {
  tourName: string;
  stacked?: boolean;
  className?: string;
}) {
  return (
    <div
      role="note"
      data-track-location="south_goa_rate_notice"
      data-track-service={tourName}
      className={`bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col gap-4 ${
        stacked ? "" : "md:flex-row md:items-center md:justify-between"
      } ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700" />
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong className="font-semibold">Prices are for guests staying in North Goa</strong>{" "}
          (Calangute, Baga, Candolim, Anjuna, Vagator, Mapusa, Panjim). Hotel in South Goa? Rates
          are different — ask us on WhatsApp.
        </p>
      </div>
      <a
        href={southGoaRateUrl(tourName)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-sm font-semibold text-white text-center flex-shrink-0 transition-opacity hover:opacity-90"
        style={{ background: "#25d366" }}
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
        {SOUTH_GOA_RATE_CTA}
      </a>
    </div>
  );
}

/** Pickup Locations block shared by the tour pages: standard zones, then on-request zones. */
export function PickupZones({
  standard,
  onRequest,
}: {
  standard: { zone: string; places: string }[];
  onRequest: { zone: string; places: string }[];
}) {
  return (
    <div className="space-y-3">
      {standard.map((z) => (
        <div key={z.zone} className="bg-white rounded-2xl border border-border shadow-sm p-4 flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-accent)" }} />
          <div>
            <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--brand-primary)" }}>{z.zone}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{z.places}</p>
          </div>
        </div>
      ))}

      <h3 className="font-bold text-sm pt-3" style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}>
        {PICKUP_ON_REQUEST_HEADING}
      </h3>
      {onRequest.map((z) => (
        <div key={z.zone} className="bg-amber-50 rounded-2xl border border-amber-200 p-4 flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700" />
          <div>
            <p className="font-semibold text-sm mb-0.5 text-amber-800">{z.zone}</p>
            <p className="text-xs text-amber-700 leading-relaxed">{z.places}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
