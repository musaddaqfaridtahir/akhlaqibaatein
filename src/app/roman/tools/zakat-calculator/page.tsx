import type { Metadata } from 'next';
import ZakatCalculatorPage from '@/app/tools/zakat-calculator/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/zakat-calculator',
  lang: 'ro',
  title: 'Sharia Zakat Calculator & Nisab Guide | AkhlaqiBaatein.com',
  description:
    'Sona, chandi, cash aur business maal par 2.5% zakat ka exact sharai hisab 5 international currencies mein.',
  keywords: ['Zakat Calculator Roman', 'Nisab Guide', 'Zakat on Gold Roman'],
});

export default function RomanZakatPage() {
  return <ZakatCalculatorPage />;
}
