import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FleetGrid from "@/components/FleetGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Fleet | ZipGoa Taxi Services — Premium Vehicles Goa",
  description:
    "Browse ZipGoa's complete fleet — Dzire, Ertiga, Innova Crysta, Tempo Travellers, Urbania luxury bus, and self-drive cars in Goa. Best rates guaranteed.",
  keywords: ["Goa taxi fleet", "Innova Crysta Goa", "Tempo Traveller Goa", "self drive Goa", "Urbania bus Goa"],
  openGraph: {
    title: "Our Fleet | ZipGoa Taxi Services",
    description: "Premium taxis and self-drive cars for every need in Goa.",
  },
};

export default function FleetPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Premium Fleet"
        title="Our"
        titleAccent="Premium Fleet"
        subtitle="From cozy sedans to luxury buses — every vehicle is AC-equipped, regularly serviced, and driven by professionals."
        breadcrumbs={[{ label: "Fleet" }]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FleetGrid />
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
