import React from 'react';
import type { Metadata } from 'next';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Privacy Policy (پرائیویسی پالیسی) | AkhlaqiBaatein.com',
  description:
    'Complete Google AdSense-compliant Privacy Policy for AkhlaqiBaatein.com, explaining our usage of cookies, DART cookies, and third-party advertising partners.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Top Banner AdSlot */}
      <AdSlot position="header" />

      <header className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-xl border border-amber-500/30">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>AdSense & Legal Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-urdu leading-[2.1] break-words">
            پرائیویسی پالیسی (Privacy Policy)
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200">
            Last Updated: October 2026 &bull; AkhlaqiBaatein.com
          </p>
        </div>
      </header>

      <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-8 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Introduction & Overview
          </h2>
          <p>
            At <strong>AkhlaqiBaatein.com</strong> (accessible from https://akhlaqibaatein.com), the privacy of our visitors is of paramount importance to us. This Privacy Policy document details the types of information that is collected and recorded by AkhlaqiBaatein.com and how we utilize it.
          </p>
          <p className="font-urdu leading-[2.2] text-slate-700 dark:text-slate-300">
            اخلاقی باتیں ویب پورٹل پر قارئین کی ذاتی معلومات کے تحفظ کو انتہائی سنجیدگی سے لیا جاتا ہے۔ ہم کسی بھی صارف کی ذاتی معلومات کو فروخت یا غیر متعلقہ فریقوں کے حوالے نہیں کرتے۔
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Google AdSense & DoubleClick DART Cookies
          </h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to https://akhlaqibaatein.com and other sites on the internet.
          </p>
          <p>
            However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:
            <br />
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 dark:text-emerald-400 underline font-medium"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Advertising Partners & Third-Party Ad Servers
          </h2>
          <p>
            Some of advertisers on our site may use cookies and web beacons. Our primary advertising partner is <strong>Google AdSense</strong>. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on AkhlaqiBaatein.com, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs.
          </p>
          <p>
            These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that AkhlaqiBaatein.com has no access to or control over these cookies that are used by third-party advertisers.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Log Files & Analytics
          </h2>
          <p>
            AkhlaqiBaatein.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5. Children&apos;s Information Protection (COPPA)
          </h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            AkhlaqiBaatein.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            6. Consent & Contact
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{' '}
            <strong className="text-emerald-700 dark:text-emerald-400">contact@akhlaqibaatein.com</strong>.
          </p>
        </div>
      </section>

      {/* In-Article AdSlot */}
      <AdSlot position="in-article" />
    </div>
  );
}
