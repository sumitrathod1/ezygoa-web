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
    default: "ZipGoa | Goa Taxi, Self-Drive & Tours | Your Goa, Made Easy",
    template: "%s | ZipGoa",
  },
  description:
    "ZipGoa - Your trusted Goa travel partner. Book taxis, self-drive cars, sightseeing tours & airport transfers. Transparent pricing, 24/7 service.",
  keywords: [
    "ZipGoa",
    "Goa taxi service",
    "Goa taxi booking",
    "Goa cab service",
    "taxi in Goa",
    "self drive Goa",
    "Goa car rental",
    "airport taxi Goa",
    "Mopa airport taxi",
    "Dabolim airport taxi",
    "Goa sightseeing tours",
    "North Goa taxi",
    "South Goa taxi",
    "Dudhsagar trip",
    "Goa outstation",
    "taxi Calangute",
    "taxi Panjim",
  ],
  authors: [{ name: "ZipGoa" }],
  creator: "ZipGoa",
  publisher: "ZipGoa",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zipgoa.com",
    siteName: "ZipGoa",
    title: "ZipGoa | Goa Taxi, Self-Drive & Tours",
    description: "Your trusted Goa travel partner. Taxis, self-drive cars, sightseeing tours & airport transfers. Transparent pricing, 24/7 service.",
    images: [{ url: "/logo/og-image.png", width: 1200, height: 630, alt: "ZipGoa - Your Goa, Made Easy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZipGoa | Your Goa, Made Easy",
    description: "Taxis, self-drive cars & sightseeing tours in Goa. Transparent pricing, 24/7 service.",
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
