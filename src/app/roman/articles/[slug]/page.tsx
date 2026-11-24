import React from 'react';
import type { Metadata } from 'next';
import ArticleDetailPage, {
  generateStaticParams as baseStaticParams,
} from '@/app/articles/[slug]/page';
import { buildArticleMetadata } from '@/lib/quoteSeo';

export const dynamic = 'force-static';
export const generateStaticParams = baseStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildArticleMetadata(slug, 'ro');
}

export default function RomanArticleDetailPage(props: any) {
  return <ArticleDetailPage {...props} />;
}
