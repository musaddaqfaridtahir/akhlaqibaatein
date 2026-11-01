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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-800/30 dark:border-emerald-500/30">
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-slate-200 dark:border-slate-800 bg-emerald-950 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-sm sm:text-base">
              {t.statusCardHeader}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-emerald-900/60 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Container */}
        <div className="p-5 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
          {isGenerating ? (
            <div className="w-full aspect-square max-w-[360px] flex flex-col items-center justify-center rounded-2xl bg-emerald-950 text-amber-300 animate-pulse">
              <Sparkles className="w-8 h-8 animate-spin mb-2" />
              <p className="text-sm font-medium">{t.statusCardDownloading}</p>
            </div>
          ) : (
            <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-600/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Status Preview"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center">
            {t.statusCardResolution}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-4 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-medium text-sm shadow-md transition disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadBtn}</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-900/10 dark:bg-emerald-500/10 hover:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 font-medium text-sm transition"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.shareBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
