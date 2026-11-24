import type { Metadata } from 'next';
import MakhzanPage from '@/app/makhzan-e-akhlaq/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/makhzan-e-akhlaq',
  lang: 'en',
  title: 'Makhzan-e-Akhlaq — Classical Islamic Moral Wisdom | AkhlaqiBaatein.com',
  description:
    'Explore chapters, Islamic moral teachings, Prophetic wisdom, and classical ethics derived from Makhzan-e-Akhlaq.',
  keywords: ['Makhzan-e-Akhlaq English', 'Classical Islamic Ethics', 'Moral Chapters'],
});

export default function EnglishMakhzanPage() {
  return <MakhzanPage />;
}
