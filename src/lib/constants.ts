export const BUSINESS = {
  name: "ZipGoa",
  phone: "+917026889254",
  phoneDisplay: "+91 7026889254",
  whatsapp: "917026889254",
  email: "contact@zipgoa.com",
  address: "Parra, North Goa, India",
  hours: "24/7 Service",
  established: "2015",
  totalTrips: "10,000+",
  rating: "4.9",
  reviews: "500+",
} as const;

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsapp}`;

export function buildWhatsAppUrl(params?: {
  service?: string;
  vehicle?: string;
  from?: string;
  to?: string;
  date?: string;
  time?: string;
  passengers?: string;
}) {
  if (!params) {
    const msg = `Hi ZipGoa! 👋 I'd like to book a trip in Goa.`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  }
  const msg = `Hello ZipGoa! 👋

I'd like to book a trip:
Service: ${params.service || "—"}
Vehicle: ${params.vehicle || "—"}
From: ${params.from || "—"}
To: ${params.to || "—"}
Date: ${params.date || "—"}
Time: ${params.time || "—"}
Passengers: ${params.passengers || "—"}

Please confirm availability and share the rate.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Airport Taxi", href: "/airport-taxi" },
      { label: "Goa Sightseeing", href: "/goa-sightseeing" },
      { label: "North Goa Tour", href: "/north-goa-tour" },
      { label: "South Goa Tour", href: "/south-goa-tour" },
      { label: "Dudhsagar Trip", href: "/dudhsagar-trip" },
      { label: "Outstation", href: "/outstation" },
      { label: "Self Drive", href: "/self-drive" },
    ],
  },
  {
    label: "Self Drive",
    href: "/self-drive",
    children: [
      { label: "All Cars", href: "/self-drive" },
      { label: "Economy — Swift, Baleno, i20", href: "/self-drive#economy" },
      { label: "Sedan — Dzire", href: "/self-drive#sedan" },
      { label: "SUV — Creta", href: "/self-drive#suv" },
      { label: "7 Seater — Ertiga, Innova", href: "/self-drive#family" },
      { label: "Adventure — Thar 4x4", href: "/self-drive#adventure" },
    ],
  },
  { label: "Tempo & Urbania", href: "/tempo-traveller-goa" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/zipgoa",
  facebook: "https://facebook.com/zipgoa",
  twitter: "https://twitter.com/zipgoa",
} as const;

export const TRUST_BADGES = [
  { icon: "✅", label: "Trusted Service" },
  { icon: "🚗", label: "Premium Fleet" },
  { icon: "🛡️", label: "Verified Drivers" },
  { icon: "📱", label: "Easy Booking" },
] as const;
