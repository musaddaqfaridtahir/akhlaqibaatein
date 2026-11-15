import type { Metadata } from 'next';
import ZakatCalculatorPage from '@/app/tools/zakat-calculator/page';

export const metadata: Metadata = {
  title: 'Sharia Zakat Calculator & Nisab Guide | AkhlaqiBaatein.com',
  description:
    'Sona, chandi, cash aur business maal par 2.5% zakat ka exact sharai hisab 5 international currencies mein.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/tools/zakat-calculator',
  },
};

export default function RomanZakatPage() {
  return <ZakatCalculatorPage />;
}
