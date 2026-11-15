import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import QazaNamazCalculatorView from '@/components/QazaNamazCalculatorView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools/qaza-namaz-calculator`;

export const metadata: Metadata = {
  title: 'قضاء نماز کیلکولیٹر و ٹریکر چارٹ | Qaza Namaz Calculator & Tracker',
  description:
    'عمر بھر کی چھوٹی ہوئی نمازوں (فجر تا وتر) کا شرعی حساب لگائیں، یومیہ ادائیگی کا ہدف مقرر کریں اور مفت پرنٹ ایبل ٹریکر شیٹ حاصل کریں۔ Qaza Namaz Calculator in Urdu & English.',
  keywords: [
    'Qaza Namaz Calculator',
    'Qaza e Umri Calculator',
    'Lifetime Missed Prayers Calculator',
    'قضا نماز کیلکولیٹر',
    'قضائے عمری کا حساب',
    'نماز قضا چارٹ',
    'Qaza Namaz Tracker Printable',
    'Hanafi Qaza Namaz method',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools/qaza-namaz-calculator`,
    ro: `${BASE_URL}/roman/tools/qaza-namaz-calculator`,
  }),
  openGraph: {
    title: 'قضاء نماز کیلکولیٹر و ٹریکر چارٹ | Qaza Namaz Calculator — AkhlaqiBaatein.com',
    description:
      'عمر بھر کی قضا نمازوں کا درست شرعی تخمینہ، یومیہ ہدف، اور مفت پرنٹ ایبل ٹریکر چارٹ۔ AkhlaqiBaatein.com',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'قضاء نماز کیلکولیٹر | Qaza Namaz Calculator',
    description: 'Calculate lifetime missed prayers and print your personalized tracker sheet.',
  },
};

const qazaFaqs = [
  {
    question: 'قضائے عمری کی نیت کا شرعی طریقہ کیا ہے؟',
    answer:
      'قضا نماز کی نیت کا آسان طریقہ یہ ہے کہ دل میں ارادہ کرے: "میں اپنی چھوٹی ہوئی نمازوں میں سے سب سے پہلی فجر (یا ظہر وغیرہ) کی نماز قضا پڑھتا ہوں۔"',
  },
  {
    question: 'کیا قضا نماز مکروہ اوقات کے علاوہ کسی بھی وقت پڑھی جا سکتی ہے؟',
    answer:
      'جی ہاں! طلوع، زوال اور غروبِ آفتاب کے علاوہ دن یا رات کے کسی بھی وقت قضا نماز پڑھی جا سکتی ہے۔',
  },
];

export default function QazaNamazCalculatorPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'قضاء نماز کیلکولیٹر و ٹریکر چارٹ (Qaza Namaz Calculator)',
          description:
            'عمر بھر کی قضا نمازوں کا شرعی حساب، یومیہ ہدف، اور پرنٹ ایبل ٹریکر شیٹ۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-15',
        }}
      />
      <JsonLd type="faq" faqs={qazaFaqs} />
      <div className="space-y-8">
        <AdSlot position="header" />
        <QazaNamazCalculatorView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
