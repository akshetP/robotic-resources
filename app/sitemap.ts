import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.dateModified);

  const sectionEntries = siteConfig.sections.map((section) => ({
    url: `${siteConfig.url}${section.path === "/" ? "" : section.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: section.path === "/" ? 1 : 0.8,
  }));

  const guideEntries = siteConfig.guides.map((guide) => ({
    url: `${siteConfig.url}${guide.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...sectionEntries,
    ...guideEntries,
    {
      url: `${siteConfig.url}/guides`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
