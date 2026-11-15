import type { DuaItem } from '@/data/duain';
import { Language } from '@/data/types';
import { computeFormattedDate } from '@/lib/dateUtils';

export interface DuaStatusOptions {
  dua: DuaItem;
  count?: number;
  target?: number;
  lang?: Language;
}

const BRAND_DOMAIN = 'AkhlaqiBaatein.com';
const BRAND_TAGLINE = 'مخزنِ اخلاق اور مستند اسلامی دعائیں';

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function wrapText(
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

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export async function generateDuaStatusImage({
  dua,
  count = 0,
  target = 33,
  lang = 'ur',
}: DuaStatusOptions): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {
    // Continue if font API unavailable
  }

  const canvas = document.createElement('canvas');
  const WIDTH = 1080;
  const HEIGHT = 1920;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  // 1. Luxury Dark Emerald Gradient Background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  bgGrad.addColorStop(0, '#040a08');
  bgGrad.addColorStop(0.3, '#071510');
  bgGrad.addColorStop(0.7, '#0a1d16');
  bgGrad.addColorStop(1, '#020605');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle Luxury Gold Vignette / Glow
  const radialGlow = ctx.createRadialGradient(WIDTH / 2, 850, 80, WIDTH / 2, 850, 680);
  radialGlow.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
  radialGlow.addColorStop(0.6, 'rgba(212, 175, 55, 0.03)');
  radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = radialGlow;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Decorative Border Framing (Double Line Emerald & Gold)
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, WIDTH - 80, HEIGHT - 80);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
  ctx.lineWidth = 1;
  ctx.strokeRect(52, 52, WIDTH - 104, HEIGHT - 104);

  // Top Header: Logo + Domain + Tagline
  const logoImg = await loadImage('/logo.png');
  const headerY = 120;
  if (logoImg) {
    ctx.drawImage(logoImg, WIDTH / 2 - 40, headerY, 80, 80);
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 36px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(BRAND_DOMAIN, WIDTH / 2, headerY + 125);

  ctx.fillStyle = '#a7f3d0';
  ctx.font = '22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
  ctx.fillText(BRAND_TAGLINE, WIDTH / 2, headerY + 165);

  // Dual Islamic & Gregorian Date Bar
  const dateStr = computeFormattedDate(new Date(), lang);
  ctx.fillStyle = 'rgba(254, 243, 199, 0.7)';
  ctx.font = '19px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(dateStr, WIDTH / 2, headerY + 205);

  // Decorative Divider
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 180, headerY + 230);
  ctx.lineTo(WIDTH / 2 + 180, headerY + 230);
  ctx.stroke();

  // Category Badge
  const badgeY = headerY + 275;
  const badgeText = `مسنون دعا • ${dua.category}`;
  ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
  const badgeW = ctx.measureText(badgeText).width + 50;
  ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
  roundRect(ctx, WIDTH / 2 - badgeW / 2, badgeY - 26, badgeW, 46, 23);
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#fef3c7';
  ctx.fillText(badgeText, WIDTH / 2, badgeY + 5);

  // Title of the Dua
  const titleY = badgeY + 80;
  ctx.font = 'bold 34px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
  ctx.fillStyle = '#ffffff';
  const titleLines = wrapText(ctx, dua.title[lang] || dua.title.ur, 900);
  let curY = titleY;
  for (const line of titleLines) {
    ctx.fillText(line, WIDTH / 2, curY);
    curY += 56;
  }

  // Central Hero Arabic Plaque
  const plaquePaddingX = 70;
  const plaqueW = WIDTH - plaquePaddingX * 2;
  const plaqueY = curY + 25;
  const plaqueMaxH = 480;

  ctx.fillStyle = 'rgba(3, 15, 11, 0.85)';
  roundRect(ctx, plaquePaddingX, plaqueY, plaqueW, plaqueMaxH, 32);
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Bismillah header inside plaque
  ctx.font = '26px "Amiri", serif';
  ctx.fillStyle = '#d4af37';
  ctx.fillText('بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', WIDTH / 2, plaqueY + 55);

  // Arabic Dua Text with Crystal-Clear Naskh font
  ctx.font = 'bold 40px "Amiri", "Scheherazade New", serif';
  ctx.fillStyle = '#ffffff';
  const arabicLines = wrapText(ctx, dua.arabicText, plaqueW - 80);
  let arabicY = plaqueY + 130;
  for (const line of arabicLines.slice(0, 6)) {
    ctx.fillText(line, WIDTH / 2, arabicY);
    arabicY += 66;
  }

  // Translation Section
  let transY = plaqueY + plaqueMaxH + 50;
  ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
  ctx.fillStyle = '#d4af37';
  ctx.fillText('ترجمہ و مفہوم', WIDTH / 2, transY);

  transY += 45;
  const transText = lang === 'ro' ? dua.romanUrdu : lang === 'en' ? dua.englishTranslation : dua.urduTranslation;
  ctx.font = lang === 'ur'
    ? '26px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif'
    : '22px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#e2e8f0';
  const transLines = wrapText(ctx, transText, 880);
  for (const line of transLines.slice(0, 4)) {
    ctx.fillText(line, WIDTH / 2, transY);
    transY += lang === 'ur' ? 52 : 36;
  }

  // Reference Line
  const refText = `حوالہ: ${dua.reference[lang] || dua.reference.ur}`;
  ctx.font = '20px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(refText, WIDTH / 2, transY + 25);

  // Footer: Watermark Branding
  const footerY = HEIGHT - 100;
  ctx.font = 'bold 26px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#d4af37';
  ctx.fillText('AkhlaqiBaatein.com', WIDTH / 2, footerY);

  ctx.font = '18px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
  ctx.fillStyle = 'rgba(254, 243, 199, 0.75)';
  ctx.fillText('مستند اسلامی دعائیں، احادیث و اقوالِ زریں', WIDTH / 2, footerY + 36);

  // Download Trigger
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `akhlaqibaatein-${dua.slug}-status.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}
