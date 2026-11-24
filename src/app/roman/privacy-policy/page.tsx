import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/app/privacy-policy/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/privacy-policy',
  lang: 'ro',
  title: 'Privacy Policy | AkhlaqiBaatein.com',
  description: 'AkhlaqiBaatein.com ki privacy policy aur cookie guidelines.',
  keywords: ['Privacy Policy Roman', 'Data Protection', 'Cookie Policy'],
});

export default function RomanPrivacyPolicyPage() {
  return <PrivacyPolicyPage />;
}
