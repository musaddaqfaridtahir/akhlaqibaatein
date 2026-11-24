import type { Metadata } from 'next';
import BooksPage from '@/app/books/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/books',
  lang: 'en',
  title: 'Classical Islamic Books & Moral Chapters | AkhlaqiBaatein.com',
  description: 'Explore classical moral literature and chapters from Makhzan-e-Akhlaq and Islamic wisdom.',
  keywords: ['Islamic Books English', 'Makhzan e Akhlaq', 'Classical Texts'],
});

export default function EnglishBooksPage() {
  return <BooksPage />;
}
