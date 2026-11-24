import React from 'react';
import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';
import CollectionsIndexView from '@/components/CollectionsIndexView';

export const dynamic = 'force-static';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/collections',
  lang: 'en',
  title: 'Curated Islamic Quote & Hadith Collections | AkhlaqiBaatein.com',
  description:
    'Explore curated Islamic collections on Jumma Mubarak, Sabr & Shukr, Rizq & Barakah, and Honoring Parents in English.',
  keywords: ['Islamic Collections', 'Curated Islamic Quotes', 'Jumma Mubarak', 'Patience and Gratitude'],
});

export default function EnglishCollectionsPage() {
  return <CollectionsIndexView />;
}
