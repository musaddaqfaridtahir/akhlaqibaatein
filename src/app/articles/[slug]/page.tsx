import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/data/articles';
import { getCategoryBySlug } from '@/data/categories';
import { buildArticleMetadata, BASE_URL } from '@/lib/quoteSeo';
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
  return buildArticleMetadata(slug, 'ur');
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
          url: `https://www.akhlaqibaatein.com/articles/${article.slug}`,
          author: article.author,
          publishedAt: article.publishedAt,
        }}
      />
      {article.faqs && article.faqs.length > 0 && (
        <JsonLd
          type="faq"
          faqs={article.faqs.map((f) => ({
            question: f.questionUrdu,
            answer: f.answerUrdu,
          }))}
        />
      )}

      <AdSlot position="header" />
      <ArticleDetailView article={article} category={category} />
      <AdSlot position="in-article" />
    </div>
  );
}
