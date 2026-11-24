import type { Metadata } from 'next';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/contact',
  lang: 'ur',
  title: 'رابطہ و تصحیح | ادارہ اخلاقی باتیں',
  description:
    'اگر آپ کو پورٹل پر کسی قول، حدیث یا ترجمے میں تصحیح کروانی ہو، یا کوئی تجویز ہو، تو ہم سے بلا جھجھک رابطہ فرمائیں۔',
  keywords: ['Contact AkhlaqiBaatein', 'رابطہ', 'تصحیح و تجاویز', 'ادارہ اخلاقی باتیں'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
