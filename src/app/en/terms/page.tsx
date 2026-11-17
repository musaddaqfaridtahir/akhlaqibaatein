import type { Metadata } from 'next';
import TermsPage from '@/app/terms/page';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service of AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/terms',
  },
};

export default function EnglishTermsPage() {
  return <TermsPage />;
}
