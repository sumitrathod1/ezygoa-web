const features = [
  {
    emoji: "✅",
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surprise fees. Fixed rates shared upfront before you confirm your booking.",
  },
  {
    emoji: "👨‍✈️",
    title: "Professional Drivers",
    description:
      "All drivers are police-verified, trained, English-speaking, and have 5+ years of experience.",
  },
  {
    emoji: "🚗",
    title: "Well-Maintained Fleet",
    description:
      "Every vehicle is cleaned daily, regularly serviced, and has working AC, music, and phone chargers.",
  },
  {
    emoji: "🕐",
    title: "24/7 Availability",
    description:
      "We're available round the clock — early morning flights, late night arrivals, holiday travel.",
  },
  {
    emoji: "📱",
    title: "Easy Booking",
    description:
      "Book via WhatsApp, phone call, or our website. Get instant confirmation within minutes.",
  },
  {
    emoji: "🌴",
    title: "Local Goa Experts",
    description:
      "Our drivers know every beach, fort, shortcut, and hidden gem in Goa. Your trip, perfectly planned.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
            Why EzyGoa
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Over 10,000 happy customers trust EzyGoa for their travels across Goa.
            Here&apos;s what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "oklch(0.265 0.078 254 / 0.07)" }}
              >
                {f.emoji}
              </div>
              <h3
                className="font-bold text-base mb-2 group-hover:text-brand-primary transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 rounded-2xl p-8"
          style={{ backgroundColor: "var(--brand-primary)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "10,000+", label: "Trips Completed" },
              { value: "5,000+", label: "Happy Customers" },
              { value: "4.9★", label: "Average Rating" },
              { value: "10+", label: "Years in Goa" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-accent)" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
