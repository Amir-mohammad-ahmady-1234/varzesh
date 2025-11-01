import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://varzesh-frg6.vercel.app";

  return [
    // صفحات عمومی
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-10-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date("2025-10-03"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/video`,
      lastModified: new Date("2025-10-11"),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // بلاگ و اخبار (داینامیک)
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-10-28"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date("2025-10-28"),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // صفحات احراز هویت
    {
      url: `${baseUrl}/auth/login`,
      lastModified: new Date("2025-10-25"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/auth/register`,
      lastModified: new Date("2025-10-25"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/auth/resetPass`,
      lastModified: new Date("2025-09-26"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
