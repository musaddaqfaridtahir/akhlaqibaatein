import type { Metadata } from 'next';
import TermsPage from '@/app/terms/page';

export const metadata: Metadata = {
  title: 'Terms of Service | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ki terms of service.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/terms',
  },
};

export default function RomanTermsPage() {
  return <TermsPage />;
}
