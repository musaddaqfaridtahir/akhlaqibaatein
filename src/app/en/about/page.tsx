import type { Metadata } from 'next';
import AboutPage from '@/app/about/page';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the vision, editorial standards, and mission of AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/about',
  },
};

export default function EnglishAboutPage() {
  return <AboutPage />;
}
