import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/articles',
  lang: 'ur',
  title: 'سبق آموز مضامین، سیرت و تاریخ | اخلاقی مضامین',
  description:
    'حکایاتِ رومیؒ، سیرتِ طیبہ ﷺ، ازواجِ مطہراتؓ، اقوالِ صحابہؓ اور اسلامی اخلاقیات پر مدلل و جامع تحقیقی مقالات۔',
  keywords: ['سبق آموز مضامین', 'حکایات رومی', 'سیرت النبی مضامین', 'ازواج مطہرات', 'اخلاقی باتیں'],
});

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
