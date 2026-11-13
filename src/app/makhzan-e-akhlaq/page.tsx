import React from 'react';
import type { Metadata } from 'next';
import { buildHreflangAlternates, BASE_URL } from '@/lib/quoteSeo';
import MakhzanBookView from '@/components/MakhzanBookView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/makhzan-e-akhlaq`;

export const metadata: Metadata = {
  title: 'مخزنِ اخلاق (Makhzan-e-Akhlaq) — Chapters, Teachings & Ethics | AkhlaqiBaatein.com',
  description:
    'Explore chapters, Islamic moral teachings, Prophetic wisdom, and classical Urdu ethics derived from Makhzan-e-Akhlaq with Roman Urdu and English commentary.',
  keywords: [
    'Makhzan-e-Akhlaq',
    'مخزنِ اخلاق',
    'Makhzan e Akhlaq Urdu book quotes',
    'Islamic ethics book Urdu',
    'AkhlaqiBaatein library',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: pageUrl,
    ro: pageUrl,
  }),
  openGraph: {
    title: 'Makhzan-e-Akhlaq (مخزنِ اخلاق) — Classical Islamic Ethics Archive',
    description:
      'Browse chapters and selected ethical teachings inspired by Makhzan-e-Akhlaq, authentic Hadith, and Quranic wisdom.',
    url: pageUrl,
    type: 'website',
  },
};

export default function MakhzanEAkhlaqPage() {
  return <MakhzanBookView />;
}
