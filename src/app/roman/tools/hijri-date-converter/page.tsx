import type { Metadata } from 'next';
import HijriDateConverterPage from '@/app/tools/hijri-date-converter/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/hijri-date-converter',
  lang: 'ro',
  title: 'Hijri Date Converter aur Islamic Events Countdown',
  description:
    'Gregorian date ko Islamic Hijri date mein aur Hijri ko Gregorian mein convert karein, chaand ke farq ka toggle aur Ramadan o Eid ka live countdown.',
  keywords: ['Hijri Date Converter Roman', 'Aaj ki Islami Tareekh', 'Ramadan Countdown', 'Eid Countdown'],
});

export default function RomanHijriDateConverterPage() {
  return <HijriDateConverterPage />;
}
