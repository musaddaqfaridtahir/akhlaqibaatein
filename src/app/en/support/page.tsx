import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/support',
  lang: 'en',
  title: 'Support Our Mission (Ongoing Charity) — AkhlaqiBaatein.com',
  description:
    'Contribute voluntarily to AkhlaqiBaatein.com to support high-speed server hosting, domain renewal, and keeping authentic Islamic wisdom freely accessible worldwide as Sadqa-e-Jariya.',
  keywords: ['Support AkhlaqiBaatein', 'Sadqa e Jariya', 'Islamic Platform Support'],
});

export default function EnglishSupportPage() {
  return <SupportView />;
}
