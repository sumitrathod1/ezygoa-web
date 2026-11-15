declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = "G-0XH49G88GM";

/** Google Ads account that lead conversions are reported to (see lib/track.ts). */
export const ADS_ID = "AW-657702617";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
  }
};
