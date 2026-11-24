import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import SupportView from '@/components/SupportView';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';
import { SHOW_SUPPORT_SECTION } from '@/config/features';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/support',
  lang: 'en',
  title: 'Support Our Mission (Ongoing Charity) — AkhlaqiBaatein.com',
  description:
    'Contribute voluntarily to AkhlaqiBaatein.com to support high-speed server hosting, domain renewal, and keeping authentic Islamic wisdom freely accessible worldwide as Sadqa-e-Jariya.',
  keywords: ['Support AkhlaqiBaatein', 'Sadqa e Jariya', 'Islamic Platform Support'],
});

export default function EnglishSupportPage() {
  if (!SHOW_SUPPORT_SECTION) {
    redirect('/');
  }
  return <SupportView />;
}
