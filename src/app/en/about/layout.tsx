import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/about',
  lang: 'en',
  title: 'About AkhlaqiBaatein.com — Vision, Mission & Editorial Standards',
  description:
    'An independent educational initiative dedicated to reviving classical Islamic virtues, prophetic etiquette, and timeless moral maxims for the modern digital generation.',
  keywords: ['About AkhlaqiBaatein', 'Islamic Ethics Platform', 'Editorial Standards', 'Islamic Moral Wisdom'],
});

export default function EnglishAboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
