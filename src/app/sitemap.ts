import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://taras-olefirenko-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}${project.links.caseStudy}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: project.status.toLowerCase().includes("preparación") ? 0.4 : 0.8,
    })),
  ];
}
