import type { Metadata } from 'next';
import ToolsHubPage from '@/app/tools/page';

export const metadata: Metadata = {
  title: 'Islamic Calculators & Utilities',
  description:
    'Authentic Islamic utilities: Qaza Namaz Calculator, comprehensive Zakat Calculator, and custom 9:16 Status Maker.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/en/tools',
  },
};

export default function EnglishToolsPage() {
  return <ToolsHubPage />;
}
