export interface VehicleSpec {
  [key: string]: string;
}

export interface VehicleRoute {
  route: string;
  price: number;
}

export interface VehicleFaqItem {
  q: string;
  a: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  category: "taxi" | "self-drive";
  capacity: number;
  luggage: number;
  ac: boolean;
  transmission?: string;
  fuelType?: string;
  image?: string;
  color?: string;
  pricePerKm?: number;
  hourlyPrice?: number;
  packages?: {
    "8hr80km"?: number;
    "12hr120km"?: number;
  };
  pricePerDay?: number;
  deposit?: number;
  features?: string[];
  bestFor?: string[];
  description?: string;
  // Extended fields for SEO vehicle pages
  tagline?: string;
  longDescription?: string;
  specifications?: VehicleSpec;
  airportRates?: { mopa: number; dabolim: number };
  popularRoutes?: VehicleRoute[];
  relatedVehicles?: string[];
  vehicleFaq?: VehicleFaqItem[];
  mileage?: string;
  bootSpace?: string;
  weeklyRate?: number;
  monthlyRate?: number;
}

export interface Route {
  from: string;
  to: string;
  distance: number;
  duration: string;
  prices: {
    dzire?: number;
    ertiga?: number;
    innova?: number;
    [key: string]: number | undefined;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  startingPrice: number;
  image?: string;
  slug: string;
  emoji: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  tripType: string;
  avatar?: string;
  location?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationRoute {
  to: string;
  distance: number;
  time: string;
  prices: { dzire: number; ertiga: number; innova: number };
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  time: string;
  fare: number;
}

export interface SelfDriveVehicle {
  id: string;
  name: string;
  type: string;
  category: "self-drive";
  segment: "economy" | "sedan" | "suv" | "family" | "adventure";
  image?: string;
  pricePerDay: number;
  transmission: "Manual" | "Automatic";
  fuelType: string;
  mileage: string;
  seats: number;
  doors: number;
  isNewModel?: boolean;
  isPremium?: boolean;
  features?: string[];
  deposit?: number;
  weeklyRate?: number;
  monthlyRate?: number;
}

export interface GLocation {
  id: string;
  name: string;
  description: string;
  shortDesc: string;
  area: "north" | "south" | "central";
  image?: string;
  emoji: string;
  gradient: string;
  famous: string[];
  bestTimeToVisit: string;
  peakSeason: string;
  offSeason: string;
  routes: LocationRoute[];
  nearbyAttractions: NearbyAttraction[];
  thingsToDo: string[];
}
