import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';

export const metadata: Metadata = {
  title: {
    absolute: 'Support Our Mission (Ongoing Charity) — AkhlaqiBaatein.com',
  },
  description:
    'Contribute voluntarily to AkhlaqiBaatein.com to support high-speed server hosting, domain renewal, and keeping authentic Islamic wisdom freely accessible worldwide as Sadqa-e-Jariya.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/support',
  },
  openGraph: {
    title: 'Support Our Mission (Ongoing Charity) — AkhlaqiBaatein.com',
    description:
      'Contribute voluntarily to support server hosting and preservation of classical Islamic literature as ongoing charity.',
    url: 'https://www.akhlaqibaatein.com/en/support',
  },
};

export default function EnglishSupportPage() {
  return <SupportView />;
}
