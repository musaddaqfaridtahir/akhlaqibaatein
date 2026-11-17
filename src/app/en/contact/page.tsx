import type { Metadata } from 'next';
import ContactPage from '@/app/contact/page';

export const metadata: Metadata = {
  title: 'Contact Us & Suggest Corrections',
  description: 'Contact AkhlaqiBaatein.com editorial team for inquiries, feedback, or scholarly suggestions.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/contact',
  },
};

export default function EnglishContactPage() {
  return <ContactPage />;
}
