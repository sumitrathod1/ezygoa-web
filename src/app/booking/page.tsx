import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Book a Taxi in Goa | Instant WhatsApp Booking | ZipGoa",
  description:
    "Book a taxi in Goa instantly via WhatsApp. Airport pickup, full-day tours, outstation trips, self-drive rentals. Select your service, vehicle, and get confirmed in 5 minutes.",
  keywords: ["book taxi Goa", "Goa taxi booking", "ZipGoa booking", "airport taxi Goa book", "WhatsApp taxi Goa"],
  openGraph: {
    title: "Book Your Goa Taxi | ZipGoa",
    description: "Instant taxi booking via WhatsApp. Airport transfers, tours, outstation, self-drive. Confirmed in 5 minutes.",
  },
};

export default function BookingPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Instant Booking"
        title="Book Your"
        titleAccent="Ride"
        subtitle="Fill in your trip details below and we'll confirm your booking via WhatsApp within 5 minutes. No payment needed upfront."
        breadcrumbs={[{ label: "Book Now" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
