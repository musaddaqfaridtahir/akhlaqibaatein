import type { Metadata } from 'next';
import QazaNamazCalculatorPage from '@/app/tools/qaza-namaz-calculator/page';

export const metadata: Metadata = {
  title: 'Qaza Namaz Calculator aur Printable Tracker',
  description:
    'Zindagi ki qaza namazon ka hisab lagayein, daily target set karein aur free printable tracker chart download karein.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman/tools/qaza-namaz-calculator',
  },
};

export default function RomanQazaNamazPage() {
  return <QazaNamazCalculatorPage />;
}
