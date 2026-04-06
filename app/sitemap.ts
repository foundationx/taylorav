import type { MetadataRoute } from 'next';
import { insightPosts } from '../lib/insights';

const base = 'https://taylorav.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: '2026-04-05', changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/rentals`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/staging`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about-us`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/portfolio`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights`, lastModified: '2026-04-05', changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/salt-lake-city`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/park-city`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/ogden`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/provo`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/utah-county`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/las-vegas`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.6 },
  ];

  const insightRoutes: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...insightRoutes];
}
