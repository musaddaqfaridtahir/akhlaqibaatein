import type { Metadata } from 'next';
import BooksPage from '@/app/books/page';

export const metadata: Metadata = {
  title: 'Classical Islamic Books & Moral Chapters',
  description: 'Explore classical moral literature and chapters from Makhzan-e-Akhlaq and Islamic wisdom.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/books',
  },
};

export default function EnglishBooksPage() {
  return <BooksPage />;
}
