import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getQuotesByCategory } from '@/data/quotes';
import { articles } from '@/data/articles';
import { buildHreflangAlternates, BASE_URL } from '@/lib/quoteSeo';
import CategoryDetailView from '@/components/CategoryDetailView';
import AdSlot from '@/components/AdSlot';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  const title = `${category.titleUrdu} (${category.titleRoman}) — ${category.titleEnglish}`;
  const description = `${category.descriptionRoman} ${category.descriptionUrdu}`.slice(0, 160);
  const categoryUrl = `${BASE_URL}/category/${category.slug}`;

  return {
    title,
    description,
    keywords: [
      category.titleUrdu,
      category.titleRoman,
      category.titleEnglish,
      `${category.titleEnglish} quotes`,
      `${category.titleRoman} Urdu quotes`,
      'AkhlaqiBaatein.com',
    ],
    openGraph: {
      title: `${category.titleUrdu} — ${category.titleEnglish}`,
      description: category.descriptionUrdu,
      type: 'website',
      url: categoryUrl,
    },
    alternates: buildHreflangAlternates({
      canonical: categoryUrl,
      ur: categoryUrl,
      en: categoryUrl,
      ro: categoryUrl,
    }),
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryQuotes = getQuotesByCategory(slug);
  const categoryArticles = articles.filter((art) => art.category === slug);

  return (
    <div className="space-y-10">
      <AdSlot position="header" />
      <CategoryDetailView
        category={category}
        quotes={categoryQuotes}
        articles={categoryArticles}
      />
      <AdSlot position="in-article" />
    </div>
  );
}
