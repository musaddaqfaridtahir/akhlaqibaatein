import type { Metadata } from 'next';
import FidyaKaffaraCalculatorPage from '@/app/tools/fidya-kaffara-calculator/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/fidya-kaffara-calculator',
  lang: 'en',
  title: 'Fidya, Kaffara & Sadqa-e-Fitr (Fitrana) Calculator',
  description:
    'Calculate Sadqa-e-Fitr (Fitrana), missed fasts Fidya, and Kaffara for broken oaths or fasts based on wheat, barley, dates, and raisins across 5 currencies.',
  keywords: ['Fitrana Calculator', 'Sadqa e Fitr', 'Roza Fidya Calculator', 'Kaffara Calculator', 'Islamic Charity Calculator'],
});

export default function EnglishFidyaKaffaraPage() {
  return <FidyaKaffaraCalculatorPage />;
}
