import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import SupportView from '@/components/SupportView';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';
import { SHOW_SUPPORT_SECTION } from '@/config/features';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/support',
  lang: 'ro',
  title: 'Support Us (Sadqa-e-Jariya) — AkhlaqiBaatein.com',
  description:
    'AkhlaqiBaatein.com ke ilmi o deeni mission, server hosting aur deen phelane mein sadqa-e-jariya ke tor par hissa dalein. SadaPay payment details.',
  keywords: ['Support AkhlaqiBaatein Roman', 'Sadqa e Jariya Roman', 'Taawun Karein'],
});

export default function RomanSupportPage() {
  if (!SHOW_SUPPORT_SECTION) {
    redirect('/');
  }
  return <SupportView />;
}
