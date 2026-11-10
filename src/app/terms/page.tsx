import React from 'react';
import type { Metadata } from 'next';
import { FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions (شرائط و ضوابط)',
  description:
    'Terms of use and conditions for visitors, content sharing, and educational resources on AkhlaqiBaatein.com.',
  alternates: {
    canonical: 'https://akhlaqibaatein.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white shadow-xl border border-amber-500/30">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-urdu leading-[2.1] break-words">
            شرائط و ضوابطِ استعمال (Terms of Service)
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200">
            Last Updated: October 2026 &bull; AkhlaqiBaatein.com
          </p>
        </div>
      </header>

      <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 bg-white dark:bg-[#11221c] border border-slate-200/80 dark:border-emerald-800/60 shadow-xl space-y-8 text-slate-800 dark:text-[#f0fdf4] text-sm leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using AkhlaqiBaatein.com, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Intellectual Property & Permissible Educational Sharing
          </h2>
          <p>
            The moral and spiritual texts presented on AkhlaqiBaatein.com originate from classical Islamic scholarship, hadith collections, and historical public domain works (such as <em>Makhzan-e-Akhlaq</em>). The digital presentations, original commentary, transliterations, code, and graphical layout are copyrighted by AkhlaqiBaatein.com.
          </p>
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-urdu leading-[2.1]">
            <strong>اشتراک اور شیئرنگ کی اجازت: </strong>
            سوشل میڈیا، واٹس ایپ اسٹیٹس اور تعلیمی مقاصد کے لیے اقوال اور تصاویر شیئر کرنے کی مکمل اجازت ہے بشرطیکہ اصل حوالہ اور واٹر مارک محفوظ رکھا جائے۔
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            3. Disclaimer of Warranties
          </h2>
          <p>
            The materials on AkhlaqiBaatein.com are provided on an &apos;as is&apos; basis. While we strive for 100% authenticity and citation accuracy, AkhlaqiBaatein.com makes no warranties, expressed or implied, regarding typographical errors or transmission anomalies.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            4. Modifications
          </h2>
          <p>
            AkhlaqiBaatein.com may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these Terms and Conditions.
          </p>
        </div>
      </section>
    </div>
  );
}
