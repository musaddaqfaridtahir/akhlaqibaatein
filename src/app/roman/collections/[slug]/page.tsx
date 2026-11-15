import React from 'react';
import CollectionPage, {
  generateStaticParams as baseStaticParams,
  generateMetadata as baseMetadata,
} from '@/app/collections/[slug]/page';

export const dynamic = 'force-static';
export const generateStaticParams = baseStaticParams;
export const generateMetadata = baseMetadata;

export default function RomanCollectionPage(props: any) {
  return <CollectionPage {...props} />;
}
