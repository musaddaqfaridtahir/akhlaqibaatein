import type { Metadata } from 'next';
import QazaNamazCalculatorPage from '@/app/tools/qaza-namaz-calculator/page';

export const metadata: Metadata = {
  title: 'Qaza Namaz Calculator & Printable Tracker',
  description:
    'Calculate lifetime missed prayers (Fajr to Witr), set manageable daily targets, and download a printable watermarked tracker chart.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/tools/qaza-namaz-calculator',
  },
};

export default function EnglishQazaNamazPage() {
  return <QazaNamazCalculatorPage />;
}
