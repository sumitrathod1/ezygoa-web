import { experienceImages } from "@/lib/data";

export default function GoaExperiences() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "oklch(0.265 0.078 254 / 0.04)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
            Discover Goa
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
          >
            Goa Experiences
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From sun-kissed beaches to ancient churches — Goa has something magical
            for every traveller. Let us take you there.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {experienceImages.map((exp) => (
            <div
              key={exp.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                exp.id === "1" || exp.id === "2" ? "col-span-1 sm:col-span-1" : ""
              }`}
              style={{ minHeight: exp.id === "1" ? "200px" : "160px" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {exp.emoji}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-center leading-tight">
                  {exp.title}
                </h3>
                <p className="text-xs text-white/80 mt-1">{exp.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All destinations covered · Custom itineraries available ·{" "}
          <a
            href="/goa-sightseeing"
            className="font-semibold hover:underline"
            style={{ color: "var(--brand-primary)" }}
          >
            View Sightseeing Packages →
          </a>
        </p>
      </div>
    </section>
  );
}
