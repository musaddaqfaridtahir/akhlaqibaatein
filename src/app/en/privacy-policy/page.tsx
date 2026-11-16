import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/app/privacy-policy/page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/privacy-policy',
  },
};

export default function EnglishPrivacyPolicyPage() {
  return <PrivacyPolicyPage />;
}
