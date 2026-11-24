import type { Metadata } from 'next';
import HijriDateConverterPage from '@/app/tools/hijri-date-converter/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/hijri-date-converter',
  lang: 'en',
  title: 'Hijri Date Converter & Islamic Events Countdown',
  description:
    'Convert Gregorian dates to Islamic Hijri dates and vice versa with Day-of-Week output, moon sighting toggle, and live countdowns to Ramadan and Eid.',
  keywords: ['Hijri Date Converter', 'Islamic Date Today', 'Gregorian to Hijri', 'Ramadan Countdown', 'Eid Countdown'],
});

export default function EnglishHijriDateConverterPage() {
  return <HijriDateConverterPage />;
}
