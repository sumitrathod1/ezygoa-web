import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PriceCalculator from "@/components/PriceCalculator";
import PopularRoutes from "@/components/PopularRoutes";
import GoaExperiences from "@/components/GoaExperiences";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  title:
    "EzyGoa Taxi Service | Best Taxi in Goa | Airport Taxi & Car Rental",
  description:
    "Goa's most trusted taxi service. Airport transfers from Mopa & Dabolim, sightseeing, self-drive cars. 24/7 service. Best rates. Book now!",
  keywords: [
    "Goa taxi service",
    "airport taxi Goa",
    "Mopa airport taxi",
    "Dabolim airport taxi",
    "Goa car rental",
    "self drive Goa",
    "Goa sightseeing tours",
    "EzyGoa",
    "taxi Calangute",
    "taxi Panjim",
  ],
  openGraph: {
    title: "EzyGoa Taxi Service | Best Taxi in Goa",
    description:
      "Goa's most trusted taxi service. Airport transfers, sightseeing, self-drive cars. 24/7 service.",
    type: "website",
    locale: "en_IN",
    siteName: "EzyGoa Taxi Services",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "EzyGoa Taxi Services",
  "url": "https://www.ezygoa.in",
  "telephone": "+917026889254",
  "email": "ezygoataxiservices@gmail.com",
  "image": "https://www.ezygoa.in/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Parra",
    "addressLocality": "North Goa",
    "addressRegion": "Goa",
    "postalCode": "403510",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 15.58,
    "longitude": 73.74,
  },
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "areaServed": {
    "@type": "Place",
    "name": "Goa, India",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Taxi & Car Rental Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Taxi Goa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Goa Sightseeing Tours" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Self Drive Car Rental Goa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outstation Taxi from Goa" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {/* Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* Hero — full screen */}
        <Hero />

        {/* Quick Booking Widget — overlaps hero bottom */}
        <BookingWidget />

        {/* Popular Services Grid */}
        <ServicesSection />

        {/* Fleet Showcase — horizontal scroll */}
        <FleetSection />

        {/* Why Choose EzyGoa */}
        <WhyChooseUs />

        {/* Price Calculator */}
        <PriceCalculator />

        {/* Popular Routes */}
        <PopularRoutes />

        {/* Goa Experiences Gallery */}
        <GoaExperiences />

        {/* Customer Reviews Carousel */}
        <Reviews />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Big CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons — always visible */}
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
