import type { Metadata } from 'next';
import QazaNamazCalculatorPage from '@/app/tools/qaza-namaz-calculator/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/qaza-namaz-calculator',
  lang: 'ro',
  title: 'Qaza Namaz Calculator aur Printable Tracker | AkhlaqiBaatein.com',
  description:
    'Zindagi ki qaza namazon ka hisab lagayein, daily target set karein aur free printable tracker chart download karein.',
  keywords: ['Qaza Namaz Calculator Roman', 'Namaz Tracker', 'Qaza e Umri Hisab'],
});

export default function RomanQazaNamazPage() {
  return <QazaNamazCalculatorPage />;
}
