import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { quotes, getQuoteBySlug } from '@/data/quotes';
import { buildQuoteMetadata } from '@/lib/quoteSeo';
import QuoteDetailPageContent from '@/components/QuoteDetailPageContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return quotes.map((quote) => ({
    slug: quote.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildQuoteMetadata(slug, 'ur', { canonicalLang: 'ur' });
}

export default async function LegacyQuoteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const quote = getQuoteBySlug(slug);

  if (!quote) {
    notFound();
  }

  return <QuoteDetailPageContent quote={quote} routeLanguage="ur" />;
}
