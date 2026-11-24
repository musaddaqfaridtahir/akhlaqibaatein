import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/about',
  lang: 'ro',
  title: 'Ta\'aruf: Idara Akhlaqi Baatein — Hamara Mission aur Vision',
  description:
    'Aik ghair-tijarati aur khalis ilmi koshish jis ka maqsad nasal-e-nau ko Islami akhlaqiat, nabawi aadaab aur classic hikmat se aagah karna hai.',
  keywords: ['About AkhlaqiBaatein Roman', 'Idara Akhlaqi Baatein', 'Hamara Vision', 'Islami Akhlaqiat'],
});

export default function RomanAboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
