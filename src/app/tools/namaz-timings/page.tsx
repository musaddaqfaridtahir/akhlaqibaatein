import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import NamazTimingsView from '@/components/NamazTimingsView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools/namaz-timings`;

export const metadata: Metadata = {
  title: 'نماز کے درست اوقات اور اگلی نماز کا لائیو کاؤنٹ ڈاؤن',
  description:
    'پاکستان کے تمام بڑے شہروں اور دنیا بھر کے لیے نماز کے درست روزانہ اوقات (فجر، طلوع، اشراق، ظہر، عصر، مغرب، عشاء)۔ حنفی و شافعی طریقہ، اگلی نماز کا لائیو کاؤنٹ ڈاؤن اور مکروہ اوقات گائیڈ۔',
  keywords: [
    'Namaz Timings Today',
    'Prayer Times Lahore',
    'Karachi Prayer Times',
    'Next Salah Countdown',
    'نماز کے اوقات',
    'آج کی نماز کا وقت',
    'فجر ظہر عصر مغرب عشاء ٹائم',
    'Hanafi Prayer Times',
    'Namaz Countdown',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools/namaz-timings`,
    ro: `${BASE_URL}/roman/tools/namaz-timings`,
  }),
  openGraph: {
    title: 'نماز کے درست اوقات اور اگلی نماز کا لائیو کاؤنٹ ڈاؤن',
    description:
      'پاکستان اور دنیا بھر کے لیے مستند فلکیاتی نماز کے اوقات، حنفی و شافعی آپشن اور لائیو کاؤنٹ ڈاؤن۔',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'نماز کے اوقات و کاؤنٹ ڈاؤن | Namaz Timings & Countdown',
    description: 'Accurate daily Islamic prayer times with live countdown to next Salah and Makruh periods.',
  },
};

const namazFaqs = [
  {
    question: 'نماز کے مستحب اوقات سے کیا مراد ہے؟',
    answer:
      'فجر کو اجالے میں، گرمیوں میں ظہر کو قدرے ٹھنڈا کر کے، عصر کو دھوپ کی تیزی زائل ہونے تک تاخیر کے بغیر، اور مغرب کو فوراً ادا کرنا مستحب ہے۔',
  },
  {
    question: 'اشراق اور چاشت کی نماز کا صحیح وقت کیا ہے؟',
    answer:
      'طلوعِ آفتاب کے تقریباً ۱۵ تا ۲۰ منٹ بعد اشراق اور دن چڑھے نصف النہار سے پہلے چاشت کا وقت ہوتا ہے۔',
  },
  {
    question: 'کیا سفر میں دورانِ پرواز نماز کے اوقات تبدیل ہوتے ہیں؟',
    answer:
      'جی ہاں! نماز کے اوقات مسافر کی اس وقت کی زمینی و فضائی پوزیشن اور سورج کی روشنی کے مطابق طے ہوتے ہیں۔',
  },
];

export default function NamazTimingsPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'نماز کے اوقات اور اگلی نماز کا کاؤنٹ ڈاؤن (Namaz Timings)',
          description:
            'روزانہ نماز کے درست اوقات، حنفی و شافعی کیلکولیشن اور لائیو کاؤنٹ ڈاؤن ٹائمر۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-24',
        }}
      />
      <JsonLd type="faq" faqs={namazFaqs} />
      <div className="space-y-8">
        <AdSlot position="header" />
        <NamazTimingsView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
