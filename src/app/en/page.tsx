import type { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'AkhlaqiBaatein.com — Authentic Islamic Wisdom, Quotes, Durood & Duas in English',
  description:
    'Discover authentic Islamic moral quotes, 40 Hadith with English translations, Salawat upon Prophet Muhammad ﷺ, Masnoon Duas, and spiritual wisdom in English.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en',
    languages: {
      ur: 'https://www.akhlaqibaatein.com',
      en: 'https://www.akhlaqibaatein.com/en',
      'ro-PK': 'https://www.akhlaqibaatein.com/roman',
      'x-default': 'https://www.akhlaqibaatein.com',
    },
  },
};

export default function EnglishHomePage() {
  return <HomePage />;
}
