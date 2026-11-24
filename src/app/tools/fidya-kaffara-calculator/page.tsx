import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import FidyaKaffaraCalculatorView from '@/components/FidyaKaffaraCalculatorView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools/fidya-kaffara-calculator`;

export const metadata: Metadata = {
  title: 'فدیہ، کفارہ اور صدقۂ فطر (فطرانہ) کیلکولیٹر',
  description:
    'گندم، جو، کھجور اور کشمش کے شرعی اوزان پر صدقۂ فطر، قضاءِ روزوں کا فدیہ اور قسم و روزے کے کفارے کا دقیق حساب۔ ۵ بین الاقوامی کرنسیوں (PKR, USD, GBP, SAR, AED) میں۔',
  keywords: [
    'Fitrana Calculator',
    'Sadqa e Fitr Calculator',
    'Roza Fidya Calculator',
    'Kaffara Calculator',
    'فدیہ کیلکولیٹر',
    'فطرانہ کا حساب',
    'روزے کا فدیہ',
    'قسم کا کفارہ',
    'Sadqa Fitr Rate Today',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools/fidya-kaffara-calculator`,
    ro: `${BASE_URL}/roman/tools/fidya-kaffara-calculator`,
  }),
  openGraph: {
    title: 'فدیہ، کفارہ اور صدقۂ فطر (فطرانہ) کیلکولیٹر',
    description:
      'شرعی اوزان پر صدقۂ فطر، روزے کا فدیہ اور قسم کے کفارے کا فوری اور درست حساب۔',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'فدیہ و فطرانہ کیلکولیٹر | Fidya, Kaffara & Fitrana Calculator',
    description: 'Calculate Sadqa-e-Fitr, missed fasts Fidya, and oath/fast Kaffara across 5 global currencies.',
  },
};

const fidyaFaqs = [
  {
    question: 'صدقۂ فطر کی ادائیگی کا سب سے افضل وقت کون سا ہے؟',
    answer:
      'عید الفطر کی صبح نمازِ عید سے قبل ادا کرنا افضل ہے، تاہم رمضان المبارک میں پیشگی ادا کرنا بھی جائز اور مستحب ہے۔',
  },
  {
    question: 'کیا اجناس کے بجائے نقدی رقم کی صورت میں فطرانہ یا فدیہ ادا کرنا جائز ہے؟',
    answer:
      'جی ہاں! فقہائے احناف کے نزدیک اناج کی قیمت کے برابر نقدی ادا کرنا نہ صرف جائز ہے بلکہ غریب کی حاجت کے لیے زیادہ مفید ہے۔',
  },
  {
    question: 'کیا صدقۂ فطر، فدیہ یا کفارہ اپنے قریبی رشتہ داروں کو دیا جا سکتا ہے؟',
    answer:
      'والدین، اولاد اور میاں بیوی کے علاوہ دیگر مستحق قریبی رشتہ داروں (بھائی، بہن، چچا وغیرہ) کو دینا جائز بلکہ دوہرے اجر کا باعث ہے۔',
  },
];

export default function FidyaKaffaraCalculatorPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'فدیہ، کفارہ اور صدقۂ فطر کیلکولیٹر (Fidya, Kaffara & Fitrana Calculator)',
          description:
            'گندم، جو، کھجور اور کشمش کے شرعی اوزان پر فطرانہ، فدیہ اور کفارے کا درست حساب۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-24',
        }}
      />
      <JsonLd type="faq" faqs={fidyaFaqs} />
      <div className="space-y-8">
        <AdSlot position="header" />
        <FidyaKaffaraCalculatorView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
