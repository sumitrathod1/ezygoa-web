import type { MetadataRoute } from "next";
import { vehicles, locations } from "@/lib/data";

const BASE_URL = "https://www.ezygoa.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/fleet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/self-drive`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/airport-taxi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/goa-sightseeing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/north-goa-tour`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/south-goa-tour`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/dudhsagar-trip`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/outstation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/booking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];

  const taxiVehicleRoutes: MetadataRoute.Sitemap = vehicles
    .filter((v) => v.category === "taxi")
    .map((v) => ({
      url: `${BASE_URL}/taxi/${v.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const selfDriveVehicleRoutes: MetadataRoute.Sitemap = vehicles
    .filter((v) => v.category === "self-drive")
    .map((v) => ({
      url: `${BASE_URL}/self-drive/${v.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE_URL}/location/${l.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...taxiVehicleRoutes,
    ...selfDriveVehicleRoutes,
    ...locationRoutes,
  ];
}
