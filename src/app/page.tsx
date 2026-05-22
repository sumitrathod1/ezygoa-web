import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const PriceCalculator = dynamic(() => import("@/components/PriceCalculator"), { loading: () => <div className="py-20" /> });
const PopularRoutes   = dynamic(() => import("@/components/PopularRoutes"),   { loading: () => <div className="py-16" /> });
const GoaExperiences  = dynamic(() => import("@/components/GoaExperiences"),  { loading: () => <div className="py-16" /> });
const Reviews         = dynamic(() => import("@/components/Reviews"),         { loading: () => <div className="py-16" /> });
const FAQ             = dynamic(() => import("@/components/FAQ"),             { loading: () => <div className="py-16" /> });

export const metadata: Metadata = {
  title:
    "ZipGoa Taxi Service | Best Taxi in Goa | Airport Taxi & Car Rental",
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
    "ZipGoa",
    "taxi Calangute",
    "taxi Panjim",
  ],
  openGraph: {
    title: "ZipGoa Taxi Service | Best Taxi in Goa",
    description:
      "Goa's most trusted taxi service. Airport transfers, sightseeing, self-drive cars. 24/7 service.",
    type: "website",
    locale: "en_IN",
    siteName: "ZipGoa Taxi Services",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "ZipGoa Taxi Services",
  "alternateName": "ZipGoa",
  "description": "Goa's premium taxi and car rental service. Quick bookings, verified drivers, transparent pricing.",
  "slogan": "Quick. Reliable. Trusted.",
  "url": "https://zipgoa.com",
  "logo": "https://zipgoa.com/logo/logo.png",
  "image": "https://zipgoa.com/logo/og-image.png",
  "telephone": "+91-7026889254",
  "email": "ezygoataxiservices@gmail.com",
  "foundingDate": "2015",
  "founder": { "@type": "Person", "name": "Sumit Rathod" },
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
    "latitude": "15.5970",
    "longitude": "73.7574",
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "₹₹",
  "areaServed": [
    { "@type": "State", "name": "Goa" },
    { "@type": "City", "name": "Panaji" },
    { "@type": "City", "name": "Margao" },
    { "@type": "City", "name": "Vasco da Gama" },
    { "@type": "City", "name": "Calangute" },
    { "@type": "City", "name": "Mapusa" },
  ],
  "sameAs": [
    "https://wa.me/917026889254",
    "https://www.facebook.com/zipgoa",
    "https://www.instagram.com/zipgoa",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1",
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

        {/* Why Choose ZipGoa */}
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

    </>
  );
}
