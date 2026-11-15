import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuaHubView from '@/components/DuaHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/roman/duain`;

export const metadata: Metadata = {
  title: 'Daily Masnoon Duain — Arabic Naskh Matn, Roman Tarjuma aur Tasbeeh | AkhlaqiBaatein.com',
  description:
    'Mustanad Masnoon Duain: Preshani se nijat, qarz ki adaigi, rizq mein barkat, shifa aur hifazat ki duain. Roman Urdu tarjuma, fazilat, aur digital tasbeeh counter.',
  keywords: [
    'Masnoon duain Roman Urdu',
    'Preshani ki dua Roman',
    'Qarz utarne ki dua Roman Urdu',
    'Shifa ki dua Roman',
    'Islamic duas in Roman English',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: `${BASE_URL}/duain`,
    en: `${BASE_URL}/en/duain`,
    ro: pageUrl,
  }),
  openGraph: {
    title: 'Daily Masnoon Duain | Roman Urdu Supplications — AkhlaqiBaatein.com',
    description:
      'Mustanad masnoon duain Arabic Naskh text ke sath, Roman Urdu tarjuma, fazilat aur circular digital tasbeeh counter.',
    url: pageUrl,
    type: 'website',
  },
};

const romanDuaHubFaqs = [
  {
    question: 'Masnoon duain parhne ki kya fazilat hai?',
    answer:
      'Hadith ke mutabiq dua momin ka hathyar aur ibadat ka maghz hai. Yeh woh kalimaat hain jo Huzoor ﷺ ne khud mangay aur ummat ko sikhaye.',
  },
  {
    question: 'Kya har dua ke sath digital tasbeeh counter mojood hai?',
    answer:
      'Ji haan, har dua ke page par circular digital tasbeeh counter mojood hai jo browser mein khudkar save rehta hai.',
  },
  {
    question: 'Status card kis tarah download karein?',
    answer:
      '1-click button ke zariye mobile ke liye 9:16 HD branded status card foran download ho jata hai.',
  },
];

export default function RomanDuaHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={romanDuaHubFaqs} />
      <DuaHubView routeLanguage="ro" />
    </>
  );
}
