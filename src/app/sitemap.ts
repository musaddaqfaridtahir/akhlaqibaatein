import { MetadataRoute } from 'next';
import { SHOW_SUPPORT_SECTION } from '@/config/features';
import { categories } from '@/data/categories';
import { articles } from '@/data/articles';
import { seoCollections } from '@/data/collections';
import { duroodList } from '@/data/durood';
import { duainList } from '@/data/duain';
import { naatsList } from '@/data/naats';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.akhlaqibaatein.com';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/roman`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/qaza-namaz-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools/qaza-namaz-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools/qaza-namaz-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/zakat-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools/zakat-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools/zakat-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/hijri-date-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools/hijri-date-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools/hijri-date-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/namaz-timings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools/namaz-timings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools/namaz-timings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/asma-ul-husna`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools/asma-ul-husna`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools/asma-ul-husna`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/fidya-kaffara-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tools/fidya-kaffara-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/tools/fidya-kaffara-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...(SHOW_SUPPORT_SECTION ? [
      {
        url: `${baseUrl}/support`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/en/support`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/roman/support`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
    ] : []),
    {
      url: `${baseUrl}/durood`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/durood`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/durood`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/duain`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/duain`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/duain`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/naat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/naat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roman/naat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chahal-hadith`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // High-Search-Intent SEO Collection Hubs & Makhzan-e-Akhlaq
  const collectionRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/makhzan-e-akhlaq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...seoCollections.map((col) => ({
      url: `${baseUrl}/collections/${col.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ];

  // Article routes (Urdu, English, Roman Urdu)
  const articleRoutes: MetadataRoute.Sitemap = articles.flatMap((art) => [
    {
      url: `${baseUrl}/articles/${art.slug}`,
      lastModified: new Date(art.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/articles/${art.slug}`,
      lastModified: new Date(art.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/roman/articles/${art.slug}`,
      lastModified: new Date(art.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]);

  // Durood & Wazaif detail routes (Urdu, English, Roman Urdu)
  const duroodRoutes: MetadataRoute.Sitemap = duroodList.flatMap((d) => [
    {
      url: `${baseUrl}/durood/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/durood/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/roman/durood/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]);

  // Masnoon Duain detail routes (Urdu, English, Roman Urdu)
  const duainRoutes: MetadataRoute.Sitemap = duainList.flatMap((d) => [
    {
      url: `${baseUrl}/duain/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/duain/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/roman/duain/${d.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]);

  // Diwan-e-Naat Sharif detail routes (Urdu, English, Roman Urdu)
  const naatRoutes: MetadataRoute.Sitemap = naatsList.flatMap((n) => [
    {
      url: `${baseUrl}/naat/${n.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/naat/${n.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/roman/naat/${n.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]);

  return [
    ...staticRoutes,
    ...duroodRoutes,
    ...duainRoutes,
    ...naatRoutes,
    ...categoryRoutes,
    ...collectionRoutes,
    ...articleRoutes,
  ];
}
