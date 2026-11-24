import type { Metadata } from 'next';
import ToolsHubPage from '@/app/tools/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools',
  lang: 'en',
  title: 'Islamic Calculators & Utilities | AkhlaqiBaatein.com',
  description:
    'Authentic Islamic utilities: Qaza Namaz Calculator, comprehensive Zakat Calculator, and custom 9:16 Status Maker.',
  keywords: ['Islamic Calculators', 'Qaza Namaz Calculator', 'Zakat Calculator'],
});

export default function EnglishToolsPage() {
  return <ToolsHubPage />;
}
