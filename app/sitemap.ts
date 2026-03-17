import type { MetadataRoute } from 'next';
import { insightPosts } from '../lib/insights';

const base = 'https://taylorav.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/rentals`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/staging`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/salt-lake-city`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/park-city`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/ogden`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/provo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/utah-county`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/las-vegas`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const insightRoutes: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...insightRoutes];
}
