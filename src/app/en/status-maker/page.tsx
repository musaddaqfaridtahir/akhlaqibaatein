import type { Metadata } from 'next';
import StatusMakerPage from '@/app/status-maker/page';

export const metadata: Metadata = {
  title: 'Personalized Islamic & Jumma Status Maker',
  description:
    'Create stunning 9:16 vertical HD WhatsApp Status cards featuring your personal name. Jumma Mubarak, Morning Duas, and Golden Quotes.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/en/status-maker',
  },
};

export default function EnglishStatusMakerPage() {
  return <StatusMakerPage />;
}
