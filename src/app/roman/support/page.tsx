import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';

export const metadata: Metadata = {
  title: {
    absolute: 'Support Us (Sadqa-e-Jariya) — AkhlaqiBaatein.com',
  },
  description:
    'AkhlaqiBaatein.com ke ilmi o deeni mission, server hosting aur deen phelane mein sadqa-e-jariya ke tor par hissa dalein. SadaPay payment details.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman/support',
  },
  openGraph: {
    title: 'Support Us (Sadqa-e-Jariya) — AkhlaqiBaatein.com',
    description:
      'AkhlaqiBaatein.com ke server hosting aur deeni mawad ko bila-muawza phelane mein apna nafli hissa dalein.',
    url: 'https://www.akhlaqibaatein.com/roman/support',
  },
};

export default function RomanSupportPage() {
  return <SupportView />;
}
