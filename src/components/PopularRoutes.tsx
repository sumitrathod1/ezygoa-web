import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/constants";

export default function PopularRoutes() {
  const displayRoutes = routes.slice(0, 8);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
            Popular Routes
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            Most Booked Routes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fixed fares for the most popular routes in Goa. No surprises — just great service.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayRoutes.map((route, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-border shadow-sm card-hover group"
            >
              {/* Route */}
              <div className="flex items-start gap-2 mb-4">
                <div className="flex flex-col items-center gap-1 pt-0.5 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" style={{ color: "var(--brand-primary)" }} />
                  <div className="w-px h-6 bg-border" />
                  <MapPin className="w-3.5 h-3.5" style={{ color: "var(--brand-accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {route.from}
                  </p>
                  <p className="text-xs text-muted-foreground my-1">
                    {route.distance} km · {route.duration}
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {route.to}
                  </p>
                </div>
              </div>

              {/* Prices */}
              <div className="space-y-1.5 mb-4">
                {route.prices.dzire && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Dzire</span>
                    <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>
                      ₹{route.prices.dzire.toLocaleString()}
                    </span>
                  </div>
                )}
                {route.prices.ertiga && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Ertiga</span>
                    <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>
                      ₹{route.prices.ertiga.toLocaleString()}
                    </span>
                  </div>
                )}
                {route.prices.innova && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Innova</span>
                    <span className="font-semibold" style={{ color: "var(--brand-primary)" }}>
                      ₹{route.prices.innova.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Book button */}
              <a
                href={buildWhatsAppUrl({ from: route.from, to: route.to })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full gap-1.5 text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  Book This Route
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
