import React from 'react';
import type { Metadata } from 'next';
import CategoryPage, {
  generateStaticParams as baseStaticParams,
} from '@/app/category/[slug]/page';
import { buildCategoryMetadata } from '@/lib/quoteSeo';

export const dynamic = 'force-static';
export const generateStaticParams = baseStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildCategoryMetadata(slug, 'ro');
}

export default function RomanCategoryPage(props: any) {
  return <CategoryPage {...props} />;
}
