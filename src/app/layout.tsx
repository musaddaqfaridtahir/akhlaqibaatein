import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Amiri } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import IslamicDateBar from '@/components/IslamicDateBar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import PwaInstallBanner from '@/components/PwaInstallBanner';
import JsonLd from '@/components/JsonLd';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import { Analytics } from '@vercel/analytics/next';

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#064e3b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.akhlaqibaatein.com'),
  manifest: '/manifest.webmanifest',
  applicationName: 'اخلاقی باتیں',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'اخلاقی باتیں',
  },
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
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'ur_PK',
    url: 'https://www.akhlaqibaatein.com',
    title: 'اخلاقی باتیں | AkhlaqiBaatein.com — Islamic Moral Wisdom',
    description:
      'مستند اسلامی اخلاقیات، اقوالِ زریں، احادیثِ مبارکہ، چَہل حدیث، اور کلاسیکی کتب کے اخلاقی مضامین۔ Authentic Islamic wisdom, Hadith ethics, and classic moral stories in Urdu, Roman Urdu, and English.',
    siteName: 'AkhlaqiBaatein.com',
    images: [
      {
        url: 'https://www.akhlaqibaatein.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'اخلاقی باتیں — AkhlaqiBaatein.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اخلاقی باتیں | AkhlaqiBaatein.com',
    description:
      'مستند اسلامی اخلاقیات، اقوالِ زریں، احادیثِ مبارکہ اور روزمرہ وظائف۔ Authentic Islamic moral wisdom, Hadith, and classical literature in Urdu, Roman Urdu, and English.',
    images: ['https://www.akhlaqibaatein.com/og-image.png'],
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
  alternates: {
    canonical: 'https://www.akhlaqibaatein.com',
    languages: {
      'ur': 'https://www.akhlaqibaatein.com',
      'en': 'https://www.akhlaqibaatein.com/en',
      'ur-Latn': 'https://www.akhlaqibaatein.com/roman',
      'x-default': 'https://www.akhlaqibaatein.com',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmIdEnv = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const gtmId =
    gtmIdEnv && /^GTM-[A-Z0-9]+$/i.test(gtmIdEnv) ? gtmIdEnv : 'GTM-NMFV4L6F';

  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();
  const isGaConfigured =
    Boolean(gaId) &&
    typeof gaId === 'string' &&
    /^G-[A-Z0-9]+$/i.test(gaId) &&
    !gaId.includes('XXXX');

  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim();
  const isAdsenseConfigured =
    Boolean(adsenseClientId) &&
    typeof adsenseClientId === 'string' &&
    /^ca-pub-\d{10,}$/.test(adsenseClientId) &&
    !adsenseClientId.includes('XXXX') &&
    !/ca-pub-0{6,}/i.test(adsenseClientId);

  return (
    <html lang="ur" dir="rtl" className={`lang-ur ${amiri.variable}`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="اخلاقی باتیں" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
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
        {isGaConfigured && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <LanguageProvider>
          <AnalyticsTracker />
          <Navbar />
          <IslamicDateBar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <PwaInstallBanner />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
