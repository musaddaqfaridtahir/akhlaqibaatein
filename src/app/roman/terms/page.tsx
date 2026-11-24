import type { Metadata } from 'next';
import TermsPage from '@/app/terms/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/terms',
  lang: 'ro',
  title: 'Terms of Service | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ki terms of service aur qawaneen.',
  keywords: ['Terms of Service Roman', 'Sharait o Zawabit'],
});

export default function RomanTermsPage() {
  return <TermsPage />;
}
