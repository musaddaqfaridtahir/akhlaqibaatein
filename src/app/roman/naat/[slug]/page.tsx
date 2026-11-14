import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { naatsList, getNaatBySlug } from '@/data/naats';
import { BASE_URL, buildNaatMetadata } from '@/lib/quoteSeo';
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
  return buildNaatMetadata(slug, 'ro');
}

export default async function RomanNaatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const naat = getNaatBySlug(slug);

  if (!naat) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/roman/naat/${naat.slug}`;
  const firstSher = `${naat.ashaar[0]?.misra1Ur} / ${naat.ashaar[0]?.misra2Ur}`;

  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: `${naat.title.ro} — Kalam: ${naat.poet.ro}`,
          description: `${firstSher} — ${naat.tashreeh.ro.slice(0, 150)}`,
          url: pageUrl,
          author: naat.poet.ro,
          publishedAt: '2026-11-13',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        <AdSlot position="header" />

        <NaatDetailView naat={naat} routeLanguage="ro" />

        <AdSlot position="footer" />
      </div>
    </>
  );
}
