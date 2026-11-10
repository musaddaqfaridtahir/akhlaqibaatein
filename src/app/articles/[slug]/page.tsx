import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/data/articles';
import { getCategoryBySlug } from '@/data/categories';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import ArticleDetailView from '@/components/ArticleDetailView';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const title = article.titleUrdu;
  const description = `${article.summaryRoman} — ${article.summaryUrdu.slice(0, 150)}...`;

  return {
    title,
    description,
    keywords: [
      article.category,
      ...article.tags,
      'Seerat un Nabi',
      'Islamic Articles',
      'Akhlaqi Mazameen',
      'Islamic History in Urdu',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://akhlaqibaatein.com/articles/${article.slug}`,
      publishedTime: article.publishedAt,
    },
    alternates: {
      canonical: `https://akhlaqibaatein.com/articles/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.category);

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <JsonLd
        type="article"
        article={{
          title: article.titleUrdu,
          description: article.summaryUrdu,
          url: `https://akhlaqibaatein.com/articles/${article.slug}`,
          author: article.author,
          publishedAt: article.publishedAt,
        }}
      />

      <AdSlot position="header" />
      <ArticleDetailView article={article} category={category} />
      <AdSlot position="in-article" />
    </div>
  );
}
