import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { duroodList, getDuroodBySlug } from '@/data/durood';
import { BASE_URL, buildDuroodMetadata } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
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
  return buildDuroodMetadata(slug, 'ro');
}

export default async function RomanDuroodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const durood = getDuroodBySlug(slug);

  if (!durood) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/roman/durood/${durood.slug}`;
  const faqSchemaList = durood.faqs.map((f) => ({
    question: `${f.question.ro} (${f.question.ur})`,
    answer: f.answer.ro,
  }));

  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: `${durood.title.ro} (${durood.title.ur})`,
          description: durood.fazilat.ro,
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-13',
        }}
      />
      {faqSchemaList.length > 0 && <JsonLd type="faq" faqs={faqSchemaList} />}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        <AdSlot position="header" />

        <DuroodDetailView durood={durood} routeLanguage="ro" />

        <AdSlot position="footer" />
      </div>
    </>
  );
}
