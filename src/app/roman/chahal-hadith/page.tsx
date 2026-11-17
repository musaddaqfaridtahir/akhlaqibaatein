import type { Metadata } from 'next';
import ChahalHadithPage from '@/app/chahal-hadith/page';

export const metadata: Metadata = {
  title: 'Chahal Hadith (40 Hadith) Hifz Tracker',
  description:
    'Huzoor ﷺ ki 40 mustanad ahadith-e-mubaraka ka hifz tracker. Arabic text, Urdu, Roman Urdu aur sabaq.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman/chahal-hadith',
  },
};

export default function RomanChahalHadithPage() {
  return <ChahalHadithPage />;
}
