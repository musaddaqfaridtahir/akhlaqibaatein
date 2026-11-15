'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Camera,
  Download,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Share2,
  RefreshCw,
  User,
  Heart,
  BookOpen,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { computeFormattedDate } from '@/lib/dateUtils';

interface StatusTemplate {
  id: string;
  category: 'jumma' | 'subah' | 'durood' | 'aqwal';
  titleUr: string;
  arabic?: string;
  urdu: string;
  subtext?: string;
}

const TEMPLATES: StatusTemplate[] = [
  // 1. Jumma Mubarak
  {
    id: 'jumma-1',
    category: 'jumma',
    titleUr: 'جمعہ مبارک',
    arabic: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا',
    urdu: 'جمعہ کا مبارک دن سب کو مبارک ہو! آج کے دن کثرت کے ساتھ درودِ پاک پڑھیں اور دعاؤں میں یاد رکھیں۔',
    subtext: 'فرمانِ نبوی ﷺ: جمعہ کا دن تمام دنوں کا سردار ہے۔',
  },
  {
    id: 'jumma-2',
    category: 'jumma',
    titleUr: 'برکتوں بھرا جمعہ',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
    urdu: 'یا رب! اس مبارک جمعہ کے صدقے ہمارے تمام گناہ معاف فرما، گھروں میں برکت اور رزق میں کشادگی عطا فرما۔',
    subtext: 'جمعہ مبارک • دعاؤں کا طلبگار',
  },

  // 2. Subah Bakhair & Morning Duas
  {
    id: 'subah-1',
    category: 'subah',
    titleUr: 'صبح بخیر و دعائے نور',
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
    urdu: 'صبح بخیر! اللہ تعالیٰ آپ کے دن کو خیر، عافیت، سلامتی اور مسکراہٹوں سے بھر دے۔ آمین!',
    subtext: 'ہر صبح ایک نئی نعمت ہے، اپنے رب کا شکر ادا کریں۔',
  },
  {
    id: 'subah-2',
    category: 'subah',
    titleUr: 'صبحِ نو اور توکل',
    arabic: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
    urdu: 'جس کا بھروسہ اللہ پر ہو، وہ کبھی مایوس نہیں ہوتا۔ اللہ پاک آپ کے تمام بگڑے کام سنوار دے۔',
    subtext: 'صبح بخیر زندگی • توکل علیٰ اللہ',
  },

  // 3. Durood o Salam
  {
    id: 'durood-1',
    category: 'durood',
    titleUr: 'درودِ ابراہیمی',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    urdu: 'جس نے مجھ پر ایک بار درود بھیجا، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے۔ (صحیح مسلم)',
    subtext: 'صلی اللہ علیہ وآلہ وسلم',
  },
  {
    id: 'durood-2',
    category: 'durood',
    titleUr: 'صلوٰۃ التنجینا',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنَجِّينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ',
    urdu: 'اے اللہ! ہمارے آقا محمد ﷺ پر ایسی رحمت نازل فرما جس کے ذریعے تو ہمیں تمام خوف اور آفات سے نجات بخشے۔',
    subtext: 'درودِ تنجینا • مصیبتوں سے نجات کا حصار',
  },

  // 4. Zareen Aqwal
  {
    id: 'aqwal-1',
    category: 'aqwal',
    titleUr: 'قولِ امیر المومنین علیؓ',
    urdu: 'انسان کا سب سے بڑا دشمن اس کی اپنی انا اور تکبر ہے، اور سب سے بہترین دوست حسنِ اخلاق ہے۔',
    subtext: 'حضرت علی ابن ابی طالب رضی اللہ عنہ',
  },
  {
    id: 'aqwal-2',
    category: 'aqwal',
    titleUr: 'ارشادِ فاروقِ اعظمؓ',
    urdu: 'دوسروں کے عیب تلاش کرنے سے پہلے اپنے نفس کا احتساب کرو، اس سے پہلے کہ تمہارا حساب لیا جائے۔',
    subtext: 'حضرت عمر فاروق رضی اللہ عنہ',
  },
];

