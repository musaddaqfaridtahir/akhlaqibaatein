import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/support',
  lang: 'ur',
  title: 'ہمارا تعاون کریں (صدقہ جاریہ) — اخلاقی باتیں | AkhlaqiBaatein.com',
  description:
    'اخلاقی باتیں (AkhlaqiBaatein.com) کے تعلیمی و دینی مشن، کلاؤڈ سرور اخراجات اور اشاعتِ اخلاق میں بطور صدقہ جاریہ اپنا نفلی حصہ ڈالیں۔ سادہ پے تفصیلات۔',
  keywords: ['Support AkhlaqiBaatein', 'تعاون کریں', 'صدقہ جاریہ', 'سادہ پے'],
});

export default function SupportPage() {
  return <SupportView />;
}
