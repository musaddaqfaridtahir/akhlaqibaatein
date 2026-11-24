import React from 'react';
import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';
import CollectionsIndexView from '@/components/CollectionsIndexView';

export const dynamic = 'force-static';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/collections',
  lang: 'ur',
  title: 'موضوعاتی مجموعے | Islamic Quote & Hadith Collections',
  description:
    'Explore authentic Islamic collections on Jumma Mubarak, Sabr o Shukr, Rizq aur Barkat, and Walidain ke Huqooq in Urdu, Roman Urdu, and English.',
  keywords: ['Islamic Collections', 'موضوعاتی مجموعے', 'جمعہ مبارک', 'صبر و شکر', 'رزق اور برکت'],
});

export default function CollectionsPage() {
  return <CollectionsIndexView />;
}
