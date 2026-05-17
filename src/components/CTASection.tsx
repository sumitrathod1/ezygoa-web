import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BUSINESS, buildWhatsAppUrl } from "@/lib/constants";

export default function CTASection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--brand-accent), transparent)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #48bb78, transparent)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-80"
          style={{ color: "var(--brand-accent)" }}
        >
          Book Now
        </p>
        <h2
          className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Ready to Explore Goa?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Book your ride in 30 seconds. Transparent pricing, professional drivers,
          24/7 service.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/booking">
            <Button
              size="lg"
              className="gap-2 px-8 text-base font-bold shadow-2xl hover:scale-105 transition-transform"
              style={{ background: "var(--brand-accent)", color: "#1a1a1a" }}
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gap-2 px-8 text-base font-semibold bg-brand-success text-white hover:opacity-90 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>

          <a href={`tel:${BUSINESS.phone}`}>
            <Button
              size="lg"
              variant="outline"
              className="
                gap-2 
                px-8 
                text-base 
                font-semibold 
                border-2 
                border-white/70
                text-white
                bg-transparent
                opacity-100
                hover:bg-white/10 
                hover:border-white
                hover:text-white
              "
            >
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">
                {BUSINESS.phoneDisplay}
              </span>
            </Button>
          </a>
        </div>

        {/* Trust line */}
        <p className="text-white/50 text-sm mt-8">
          Trusted by 10,000+ travellers · No advance payment · Free cancellation 6hrs before
        </p>
      </div>
    </section>
  );
}
