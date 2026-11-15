import React from 'react';
import ArticleDetailPage, {
  generateStaticParams as baseStaticParams,
  generateMetadata as baseMetadata,
} from '@/app/articles/[slug]/page';

export const dynamic = 'force-static';
export const generateStaticParams = baseStaticParams;
export const generateMetadata = baseMetadata;

export default function RomanArticleDetailPage(props: any) {
  return <ArticleDetailPage {...props} />;
}
