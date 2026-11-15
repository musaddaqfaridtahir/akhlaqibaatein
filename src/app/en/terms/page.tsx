import type { Metadata } from 'next';
import TermsPage from '@/app/terms/page';

export const metadata: Metadata = {
  title: 'Terms of Service | AkhlaqiBaatein.com',
  description: 'Terms of Service of AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/terms',
  },
};

export default function EnglishTermsPage() {
  return <TermsPage />;
}
