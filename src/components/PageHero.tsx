import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
  compact?: boolean;
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  breadcrumbs,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden gradient-hero ${compact ? "py-14" : "py-20 sm:py-24"}`}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--brand-accent), transparent)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #48bb78, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="text-white/60 hover:text-white text-xs transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-white/40" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-white/60 hover:text-white text-xs transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90 text-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-success" />
            <span className="text-white/90 text-sm font-medium">{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {title}{" "}
          {titleAccent && (
            <span style={{ color: "var(--brand-accent)" }}>{titleAccent}</span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {children}
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-12"
        >
          <path
            d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z"
            fill="oklch(0.993 0.003 57)"
          />
        </svg>
      </div>
    </section>
  );
}
