import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuaHubView from '@/components/DuaHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/en/duain`;

export const metadata: Metadata = {
  title: 'Daily Masnoon Duas — Prophetic & Quranic Prayers with English Meaning',
  description:
    'Authentic Islamic supplications for distress relief, debt payment, sustenance (Rizq), healing, evil eye protection, and travel with interactive digital counters and 9:16 HD Status cards.',
  keywords: [
    'Daily Masnoon Duas',
    'Islamic supplications in English',
    'Dua for anxiety and grief',
    'Dua for debt relief',
    'Dua for protection from evil eye',
    'Prophetic prayers with translation',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: `${BASE_URL}/duain`,
    en: pageUrl,
    ro: `${BASE_URL}/roman/duain`,
  }),
  openGraph: {
    title: 'Daily Masnoon Duas — Classical Islamic Prayers',
    description:
      'Authentic prophetic prayers in Arabic Naskh text with English translation, spiritual context, interactive Tasbeeh counter, and downloadable Status cards.',
    url: pageUrl,
    type: 'website',
  },
};

const englishDuaHubFaqs = [
  {
    question: 'What is the virtue of reciting daily Masnoon Duas?',
    answer:
      'According to Prophetic traditions, supplication (Dua) is the essence of worship and a believer’s primary shield against hardships.',
  },
  {
    question: 'Does each Dua feature an interactive digital counter?',
    answer:
      'Yes, each supplication has a dedicated circular Tasbeeh counter and target saved locally in your browser.',
  },
  {
    question: 'Can the 9:16 mobile Status Cards be downloaded freely?',
    answer:
      'Yes, you can generate and download branded 1080x1920 HD Status cards for WhatsApp and social media with one click.',
  },
];

export default function EnglishDuaHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={englishDuaHubFaqs} />
      <DuaHubView routeLanguage="en" />
    </>
  );
}
