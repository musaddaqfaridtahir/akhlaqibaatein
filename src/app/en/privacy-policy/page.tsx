import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/app/privacy-policy/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/privacy-policy',
  lang: 'en',
  title: 'Privacy Policy | AkhlaqiBaatein.com',
  description: 'Privacy Policy and Google AdSense compliance statement of AkhlaqiBaatein.com.',
  keywords: ['Privacy Policy', 'Data Protection', 'Cookie Policy'],
});

export default function EnglishPrivacyPolicyPage() {
  return <PrivacyPolicyPage />;
}
