import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import NaatHubView from '@/components/NaatHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/naat`;

export const metadata: Metadata = {
  title: 'دیوانِ نعت شریف (Naat Sharif Hub) — اردو اشعار، فرہنگ، ادبی تشریح و اسٹیٹس | AkhlaqiBaatein.com',
  description:
    'مستند نعتِ رسولِ مقبول ﷺ، سلام، حمد اور مناجات کا مستند دیوان۔ مصطفیٰ جانِ رحمت، قصیدہ بردہ، وہ نبیوں میں رحمت لقب پانے والا کے مکمل اشعار (6–8 اشعار)، فرہنگ، تشریح اور 9:16 HD اسٹیٹس ڈاؤن لوڈ۔',
  keywords: [
    'Naat Sharif lyrics in Urdu',
    'Mustafa Jaan e Rehmat lyrics',
    'Qasida Burda Sharif Urdu',
    'Woh Nabiyon Mein Rehmat Laqab Panay Wala lyrics',
    'Kalam e Raza',
    'Islamic poetry with Urdu Tashreeh',
    'نعت شریف اردو اشعار',
    'سلام رضا مکمل',
    'دیوان نعت',
    'نعت شریف اسٹیٹس',
  ],
  alternates: buildHreflangAlternates({
    canonical: `${BASE_URL}/naat`,
    ur: `${BASE_URL}/naat`,
    en: `${BASE_URL}/en/naat`,
    ro: `${BASE_URL}/roman/naat`,
  }),
  openGraph: {
    title: 'دیوانِ نعت شریف | Naat Sharif Hub — AkhlaqiBaatein.com',
    description:
      'Complete classical Urdu Naats, Salawat, Hamd, and Munajat with full multi-stanza poetry (6–8 Ashaar), vocabulary (Farhang), in-depth literary explanation (Tashreeh), and 9:16 HD Status cards.',
    url: pageUrl,
    type: 'website',
  },
};

const naatHubFaqs = [
  {
    question: 'دیوانِ نعت شریف میں کونسے کلام شامل ہیں؟ (Which Naats are included?)',
    answer:
      'اس دیوان میں اردو اور عربی ادب کے عظیم شاہکار شامل ہیں، مثلاً امام احمد رضا خانؒ کا "سلامِ رضا"، امام بوصیریؒ کا "قصیدہ بردہ شریف"، مولانا الطاف حسین حالیؒ کا "وہ نبیوں میں رحمت"، اور دیگر معروف نعتیں و مناجات مکمل 6 تا 8 اشعار کے ساتھ شامل ہیں۔',
  },
  {
    question: 'کیا ہر نعت کے مشکل الفاظ کے معانی (فرہنگ) اور تشریح موجود ہے؟',
    answer:
      'جی ہاں! کلام کے فہم کو عام فہم اور آسان بنانے کے لیے ہر نعت شریف کے ساتھ مشکل الفاظ کے معانی (فرہنگ)، ادبی و روحانی تشریح (150 سے 200 الفاظ) اور مستند کتاب کا حوالہ فراہم کیا گیا ہے۔',
  },
  {
    question: 'کیا ہم نعت کے اشعار کا خوبصورت 9:16 HD اسٹیٹس کارڈ ڈاؤن لوڈ کر سکتے ہیں؟',
    answer:
      'جی ہاں! ہر نعت شریف کے صفحے پر 1-کلک "اسٹیٹس کارڈ ڈاؤن لوڈ کریں" کا بٹن موجود ہے جو واٹس ایپ اور فیس بک کے لیے 1080x1920 HD ریزولوشن میں شاندار برانڈڈ اسٹیٹس کارڈ تیار کرتا ہے۔',
  },
];

export default function NaatHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={naatHubFaqs} />
      <NaatHubView />
    </>
  );
}
