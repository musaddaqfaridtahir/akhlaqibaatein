import type { Metadata } from 'next';
import QazaNamazCalculatorPage from '@/app/tools/qaza-namaz-calculator/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/qaza-namaz-calculator',
  lang: 'en',
  title: 'Qaza Namaz Calculator & Printable Tracker | AkhlaqiBaatein.com',
  description:
    'Calculate lifetime missed prayers (Fajr to Witr), set manageable daily targets, and download a printable watermarked tracker chart.',
  keywords: ['Qaza Namaz Calculator', 'Missed Prayers Tracker', 'Hanafi Qaza Namaz'],
});

export default function EnglishQazaNamazPage() {
  return <QazaNamazCalculatorPage />;
}
