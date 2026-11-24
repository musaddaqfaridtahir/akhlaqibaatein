import React from 'react';
import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';
import CollectionsIndexView from '@/components/CollectionsIndexView';

export const dynamic = 'force-static';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/collections',
  lang: 'ro',
  title: 'Mawzooati Majmooay | AkhlaqiBaatein.com',
  description:
    'Jumma Mubarak, Sabr o Shukr, Rizq aur Barkat, aur Walidain ke Huqooq par Roman Urdu mein muntakhab aqwal o ahadith.',
  keywords: ['Islamic Collections Roman', 'Mawzooati Majmooay', 'Jumma Mubarak Roman', 'Sabr o Shukr'],
});

export default function RomanCollectionsPage() {
  return <CollectionsIndexView />;
}
