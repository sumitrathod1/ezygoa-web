import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import SafeImage from "@/components/SafeImage";

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
            Our Services
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From airport transfers to full-day tours — every service is designed to give you
            the best Goa experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={`/${service.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:border-transparent hover:shadow-xl card-hover transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Image strip */}
              {service.image && (
                <div className="relative h-36 overflow-hidden">
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackClassName="h-36"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-2xl">{service.emoji}</span>
                </div>
              )}

              {/* Gradient overlay on hover (no-image cards) */}
              {!service.image && (
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 gradient-card" />
              )}

              <div className={`relative p-6 ${service.image ? "pt-4" : ""}`}>
                {/* Emoji icon — only when no image */}
                {!service.image && (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm"
                    style={{ backgroundColor: "oklch(0.265 0.078 254 / 0.08)" }}
                  >
                    {service.emoji}
                  </div>
                )}

                <h3
                  className="font-bold text-base mb-1.5 group-hover:text-brand-primary transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-bold text-base" style={{ color: "var(--brand-primary)" }}>
                      ₹{service.startingPrice.toLocaleString()}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0"
                    style={{ backgroundColor: "var(--brand-accent)" }}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
