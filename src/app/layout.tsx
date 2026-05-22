import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import PageViewTracker from "@/components/PageViewTracker";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zipgoa.com"),
  title: {
    default: "ZipGoa Taxi Services | Quick. Reliable. Trusted. | Goa Taxi Booking",
    template: "%s | ZipGoa Taxi Services",
  },
  description:
    "ZipGoa Taxi Services - Goa's premium taxi and car rental service since 2015. Quick bookings, verified drivers, transparent pricing. Available 24/7. Book your Goa taxi now!",
  keywords: [
    "ZipGoa",
    "ZipGoa Taxi",
    "ZipGoa Taxi Services",
    "Goa taxi service",
    "Goa taxi booking",
    "Goa cab service",
    "taxi in Goa",
    "self drive Goa",
    "Goa car rental",
    "airport taxi Goa",
    "Mopa airport taxi",
    "Dabolim airport taxi",
    "Goa sightseeing taxi",
    "North Goa taxi",
    "South Goa taxi",
    "Dudhsagar trip",
    "Goa outstation",
  ],
  authors: [{ name: "ZipGoa Taxi Services" }],
  creator: "ZipGoa Taxi Services",
  publisher: "ZipGoa Taxi Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zipgoa.com",
    siteName: "ZipGoa Taxi Services",
    title: "ZipGoa Taxi Services | Quick. Reliable. Trusted.",
    description: "Goa's premium taxi service with transparent pricing, verified drivers, and 24/7 availability. Book your Goa taxi in 30 seconds!",
    images: [{ url: "/logo/og-image.png", width: 1200, height: 630, alt: "ZipGoa Taxi Services - Quick. Reliable. Trusted." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZipGoa Taxi Services",
    description: "Quick. Reliable. Trusted. - Goa's Premium Taxi Service",
    images: ["/logo/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon.png", type: "image/png" },
    ],
    apple: "/logo/logo-icon.png",
    shortcut: "/logo/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zipgoa.com",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        {children}
        <WhatsAppButton />
        <CallButton />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
