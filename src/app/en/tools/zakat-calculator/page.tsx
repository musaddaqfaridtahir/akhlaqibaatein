import type { Metadata } from 'next';
import ZakatCalculatorPage from '@/app/tools/zakat-calculator/page';

export const metadata: Metadata = {
  title: 'Comprehensive Sharia Zakat Calculator',
  description:
    'Calculate exact 2.5% Zakat on Gold, Silver, Cash, Inventory, and Receivables minus immediate debts across PKR, USD, SAR, AED, and GBP.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/tools/zakat-calculator',
  },
};

export default function EnglishZakatPage() {
  return <ZakatCalculatorPage />;
}
