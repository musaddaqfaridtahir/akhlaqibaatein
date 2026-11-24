import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/articles',
  lang: 'en',
  title: 'Moral Stories, Prophetic History & Classical Wisdom Articles',
  description:
    'Scholarly articles on Hikayat-e-Rumi, Mothers of the Believers, Prophetic character, and classical Islamic ethics with English commentaries.',
  keywords: ['Islamic Articles', 'Rumi Stories', 'Prophetic Character', 'Mothers of the Believers', 'AkhlaqiBaatein'],
});

export default function EnglishArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
