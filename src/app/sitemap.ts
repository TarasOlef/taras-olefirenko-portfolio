import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects
      .filter((project) => project.links.caseStudy)
      .map((project) => ({
        url: `${siteUrl}${project.links.caseStudy}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];
}
