import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/about',
  lang: 'ur',
  title: 'ہمارا وژن اور تعارف | ادارہ اخلاقی باتیں',
  description:
    'ایک غیر تجارتی اور خالص علمی و فکری کاوش جس کا مقصد نسلِ نو کے دل و دماغ کو اسلامی مکارمِ اخلاق، نبوی آداب اور کلاسیکی دانائی کی خوشبو سے معطر کرنا ہے۔',
  keywords: ['About AkhlaqiBaatein', 'ادارہ اخلاقی باتیں', 'ہمارا مشن', 'ادارتی معیار'],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
