import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuaHubView from '@/components/DuaHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/duain`;

export const metadata: Metadata = {
  title: 'مسنون دعائیں (Daily Masnoon Duain) — قرآنی و نبوی دعائیں مع ترجمہ و تسبیح | AkhlaqiBaatein.com',
  description:
    'پریشانی، قرض سے نجات، رزق میں کشادگی، نظرِ بد سے حفاظت، بیماری سے شفاء اور سفر کی مستند مسنون دعائیں۔ اعراب شدہ عربی متن، اردو ترجمہ، فضیلت، ڈیجیٹل تسبیح کاؤنٹر اور 9:16 اسٹیٹس کارڈ۔',
  keywords: [
    'Masnoon Duain in Urdu',
    'Daily Islamic supplications',
    'Preshani se nijat ki dua',
    'Qarz ki dua',
    'Shifa ki dua',
    'مسنون دعائیں',
    'دعائیں مع اردو ترجمہ',
    'صبح و شام کی دعائیں',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/duain`,
    ro: `${BASE_URL}/roman/duain`,
  }),
  openGraph: {
    title: 'مسنون دعائیں | Daily Masnoon Duain — AkhlaqiBaatein.com',
    description:
      'Authentic Quranic and Prophetic supplications with Arabic Naskh text, Urdu translation, virtues, interactive Tasbeeh counter, and 9:16 HD Status cards.',
    url: pageUrl,
    type: 'website',
  },
};

const duaHubFaqs = [
  {
    question: 'مسنون دعاؤں کے پڑھنے کی کیا فضیلت ہے؟',
    answer:
      'حدیثِ مبارکہ کے مطابق دعا مومن کا ہتھیار اور عبادت کا مغز ہے۔ مسنون دعائیں وہ جامع کلمات ہیں جو رسول اللہ ﷺ نے خود مانگے اور امت کو سکھائے۔',
  },
  {
    question: 'کیا ہر مسنون دعا کے ساتھ انفرادی ڈیجیٹل تسبیح کاؤنٹر موجود ہے؟',
    answer:
      'جی ہاں! ہر دعا کے تفصیلی صفحے پر عربی متن کے ساتھ سرکلر تسبیح کاؤنٹر اور ٹارگٹ موجود ہے جو براؤزر میں خودکار محفوظ رہتا ہے۔',
  },
  {
    question: 'کیا ہم ہر دعا کا خوبصورت واٹس ایپ اسٹیٹس کارڈ ڈاؤن لوڈ کر سکتے ہیں؟',
    answer:
      'جی ہاں! 1-کلک "اسٹیٹس کارڈ ڈاؤن لوڈ کریں" کے ذریعے موبائل کے لیے 9:16 HD برانڈڈ اسٹیٹس کارڈ مفت ڈاؤن لوڈ کیا جا سکتا ہے۔',
  },
];

export default function DuaHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={duaHubFaqs} />
      <DuaHubView />
    </>
  );
}
