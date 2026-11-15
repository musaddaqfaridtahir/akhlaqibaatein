import type { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'AkhlaqiBaatein.com — Authentic Islamic Wisdom, Quotes, Durood & Duas in English',
  description:
    'Discover authentic Islamic moral quotes, 40 Hadith with English translations, Salawat upon Prophet Muhammad ﷺ, Masnoon Duas, and spiritual wisdom in English.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en',
    languages: {
      ur: 'https://akhlaqibaatein.com',
      en: 'https://akhlaqibaatein.com/en',
      'ro-PK': 'https://akhlaqibaatein.com/roman',
      'x-default': 'https://akhlaqibaatein.com',
    },
  },
};

export default function EnglishHomePage() {
  return <HomePage />;
}
