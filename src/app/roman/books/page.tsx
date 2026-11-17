import type { Metadata } from 'next';
import BooksPage from '@/app/books/page';

export const metadata: Metadata = {
  title: 'Kutub Khana aur Abwab-e-Akhlaq',
  description: 'Classic kutub aur Makhzan-e-Akhlaq ke abwab o aqwal.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman/books',
  },
};

export default function RomanBooksPage() {
  return <BooksPage />;
}
