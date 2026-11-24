import type { Metadata } from 'next';
import AsmaUlHusnaPage from '@/app/tools/asma-ul-husna/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/asma-ul-husna',
  lang: 'en',
  title: '99 Names of Allah (Asma-ul-Husna) Explorer & Zikr Counter',
  description:
    'Comprehensive directory of the 99 Beautiful Names of Allah in Arabic Naskh script with English translation, Urdu meaning, transliteration, and interactive tap counter.',
  keywords: ['99 Names of Allah', 'Asma ul Husna', 'Allah Names with meaning', 'Asma ul Husna Counter', 'Islamic Divine Names'],
});

export default function EnglishAsmaUlHusnaPage() {
  return <AsmaUlHusnaPage />;
}
