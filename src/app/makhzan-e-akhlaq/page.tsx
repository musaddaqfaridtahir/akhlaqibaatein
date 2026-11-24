import React from 'react';
import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';
import MakhzanBookView from '@/components/MakhzanBookView';

export const dynamic = 'force-static';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/makhzan-e-akhlaq',
  lang: 'ur',
  title: 'مخزنِ اخلاق (Makhzan-e-Akhlaq) — ابواب، اخلاقیات و حکمت',
  description:
    'Explore chapters, Islamic moral teachings, Prophetic wisdom, and classical Urdu ethics derived from Makhzan-e-Akhlaq with Roman Urdu and English commentary.',
  keywords: [
    'Makhzan-e-Akhlaq',
    'مخزنِ اخلاق',
    'Makhzan e Akhlaq Urdu book quotes',
    'Islamic ethics book Urdu',
    'AkhlaqiBaatein library',
  ],
});

export default function MakhzanEAkhlaqPage() {
  return <MakhzanBookView />;
}
