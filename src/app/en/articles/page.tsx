import type { Metadata } from 'next';
import ArticlesPage from '@/app/articles/page';

export const metadata: Metadata = {
  title: 'Moral Essays, Prophetic Biography & History',
  description:
    'Research-grounded, authentic reflections exploring the sublime character of Prophet Muhammad ﷺ, the justice of the Caliphs, and timeless social ethics.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/articles',
  },
};

export default function EnglishArticlesPage() {
  return <ArticlesPage />;
}
