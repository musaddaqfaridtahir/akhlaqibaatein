import React from 'react';
import CategoryPage, {
  generateStaticParams as baseStaticParams,
  generateMetadata as baseMetadata,
} from '@/app/category/[slug]/page';

export const dynamic = 'force-static';
export const generateStaticParams = baseStaticParams;
export const generateMetadata = baseMetadata;

export default function EnglishCategoryPage(props: any) {
  return <CategoryPage {...props} />;
}
