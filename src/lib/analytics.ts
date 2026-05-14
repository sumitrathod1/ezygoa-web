declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = "G-0XH49G88GM";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
  }
};

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export const trackWhatsAppClick = (source: string) =>
  trackEvent({ action: "whatsapp_click", category: "conversion", label: source });

export const trackCallClick = (source: string) =>
  trackEvent({ action: "call_click", category: "conversion", label: source });

export const trackVehicleView = (vehicleName: string) =>
  trackEvent({ action: "vehicle_view", category: "engagement", label: vehicleName });

export const trackBookingStart = (vehicleName: string) =>
  trackEvent({ action: "booking_started", category: "conversion", label: vehicleName });

export const trackBookingComplete = (vehicleName: string, price?: number) =>
  trackEvent({ action: "booking_completed", category: "conversion", label: vehicleName, value: price });
