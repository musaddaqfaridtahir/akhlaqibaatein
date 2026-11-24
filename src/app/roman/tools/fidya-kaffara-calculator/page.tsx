import type { Metadata } from 'next';
import FidyaKaffaraCalculatorPage from '@/app/tools/fidya-kaffara-calculator/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/fidya-kaffara-calculator',
  lang: 'ro',
  title: 'Fidya, Kaffara aur Sadqa-e-Fitr (Fitrana) Calculator',
  description:
    'Fitrana, roza fidya aur qasam o roza kaffara ka accurate sharai hisab gandam, jau aur khajoor ke meyar par 5 international currencies mein.',
  keywords: ['Fitrana Calculator Roman', 'Roza Fidya Calculator', 'Kaffara Calculator', 'Sadqa Fitr Hisab'],
});

export default function RomanFidyaKaffaraPage() {
  return <FidyaKaffaraCalculatorPage />;
}
