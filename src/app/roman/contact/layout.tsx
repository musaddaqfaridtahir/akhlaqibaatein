import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/contact',
  lang: 'ro',
  title: 'Rabta o Tasheeh | AkhlaqiBaatein.com',
  description:
    'Agar aap ko kisi qol, hadith ya tarjumay mein tasheeh karwani ho to hamari editorial team se rabta karein.',
  keywords: ['Rabta AkhlaqiBaatein', 'Contact Roman Urdu', 'Tasheeh o Tajweez'],
});

export default function RomanContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
