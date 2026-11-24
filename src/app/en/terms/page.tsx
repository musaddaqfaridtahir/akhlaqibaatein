import type { Metadata } from 'next';
import TermsPage from '@/app/terms/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/terms',
  lang: 'en',
  title: 'Terms of Service | AkhlaqiBaatein.com',
  description: 'Terms of Service of AkhlaqiBaatein.com.',
  keywords: ['Terms of Service', 'Conditions of Use'],
});

export default function EnglishTermsPage() {
  return <TermsPage />;
}
