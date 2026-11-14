import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuroodHubView from '@/components/DuroodHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/roman/durood`;

export const metadata: Metadata = {
  title: 'Durood o Wazaif Hub — Arabic Matn, Roman Urdu Tarjuma aur Tasbeeh | AkhlaqiBaatein.com',
  description:
    'Mustanad classical Durood-e-Pak Arabic Naskh matn, Roman Urdu tarjuma, Durood-e-Tanjeena, Durood-e-Ibrahimi, Salat al-Nariya, Fazilat, interactive Digital Tasbeeh counter aur 9:16 HD Status cards.',
  keywords: [
    'Durood sharif Roman Urdu',
    'Durood o Salam roman',
    'Durood ki fazilat',
    'Durood e Tanjina Roman Urdu',
    'Durood e Ibrahimi Roman',
    'Salat al Nariya Roman',
    'Islamic Wazaif in Roman Urdu',
    'Durood counter',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: `${BASE_URL}/durood`,
    en: `${BASE_URL}/en/durood`,
    ro: pageUrl,
  }),
  openGraph: {
    title: 'Durood o Wazaif Hub — Classical Salawat & Invocations | AkhlaqiBaatein.com',
    description:
      'Mustanad Durood-e-Pak Arabic matn ke sath, Roman Urdu tarjuma, fazilat, interactive Tasbeeh counter, aur downloadable 9:16 HD Status Cards.',
    url: pageUrl,
    type: 'website',
  },
};

const romanHubFaqs = [
  {
    question: 'Durood-e-Pak parhne ki sab se ahem fazilat kya hai?',
    answer:
      'Sahih Hadith ke mutabiq jo shakhs Nabi Kareem ﷺ par 1 bar durood bhejta hai, Allah us par 10 rehmatein nazil farmata hai, 10 gunah maaf karta hai aur 10 darjaat buland farmata hai.',
  },
  {
    question: 'Kya har durood ka digital tasbeeh counter alag mehfooz rehta hai?',
    answer:
      'Ji haan, har durood aur wazife ke liye alag counter aur target aapke browser mein save rehta hai taake aap kisi bhi waqt apni tasbeeh wahin se jari rakh sakein.',
  },
  {
    question: 'Status card kis tarah download hota hai?',
    answer:
      'Har durood ke detail page par 1-click button ke zariye 9:16 HD Status Card (1080x1920) foran download ho jata hai jo WhatsApp Status ke liye ideal hai.',
  },
];

export default function RomanDuroodHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={romanHubFaqs} />
      <DuroodHubView routeLanguage="ro" />
    </>
  );
}
