import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/books',
  lang: 'ur',
  title: 'کتب خانہ (Islamic Ethics Library) — Makhzan-e-Akhlaq & Classics',
  description:
    'Browse the AkhlaqiBaatein.com Islamic library featuring Makhzan-e-Akhlaq chapters, classical ethics compilations, and authentic Hadith references.',
  keywords: ['Islamic Ethics Library', 'کتب خانہ', 'مخزن اخلاق', 'کلاسیکی کتب'],
});

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
