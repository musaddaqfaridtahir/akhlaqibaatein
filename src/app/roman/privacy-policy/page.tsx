import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/app/privacy-policy/page';

export const metadata: Metadata = {
  title: 'Privacy Policy | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ki privacy policy.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/privacy-policy',
  },
};

export default function RomanPrivacyPolicyPage() {
  return <PrivacyPolicyPage />;
}
