import type { Metadata } from 'next';
import DisclaimerPage from '@/app/disclaimer/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/disclaimer',
  lang: 'ro',
  title: 'Disclaimer | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ka ilmi o roohani disclaimer.',
  keywords: ['Disclaimer Roman', 'Ilmi Wazahat'],
});

export default function RomanDisclaimerPage() {
  return <DisclaimerPage />;
}
