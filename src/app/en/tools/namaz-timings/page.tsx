import type { Metadata } from 'next';
import NamazTimingsPage from '@/app/tools/namaz-timings/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/namaz-timings',
  lang: 'en',
  title: 'Accurate Namaz Timings & Next Salah Countdown',
  description:
    'Precise daily Islamic prayer times (Fajr, Sunrise, Ishraq, Zuhr, Asr, Maghrib, Isha) across major Pakistani cities and international diaspora with Hanafi/Shafi’i calculation.',
  keywords: ['Namaz Timings', 'Prayer Times Lahore', 'Karachi Salah Times', 'Next Prayer Countdown', 'Islamic Prayer Schedule'],
});

export default function EnglishNamazTimingsPage() {
  return <NamazTimingsPage />;
}
