import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuroodHubView from '@/components/DuroodHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/en/durood`;

export const metadata: Metadata = {
  title: 'Durood & Wazaif Hub — Arabic Text, English Translation & Tasbeeh | AkhlaqiBaatein.com',
  description:
    'Explore authentic classical Durood-e-Pak with authentic Arabic Naskh text, English translation, Durood-e-Tanjeena, Durood-e-Ibrahimi, Salat al-Nariya, virtues, interactive Digital Tasbeeh counter, and 9:16 HD Status cards.',
  keywords: [
    'Durood Sharif in English',
    'Durood o Salam with English translation',
    'Benefits of Durood',
    'Durood e Tanjina English',
    'Durood e Ibrahimi English translation',
    'Salat al Nariya English',
    'Islamic Wazaif and Invocations',
    'Salawat on Prophet Muhammad',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: `${BASE_URL}/durood`,
    en: pageUrl,
    ro: `${BASE_URL}/roman/durood`,
  }),
  openGraph: {
    title: 'Durood & Wazaif Hub — Classical Salawat & Invocations | AkhlaqiBaatein.com',
    description:
      'Authentic Durood-e-Pak in Arabic with complete English translation, spiritual virtues, interactive Tasbeeh counter, and downloadable 9:16 HD Status Cards.',
    url: pageUrl,
    type: 'website',
  },
};

const englishHubFaqs = [
  {
    question: 'What is the most significant virtue of reciting Durood Sharif?',
    answer:
      'According to authenticated Sahih Hadith, whoever sends blessings upon the Holy Prophet ﷺ once, Allah bestows ten mercies upon him, expiates ten sins, and raises him ten spiritual ranks.',
  },
  {
    question: 'Does each Durood retain an independent interactive digital Tasbeeh count?',
    answer:
      'Yes, each Durood and Wazifa maintains an independent counter and target saved locally in your browser so you can resume your spiritual count at any time.',
  },
  {
    question: 'How can the mobile Status Card be downloaded?',
    answer:
      'On each Durood detail page, a 1-click button generates a beautifully formatted 9:16 HD Status card (1080x1920) optimized for WhatsApp Status, Instagram Stories, and social sharing.',
  },
];

export default function EnglishDuroodHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={englishHubFaqs} />
      <DuroodHubView routeLanguage="en" />
    </>
  );
}
