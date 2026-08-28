export interface ItineraryStep {
  time: string;
  step: string;
  desc: string;
}

export interface CancellationRow {
  label: string;
  policy: string;
  color: "green" | "amber" | "red";
}

export interface Activity {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  gallery: string[];
  duration: string;
  pickupTime: string;
  frequency: string;
  rating: number;
  priceFrom: number;
  priceUnit: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  pickupNote?: string;
  itinerary?: ItineraryStep[];
  cancellationPolicy: CancellationRow[];
  importantInfo: string[];
}

export const activities: Activity[] = [
  {
    id: "north-goa-coach",
    slug: "north-goa-coach-tour",
    title: "North Goa AC Coach Tour",
    location: "North Goa",
    category: "Group Coach Tour",
    image: "/images/activities/north-coach.jpg",
    gallery: [
      "/images/locations/aguada-fort.jpg",
      "/images/locations/calangute.jpg",
      "/images/locations/anjuna.jpg",
      "/images/locations/vagator.jpg",
      "/images/locations/baga.jpg",
    ],
    duration: "~8 hours",
    pickupTime: "8:30 AM – 5:00 PM",
    frequency: "Everyday",
    rating: 4.8,
    priceFrom: 499,
    priceUnit: "per person",
    shortDescription:
      "A relaxed full-day North Goa sightseeing trip in a shared air-conditioned coach. Great for solo travellers and groups who want to see the highlights without arranging private transport.",
    overview:
      "Join a comfortable shared AC coach for a full day of sightseeing across North Goa's most iconic landmarks. Starting with hotel pickups from the main beach belt, the tour visits the 17th-century Fort Aguada, the vibrant beaches of Calangute and Baga, the rocky cliffs of Anjuna, the serene Saligao Church, and the sweeping viewpoints of Vagator. A traditional Goan lunch is included, making this a relaxed, hassle-free day out. Ideal for solo travellers, couples, and small groups who want a guided experience without the cost of a private vehicle.",
    highlights: [
      "Fort Aguada — 17th-century Portuguese sea fortress",
      "Calangute Beach — the Queen of Beaches",
      "Baga Beach — vibrant beach with shacks & water sports",
      "Anjuna Beach — rocky cliffs and Bohemian vibe",
      "Vagator viewpoint — sweeping coastal panoramas",
      "Saligao Church — tranquil heritage church",
      "Local markets and Goan cultural stops",
      "Traditional Goan lunch included",
    ],
    inclusions: [
      "AC shared coach (full day)",
      "Hotel pickup & drop (North Goa belt)",
      "Traditional Goan lunch",
      "Professional guide / driver",
    ],
    exclusions: [
      "Entry fees at any attraction",
      "Personal beverages and snacks",
      "Water sports or optional activities",
      "Tips (appreciated but not mandatory)",
    ],
    pickupNote: "Pickup from Calangute · Baga · Candolim · Sinquerim · Arpora",
    itinerary: [
      { time: "8:30 AM",  step: "Hotel Pickup",     desc: "Coach picks up from hotels in Calangute, Baga, Candolim, Sinquerim and Arpora." },
      { time: "9:15 AM",  step: "Fort Aguada",      desc: "Explore the iconic 17th-century Portuguese fort with panoramic Arabian Sea views and a historic lighthouse." },
      { time: "10:15 AM", step: "Calangute Beach",  desc: "Stop at the Queen of Beaches — stroll the shoreline, browse beach shacks and local vendors." },
      { time: "11:00 AM", step: "Baga Beach",       desc: "Walk Baga's lively promenade. Optional water sports available at personal cost." },
      { time: "12:00 PM", step: "Saligao Church",   desc: "Visit the beautifully restored neo-Gothic Our Lady of Grace Church in the village of Saligao." },
      { time: "12:45 PM", step: "Goan Lunch",       desc: "Traditional Goan fish curry, rice, and sides at a local restaurant. Included in your ticket." },
      { time: "2:00 PM",  step: "Anjuna Beach",     desc: "Explore Anjuna's dramatic rocky coastline and laid-back Bohemian atmosphere." },
      { time: "3:00 PM",  step: "Vagator Viewpoint",desc: "Clifftop views over Little Vagator Beach with the Arabian Sea stretching to the horizon." },
      { time: "4:00 PM",  step: "Local Market",     desc: "Quick stop at a local market or souvenir shop for Goan spices, cashews and handicrafts." },
      { time: "5:00 PM",  step: "Return Drop",      desc: "Coach returns to your hotel or pickup point in the North Goa belt." },
    ],
    cancellationPolicy: [
      { label: "48 hrs+ before tour",   policy: "Full refund",        color: "green" },
      { label: "24–48 hrs before tour", policy: "50% refund",         color: "amber" },
      { label: "Under 24 hrs / no-show",policy: "No refund",          color: "red"   },
      { label: "Cancelled by ZipGoa",   policy: "100% refund",        color: "green" },
    ],
    importantInfo: [
      "Wear comfortable clothing and sturdy footwear — lots of walking involved",
      "Carry light snacks, water and sunscreen for the day",
      "Not recommended for guests with serious mobility limitations",
      "The tour operates year-round; monsoon season (Jun–Sep) is lush but beaches may be choppy",
      "Pickup is from your hotel lobby — be ready 5 minutes before your scheduled time",
    ],
  },

  {
    id: "south-goa-coach",
    slug: "south-goa-coach-tour",
    title: "South Goa AC Coach Tour",
    location: "South Goa",
    category: "Group Coach Tour",
    image: "/images/activities/south-coach.jpg",
    gallery: [
      "/images/locations/panjim.jpg",
      "/images/locations/palolem.jpg",
      "/images/services/sightseeing.jpg",
      "/images/locations/calangute.jpg",
      "/images/services/north-goa.jpg",
    ],
    duration: "~9 hours",
    pickupTime: "8:30 AM – 5:30 PM",
    frequency: "Everyday",
    rating: 4.8,
    priceFrom: 499,
    priceUnit: "per person",
    shortDescription:
      "Full-day shared AC coach tour covering South Goa's beaches, UNESCO churches, and heritage landmarks. Ideal for travellers wanting a guided group experience through Goa's cultural heart.",
    overview:
      "Discover the rich cultural and spiritual heritage of South Goa on this full-day shared AC coach tour. The journey begins at the UNESCO-listed Basilica of Bom Jesus and Se Cathedral in Old Goa, continues to the beautifully decorated Mangeshi Temple, winds through a working spice plantation, and arrives at the panoramic Dona Paula viewpoint and the golden sands of Colva Beach. A traditional Goan lunch is included. Hotel pickup is arranged from across Goa.",
    highlights: [
      "Basilica of Bom Jesus — UNESCO World Heritage Site",
      "Se Cathedral — Asia's largest church",
      "Mangeshi Temple — Goa's most celebrated Hindu temple",
      "Old Goa Church of St. Cajetan",
      "Dona Paula — scenic river-meets-sea viewpoint",
      "Colva Beach — serene South Goa coastline",
      "Traditional Goan lunch included",
      "Guided heritage walk through Old Goa",
    ],
    inclusions: [
      "AC shared coach (full day)",
      "Hotel pickup & drop",
      "Traditional Goan lunch",
      "Professional guide / driver",
    ],
    exclusions: [
      "Entry fees (Old Goa churches are free to enter)",
      "Personal beverages and snacks",
      "Boat rides or optional activities",
      "Tips (appreciated but not mandatory)",
    ],
    pickupNote: "Pickup from major hotels across North Goa and Panjim",
    itinerary: [
      { time: "8:30 AM",  step: "Hotel Pickup",              desc: "Coach picks up from hotels across North Goa, Panjim and South Goa." },
      { time: "10:00 AM", step: "Basilica of Bom Jesus",     desc: "UNESCO-listed church housing the remains of St. Francis Xavier. Stunning baroque architecture." },
      { time: "10:45 AM", step: "Se Cathedral & St. Cajetan",desc: "Asia's largest church, and the Church of St. Cajetan modelled on St. Peter's Basilica, Rome." },
      { time: "11:30 AM", step: "Mangeshi Temple",           desc: "One of Goa's most revered temples — admire the lamp tower, temple tank, and ornate shrine." },
      { time: "12:15 PM", step: "Goan Lunch",                desc: "Traditional Goan fish curry, rice and sides at a local restaurant. Included in your ticket." },
      { time: "1:30 PM",  step: "Spice Plantation Walk",     desc: "Short guided walk through a spice farm — see pepper, cardamom, vanilla and nutmeg growing." },
      { time: "2:30 PM",  step: "Dona Paula Viewpoint",      desc: "Scenic clifftop where the Zuari and Mandovi rivers converge with the Arabian Sea." },
      { time: "3:15 PM",  step: "Colva Beach",               desc: "Stroll the tranquil white sands of South Goa's most popular beach." },
      { time: "4:15 PM",  step: "Panjim Church",             desc: "Photo stop at Our Lady of the Immaculate Conception — Goa's most photographed landmark." },
      { time: "5:30 PM",  step: "Return Drop",               desc: "Coach returns to your hotel or pickup point." },
    ],
    cancellationPolicy: [
      { label: "48 hrs+ before tour",    policy: "Full refund",  color: "green" },
      { label: "24–48 hrs before tour",  policy: "50% refund",   color: "amber" },
      { label: "Under 24 hrs / no-show", policy: "No refund",    color: "red"   },
      { label: "Cancelled by ZipGoa",    policy: "100% refund",  color: "green" },
    ],
    importantInfo: [
      "Old Goa churches are UNESCO World Heritage Sites — modest dress code required (covered shoulders & knees)",
      "Wear comfortable walking shoes — the heritage walk covers several sites on foot",
      "Carry water, sunscreen and a light hat for outdoor stops",
      "Tour operates year-round; monsoon visits to churches are particularly atmospheric",
      "Pickup is from your hotel lobby — be ready 5 minutes before scheduled time",
    ],
  },

  {
    id: "dolphin-trip",
    slug: "dolphin-trip",
    title: "Dolphin Trip",
    location: "Calangute / Sinquerim",
    category: "Boat Trip",
    image: "/images/activities/dolphin.jpg",
    gallery: [
      // "/images/locations/calangute.jpg",
      // "/images/locations/baga.jpg",
      // "/images/services/north-goa.jpg",
      // "/images/locations/anjuna.jpg",
    ],
    duration: "~1 hour",
    pickupTime: "7:30 AM – 9:00 AM",
    frequency: "Everyday",
    rating: 4.7,
    priceFrom: 350,
    priceUnit: "per person",
    shortDescription:
      "A short, fun boat ride to spot wild dolphins in their natural coastal habitat. Perfect for families, kids, and first-time visitors to Goa.",
    overview:
      "Head out on a shared boat to meet Goa's resident Indo-Pacific dolphins in their natural environment. These playful creatures are regularly spotted just off the North Goa coastline, and the boat operators know exactly where to find them. The ride offers fresh sea air, beautiful morning light on the water, and the thrill of watching dolphins glide alongside the boat. Life jackets are provided, and the trip is suitable for all ages. An early morning start means calmer seas and the best dolphin sightings.",
    highlights: [
      "Wild Indo-Pacific dolphin spotting",
      "Scenic morning coastline views",
      "Calm sea conditions for easy viewing",
      "Suitable for children and families",
      "Short, easy one-hour experience",
    ],
    inclusions: [
      "Shared boat ride",
      "Life jackets provided",
      "Experienced local boat operator",
    ],
    exclusions: [
      "Hotel pickup / drop (self-reach to jetty)",
      "Food and beverages",
      "Personal expenses",
    ],
    pickupNote: "Self-reach to Calangute / Sinquerim jetty — confirm exact point when booking",
    cancellationPolicy: [
      { label: "24 hrs+ before trip",    policy: "Full refund",  color: "green" },
      { label: "12–24 hrs before trip",  policy: "50% refund",   color: "amber" },
      { label: "Under 12 hrs / no-show", policy: "No refund",    color: "red"   },
      { label: "Cancelled by ZipGoa",    policy: "100% refund",  color: "green" },
    ],
    importantInfo: [
      "Dolphin sightings depend on natural behaviour — not 100% guaranteed every day",
      "Early morning trips (7:30–9 AM) have the highest sighting rates",
      "Not recommended for guests with severe sea sickness",
      "Children must be accompanied by an adult",
      "Carry a light waterproof jacket — it can get breezy on the water",
    ],
  },

  {
    id: "dinner-cruise",
    slug: "dinner-cruise",
    title: "Dinner / Party Cruise",
    location: "Panjim, Mandovi River",
    category: "Cruise",
    image: "/images/activities/cruise.jpg",
    gallery: [
      // "/images/locations/panjim.jpg",
      // "/images/services/sightseeing.jpg",
      // "/images/locations/calangute.jpg",
      // "/images/services/north-goa.jpg",
    ],
    duration: "~3 hours (evening)",
    pickupTime: "7:00 PM – 9:00 PM",
    frequency: "Everyday",
    rating: 4.7,
    priceFrom: 1600,
    priceUnit: "per person",
    shortDescription:
      "An evening cruise on the Mandovi river with dinner, live music, and entertainment — one of Goa's most popular night-out experiences.",
    overview:
      "Step aboard a beautifully decorated cruise boat for two memorable hours on the Mandovi river. As the sun sets over Panjim and the river turns golden, enjoy a freshly served dinner while Goa's iconic folk performances — Mando, Dekhni, and live band music — keep the atmosphere alive. The cruise passes Divar Island and offers panoramic views of the illuminated Panjim skyline. Whether you are celebrating a birthday, anniversary, or simply want a special Goa evening, this cruise delivers. Hotel transfers from North Goa can be arranged on request.",
    highlights: [
      "Dinner on the Mandovi river",
      "Live folk music and dance performances",
      "Panoramic Panjim skyline views at night",
      "Goa's iconic Mando and Dekhni dance show",
      "Views of Divar Island and Old Goa bridges",
      "Fully decorated cruise boat",
    ],
    inclusions: [
      "Cruise entry",
      "Dinner on board",
      "Live entertainment",
      "Welcome drink",
    ],
    exclusions: [
      "Hotel pickup / drop (self-reach to Panjim jetty)",
      "Alcoholic beverages (available for purchase on board)",
      "Personal expenses and tips",
    ],
    pickupNote: "Departs from Panjim (Panaji) jetty — hotel transfers from North Goa available on request",
    cancellationPolicy: [
      { label: "24 hrs+ before cruise",   policy: "Full refund",  color: "green" },
      { label: "12–24 hrs before cruise", policy: "50% refund",   color: "amber" },
      { label: "Under 12 hrs / no-show",  policy: "No refund",    color: "red"   },
      { label: "Cancelled by ZipGoa",     policy: "100% refund",  color: "green" },
    ],
    importantInfo: [
      "Report at Panjim jetty at least 15 minutes before departure",
      "Smart-casual dress suggested; no beachwear on board",
      "Alcohol is available for purchase — not included in the ticket",
      "Not suitable for guests with severe sea sickness",
      "Cruise runs rain or shine; heavy monsoon days may affect departure",
    ],
  },
];

export function buildActivityWhatsAppUrl(title: string): string {
  const msg = `Hi ZipGoa! 👋 I'm interested in the ${title}. Please share availability and details.`;
  return `https://wa.me/917026889254?text=${encodeURIComponent(msg)}`;
}

export function buildActivityBookingUrl(title: string, date: string, travellers: number, total: number): string {
  const msg = `Hi ZipGoa! 👋 I want to book the ${title}.\nDate: ${date}\nTravellers: ${travellers}\nTotal: ₹${total.toLocaleString()}\nPlease confirm availability.`;
  return `https://wa.me/917026889254?text=${encodeURIComponent(msg)}`;
}
