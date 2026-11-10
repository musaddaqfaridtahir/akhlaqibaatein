import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getQuotesByCategory } from '@/data/quotes';
import { articles } from '@/data/articles';
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

  const title = `${category.titleUrdu} (${category.titleRoman})`;
  const description = `${category.descriptionRoman}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://akhlaqibaatein.com/category/${category.slug}`,
    },
    alternates: {
      canonical: `https://akhlaqibaatein.com/category/${category.slug}`,
    },
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
