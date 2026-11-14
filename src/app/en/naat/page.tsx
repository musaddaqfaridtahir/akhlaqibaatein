import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import NaatHubView from '@/components/NaatHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/en/naat`;

export const metadata: Metadata = {
  title: 'Diwan-e-Naat Sharif — Prophetic Devotional Poetry, Lyrics & Commentary | AkhlaqiBaatein.com',
  description:
    'Authentic classical Islamic devotional poetry, Qasida Burda, Mustafa Jaan-e-Rehmat, Kalaam-e-Raza, Hamd, and Salam with complete 6–10 verses, vocabulary (Farhang), English literary commentary, and 9:16 HD Status cards.',
  keywords: [
    'Naat Sharif lyrics English',
    'Mustafa Jaan e Rehmat lyrics in English',
    'Qasida Burda Sharif English',
    'Classical Islamic Poetry lyrics',
    'Islamic devotional songs lyrics and meaning',
    'Kalam e Raza English',
    'Diwan e Naat',
    'Prophetic praise odes',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: `${BASE_URL}/naat`,
    en: pageUrl,
    ro: `${BASE_URL}/roman/naat`,
  }),
  openGraph: {
    title: 'Diwan-e-Naat Sharif — Sacred Devotional Poetry | AkhlaqiBaatein.com',
    description:
      'Complete classical Urdu & Arabic Naats, Salawat, Hamd, and Munajat with full multi-stanza poetry (6–10 Ashaar), vocabulary guides, literary commentaries, and 9:16 HD Status cards.',
    url: pageUrl,
    type: 'website',
  },
};

const englishNaatHubFaqs = [
  {
    question: 'Which classical odes are included in the Diwan-e-Naat Hub?',
    answer:
      'The treasury includes timeless poetic masterpieces of Urdu and Arabic sacred literature, such as Imam Ahmad Raza Khan’s "Salam-e-Raza", Imam al-Busiri’s "Qasida Burda", and Allama Hali’s odes with complete 6–10 stanzas.',
  },
  {
    question: 'Are vocabulary guides and literary commentaries provided for each poem?',
    answer:
      'Yes, each sacred ode features a detailed Farhang (vocabulary dictionary), scholarly literary and spiritual commentary, and authentic source citations.',
  },
  {
    question: 'How can high-resolution 9:16 Status cards be downloaded?',
    answer:
      'Every individual Naat page features a 1-click download button that renders a vertical 1080x1920 HD Status card with authentic typography and website branding.',
  },
];

export default function EnglishNaatHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={englishNaatHubFaqs} />
      <NaatHubView routeLanguage="en" />
    </>
  );
}
