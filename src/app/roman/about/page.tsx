import type { Metadata } from 'next';
import AboutPage from '@/app/about/page';

export const metadata: Metadata = {
  title: 'Taaruf: Idara Akhlaqi Baatein | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ka vision, maqsad aur idarati meyar.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/about',
  },
};

export default function RomanAboutPage() {
  return <AboutPage />;
}
