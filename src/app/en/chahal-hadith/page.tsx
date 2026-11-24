import type { Metadata } from 'next';
import ChahalHadithPage from '@/app/chahal-hadith/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/chahal-hadith',
  lang: 'en',
  title: '40 Hadith Memorization Tracker | AkhlaqiBaatein.com',
  description:
    'Memorize forty authenticated traditions (Arbaeen) of Prophet Muhammad ﷺ with Arabic text, Urdu, Roman Urdu, and English.',
  keywords: ['40 Hadith English', 'Arbaeen Hadith', 'Hadith Tracker'],
});

export default function EnglishChahalHadithPage() {
  return <ChahalHadithPage />;
}
