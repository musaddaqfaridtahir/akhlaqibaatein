import type { Metadata } from 'next';
import NamazTimingsPage from '@/app/tools/namaz-timings/page';
import { buildStaticPageMetadata } from '@/lib/quoteSeo';

export const metadata: Metadata = buildStaticPageMetadata({
  path: '/tools/namaz-timings',
  lang: 'ro',
  title: 'Namaz ke Auqat aur Next Salah Countdown',
  description:
    'Pakistan aur international shehron ke liye rozana Namaz ke accurate timings, Hanafi o Shafii method aur agli namaz ka live countdown timer.',
  keywords: ['Namaz Timings Roman', 'Namaz ka Time Aaj', 'Fajr Zuhr Asr Maghrib Isha Time', 'Next Salah Countdown'],
});

export default function RomanNamazTimingsPage() {
  return <NamazTimingsPage />;
}
