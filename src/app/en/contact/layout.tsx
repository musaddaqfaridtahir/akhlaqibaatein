import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/contact',
  lang: 'en',
  title: 'Contact & Editorial Corrections | AkhlaqiBaatein.com',
  description:
    'Contact the editorial board of AkhlaqiBaatein.com for scholarly citations, corrections, ethical queries, or academic collaboration.',
  keywords: ['Contact AkhlaqiBaatein', 'Editorial Inquiries', 'Report Correction'],
});

export default function EnglishContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
