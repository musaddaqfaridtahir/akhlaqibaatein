'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const strings = {
    ur: {
      title: 'رابطہ و تصحیح (Contact & Corrections)',
      desc: 'اگر آپ کو پورٹل پر کسی قول، حدیث یا ترجمے میں تصحیح کروانی ہو، یا کوئی تجویز ہو، تو ہم سے بلا جھجھک رابطہ فرمائیں۔',
      directEmail: 'براہِ راست سرکاری ای میل',
      emailResponse: 'ہم 24 سے 48 گھنٹوں کے اندر تمام تجاویز کا جائزہ لیتے ہیں۔',
      nameLabel: 'آپ کا نام',
      namePlaceholder: 'مثلاً: محمد احمد',
      emailLabel: 'ای میل پتہ',
      subjectLabel: 'موضوع / عنوان',
      subjectPlaceholder: 'مثلاً: قول کی تصحیح یا تجویز',
      messageLabel: 'تفصیلی پیغام',
      messagePlaceholder: 'اپنا پیغام یہاں تحریر فرمائیں...',
      submitBtn: 'پیغام ارسال کریں',
      sendingBtn: 'پیغام بھیجا جا رہا ہے...',
      errorFallback: 'معذرت، پیغام بھیجنے میں تکنیکی دشواری پیش آئی۔ برائے مہربانی info@akhlaqibaatein.com پر براہِ راست ای میل فرمائیں۔',
      successTitle: 'آپ کا پیغام کامیابی سے بھیج دیا گیا ہے!',
      successDesc: 'جزاک اللہ خیراً! آپ کے قیمتی وقت اور محبت کا شکریہ۔ ہماری ادارتی ٹیم جلد آپ کے ای میل پتے پر رابطہ کرے گی۔',
      sendAnother: 'دوسرا پیغام بھیجیں',
    },
    ro: {
      title: 'Rabta aur Tasheeh (Contact & Corrections)',
      desc: 'Agar aap ko kisi qol ya hadith ke hawale mein koi tasheeh karwani ho to hum se rabta karein.',
      directEmail: 'Official Email',
      emailResponse: 'Hum 24 se 48 ghanton mein har email ka jawab dete hain.',
      nameLabel: 'Aap Ka Naam',
      namePlaceholder: 'Misal: Muhammad Ahmed',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject / Mauzoo',
      subjectPlaceholder: 'Misal: Qol ki tasheeh ya tajweez',
      messageLabel: 'Tafseeli Paigham',
      messagePlaceholder: 'Apna paigham yahan likhein...',
      submitBtn: 'Paigham Bhejein',
      sendingBtn: 'Paigham bheja ja raha hai...',
      errorFallback: 'Maazrat, message bhejne mein masla aaya. Baraye meherbani info@akhlaqibaatein.com par email karein.',
      successTitle: 'Aap ka paigham bhej diya gaya hai!',
      successDesc: 'JazakAllah! Hamari team jald hi aap ke email par jawab degi.',
      sendAnother: 'Doosra paigham bhejein',
    },
    en: {
      title: 'Contact Us & Suggest Corrections',
      desc: 'Have an inquiry, feedback, or scholarly correction for a specific quotation or tradition? We welcome your message.',
      directEmail: 'Official Editorial Email',
      emailResponse: 'We review scholarly feedback and inquiries within 24 to 48 hours.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Muhammad Ahmed',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Correction regarding Quote Reference',
      messageLabel: 'Message',
      messagePlaceholder: 'Please type your message or inquiry here...',
      submitBtn: 'Send Message',
      sendingBtn: 'Sending Message...',
      errorFallback: 'Sorry, we could not send your message automatically. Please email info@akhlaqibaatein.com directly.',
      successTitle: 'Message Delivered Successfully!',
      successDesc: 'Thank you for reaching out. Our editorial team will reply to your email address shortly.',
      sendAnother: 'Send Another Message',
    },
  }[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);
      if (response.ok && data?.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data?.error || strings.errorFallback);
      }
    } catch {
      setErrorMessage(strings.errorFallback);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Banner */}
      <section className="rounded-2xl sm:rounded-3xl py-6 px-4 sm:py-10 sm:px-12 bg-gradient-to-br from-white via-emerald-50/40 to-amber-50/30 dark:from-emerald-950 dark:via-emerald-900 dark:to-slate-950 text-slate-900 dark:text-white shadow-md dark:shadow-xl border border-stone-200/90 dark:border-amber-500/30">
        <div className="max-w-2xl space-y-3">
          <h1
            className={`text-xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white break-words ${
              isUrdu ? 'font-urdu leading-[1.8]' : 'leading-tight'
            }`}
          >
            {strings.title}
          </h1>
          <p
            className={`text-xs sm:text-base text-slate-700 dark:text-emerald-100/90 break-words ${
              isUrdu ? 'font-urdu leading-[1.85]' : 'leading-relaxed'
            }`}
          >
            {strings.desc}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Contact Info Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className={`font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu text-lg' : 'text-base'}`}>
              {strings.directEmail}
            </h3>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 break-all">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <a
                href="mailto:info@akhlaqibaatein.com"
                className="font-semibold text-emerald-800 dark:text-emerald-300 hover:underline"
              >
                info@akhlaqibaatein.com
              </a>
            </div>
            <p className={`text-xs text-slate-500 dark:text-slate-400 ${isUrdu ? 'font-urdu leading-[2.0]' : 'leading-relaxed'}`}>
              {strings.emailResponse}
            </p>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="md:col-span-2">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white ${isUrdu ? 'font-urdu' : ''}`}>
                  {strings.successTitle}
                </h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto ${isUrdu ? 'font-urdu leading-[2.1]' : 'leading-relaxed'}`}>
                  {strings.successDesc}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-2xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition"
                >
                  {strings.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 ${isUrdu ? 'font-urdu text-sm' : ''}`}>
                    {strings.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={strings.namePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 ${isUrdu ? 'font-urdu text-sm' : ''}`}>
                    {strings.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 ${isUrdu ? 'font-urdu text-sm' : ''}`}>
                    {strings.subjectLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder={strings.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 ${isUrdu ? 'font-urdu text-sm' : ''}`}>
                    {strings.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={strings.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className={`flex items-start gap-2.5 p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-xs sm:text-sm text-red-800 dark:text-red-300 ${
                      isUrdu ? 'font-urdu leading-[1.9]' : ''
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-60 ${
                    isUrdu ? 'font-urdu text-base' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{strings.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{strings.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
