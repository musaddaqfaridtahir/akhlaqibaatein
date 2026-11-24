import type { Metadata } from 'next';
import BooksPage from '@/app/books/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/books',
  lang: 'ro',
  title: 'Kutub Khana aur Abwab-e-Akhlaq | AkhlaqiBaatein.com',
  description: 'Classic kutub aur Makhzan-e-Akhlaq ke abwab o aqwal.',
  keywords: ['Islamic Books Roman', 'Makhzan e Akhlaq Roman', 'Kutub Khana'],
});

export default function RomanBooksPage() {
  return <BooksPage />;
}
