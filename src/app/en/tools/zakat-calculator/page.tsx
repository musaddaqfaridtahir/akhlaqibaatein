import type { Metadata } from 'next';
import ZakatCalculatorPage from '@/app/tools/zakat-calculator/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/zakat-calculator',
  lang: 'en',
  title: 'Comprehensive Sharia Zakat Calculator | AkhlaqiBaatein.com',
  description:
    'Calculate exact 2.5% Zakat on Gold, Silver, Cash, Inventory, and Receivables minus immediate debts across PKR, USD, SAR, AED, and GBP.',
  keywords: ['Zakat Calculator', 'Gold Zakat', 'Silver Nisab', 'Sharia Zakat'],
});

export default function EnglishZakatPage() {
  return <ZakatCalculatorPage />;
}
