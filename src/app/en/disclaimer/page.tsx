import type { Metadata } from 'next';
import DisclaimerPage from '@/app/disclaimer/page';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer of AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/disclaimer',
  },
};

export default function EnglishDisclaimerPage() {
  return <DisclaimerPage />;
}
