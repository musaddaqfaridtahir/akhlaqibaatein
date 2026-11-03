'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Share2, Sparkles } from 'lucide-react';
import { generateStatusImage, downloadImage, CanvasData } from '@/lib/canvasGenerator';
import { useLanguage } from '@/context/LanguageContext';

interface StatusImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CanvasData;
}

export default function StatusImageModal({
  isOpen,
  onClose,
  data,
}: StatusImageModalProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(true);
  const { t, showToast } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setIsGenerating(true);
      generateStatusImage(data).then((url) => {
        setImageUrl(url);
        setIsGenerating(false);
      });
    }
  }, [isOpen, data]);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (imageUrl) {
      downloadImage(imageUrl, `akhlaqibaatein-${data.slug}-${data.lang}-status.png`);
      showToast(
        data.lang === 'ur'
          ? 'اسٹیٹس کارڈ محفوظ ہو گیا!'
          : data.lang === 'ro'
          ? 'Status image save ho gayi!'
          : 'Status image successfully downloaded!'
      );
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `"${data.text}"\n\n— ${data.author}\n\nhttps://akhlaqibaatein.com/quote/${data.slug}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-[94vw] max-w-md max-h-[88vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-emerald-800/30 dark:border-emerald-500/30 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-emerald-950 text-white shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="font-semibold text-xs sm:text-base truncate">
              {t.statusCardHeader}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-emerald-900/60 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Container */}
        <div className="p-3.5 sm:p-5 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 flex-1">
          {isGenerating ? (
            <div className="w-full aspect-square max-w-[280px] sm:max-w-[340px] flex flex-col items-center justify-center rounded-xl bg-emerald-950 text-amber-300 animate-pulse">
              <Sparkles className="w-8 h-8 animate-spin mb-2" />
              <p className="text-xs sm:text-sm font-medium">{t.statusCardDownloading}</p>
            </div>
          ) : (
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-amber-600/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Status Preview"
                className="w-full h-auto aspect-square object-contain rounded-xl"
              />
            </div>
          )}
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2.5 text-center">
            {t.statusCardResolution}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-3.5 sm:p-4 px-4 sm:px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2.5 shrink-0">
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-md transition disabled:opacity-50"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>{t.downloadBtn}</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-900/10 dark:bg-emerald-500/10 hover:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 font-medium text-xs sm:text-sm transition"
          >
            <Share2 className="w-4 h-4 shrink-0" />
            <span>{t.shareBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
