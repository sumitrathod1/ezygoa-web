import type { MetadataRoute } from "next";

const BASE_URL = "https://www.ezygoa.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
