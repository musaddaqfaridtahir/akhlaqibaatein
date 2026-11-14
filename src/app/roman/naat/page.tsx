import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import NaatHubView from '@/components/NaatHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/roman/naat`;

export const metadata: Metadata = {
  title: 'Diwan-e-Naat Sharif — Roman Urdu Ashaar, Farhang aur Tashreeh | AkhlaqiBaatein.com',
  description:
    'Mustanad Naat-e-Rasool ﷺ, Salam-e-Raza, Hamd aur Munajat ka diwan. Mustafa Jaan e Rehmat, Qasida Burda ke mukammal ashaar (6–10 ashaar), farhang, tashreeh aur 9:16 HD Status cards.',
  keywords: [
    'Naat lyrics Roman Urdu',
    'Mustafa Jaan e Rehmat lyrics Roman',
    'Qasida Burda Sharif Roman',
    'Kalam e Raza Roman Urdu',
    'Naat with Tashreeh Roman',
    'Diwan e Naat Sharif',
    'Naat Sharif status download',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: `${BASE_URL}/naat`,
    en: `${BASE_URL}/en/naat`,
    ro: pageUrl,
  }),
  openGraph: {
    title: 'Diwan-e-Naat Sharif | Naat Sharif Hub — AkhlaqiBaatein.com',
    description:
      'Classical Naats, Salam, Hamd aur Munajat ke mukammal 6–10 ashaar, farhang aur adabi tashreeh ke sath.',
    url: pageUrl,
    type: 'website',
  },
};

const romanNaatHubFaqs = [
  {
    question: 'Diwan-e-Naat Sharif mein konse kalam shamil hain?',
    answer:
      'Is diwan mein Urdu aur Arabi shairi ke azeem shahkar shamil hain, maslan Imam Ahmad Raza Khan ka "Salam-e-Raza", Imam al-Busiri ka "Qasida Burda", aur Allama Hali ka kalam mukammal 6 se 10 ashaar ke sath.',
  },
  {
    question: 'Kya har naat ke mushkil alfaz ke maani (farhang) aur tashreeh maujood hai?',
    answer:
      'Ji haan! Kalam ko samajhne ke liye har naat sharif ke sath mushkil alfaz ke maani (farhang), adabi tashreeh aur mustanad kitab ka hawala diya gaya hai.',
  },
  {
    question: 'Status card kis tarah download hota hai?',
    answer:
      'Har naat ke page par 1-click button ke zariye 9:16 vertical HD status card (1080x1920) foran download ho jata hai.',
  },
];

export default function RomanNaatHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={romanNaatHubFaqs} />
      <NaatHubView routeLanguage="ro" />
    </>
  );
}
