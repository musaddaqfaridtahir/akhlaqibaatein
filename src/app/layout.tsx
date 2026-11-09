import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import IslamicDateBar from '@/components/IslamicDateBar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://akhlaqibaatein.com'),
  title: {
    default: 'اخلاقی باتیں | AkhlaqiBaatein.com — Islamic Wisdom, Quotes & 40 Hadith',
    template: '%s | AkhlaqiBaatein.com',
  },
  description:
    'مستند اسلامی اخلاقیات، اقوالِ زریں، احادیثِ مبارکہ، چَہل حدیث (40 Hadith)، اور کلاسیکی کتب (مخزنِ اخلاق) کے اخلاقی مضامین۔ اردو، رومن اردو اور انگلش میں۔',
  keywords: [
    'Akhlaqi Baatein',
    'اخلاقی باتیں',
    'Islami Aqwal',
    'Aqwal e Zareen',
    'Hadith in Urdu and Roman',
    'Islamic Quotes in English',
    'Chahal Hadith',
    '40 Hadith Memorization',
    'Makhzan e Akhlaq',
    'Hazrat Ali Quotes',
    'Hazrat Umar Quotes',
    'Islamic Moral Stories',
  ],
  authors: [{ name: 'AkhlaqiBaatein Editorial Board' }],
  creator: 'AkhlaqiBaatein.com',
  publisher: 'AkhlaqiBaatein.com',
  openGraph: {
    type: 'website',
    locale: 'ur_PK',
    url: 'https://akhlaqibaatein.com',
    title: 'اخلاقی باتیں | AkhlaqiBaatein.com — Islamic Moral Wisdom',
    description:
      'Explore authentic Islamic wisdom, Quranic teachings, Hadith ethics, and classic moral stories in pure Urdu, Roman Urdu, and English.',
    siteName: 'AkhlaqiBaatein.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اخلاقی باتیں | AkhlaqiBaatein.com',
    description: 'Timeless Islamic wisdom and classical moral literature with strict language isolation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isAdsenseConfigured =
    Boolean(adsenseClientId) &&
    typeof adsenseClientId === 'string' &&
    adsenseClientId.startsWith('ca-pub-') &&
    !adsenseClientId.includes('XXXX');

  return (
    <html lang="ur" dir="rtl" className="lang-ur">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {isAdsenseConfigured && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
        <JsonLd type="website" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-body-lang overflow-x-hidden max-w-[100vw] w-full">
        <LanguageProvider>
          <Navbar />
          <IslamicDateBar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
