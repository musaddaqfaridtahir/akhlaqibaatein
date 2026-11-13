import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { naatsList, getNaatBySlug } from '@/data/naats';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import NaatDetailView from '@/components/NaatDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return naatsList.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const naat = getNaatBySlug(slug);

  if (!naat) {
    return {
      title: 'Naat Not Found | AkhlaqiBaatein.com',
    };
  }

  const pageUrl = `${BASE_URL}/naat/${naat.slug}`;
  const title = `${naat.title.ur} | ${naat.poet.ur} — مکمل اشعار، فرہنگ و تشریح`;
  const description = `${naat.ashaar[0]?.misra1Ur} — ${naat.ashaar[0]?.misra2Ur}۔ کلام: ${naat.poet.ur} (${naat.sourceBook.ur})۔ ${naat.tashreeh.ur}`.slice(0, 160);

  return {
    title,
    description,
    keywords: [
      ...naat.seoKeywords,
      naat.title.ur,
      naat.poet.ur,
      naat.sourceBook.ur,
      'Naat lyrics Urdu',
      'Islamic poetry with Tashreeh',
      'AkhlaqiBaatein.com',
    ],
    alternates: buildHreflangAlternates({
      canonical: pageUrl,
      ur: pageUrl,
      en: pageUrl,
      ro: pageUrl,
    }),
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: 'article',
    },
  };
}

export default async function NaatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const naat = getNaatBySlug(slug);

  if (!naat) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/naat/${naat.slug}`;
  const firstSher = `${naat.ashaar[0]?.misra1Ur} / ${naat.ashaar[0]?.misra2Ur}`;

  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: `${naat.title.ur} (${naat.title.en}) — کلام: ${naat.poet.ur}`,
          description: `${firstSher} — ${naat.tashreeh.ur.slice(0, 150)}`,
          url: pageUrl,
          author: naat.poet.ur,
          publishedAt: '2026-11-13',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        <AdSlot position="header" />

        <NaatDetailView naat={naat} />

        <AdSlot position="footer" />
      </div>
    </>
  );
}
