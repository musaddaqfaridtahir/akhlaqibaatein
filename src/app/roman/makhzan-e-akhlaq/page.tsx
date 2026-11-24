import type { Metadata } from 'next';
import MakhzanPage from '@/app/makhzan-e-akhlaq/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/makhzan-e-akhlaq',
  lang: 'ro',
  title: 'Makhzan-e-Akhlaq — Classic Islami Akhlaqiat | AkhlaqiBaatein.com',
  description:
    'Makhzan-e-Akhlaq ke abwab, Islami taleemat aur roohani aqwal Roman Urdu mein.',
  keywords: ['Makhzan-e-Akhlaq Roman', 'Islami Akhlaqiat', 'Makhzan e Akhlaq Roman Urdu'],
});

export default function RomanMakhzanPage() {
  return <MakhzanPage />;
}