export default function StatusMakerPage() {
  const { language, showToast } = useLanguage();
  const isUrdu = language === 'ur';
  const isRoman = language === 'ro';

  const [activeCategory, setActiveCategory] = useState<'jumma' | 'subah' | 'durood' | 'aqwal'>('jumma');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('jumma-1');
  const [userName, setUserName] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');
  const [downloading, setDownloading] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentTemplate = TEMPLATES.find((t) => t.id === selectedTemplateId) || TEMPLATES[0];

  const categoryTabs = [
    { id: 'jumma', ur: 'جمعہ مبارک', ro: 'Jumma Mubarak', en: 'Jumma Mubarak' },
    { id: 'subah', ur: 'صبح بخیر دعائیں', ro: 'Morning Duas', en: 'Morning Duas' },
    { id: 'durood', ur: 'درود و سلام', ro: 'Durood o Salam', en: 'Salawat' },
    { id: 'aqwal', ur: 'زریں اقوال', ro: 'Zareen Aqwal', en: 'Golden Quotes' },
  ];

  const filteredTemplates = TEMPLATES.filter((t) => t.category === activeCategory);

  // Re-draw canvas whenever template, userName, or customText changes
  useEffect(() => {
    drawCanvas();
  }, [selectedTemplateId, userName, customText, language]);

  const drawCanvas = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    } catch {}

    const WIDTH = 1080;
    const HEIGHT = 1920;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // 1. Background Gradient (Luxury Emerald Night to Deep Jade)
    const bg = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    bg.addColorStop(0, '#040b08');
    bg.addColorStop(0.25, '#0a1d16');
    bg.addColorStop(0.7, '#071510');
    bg.addColorStop(1, '#020504');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Subtle Radial Gold Ambient Glow
    const glow = ctx.createRadialGradient(WIDTH / 2, 450, 40, WIDTH / 2, 450, 600);
    glow.addColorStop(0, 'rgba(212, 175, 55, 0.16)');
    glow.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // 2. Double Ornamental Border
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, WIDTH - 80, HEIGHT - 80);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(52, 52, WIDTH - 104, HEIGHT - 104);

    // Corner Diamonds
    const drawDiamond = (cx: number, cy: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((45 * Math.PI) / 180);
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(-8, -8, 16, 16);
      ctx.restore();
    };
    drawDiamond(52, 52);
    drawDiamond(WIDTH - 52, 52);
    drawDiamond(52, HEIGHT - 52);
    drawDiamond(WIDTH - 52, HEIGHT - 52);

    // 3. Top Header: Branding + Tagline
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 36px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('AkhlaqiBaatein.com', WIDTH / 2, 130);

    ctx.fillStyle = '#a7f3d0';
    ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    ctx.fillText('اخلاقی باتیں • اسلامی حکمت و مستند اقوال', WIDTH / 2, 175);

    // Dual Date
    const dateStr = computeFormattedDate(new Date(), 'ur');
    ctx.fillStyle = 'rgba(254, 243, 199, 0.7)';
    ctx.font = '19px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText(dateStr, WIDTH / 2, 215);

    // Golden Divider Line
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2 - 200, 245);
    ctx.lineTo(WIDTH / 2 + 200, 245);
    ctx.stroke();
    ctx.restore();

    // 4. Category Title Badge
    ctx.save();
    ctx.textAlign = 'center';
    const badgeText = currentTemplate.titleUr;
    ctx.font = 'bold 28px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    const badgeW = Math.max(260, ctx.measureText(badgeText).width + 60);
    const badgeY = 285;

    // Rounded Pill
    ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
    ctx.beginPath();
    ctx.roundRect(WIDTH / 2 - badgeW / 2, badgeY, badgeW, 56, 28);
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#d4af37';
    ctx.fillText(badgeText, WIDTH / 2, badgeY + 38);
    ctx.restore();

    // 5. Central Hero Plaque (Contains Arabic & Urdu Text)
    const plaqueX = 70;
    const plaqueY = 380;
    const plaqueW = WIDTH - 140;
    const plaqueH = 1120;

    ctx.save();
    ctx.fillStyle = 'rgba(10, 20, 17, 0.9)';
    ctx.beginPath();
    ctx.roundRect(plaqueX, plaqueY, plaqueW, plaqueH, 32);
    ctx.fill();

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner subtle border
    ctx.beginPath();
    ctx.roundRect(plaqueX + 10, plaqueY + 10, plaqueW - 20, plaqueH - 20, 24);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Content Rendering inside Plaque
    let contentY = plaqueY + 140;
    ctx.save();
    ctx.textAlign = 'center';

    // Optional Bismillah
    ctx.fillStyle = '#d4af37';
    ctx.font = '24px "Amiri", "Scheherazade New", serif';
    ctx.fillText('بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', WIDTH / 2, contentY);
    contentY += 90;

    // Optional Arabic Text
    if (currentTemplate.arabic) {
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px "Amiri", "Scheherazade New", serif';
      ctx.direction = 'rtl';
      const arabicLines = wrapCanvasText(ctx, currentTemplate.arabic, plaqueW - 80);
      for (const line of arabicLines) {
        ctx.fillText(line, WIDTH / 2, contentY);
        contentY += 75;
      }
      contentY += 40;

      // Small gold divider
      ctx.fillStyle = '#d4af37';
      ctx.font = '20px serif';
      ctx.fillText('◈  ◈  ◈', WIDTH / 2, contentY);
      contentY += 70;
    }

    // Main Urdu Statement (Custom or Template)
    const mainText = customText.trim() || currentTemplate.urdu;
    ctx.fillStyle = '#fef3c7';
    ctx.font = 'bold 36px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    ctx.direction = 'rtl';
    const urduLines = wrapCanvasText(ctx, mainText, plaqueW - 80);
    for (const line of urduLines) {
      ctx.fillText(line, WIDTH / 2, contentY);
      contentY += 85;
    }

    // Optional Subtext
    if (currentTemplate.subtext) {
      contentY += 30;
      ctx.fillStyle = '#a7f3d0';
      ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
      ctx.fillText(currentTemplate.subtext, WIDTH / 2, contentY);
    }
    ctx.restore();

    // 6. User Name Personalization Badge (Bottom of Plaque)
    const finalUserName = userName.trim() ? `منجانب: ${userName.trim()}` : 'منجانب: اخلاقی باتیں ڈاٹ کام';
    const nameY = plaqueY + plaqueH - 120;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = 'bold 28px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    const nameWidth = Math.max(340, ctx.measureText(finalUserName).width + 80);

    // Luxury Name Pill
    ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.beginPath();
    ctx.roundRect(WIDTH / 2 - nameWidth / 2, nameY, nameWidth, 64, 32);
    ctx.fill();

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#fef3c7';
    ctx.fillText(finalUserName, WIDTH / 2, nameY + 44);
    ctx.restore();

    // 7. Bottom Signature Watermark
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('AkhlaqiBaatein.com', WIDTH / 2, 1720);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
    ctx.font = 'bold 18px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    ctx.fillText('مستند اسلامی اذکار، اقوالِ زریں و مسنون دعائیں', WIDTH / 2, 1760);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.font = '15px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillText('9:16 Full HD Status • For WhatsApp, Instagram & Facebook', WIDTH / 2, 1800);
    ctx.restore();
  };

  function wrapCanvasText(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] {
    const words = text.trim().split(/\s+/);
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      if (ctx.measureText(candidate).width <= maxWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (!canvas || downloading) return;
    setDownloading(true);

    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), 'image/png')
      );
      if (!blob) throw new Error('Blob generation failed');

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const cleanName = userName.trim() ? userName.trim().replace(/\s+/g, '-') : 'status';
      link.download = `akhlaqibaatein-${activeCategory}-${cleanName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      showToast(isUrdu ? 'کارڈ کامیابی سے ڈاؤن لوڈ ہو گیا' : 'Status Card downloaded successfully');
    } catch {
      showToast(isUrdu ? 'تصویر محفوظ کرنے میں خرابی ہوئی' : 'Download failed, please retry');
    } finally {
      setDownloading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `*${currentTemplate.titleUr}*\n\n${currentTemplate.urdu}\n\nاپنے نام کے ساتھ 9:16 ایچ ڈی واٹس ایپ اسٹیٹس کارڈ بنائیں:\nhttps://akhlaqibaatein.com/status-maker`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div dir={isUrdu ? 'rtl' : 'ltr'} className="space-y-8 max-w-6xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-emerald-300/80 ${
          isUrdu ? 'font-urdu' : 'font-sans'
        }`}
      >
        <Link href="/" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'سرورق' : 'Home'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <Link href="/tools" className="hover:text-emerald-800 dark:hover:text-[#d4af37] font-medium transition">
          {isUrdu ? 'اسلامی ٹولز' : 'Tools'}
        </Link>
        {isUrdu ? <ChevronLeft className="w-3.5 h-3.5 opacity-60 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />}
        <span className="text-slate-900 dark:text-white font-bold">
          {isUrdu ? 'اسٹیٹس میکر' : 'Status Maker'}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-[#d4af37] border border-[#d4af37]/40 text-xs sm:text-sm font-bold shadow-xs">
          <Camera className="w-4 h-4 text-[#d4af37]" />
          <span>{isUrdu ? '9:16 فل ایچ ڈی واٹس ایپ اسٹیٹس میکر' : 'Personalized 9:16 Islamic Status Generator'}</span>
        </div>
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-[#fef3c7] ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans tracking-tight'
          }`}
        >
          {isUrdu
            ? 'جمعہ مبارک و روزانہ اسٹیٹس میکر'
            : isRoman
            ? 'Jumma Mubarak & Daily Status Maker'
            : 'Personalized Islamic Status Maker'}
        </h1>
        <p
          className={`text-xs sm:text-sm md:text-base text-slate-600 dark:text-emerald-100/80 max-w-2xl mx-auto ${
            isUrdu ? 'font-urdu leading-[1.85]' : 'font-sans'
          }`}
        >
          {isUrdu
            ? 'کارڈ پر اپنا نام لکھیں اور 1-کلک میں 9:16 فل ایچ ڈی برانڈڈ اسٹیٹس کارڈ محفوظ کریں تاکہ آپ کے دوست اور رشتہ دار خوش ہوں۔'
            : 'Enter your name, pick an authentic Jumma or daily morning dua, and download a stunning 1080x1920 vertical HD card with your name.'}
        </p>
      </header>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveCategory(tab.id as any);
              const first = TEMPLATES.find((t) => t.category === tab.id);
              if (first) setSelectedTemplateId(first.id);
            }}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-emerald-800 text-white shadow-md scale-105'
                : 'bg-white dark:bg-[#11221c] text-slate-700 dark:text-emerald-200 border border-stone-200 dark:border-emerald-800/60 hover:border-[#d4af37]'
            } ${isUrdu ? 'font-urdu text-sm sm:text-base' : 'font-sans'}`}
          >
            {tab[language] || tab.ur}
          </button>
        ))}
      </div>

      {/* Editor & Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#11221c] border border-stone-200 dark:border-[#d4af37]/40 shadow-lg space-y-6">
          {/* User Name Input */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] flex items-center gap-2">
              <User className="w-4 h-4 text-[#d4af37]" />
              <span>{isUrdu ? 'کارڈ پر اپنا نام لکھیں (مثلاً: مصدق فرید):' : 'Write Your Name on Card:'}</span>
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={isUrdu ? 'اپنا نام درج کریں (مثلاً: مصدق فرید)' : 'Enter your name (e.g. Musaddaq)'}
              className={`w-full px-4 py-3 rounded-2xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-[#d4af37] outline-hidden ${
                isUrdu ? 'font-urdu text-base' : 'font-sans'
              }`}
            />
            <span className="text-[11px] text-slate-500 dark:text-emerald-300/70">
              {isUrdu
                ? 'کارڈ کے نچلے حصے پر "منجانب: [آپ کا نام]" خوبصورت گولڈن فریم میں پرنٹ ہوگا۔'
                : 'Your name will appear proudly in an ornamental golden badge at the bottom of the card.'}
            </span>
          </div>

          {/* Template Selection */}
          <div className="space-y-3 pt-2 border-t border-stone-200 dark:border-emerald-800/40">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] block">
              {isUrdu ? 'منتخب متن کا انتخاب کریں:' : 'Select Authentic Message:'}
            </label>
            <div className="space-y-2.5">
              {filteredTemplates.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedTemplateId(item.id)}
                  className={`w-full p-4 rounded-2xl text-right transition border cursor-pointer flex flex-col gap-1.5 ${
                    selectedTemplateId === item.id
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-[#d4af37] shadow-sm'
                      : 'bg-stone-50/60 dark:bg-[#07130f] border-stone-200 dark:border-emerald-800/50 hover:border-[#d4af37]/60'
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm text-[#d4af37] font-urdu">
                    {item.titleUr}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-emerald-100 font-urdu leading-[1.8] line-clamp-2">
                    {item.urdu}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Custom Text */}
          <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-emerald-800/40">
            <label className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#fef3c7] block">
              {isUrdu ? 'یا اپنی مرضی کا کوئی پیغام لکھیں (اختیاری):' : 'Or Write Custom Message (Optional):'}
            </label>
            <textarea
              rows={3}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder={isUrdu ? 'یہاں اپنی مرضی کی دعا یا پیغام لکھیں...' : 'Write custom text...'}
              className={`w-full px-4 py-2.5 rounded-2xl border border-stone-300 dark:border-emerald-800 bg-stone-50 dark:bg-[#07130f] text-slate-900 dark:text-white focus:ring-2 focus:ring-[#d4af37] outline-hidden ${
                isUrdu ? 'font-urdu text-sm leading-[1.8]' : 'font-sans text-xs'
              }`}
            />
          </div>

          {/* Actions Bar */}
          <div className="pt-4 border-t border-stone-200 dark:border-emerald-800/40 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex-1 min-h-[48px] px-5 py-3 rounded-2xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] hover:brightness-105 text-[#0a1411] font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition active:scale-95 disabled:opacity-60"
            >
              <Download className="w-4 h-4 shrink-0 stroke-[2.2]" />
              <span className={isUrdu ? 'font-urdu text-sm sm:text-base' : 'font-sans'}>
                {downloading
                  ? isUrdu
                    ? 'کارڈ تیار ہو رہا ہے...'
                    : 'Generating HD Card...'
                  : isUrdu
                  ? '9:16 ایچ ڈی اسٹیٹس ڈاؤن لوڈ کریں'
                  : 'Download 9:16 HD Card'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppShare}
              className="px-4 py-3 rounded-2xl bg-stone-100 hover:bg-emerald-800 text-emerald-900 hover:text-white dark:bg-[#07130f] dark:hover:bg-emerald-900 dark:text-emerald-200 border border-stone-300 dark:border-emerald-700/60 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{isUrdu ? 'واٹس ایپ شیئر' : 'WhatsApp'}</span>
            </button>
          </div>
        </div>

        {/* Live Preview Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          <div className="w-full text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-emerald-300/80">
              {isUrdu ? 'لائیو 9:16 پیش منظر (Live Preview)' : 'Live 9:16 Preview'}
            </span>
          </div>

          {/* Phone Frame Mockup for Canvas */}
          <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800 dark:border-emerald-900 bg-black flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
            {isUrdu
              ? 'ڈاؤن لوڈ شدہ کارڈ 1080x1920 ریزولوشن کے ساتھ واٹس ایپ، انسٹاگرام اور فیس بک اسٹوریز کے لیے 100% پرفیکٹ ہے۔'
              : 'Exported image is 1080x1920 HD PNG, perfectly tailored for WhatsApp, Instagram & Facebook stories.'}
          </p>
        </div>
      </div>
    </div>
  );
}
