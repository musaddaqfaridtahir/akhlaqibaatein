import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import HijriDateConverterView from '@/components/HijriDateConverterView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools/hijri-date-converter`;

export const metadata: Metadata = {
  title: 'ہجری اور عیسوی تاریخ کنورٹر و اسلامی ایام کاؤنٹ ڈاؤن',
  description:
    'عیسوی تاریخ کو ہجری (اسلامی) تاریخ میں اور ہجری تاریخ کو عیسوی میں درست تبدیل کریں۔ رمضان المبارک، عیدین، عاشورہ اور ۱۲ ربیع الاول کا لائیو کاؤنٹ ڈاؤن اور رویتِ ہلال ایڈجسٹمنٹ۔',
  keywords: [
    'Hijri Date Converter',
    'Islamic Date Today',
    'Gregorian to Hijri',
    'Hijri to Gregorian Converter',
    'ہجری تاریخ کنورٹر',
    'آج کی اسلامی تاریخ',
    'عیسوی تا ہجری کنورٹر',
    'Ramadan Countdown',
    'Eid Countdown',
    'Islamic Calendar Converter',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools/hijri-date-converter`,
    ro: `${BASE_URL}/roman/tools/hijri-date-converter`,
  }),
  openGraph: {
    title: 'ہجری اور عیسوی تاریخ کنورٹر و اسلامی ایام کاؤنٹ ڈاؤن',
    description:
      'آج کی مصدقہ ہجری تاریخ، دو طرفہ تاریخ کنورٹر اور رمضان و عیدین کا لائیو کاؤنٹ ڈاؤن۔',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ہجری اور عیسوی تاریخ کنورٹر | Hijri Date Converter',
    description: 'Convert between Gregorian and Islamic Hijri dates with live countdowns to Ramadan and Eid.',
  },
};

const hijriFaqs = [
  {
    question: 'اسلامی (ہجری) اور شمسی (عیسوی) سال میں بنیادی فرق کیا ہے؟',
    answer:
      'شمسی سال ۳۶۵ دن کا ہوتا ہے جبکہ قمری سال ۳۵۴ یا ۳۵۵ دن پر مشتمل ہوتا ہے، جس سے ہر سال ۱۰ تا ۱۲ دن کا فرق پیدا ہوتا ہے۔',
  },
  {
    question: 'پاکستان اور سعودی عرب کی ہجری تاریخوں میں ایک دن کا فرق کیوں ہوتا ہے؟',
    answer:
      'جغرافیائی فاصلے اور افق کے فرق کی وجہ سے نیا چاند مختلف خطوں میں الگ الگ وقت پر نظر آتا ہے۔',
  },
  {
    question: 'کیا ہجری تاریخ کا شرعی حساب غروبِ آفتاب سے تبدیل ہوتا ہے؟',
    answer:
      'جی ہاں! شریعتِ اسلامی میں نیا اسلامی دن اور تاریخ مغرب یعنی سورج غروب ہوتے ہی شروع ہو جاتی ہے۔',
  },
];

export default function HijriDateConverterPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'ہجری اور عیسوی تاریخ کنورٹر (Hijri Date Converter)',
          description:
            'آج کی مصدقہ ہجری تاریخ، دو طرفہ کنورٹر اور رمضان و عیدین کا لائیو کاؤنٹ ڈاؤن۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-24',
        }}
      />
      <JsonLd type="faq" faqs={hijriFaqs} />
      <div className="space-y-8">
        <AdSlot position="header" />
        <HijriDateConverterView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
