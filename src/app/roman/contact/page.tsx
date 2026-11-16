import type { Metadata } from 'next';
import ContactPage from '@/app/contact/page';

export const metadata: Metadata = {
  title: 'Rabta o Tasheeh',
  description: 'AkhlaqiBaatein.com ki team se rabta karein ya kisi qol ki tasheeh darj karein.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/roman/contact',
  },
};

export default function RomanContactPage() {
  return <ContactPage />;
}
