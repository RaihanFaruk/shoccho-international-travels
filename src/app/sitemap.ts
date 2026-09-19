import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shoccho-travels.com";

  const routes = [
    "",
    "/about",
    "/packages",
    "/packages/pkg-umrah-flagship",
    "/packages/pkg-umrah-ramadan",
    "/packages/pkg-umrah-economy",
    "/packages/pkg-turkey-cruise",
    "/packages/pkg-maldives-luxury",
    "/packages/pkg-dubai-safari",
    "/hajj-umrah",
    "/visa",
    "/destinations",
    "/muallims",
    "/community",
    "/dashboard",
    "/privacy",
    "/privacy-policy",
    "/terms",
    "/terms-of-service",
    "/sitemap",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/packages" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/packages") ? 0.9 : 0.8,
  }));
}
