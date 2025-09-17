import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mental-age-test.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/mental-test",
    "/intellectual-age-test",
    "/intellectual-age-test/start",
    "/more-tests",
    "/personality-disorder-test",
    "/gender-role-test",
    "/powerpuff-girls-test",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/mental-test" ? "daily" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

