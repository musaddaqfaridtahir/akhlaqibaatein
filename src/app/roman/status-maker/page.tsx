import type { Metadata } from 'next';
import StatusMakerPage from '@/app/status-maker/page';

export const metadata: Metadata = {
  title: 'Custom Name Jumma & Daily Status Maker',
  description:
    'Card par apna naam likh kar 9:16 Full HD WhatsApp Status banayein. Jumma Mubarak, Durood aur Aqwal.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman/status-maker',
  },
};

export default function RomanStatusMakerPage() {
  return <StatusMakerPage />;
}
