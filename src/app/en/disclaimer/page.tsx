import type { Metadata } from 'next';
import DisclaimerPage from '@/app/disclaimer/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/disclaimer',
  lang: 'en',
  title: 'Disclaimer | AkhlaqiBaatein.com',
  description: 'Religious and educational disclaimer of AkhlaqiBaatein.com.',
  keywords: ['Disclaimer', 'Legal Disclaimer'],
});

export default function EnglishDisclaimerPage() {
  return <DisclaimerPage />;
}
