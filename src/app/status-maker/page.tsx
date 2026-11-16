import React from 'react';
import type { Metadata } from 'next';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import StatusMakerView from '@/components/StatusMakerView';

export const dynamic = 'force-static';

const pageUrl = `${BASE_URL}/status-maker`;

export const metadata: Metadata = {
  title: 'اسلامی واٹس ایپ اسٹیٹس میکر (9:16 HD کارڈز) | Islamic Status Card Generator',
  description:
    'جمعہ مبارک، صبح بخیر دعائیں، درود و سلام اور سنہری اقوال کے خوبصورت 9:16 فل ایچ ڈی واٹس ایپ اسٹیٹس اپنے نام کے ساتھ تیار اور مفت ڈاؤن لوڈ کریں۔',
  keywords: [
    'Islamic WhatsApp Status Maker',
    'Jumma Mubarak Status Maker',
    'Islamic Status Card Generator',
    'واٹس ایپ اسٹیٹس میکر',
    'جمعہ مبارک اسٹیٹس',
    'صبح بخیر دعائیہ کارڈ',
    'Durood Status Card',
  ],
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: `${BASE_URL}/en/status-maker`,
    ro: `${BASE_URL}/roman/status-maker`,
  }),
  openGraph: {
    title: 'اسلامی واٹس ایپ اسٹیٹس میکر | Islamic Status Generator',
    description:
      '9:16 HD واٹس ایپ اسٹیٹس کارڈز: جمعہ مبارک، صبح بخیر دعائیں، درود شریف اور اقوالِ زریں۔',
    url: pageUrl,
    type: 'website',
  },
};

export default function StatusMakerPage() {
  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: 'اسلامی واٹس ایپ اسٹیٹس میکر (Islamic Status Card Generator)',
          description:
            '9:16 HD واٹس ایپ اسٹیٹس کارڈز اپنے نام کے ساتھ تیار اور ڈاؤن لوڈ کریں۔',
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-15',
        }}
      />
      <div className="space-y-8">
        <AdSlot position="header" />
        <StatusMakerView />
        <AdSlot position="footer" />
      </div>
    </>
  );
}
