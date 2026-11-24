import type { Metadata } from 'next';
import ToolsHubPage from '@/app/tools/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools',
  lang: 'ro',
  title: 'Islami Calculators aur Digital Tools | AkhlaqiBaatein.com',
  description:
    'Mustanad Islami tools: Qaza Namaz calculator, Zakat calculator aur 9:16 status card maker.',
  keywords: ['Islamic Calculators Roman', 'Qaza Namaz Calculator Roman', 'Zakat Calculator'],
});

export default function RomanToolsPage() {
  return <ToolsHubPage />;
}
