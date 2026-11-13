import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  seoCollections,
  getCollectionBySlug,
  getQuotesForCollection,
  toSerializableCollection,
} from '@/data/collections';
import { buildHreflangAlternates, BASE_URL } from '@/lib/quoteSeo';
import JsonLd from '@/components/JsonLd';
import CollectionDetailView from '@/components/CollectionDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return seoCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: 'Collection Not Found | AkhlaqiBaatein.com',
    };
  }

  const pageUrl = `${BASE_URL}/collections/${collection.slug}`;

  return {
    title: `${collection.metaTitle} | AkhlaqiBaatein.com`,
    description: collection.metaDescription,
    keywords: collection.keywords,
    alternates: buildHreflangAlternates({
      canonical: pageUrl,
      ur: pageUrl,
      en: pageUrl,
      ro: pageUrl,
    }),
    openGraph: {
      title: `${collection.titleUrdu} — ${collection.titleEnglish}`,
      description: collection.metaDescription,
      url: pageUrl,
      type: 'website',
    },
  };
}

export default async function CollectionSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const matchedQuotes = getQuotesForCollection(collection);
  const faqItems = collection.faqs.map((f) => ({
    question: `${f.questionUrdu} (${f.questionEnglish})`,
    answer: `${f.answerUrdu} — ${f.answerEnglish}`,
  }));

  const serializableCollection = toSerializableCollection(collection);

  return (
    <>
      <JsonLd type="faq" faqs={faqItems} />
      <CollectionDetailView collection={serializableCollection} matchedQuotes={matchedQuotes} />
    </>
  );
}
