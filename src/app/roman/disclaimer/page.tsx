import type { Metadata } from 'next';
import DisclaimerPage from '@/app/disclaimer/page';

export const metadata: Metadata = {
  title: 'Disclaimer | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ka disclaimer.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/disclaimer',
  },
};

export default function RomanDisclaimerPage() {
  return <DisclaimerPage />;
}
