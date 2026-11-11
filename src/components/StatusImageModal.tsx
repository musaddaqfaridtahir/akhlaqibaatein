'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Share2, Sparkles, Calendar, LayoutTemplate } from 'lucide-react';
import {
  generateStatusImage,
  downloadImage,
  CanvasData,
  PostFormat,
} from '@/lib/canvasGenerator';
import { useLanguage } from '@/context/LanguageContext';

interface StatusImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CanvasData;
}

/**
 * Renders honorific ligatures (ﷺ) inside a normalized serif inline span
 * so adjacent Urdu Nastaliq text lines do not collide vertically in preview boxes.
 */
function renderHonorificSafePreview(text: string): React.ReactNode {
  const parts = text.split(/(\uFDFA|\uFDFB|ﷺ)/g);
  return parts.map((part, i) =>
    /^(\uFDFA|\uFDFB|ﷺ)$/.test(part) ? (
      <span
        key={i}
        className="inline-block font-serif text-[0.95em] leading-none mx-0.5 align-baseline"
      >
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default function StatusImageModal({
  isOpen,
  onClose,
  data,
}: StatusImageModalProps) {
  const [format, setFormat] = useState<PostFormat>(data.format || '4:5');
  const [showDate, setShowDate] = useState<boolean>(data.showDate !== false);
  const requestKey = `${data.slug}|${data.lang}|${format}|${showDate}|${data.text}|${data.bookRef || ''}|${data.explanation || ''}`;
  const [generated, setGenerated] = useState<{ key: string; url: string }>({ key: '', url: '' });
  const { language, t, showToast } = useLanguage();

  const isUrdu = language === 'ur';
  const isGenerating = isOpen && generated.key !== requestKey;
  const imageUrl = generated.key === requestKey ? generated.url : '';

  useEffect(() => {
    let active = true;
    if (isOpen) {
      generateStatusImage({ ...data, format, showDate }).then((url) => {
        if (active) {
          setGenerated({ key: requestKey, url });
        }
      });
    }
    return () => {
      active = false;
    };
  }, [isOpen, data, format, showDate, requestKey]);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (imageUrl) {
      const suffix = format === '4:5' ? 'post' : 'status';
      downloadImage(imageUrl, `akhlaqibaatein-${data.slug}-${data.lang}-${suffix}.png`);
      showToast(
        data.lang === 'ur'
          ? 'اسٹیٹس کارڈ محفوظ ہو گیا!'
          : data.lang === 'ro'
          ? 'Post image save ho gayi!'
          : 'Post image successfully downloaded!'
      );
    }
  };

  const handleShareWhatsApp = () => {
    const refSuffix = data.bookRef ? ` (${data.bookRef})` : '';
    const text = encodeURIComponent(
      `"${data.text}"\n\n— ${data.author}${refSuffix}\n\nhttps://akhlaqibaatein.com/quote/${data.slug}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const formatLabels = {
    postLabel: isUrdu ? 'سوشل پوسٹ (4:5)' : 'Social Post 4:5 (1080×1350)',
    statusLabel: isUrdu ? 'واٹس ایپ اسٹیٹس (9:16)' : 'WhatsApp Status 9:16 (1080×1920)',
    dateToggle: isUrdu
      ? 'تاریخ شامل کریں (Show Date on Post)'
      : 'Include Islamic & Gregorian Date',
    resolutionCaption:
      format === '4:5'
        ? isUrdu
          ? '1080 × 1350 ایچ ڈی سوشل پوسٹ • انسٹاگرام و فیس بک (4:5)'
          : '1080 × 1350 HD Social Post • 4:5 Portrait'
        : isUrdu
        ? '1080 × 1920 ایچ ڈی واٹس ایپ اسٹیٹس • فل اسٹوری (9:16)'
        : '1080 × 1920 HD WhatsApp Status • 9:16 Story',
  };

  const aspectClass = format === '4:5' ? 'aspect-[4/5] max-w-[300px] sm:max-w-[330px]' : 'aspect-[9/16] max-w-[230px] sm:max-w-[260px]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-[94vw] max-w-lg max-h-[92vh] overflow-y-auto bg-white dark:bg-[#11221c] rounded-2xl shadow-2xl border border-emerald-800/40 dark:border-emerald-700/60 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 px-4 sm:px-6 border-b border-slate-200 dark:border-emerald-800/60 bg-emerald-950 text-white shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className={`font-semibold text-xs sm:text-base truncate ${isUrdu ? 'font-urdu' : ''}`}>
              {t.statusCardHeader}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-emerald-900/60 transition shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Aspect Ratio & Date Controls */}
        <div className="px-4 sm:px-6 pt-3.5 pb-2.5 bg-stone-50/90 dark:bg-[#0d1b16] border-b border-stone-200 dark:border-emerald-800/50 space-y-2.5 shrink-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-emerald-200 ${isUrdu ? 'font-urdu' : ''}`}>
              <LayoutTemplate className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{isUrdu ? 'تصویر کا سائز:' : 'Post Size:'}</span>
            </span>

            <div className="grid grid-cols-2 gap-1.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setFormat('4:5')}
                className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition border ${
                  format === '4:5'
                    ? 'bg-emerald-800 text-white border-emerald-700 shadow-xs'
                    : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-slate-300 border-stone-300 dark:border-emerald-800 hover:border-emerald-500'
                } ${isUrdu ? 'font-urdu' : ''}`}
              >
                {formatLabels.postLabel}
              </button>

              <button
                type="button"
                onClick={() => setFormat('9:16')}
                className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition border ${
                  format === '9:16'
                    ? 'bg-emerald-800 text-white border-emerald-700 shadow-xs'
                    : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-slate-300 border-stone-300 dark:border-emerald-800 hover:border-emerald-500'
                } ${isUrdu ? 'font-urdu' : ''}`}
              >
                {formatLabels.statusLabel}
              </button>
            </div>
          </div>

          <label className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-white dark:bg-[#11221c] border border-stone-200 dark:border-emerald-800/60 cursor-pointer select-none">
            <span className={`flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-emerald-100 ${isUrdu ? 'font-urdu' : ''}`}>
              <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{formatLabels.dateToggle}</span>
            </span>
            <input
              type="checkbox"
              checked={showDate}
              onChange={(e) => setShowDate(e.target.checked)}
              className="w-4 h-4 accent-emerald-700 rounded cursor-pointer shrink-0"
            />
          </label>
        </div>

        {/* Preview Container */}
        <div className="p-3.5 sm:p-5 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0a1411] flex-1">
          {isGenerating ? (
            <div
              className={`w-full ${aspectClass} max-h-[52vh] flex flex-col items-center justify-center rounded-xl bg-emerald-950 text-amber-300 animate-pulse border-2 border-amber-600/40`}
            >
              <Sparkles className="w-8 h-8 animate-spin mb-2" />
              <p className={`text-xs sm:text-sm font-medium ${isUrdu ? 'font-urdu' : ''}`}>
                {t.statusCardDownloading}
              </p>
            </div>
          ) : (
            <div
              className={`relative w-full ${aspectClass} max-h-[52vh] rounded-xl overflow-hidden shadow-2xl border-2 border-amber-600/40 bg-emerald-950 flex items-center justify-center`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Social Post Preview"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          )}

          <p className={`text-[11px] sm:text-xs text-slate-500 dark:text-emerald-300/80 mt-2.5 text-center font-medium ${isUrdu ? 'font-urdu' : ''}`}>
            {formatLabels.resolutionCaption}
          </p>

          <div
            className={`w-full max-w-[330px] mt-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-[#0d1b16] border border-stone-200 dark:border-emerald-700/50 text-slate-800 dark:text-emerald-100 text-xs text-center whitespace-pre-line max-h-24 overflow-y-auto ${
              data.lang === 'ur' ? 'font-urdu leading-[2.0]' : 'leading-relaxed'
            }`}
          >
            {renderHonorificSafePreview(data.text)}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-3.5 sm:p-4 px-4 sm:px-6 bg-white dark:bg-[#11221c] border-t border-stone-200 dark:border-emerald-800/60 flex flex-col sm:flex-row gap-2.5 shrink-0">
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-md transition disabled:opacity-50 ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>{t.downloadBtn}</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className={`min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-900/10 dark:bg-emerald-900/60 hover:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/50 font-medium text-xs sm:text-sm transition ${
              isUrdu ? 'font-urdu' : ''
            }`}
          >
            <Share2 className="w-4 h-4 shrink-0" />
            <span>{t.shareBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
