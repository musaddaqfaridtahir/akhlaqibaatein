import type { Metadata } from 'next';
import AsmaUlHusnaPage from '@/app/tools/asma-ul-husna/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/asma-ul-husna',
  lang: 'ro',
  title: '99 Names of Allah (Asma-ul-Husna) Explorer aur Counter',
  description:
    'Allah Taala ke 99 Asma-e-Mubaraka Arabic calligraphy, Urdu o English tarjuma, Fazilat aur built-in tap tasbeeh counter ke sath.',
  keywords: ['99 Names of Allah Roman', 'Asma ul Husna Roman Urdu', 'Allah ke 99 Naam', 'Asma ul Husna Counter'],
});

export default function RomanAsmaUlHusnaPage() {
  return <AsmaUlHusnaPage />;
}
