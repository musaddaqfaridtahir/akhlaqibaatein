import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { duroodList, getDuroodBySlug } from '@/data/durood';
import { BASE_URL, buildHreflangAlternates } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import SupportAndResourcesCard from '@/components/SupportAndResourcesCard';
import DuroodDetailView from '@/components/DuroodDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return duroodList.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const durood = getDuroodBySlug(slug);

  if (!durood) {
    return {
      title: 'Durood Not Found | AkhlaqiBaatein.com',
    };
  }

  const pageUrl = `${BASE_URL}/durood/${durood.slug}`;
  const title = `${durood.title.ur} | ${durood.title.en}`;
  const description = `${durood.urduTranslation} — ${durood.fazilat}`.slice(0, 160);

  return {
    title,
    description,
    keywords: [
      ...durood.seoKeywords,
      'Durood e Pak ki fazilat',
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

export default async function DuroodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const durood = getDuroodBySlug(slug);

  if (!durood) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/durood/${durood.slug}`;

  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: `${durood.title.ur} (${durood.title.en})`,
          description: durood.fazilat,
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-12',
        }}
      />
      {durood.faqs.length > 0 && <JsonLd type="faq" faqs={durood.faqs} />}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        <AdSlot position="header" />

        <DuroodDetailView durood={durood} />

        <AdSlot position="in-article" />

        <SupportAndResourcesCard routeLanguage="ur" />

        <AdSlot position="footer" />
      </div>
    </>
  );
}
