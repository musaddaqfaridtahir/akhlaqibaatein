import React from 'react';
import type { Metadata } from 'next';
import CollectionPage, {
  generateStaticParams as baseStaticParams,
} from '@/app/collections/[slug]/page';
import { buildCollectionMetadata } from '@/lib/quoteSeo';

export const dynamic = 'force-static';
export const generateStaticParams = baseStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildCollectionMetadata(slug, 'ro');
}

export default function RomanCollectionPage(props: any) {
  return <CollectionPage {...props} />;
}
