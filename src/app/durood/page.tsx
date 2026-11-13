import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import DuroodHubView from '@/components/DuroodHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/durood`;

export const metadata: Metadata = {
  title: 'درود و وظائف (Durood o Salam & Wazaif Hub) — عربی متن، اردو ترجمہ و تسبیح',
  description:
    'Explore authentic Durood e Pak with Arabic Naskh text, Urdu translation, Durood e Tanjeena, Durood e Ibrahimi, Salat al-Nariya, Fazilat, interactive Digital Tasbeeh counter, and 9:16 HD Status cards on AkhlaqiBaatein.com.',
  keywords: [
    'Durood o Salam',
    'Durood e Pak ki fazilat',
    'Durood e Tanjeena with Urdu translation',
    'Durood e Ibrahimi Urdu',
    'Salat al Nariya',
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
      'Authentic Durood-e-Pak in Arabic with Urdu translation, Fazilat, Digital Tasbeeh counter, and downloadable 9:16 HD Status Cards.',
    url: pageUrl,
    type: 'website',
  },
};

const hubFaqs = [
  {
    question: 'درودِ پاک پڑھنے کی سب سے اہم فضیلت کیا ہے؟ (Virtue of Reciting Durood)',
    answer:
      'صحیح احادیث کے مطابق جو شخص حضور نبی کریم ﷺ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے، اس کے دس گناہ معاف فرماتا ہے اور اس کے دس درجات بلند فرماتا ہے۔',
  },
  {
    question: 'کیا اس صفحے پر موجود ہر درود کا ڈیجیٹل تسبیح کاؤنٹر الگ محفوظ ہوتا ہے؟',
    answer:
      'جی ہاں! ہر درود اور وظیفے کے صفحے پر اپنا الگ ڈیجیٹل تسبیح کاؤنٹر موجود ہے جو آپ کے براؤزر میں محفوظ رہتا ہے تاکہ دوبارہ آنے پر آپ وہیں سے گنتی جاری رکھ سکیں۔',
  },
  {
    question: 'اسٹیٹس کارڈ کس طرح ڈاؤن لوڈ کیا جا سکتا ہے؟',
    answer:
      'ہر درود کے تفصیلی صفحے پر عربی متن، ترجمہ، آپ کے نام اور یومیہ ہدف پر مشتمل خوبصورت 9:16 HD اسٹیٹس کارڈ ایک کلک میں ڈاؤن لوڈ کیا جا سکتا ہے۔',
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
