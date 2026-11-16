import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import ZakatCalculatorView from '@/components/ZakatCalculatorView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools/zakat-calculator`;

export const metadata: Metadata = {
  title: 'زکوٰۃ کیلکولیٹر (سونے، چاندی اور کیش کی زکوٰۃ) | Zakat Calculator',
  description:
    'سونے، چاندی، نقدی اور تجارتی مال کی 2.5% زکوٰۃ کا درست شرعی حساب لگائیں۔ تازہ ترین نصابِ چاندی و سونا اور فقہی احکام کے ساتھ۔ Zakat Calculator Urdu.',
  keywords: [
    'Zakat Calculator',
    'Islamic Zakat Calculator',
    'Gold Zakat Calculator',
    'Silver Nisab calculator',
    'زکوٰۃ کیلکولیٹر',
    'سونے کی زکوٰۃ کا حساب',
    'زکوٰۃ کا نصاب',
    'Zakat on Cash and Savings',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools/zakat-calculator`,
    ro: `${BASE_URL}/roman/tools/zakat-calculator`,
  }),
  openGraph: {
    title: 'جامع شرعی زکوٰۃ کیلکولیٹر | Sharia Zakat Calculator',
    description:
      'سونے، چاندی، بینک بیلنس اور مالِ تجارت کی زکوٰۃ کا درست شرعی حساب مع نصاب گائیڈ۔',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'زکوٰۃ کیلکولیٹر | Zakat Calculator',
    description: 'Accurate 2.5% Zakat calculation across gold, silver, cash, and business stock.',
  },
};

const zakatFaqs = [
  {
    question: 'زکوٰۃ کا بنیادی نصاب کیا ہے؟',
    answer:
      'ساڑھے سات تولہ (87.48 گرام) سونا یا ساڑھے باون تولہ (612.36 گرام) چاندی یا اس کے برابر نقدی و مالِ تجارت پر سال گزرنے کے بعد 2.5 فیصد زکوٰۃ فرض ہے۔',
  },
  {
    question: 'کیا ذاتی استعمال کے زیورات پر زکوٰۃ واجب ہے؟',
    answer:
      'احناف کے نزدیک سونا چاندی چاہے استعمال میں ہو یا رکھا ہو، اگر نصاب کو پہنچ جائے تو اس پر زکوٰۃ ادا کرنا فرض ہے۔',
  },
];

export default function ZakatCalculatorPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'جامع شرعی زکوٰۃ کیلکولیٹر (Zakat Calculator in Urdu & English)',
          description:
            'سونے، چاندی، نقدی اور مالِ تجارت کی زکوٰۃ کا شرعی حساب مع نصاب و مصارف گائیڈ۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-15',
        }}
      />
      <JsonLd type="faq" faqs={zakatFaqs} />
      <div className="space-y-8">
        <AdSlot position="header" />
        <ZakatCalculatorView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
