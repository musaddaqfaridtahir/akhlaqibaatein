import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/articles',
  lang: 'ro',
  title: 'Sabaq Aamoz Mazameen, Seerat aur Hikayat | AkhlaqiBaatein.com',
  description:
    'Hikayat-e-Rumi, Seerat-un-Nabi ﷺ, Azwaj-e-Mutahharat aur Islami akhlaqiat par Roman Urdu mein tehqeeqi mazameen.',
  keywords: ['Islamic Articles Roman', 'Hikayat e Rumi', 'Seerat e Nabawi Articles', 'Akhlaqi Mazameen'],
});

export default function RomanArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
