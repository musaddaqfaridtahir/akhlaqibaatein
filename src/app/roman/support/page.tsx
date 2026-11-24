import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/support',
  lang: 'ro',
  title: 'Support Us (Sadqa-e-Jariya) — AkhlaqiBaatein.com',
  description:
    'AkhlaqiBaatein.com ke ilmi o deeni mission, server hosting aur deen phelane mein sadqa-e-jariya ke tor par hissa dalein. SadaPay payment details.',
  keywords: ['Support AkhlaqiBaatein Roman', 'Sadqa e Jariya Roman', 'Taawun Karein'],
});

export default function RomanSupportPage() {
  return <SupportView />;
}
