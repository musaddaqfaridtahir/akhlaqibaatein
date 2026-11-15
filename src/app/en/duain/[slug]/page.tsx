import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { duainList, getDuaBySlug } from '@/data/duain';
import { BASE_URL, buildDuaMetadata } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import AdSlot from '@/components/AdSlot';
import DuaDetailView from '@/components/DuaDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return duainList.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildDuaMetadata(slug, 'en');
}

export default async function EnglishDuaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dua = getDuaBySlug(slug);

  if (!dua) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/en/duain/${dua.slug}`;
  const faqSchemaList = dua.faqs.map((f) => ({
    question: `${f.question.en} (${f.question.ur})`,
    answer: f.answer.en,
  }));

  return (
    <>
      <JsonLd
        type="article"
        article={{
          title: `${dua.title.en} (${dua.title.ur})`,
          description: dua.fazilat.en,
          url: pageUrl,
          author: 'AkhlaqiBaatein.com Editorial Board',
          publishedAt: '2026-11-15',
        }}
      />
      {faqSchemaList.length > 0 && <JsonLd type="faq" faqs={faqSchemaList} />}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        <AdSlot position="header" />

        <DuaDetailView dua={dua} routeLanguage="en" />

        <AdSlot position="footer" />
      </div>
    </>
  );
}
