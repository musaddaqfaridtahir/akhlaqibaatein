import type { Metadata } from 'next';
import ChahalHadithPage from '@/app/chahal-hadith/page';

export const metadata: Metadata = {
  title: '40 Hadith Memorization Tracker | AkhlaqiBaatein.com',
  description:
    'Memorize forty authenticated traditions (Arbaeen) of Prophet Muhammad ﷺ with Arabic text, Urdu, Roman Urdu, and English.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/chahal-hadith',
  },
};

export default function EnglishChahalHadithPage() {
  return <ChahalHadithPage />;
}
