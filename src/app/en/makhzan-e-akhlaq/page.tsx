import type { Metadata } from 'next';
import MakhzanPage from '@/app/makhzan-e-akhlaq/page';

export const metadata: Metadata = {
  title: 'Makhzan-e-Akhlaq — Classical Islamic Moral Wisdom',
  description:
    'Explore chapters, Islamic moral teachings, Prophetic wisdom, and classical ethics derived from Makhzan-e-Akhlaq.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/makhzan-e-akhlaq',
  },
};

export default function EnglishMakhzanPage() {
  return <MakhzanPage />;
}
