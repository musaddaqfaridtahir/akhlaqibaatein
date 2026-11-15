import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import ToolsHubView from '@/components/ToolsHubView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/tools`;

export const metadata: Metadata = {
  title: 'اسلامی ٹولز اور کیلکولیٹرز | Islamic Calculators & Utilities',
  description:
    'مستند اسلامی آلات: قضا نماز کیلکولیٹر، جامع زکوٰۃ کیلکولیٹر، اور کسٹم نیم 9:16 واٹس ایپ اسٹیٹس میکر۔ مفت اور فوری رسائی۔ Islamic Tools & Calculators.',
  keywords: [
    'Islamic Calculators',
    'Qaza Namaz Calculator',
    'Zakat Calculator Urdu',
    'Islamic Status Maker',
    'اسلامی ٹولز',
    'قضا نماز کا حساب',
    'زکوٰۃ نصاب کیلکولیٹر',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/tools`,
    ro: `${BASE_URL}/roman/tools`,
  }),
  openGraph: {
    title: 'اسلامی ٹولز و کیلکولیٹرز | Islamic Utilities — AkhlaqiBaatein.com',
    description:
      'قضا نماز کیلکولیٹر، زکوٰۃ کیلکولیٹر اور 9:16 HD واٹس ایپ اسٹیٹس جنریٹر۔',
    url: pageUrl,
    type: 'website',
  },
};

export default function ToolsHubPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'اسلامی ٹولز و کیلکولیٹرز (Islamic Calculators & Utilities)',
          description:
            'مستند اسلامی آلات: قضا نماز کیلکولیٹر، جامع زکوٰۃ کیلکولیٹر، اور کسٹم اسٹیٹس میکر۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-15',
        }}
      />
      <div className="space-y-8">
        <AdSlot position="header" />
        <ToolsHubView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
