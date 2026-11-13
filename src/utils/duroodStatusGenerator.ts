import type { DuroodItem } from '@/data/durood';
import { Language } from '@/data/types';
import { computeFormattedDate } from '@/lib/dateUtils';

export interface DuroodStatusOptions {
  durood: DuroodItem;
  userName?: string;
  count?: number;
  target?: number;
  lang?: Language;
}

const BRAND_DOMAIN = 'AkhlaqiBaatein.com';
const BRAND_TAGLINE = 'مخزنِ اخلاق اور مستند اسلامی اذکار';

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

export async function generateDuroodStatusImage({
  durood,
  userName = '',
  count = 0,
  target = 41,
  lang = 'ur',
}: DuroodStatusOptions): Promise<void> {
  if (typeof window === 'undefined') return;

  // Ensure Google fonts are ready
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

  // 1. Background Gradient (Luxury Emerald Green to Deep Night)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  bgGrad.addColorStop(0, '#06100d');
  bgGrad.addColorStop(0.3, '#0d1e18');
  bgGrad.addColorStop(0.7, '#081410');
  bgGrad.addColorStop(1, '#040907');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle radial gold ambient glows
  const radialTop = ctx.createRadialGradient(WIDTH / 2, 200, 20, WIDTH / 2, 200, 480);
  radialTop.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
  radialTop.addColorStop(1, 'rgba(212, 175, 55, 0)');
  ctx.fillStyle = radialTop;
  ctx.fillRect(0, 0, WIDTH, 600);

  const radialBottom = ctx.createRadialGradient(WIDTH / 2, HEIGHT - 240, 20, WIDTH / 2, HEIGHT - 240, 520);
  radialBottom.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
  radialBottom.addColorStop(1, 'rgba(16, 185, 129, 0)');
  ctx.fillStyle = radialBottom;
  ctx.fillRect(0, HEIGHT - 600, WIDTH, 600);

  // 2. Decorative Double Outer Border
  ctx.save();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, WIDTH - 72, HEIGHT - 72);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.75)';
  ctx.lineWidth = 1;
  ctx.strokeRect(48, 48, WIDTH - 96, HEIGHT - 96);

  // Four ornamental corner diamonds
  const drawCornerDiamond = (cx: number, cy: number) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((45 * Math.PI) / 180);
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(-7, -7, 14, 14);
    ctx.restore();
  };
  drawCornerDiamond(48, 48);
  drawCornerDiamond(WIDTH - 48, 48);
  drawCornerDiamond(48, HEIGHT - 48);
  drawCornerDiamond(WIDTH - 48, HEIGHT - 48);
  ctx.restore();

  // 3. Header Branding Bar
  const logo = await loadImage('/logo.png');
  const logoY = 96;
  const logoRadius = 36;

  ctx.save();
  ctx.beginPath();
  ctx.arc(WIDTH / 2, logoY, logoRadius + 3, 0, Math.PI * 2);
  ctx.fillStyle = '#d4af37';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(WIDTH / 2, logoY, logoRadius, 0, Math.PI * 2);
  ctx.clip();

  if (logo) {
    ctx.drawImage(logo, WIDTH / 2 - logoRadius, logoY - logoRadius, logoRadius * 2, logoRadius * 2);
  } else {
    ctx.fillStyle = '#0a1411';
    ctx.fillRect(WIDTH / 2 - logoRadius, logoY - logoRadius, logoRadius * 2, logoRadius * 2);
  }
  ctx.restore();

  // Brand Header Text
  ctx.save();
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 24px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.textAlign = 'center';
  ctx.fillText('اخلاقی باتیں • AkhlaqiBaatein.com', WIDTH / 2, 175);

  ctx.fillStyle = 'rgba(254, 243, 199, 0.75)';
  ctx.font = '500 18px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
  ctx.fillText('گوشۂ درود و سلام اور مستند اوراد', WIDTH / 2, 210);
  ctx.restore();

  // 4. Durood Title Banner
  const titleText =
    lang === 'en'
      ? durood.title.en
      : lang === 'ro'
      ? durood.title.ro
      : durood.title.ur;

  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.textAlign = 'center';
  ctx.fillText(titleText, WIDTH / 2, 280);

  // Subtle separator line under title
  const sepGrad = ctx.createLinearGradient(WIDTH / 2 - 200, 0, WIDTH / 2 + 200, 0);
  sepGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
  sepGrad.addColorStop(0.5, 'rgba(212, 175, 55, 0.8)');
  sepGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
  ctx.strokeStyle = sepGrad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 200, 310);
  ctx.lineTo(WIDTH / 2 + 200, 310);
  ctx.stroke();
  ctx.restore();

  // 5. Arabic Hero Plaque
  const plaqueX = 80;
  const plaqueY = 345;
  const plaqueW = WIDTH - 160;
  const plaqueH = 680;

  ctx.save();
  roundRect(ctx, plaqueX, plaqueY, plaqueW, plaqueH, 28);
  ctx.fillStyle = 'rgba(10, 20, 17, 0.88)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Inner decorative border
  roundRect(ctx, plaqueX + 8, plaqueY + 8, plaqueW - 16, plaqueH - 16, 22);
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Bismillah
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 28px "Amiri", "Scheherazade New", serif';
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';
  ctx.fillText('بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', WIDTH / 2, plaqueY + 65);

  // Arabic Text Wrap & Draw (Naskh font with generous line spacing)
  const arabicFontSize = durood.arabicText.length > 240 ? 32 : durood.arabicText.length > 150 ? 36 : 42;
  const arabicLineHeight = Math.round(arabicFontSize * 2.3);
  ctx.font = `600 ${arabicFontSize}px "Amiri", "Scheherazade New", "Traditional Arabic", serif`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';

  const arabicLines = wrapText(ctx, durood.arabicText, plaqueW - 80);
  const totalArabicTextH = arabicLines.length * arabicLineHeight;
  let curArabicY = plaqueY + 120 + Math.max(0, (plaqueH - 160 - totalArabicTextH) / 2);

  for (const line of arabicLines) {
    ctx.fillText(line, WIDTH / 2, curArabicY);
    curArabicY += arabicLineHeight;
  }
  ctx.restore();

  // 6. Translation Section Card
  const transX = 80;
  const transY = 1055;
  const transW = WIDTH - 160;
  const transH = 480;

  ctx.save();
  roundRect(ctx, transX, transY, transW, transH, 24);
  ctx.fillStyle = 'rgba(17, 34, 28, 0.82)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Translation Header
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.textAlign = 'center';
  ctx.fillText(
    lang === 'en'
      ? 'English Translation:'
      : lang === 'ro'
      ? 'Roman Urdu Tarjuma:'
      : 'اردو ترجمہ:',
    WIDTH / 2,
    transY + 45
  );

  // Translation Body Wrap & Draw
  const transText =
    lang === 'en'
      ? durood.englishTranslation
      : lang === 'ro'
      ? durood.romanUrdu
      : durood.urduTranslation;

  const isUrduFont = lang === 'ur';
  const transFontSize = transText.length > 300 ? 19 : transText.length > 180 ? 21 : 24;
  const transLineHeight = isUrduFont ? Math.round(transFontSize * 2.05) : Math.round(transFontSize * 1.55);

  ctx.font = isUrduFont
    ? `${transFontSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif`
    : `500 ${transFontSize}px "Plus Jakarta Sans", sans-serif`;
  ctx.fillStyle = 'rgba(254, 243, 199, 0.95)';
  ctx.textAlign = 'center';
  ctx.direction = isUrduFont ? 'rtl' : 'ltr';

  const transLines = wrapText(ctx, transText, transW - 60);
  let curTransY = transY + 95;
  for (const line of transLines.slice(0, 8)) {
    ctx.fillText(line, WIDTH / 2, curTransY);
    curTransY += transLineHeight;
  }

  // Reference line inside translation card
  const refText =
    lang === 'en'
      ? durood.reference.en
      : lang === 'ro'
      ? durood.reference.ro
      : durood.reference.ur;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 16px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`حوالہ: ${refText}`, WIDTH / 2, transY + transH - 26);
  ctx.restore();

  // 7. Personalized Reciter / Tasbeeh Ribbon
  const ribbonX = 120;
  const ribbonY = 1565;
  const ribbonW = WIDTH - 240;
  const ribbonH = 75;

  ctx.save();
  roundRect(ctx, ribbonX, ribbonY, ribbonW, ribbonH, 18);
  ctx.fillStyle = 'rgba(212, 175, 55, 0.12)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.55)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.textAlign = 'center';
  const trimmedName = userName.trim();

  if (trimmedName) {
    ctx.fillStyle = '#fef3c7';
    ctx.font = 'bold 22px "Noto Nastaliq Urdu", "Amiri", serif';
    const reciterText =
      lang === 'en'
        ? `Reciter: ${trimmedName} — Target: ${target} Recitations`
        : lang === 'ro'
        ? `Parhne Wale: ${trimmedName} — Hadaf: ${target} Martaba`
        : `پڑھنے والے: ${trimmedName} — ہدف: ${target} مرتبہ (${count} بار مکمل)`;
    ctx.fillText(reciterText, WIDTH / 2, ribbonY + 46);
  } else {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 20px "Noto Nastaliq Urdu", "Amiri", serif';
    ctx.fillText(
      lang === 'en'
        ? `Prophetic Salawat & Daily Dhikr — Recommended: ${target} Times`
        : `مستند درودِ پاک و وظیفہ — یومیہ ہدف: ${target} مرتبہ`,
      WIDTH / 2,
      ribbonY + 46
    );
  }
  ctx.restore();

  // 8. Bottom Watermark & Branding
  const dateString = computeFormattedDate(new Date(), lang);
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(BRAND_DOMAIN, WIDTH / 2, 1705);

  ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
  ctx.font = 'bold 20px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.fillText(BRAND_TAGLINE, WIDTH / 2, 1745);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.font = '500 16px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(dateString, WIDTH / 2, 1785);
  ctx.restore();

  // 9. Convert Canvas to PNG Blob & Trigger Download
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob((b) => resolve(b), 'image/png')
  );

  if (!blob) {
    throw new Error('Could not generate image blob');
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${durood.slug}-status-9x16.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
