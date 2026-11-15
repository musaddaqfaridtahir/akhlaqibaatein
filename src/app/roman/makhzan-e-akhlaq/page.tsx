import type { Metadata } from 'next';
import MakhzanPage from '@/app/makhzan-e-akhlaq/page';

export const metadata: Metadata = {
  title: 'Makhzan-e-Akhlaq — Classic Islami Akhlaqiat | AkhlaqiBaatein.com',
  description:
    'Makhzan-e-Akhlaq ke abwab, Islami taleemat aur roohani aqwal Roman Urdu mein.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/makhzan-e-akhlaq',
  },
};

export default function RomanMakhzanPage() {
  return <MakhzanPage />;
}
