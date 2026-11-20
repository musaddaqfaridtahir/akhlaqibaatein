import type { Metadata } from 'next';
import SupportView from '@/components/SupportView';

export const metadata: Metadata = {
  title: {
    absolute: 'ہمارا تعاون کریں (صدقہ جاریہ) — اخلاقی باتیں | AkhlaqiBaatein.com',
  },
  description:
    'اخلاقی باتیں (AkhlaqiBaatein.com) کے تعلیمی و دینی مشن، کلاؤڈ سرور اخراجات اور اشاعتِ اخلاق میں بطور صدقہ جاریہ اپنا نفلی حصہ ڈالیں۔ سادہ پے تفصیلات۔',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/support',
  },
  openGraph: {
    title: 'ہمارا تعاون کریں (صدقہ جاریہ) — اخلاقی باتیں',
    description:
      'اخلاقی باتیں (AkhlaqiBaatein.com) کے تعلیمی و دینی مشن، سرور اخراجات اور اشاعتِ اخلاق میں بطور صدقہ جاریہ اپنا نفلی حصہ ڈالیں۔',
    url: 'https://www.akhlaqibaatein.com/support',
  },
};

export default function SupportPage() {
  return <SupportView />;
}
