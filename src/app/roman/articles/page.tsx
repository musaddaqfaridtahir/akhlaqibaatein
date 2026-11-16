import type { Metadata } from 'next';
import ArticlesPage from '@/app/articles/page';

export const metadata: Metadata = {
  title: 'Sabaq Aamoz Mazameen, Seerat aur Tareekh',
  description:
    'Huzoor ﷺ ki seerat, Sahaba Karam (R.A) ke adal aur Islami akhlaqiat par mustanad aur tafseeli tehreerein.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/articles',
  },
};

export default function RomanArticlesPage() {
  return <ArticlesPage />;
}
