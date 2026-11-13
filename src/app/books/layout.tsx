import type { Metadata } from 'next';
import { buildHreflangAlternates, BASE_URL } from '@/lib/quoteSeo';

const pageUrl = `${BASE_URL}/books`;

export const metadata: Metadata = {
  title: 'کتب خانہ (Islamic Ethics Library) — Makhzan-e-Akhlaq & Classics | AkhlaqiBaatein.com',
  description:
    'Browse the AkhlaqiBaatein.com Islamic library featuring Makhzan-e-Akhlaq chapters, classical ethics compilations, and authentic Hadith references.',
  alternates: buildHreflangAlternates({
    canonical: pageUrl,
    ur: pageUrl,
    en: pageUrl,
    ro: pageUrl,
  }),
  openGraph: {
    title: 'Islamic Ethics Library — Makhzan-e-Akhlaq & Classical Sources',
    description:
      'Explore chapters and upcoming digital editions of classical Islamic ethical literature in Urdu, Roman Urdu, and English.',
    url: pageUrl,
    type: 'website',
  },
};

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
