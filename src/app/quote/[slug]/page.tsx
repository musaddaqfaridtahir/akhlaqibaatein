import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { quotes, getQuoteBySlug, getRelatedQuotes } from '@/data/quotes';
import { getCategoryBySlug } from '@/data/categories';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import QuoteDetailView from '@/components/QuoteDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return quotes.map((q) => ({
    slug: q.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const quote = getQuoteBySlug(slug);

  if (!quote) {
    return {
      title: 'Quote Not Found | AkhlaqiBaatein.com',
    };
  }

  const title = quote.title?.ur
    ? `${quote.title.ur} — ${quote.authorUrdu} | AkhlaqiBaatein.com`
    : `${quote.urdu.slice(0, 50)}... (${quote.author}) | AkhlaqiBaatein.com`;
  const description = `${quote.roman} — ${quote.tashreeh.slice(0, 150)}...`;

  return {
    title,
    description,
    keywords: [
      quote.author,
      quote.category,
      ...quote.tags,
      'Islami Aqwal',
      'Urdu Quote',
      'Roman Urdu Quote',
      'Islamic Quotes in English',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://akhlaqibaatein.com/quote/${quote.slug}`,
    },
    alternates: {
      canonical: `https://akhlaqibaatein.com/quote/${quote.slug}`,
    },
  };
}

export default async function QuoteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const quote = getQuoteBySlug(slug);

  if (!quote) {
    notFound();
  }

  const category = getCategoryBySlug(quote.category);
  const relatedQuotes = getRelatedQuotes(quote.slug, quote.category, 4);

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* Quotation Schema */}
      <JsonLd
        type="quotation"
        quote={{
          text: quote.urdu,
          author: quote.author,
          url: `https://akhlaqibaatein.com/quote/${quote.slug}`,
        }}
      />

      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      {/* Interactive Strict Language View */}
      <QuoteDetailView
        quote={quote}
        category={category}
        relatedQuotes={relatedQuotes}
      />

      {/* In-Article AdSlot */}
      <AdSlot position="in-article" />
    </div>
  );
}
