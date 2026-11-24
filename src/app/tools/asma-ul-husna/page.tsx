import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import AsmaUlHusnaView from '@/components/AsmaUlHusnaView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools/asma-ul-husna`;

export const metadata: Metadata = {
  title: '۹۹ اسمائے حسنیٰ — اللہ تعالیٰ کے مبارک نام، معانی و تسبیح کاؤنٹر',
  description:
    'اللہ تعالیٰ کے ۹۹ اسمائے مبارکہ (عربی خطِ نسخ، اردو ترجمہ، رومن اردو، انگریزی معنی اور روحانی فوائد)۔ سرچ فلٹر اور بلٹ ان تسبیح کاؤنٹر کے ساتھ۔ 99 Names of Allah with meanings & counter.',
  keywords: [
    '99 Names of Allah',
    'Asma ul Husna Urdu',
    '99 Names of Allah with meaning',
    'Asma ul Husna with counter',
    '۹۹ اسمائے حسنیٰ',
    'اللہ کے ننانوے نام',
    'اسمائے حسنیٰ کے معانی و فضائل',
    'Allah 99 Names Arabic Audio Meaning',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools/asma-ul-husna`,
    ro: `${BASE_URL}/roman/tools/asma-ul-husna`,
  }),
  openGraph: {
    title: '۹۹ اسمائے حسنیٰ — اللہ تعالیٰ کے مبارک نام، معانی و تسبیح کاؤنٹر',
    description:
      'مکمل ۹۹ اسمائے حسنیٰ عربی رسم الخط، اردو و انگریزی معانی، روحانی اثرات اور آن لائن تسبیح کاؤنٹر۔',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '۹۹ اسمائے حسنیٰ | 99 Names of Allah Explorer',
    description: 'Explore the 99 Beautiful Names of Allah with meanings, spiritual reflections, and interactive tap counter.',
  },
};

const asmaFaqs = [
  {
    question: 'کیا اللہ تعالیٰ کے اسمائے مبارکہ صرف ۹۹ تک ہی محدود ہیں؟',
    answer:
      'نہیں، اللہ تعالیٰ کے نام لامحدود ہیں لیکن ان ۹۹ ناموں کے احصاء پر جنت کی خصوصی بشارت وارد ہے۔',
  },
  {
    question: 'اسمائے حسنیٰ کے ذریعے دعا مانگنے کا شرعی طریقہ کیا ہے؟',
    answer:
      'اپنی حاجت کے مناسب اسم کا انتخاب کر کے اللہ کو پکارا جائے، جیسے مغفرت کے لیے یا غفور اور رزق کے لیے یا رزاق۔',
  },
  {
    question: 'حدیث میں "مَنْ أَحْصَاهَا" کا شرعی مفہوم کیا ہے؟',
    answer:
      'ان ناموں کو یاد کرنا، ان کے معانی و صفات پر ایمان لانا، اور ان کے تقاضوں کے مطابق اخلاق سنوارنا۔',
  },
];

export default function AsmaUlHusnaPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: '۹۹ اسمائے حسنیٰ ایکسپلورر (99 Names of Allah Explorer)',
          description:
            'اللہ تعالیٰ کے ننانوے مبارک نام بمع عربی متن، اردو و انگریزی ترجمہ اور تسبیح کاؤنٹر۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-24',
        }}
      />
      <JsonLd type="faq" faqs={asmaFaqs} />
      <div className="space-y-8">
        <AdSlot position="header" />
        <AsmaUlHusnaView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
