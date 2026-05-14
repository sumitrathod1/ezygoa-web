import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EzyGoa Taxi Service | Best Taxi in Goa | Airport Taxi & Car Rental",
  description:
    "Goa's most trusted taxi service. Airport transfers, sightseeing, self-drive cars. 24/7 service. Best rates. Book now!",
  keywords: [
    "Goa taxi",
    "airport taxi Goa",
    "Goa car rental",
    "self drive Goa",
    "Mopa airport taxi",
    "Dabolim airport taxi",
    "Goa sightseeing",
    "EzyGoa",
  ],
  openGraph: {
    title: "EzyGoa Taxi Service | Best Taxi in Goa",
    description:
      "Goa's most trusted taxi service. Airport transfers, sightseeing, self-drive cars. 24/7 service.",
    type: "website",
    locale: "en_IN",
    siteName: "EzyGoa Taxi Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "EzyGoa Taxi Service | Best Taxi in Goa",
    description: "Goa's most trusted taxi service. Book now!",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
