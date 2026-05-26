import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import PricingContent from "@/components/PricingContent";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Taxi & Rental Pricing Goa | Transparent Rates | ZipGoa",
  description:
    "Clear, upfront taxi pricing in Goa. Per km rates, hourly packages, airport fares, and self-drive rates. No hidden charges. ZipGoa promises transparent pricing.",
  keywords: ["Goa taxi rates", "taxi price Goa", "Innova fare Goa", "taxi package Goa", "per km taxi Goa"],
  openGraph: {
    title: "Taxi Pricing Goa | ZipGoa",
    description: "Transparent taxi rates in Goa. No hidden charges. See all packages and fares.",
  },
};

export default function PricingPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Transparent Pricing"
        title="Clear Rates,"
        titleAccent="No Hidden Charges"
        subtitle="Every price shown is the price you pay. No surge pricing, no late-night fees, no surprises. Fixed rates, confirmed before booking."
        breadcrumbs={[{ label: "Pricing" }]}
      />
      <PricingContent />
      <CTASection />
    </PageWrapper>
  );
}
