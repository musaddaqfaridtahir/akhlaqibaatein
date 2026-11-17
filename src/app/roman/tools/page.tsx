import type { Metadata } from 'next';
import ToolsHubPage from '@/app/tools/page';

export const metadata: Metadata = {
  title: 'Islami Calculators aur Digital Tools',
  description:
    'Mustanad Islami tools: Qaza Namaz calculator, Zakat calculator aur 9:16 status card maker.',
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com/roman/tools',
  },
};

export default function RomanToolsPage() {
  return <ToolsHubPage />;
}
