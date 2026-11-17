import type { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'AkhlaqiBaatein.com — Roman Urdu Islamic Quotes, Durood o Salam aur Masnoon Duain',
  description:
    'Roman Urdu mein mustanad Islami aqwal-e-zareen, 40 Ahadith, Durood-e-Pak, Masnoon Duain aur roohani hikmat. Free HD status card download.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman',
    languages: {
      ur: 'https://www.akhlaqibaatein.com',
      en: 'https://www.akhlaqibaatein.com/en',
      'ro-PK': 'https://www.akhlaqibaatein.com/roman',
      'x-default': 'https://www.akhlaqibaatein.com',
    },
  },
};

export default function RomanHomePage() {
  return <HomePage />;
}
