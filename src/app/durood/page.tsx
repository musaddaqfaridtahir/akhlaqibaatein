import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuroodHubView from '@/components/DuroodHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/durood`;

export const metadata: Metadata = {
  title: 'درود و وظائف (Durood o Salam & Wazaif Hub) — عربی متن و اردو ترجمہ',
  description:
    'Explore authentic Durood e Pak with Urdu translation, Durood e Tanjeena, Durood e Ibrahimi, Salat al-Nariya, Fazilat, interactive Digital Tasbeeh counter, and branded PDF downloads on AkhlaqiBaatein.com.',
  keywords: [
    'Durood o Salam',
    'Durood e Pak ki fazilat',
    'Durood e Tanjeena with Urdu translation',
    'Durood e Ibrahimi Urdu',
    'Islamic Wazaif in Urdu',
    'درود و وظائف',
    'درود شریف اردو ترجمہ',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: pageUrl,
    ro: pageUrl,
  }),
  openGraph: {
    title: 'گوشۂ درود و وظائف | Durood o Salam & Wazaif Hub — AkhlaqiBaatein.com',
    description:
      'Authentic Durood-e-Pak in Arabic with Urdu translation, Fazilat, Digital Tasbeeh counter, and downloadable branded PDF cards.',
    url: pageUrl,
    type: 'website',
  },
};

const hubFaqs = [
  {
    question: 'درودِ پاک پڑھنے کی سب سے اہم فضیلت کیا ہے؟',
    answer:
      'صحیح احادیث کے مطابق جو شخص حضور نبی کریم ﷺ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے، اس کے دس گناہ معاف ہوتے ہیں اور دس درجات بلند کیے جاتے ہیں۔',
  },
  {
    question: 'کیا اس صفحے پر موجود ہر درود کا ڈیجیٹل تسبیح کاؤنٹر الگ محفوظ ہوتا ہے؟',
    answer:
      'جی ہاں! ہر درود اور وظیفے کے صفحے پر اپنا الگ ڈیجیٹل تسبیح کاؤنٹر موجود ہے جو آپ کے براؤزر میں محفوظ رہتا ہے تاکہ دوبارہ آنے پر آپ وہیں سے گنتی جاری رکھ سکیں۔',
  },
  {
    question: 'کیا میں کسی بھی درود کی برانڈڈ PDF ڈاؤن لوڈ کر سکتا ہوں؟',
    answer:
      'جی ہاں، ہر درود کے تفصیلی صفحے پر عربی متن، اردو ترجمہ اور فضیلت پر مشتمل AkhlaqiBaatein.com کی خوبصورت برانڈڈ PDF ایک کلک میں ڈاؤن لوڈ کی جا سکتی ہے۔',
  },
];

export default function DuroodHubPage() {
  return (
    <>
      <JsonLd type="faq" faqs={hubFaqs} />
      <DuroodHubView />
    </>
  );
}
