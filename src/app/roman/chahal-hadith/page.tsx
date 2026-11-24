import type { Metadata } from 'next';
import ChahalHadithPage from '@/app/chahal-hadith/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/chahal-hadith',
  lang: 'ro',
  title: 'Chahal Hadith (40 Hadith) Hifz Tracker | AkhlaqiBaatein.com',
  description:
    'Huzoor ﷺ ki 40 mustanad ahadith-e-mubaraka ka hifz tracker. Arabic text, Urdu, Roman Urdu aur sabaq.',
  keywords: ['Chahal Hadith Roman', '40 Hadith Tracker', 'Arbaeen Roman Urdu'],
});

export default function RomanChahalHadithPage() {
  return <ChahalHadithPage />;
}
