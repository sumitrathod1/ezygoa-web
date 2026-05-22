"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "@/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < rating ? "var(--brand-accent)" : "transparent"}
          stroke={i < rating ? "var(--brand-accent)" : "oklch(0.52 0.02 250)"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const maxIndex = Math.ceil(reviews.length / perPage) - 1;

  const visible = reviews.slice(index * perPage, index * perPage + perPage);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--brand-accent)" }}>
              Reviews
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-poppins)", color: "var(--brand-primary)" }}
            >
              What Customers Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Overall rating */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-border shadow-sm">
              <Star className="w-5 h-5" fill="var(--brand-accent)" stroke="var(--brand-accent)" />
              <span className="font-bold text-lg" style={{ color: "var(--brand-primary)" }}>4.9</span>
              <span className="text-muted-foreground text-sm">/ 5 · 500+ reviews</span>
            </div>
            {/* Nav */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={index === 0}
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                disabled={index === maxIndex}
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover"
            >
              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-foreground text-sm leading-relaxed my-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar initial */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: "var(--brand-primary)" }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                  <p
                    className="text-xs font-medium mt-0.5"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    {review.tripType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots — 44×44px touch targets wrapping the small visual dots */}
        <div className="flex justify-center gap-1 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
              aria-label={`Go to page ${i + 1}`}
            >
              <span
                className={`rounded-full transition-all duration-200 block ${
                  i === index ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
