import React from 'react';
import type { Metadata } from 'next';
import { buildHreflangAlternates, BASE_URL } from '@/lib/quoteSeo';
import CollectionsIndexView from '@/components/CollectionsIndexView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'موضوعاتی مجموعے | Islamic Quote & Hadith Collections — AkhlaqiBaatein.com',
  description:
    'Explore authentic Islamic collections on Jumma Mubarak, Sabr o Shukr, Rizq aur Barkat, and Walidain ke Huqooq in Urdu, Roman Urdu, and English.',
  alternates: buildHreflangAlternates({
    canonical: `${BASE_URL}/collections`,
    ur: `${BASE_URL}/collections`,
    en: `${BASE_URL}/collections`,
    ro: `${BASE_URL}/collections`,
  }),
  openGraph: {
    title: 'Curated Islamic Quote & Hadith Collections | AkhlaqiBaatein.com',
    description:
      'Jumma Mubarak, Sabr & Shukr, Rizq & Barakah, and Honoring Parents — authentic quotes with commentary & downloadable status cards.',
    url: `${BASE_URL}/collections`,
    type: 'website',
  },
};

export default function CollectionsPage() {
  return <CollectionsIndexView />;
}
