import type { NaatItem } from '@/data/naats';
import { Language } from '@/data/types';
import { computeFormattedDate } from '@/lib/dateUtils';

export interface NaatStatusOptions {
  naat: NaatItem;
  selectedSherIndex?: number;
  lang?: Language;
}

const BRAND_DOMAIN = 'AkhlaqiBaatein.com';
const BRAND_TAGLINE = 'مخزنِ اخلاق اور مستند نعتیہ دیوان';

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

export async function generateNaatStatusImage({
  naat,
  selectedSherIndex = 0,
  lang = 'ur',
}: NaatStatusOptions): Promise<void> {
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
  if (!ctx) throw new Error('Canvas 2D context not available');

  // 1. Background Gradient (Luxury Emerald Green to Night)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  bgGrad.addColorStop(0, '#06100d');
  bgGrad.addColorStop(0.3, '#0d1e18');
  bgGrad.addColorStop(0.7, '#081410');
  bgGrad.addColorStop(1, '#040907');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle radial gold ambient glow
  const radial = ctx.createRadialGradient(WIDTH / 2, 280, 20, WIDTH / 2, 280, 520);
  radial.addColorStop(0, 'rgba(212, 175, 55, 0.15)');
  radial.addColorStop(1, 'rgba(212, 175, 55, 0)');
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, WIDTH, 700);

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

  // 3. Top Branding Bar
  ctx.save();
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 24px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.textAlign = 'center';
  ctx.fillText('اخلاقی باتیں • AkhlaqiBaatein.com', WIDTH / 2, 115);

  ctx.fillStyle = 'rgba(254, 243, 199, 0.8)';
  ctx.font = '500 18px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
  ctx.fillText('دیوانِ نعت و منظوم کلامِ مصطفیٰ ﷺ', WIDTH / 2, 155);
  ctx.restore();

  // 4. Naat Title & Poet
  const isUrdu = lang === 'ur';
  const titleText = isUrdu ? naat.title.ur : lang === 'ro' ? naat.title.ro : naat.title.en;
  const poetText = isUrdu ? naat.poet.ur : lang === 'ro' ? naat.poet.ro : naat.poet.en;

  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 34px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.textAlign = 'center';
  ctx.fillText(titleText, WIDTH / 2, 230);

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 20px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.fillText(`کلام: ${poetText} (${isUrdu ? naat.sourceBook.ur : naat.sourceBook.en})`, WIDTH / 2, 275);

  // Golden separator line
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 180, 310);
  ctx.lineTo(WIDTH / 2 + 180, 310);
  ctx.stroke();
  ctx.restore();

  // 5. Hero Poetic Diwan Plaque (Displaying 2-3 prominent Ashaar)
  const plaqueX = 80;
  const plaqueY = 345;
  const plaqueW = WIDTH - 160;
  const plaqueH = 1180;

  ctx.save();
  roundRect(ctx, plaqueX, plaqueY, plaqueW, plaqueH, 28);
  ctx.fillStyle = 'rgba(10, 20, 17, 0.88)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Inner border
  roundRect(ctx, plaqueX + 8, plaqueY + 8, plaqueW - 16, plaqueH - 16, 22);
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Render Ashaar
  const displayAshaar = naat.ashaar.slice(0, 4);
  let curY = plaqueY + 90;

  for (let i = 0; i < displayAshaar.length; i++) {
    const sher = displayAshaar[i];

    // Misra 1
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';
    ctx.fillText(sher.misra1Ur, WIDTH / 2, curY);

    // Misra 2
    curY += 75;
    ctx.fillStyle = '#fef3c7';
    ctx.fillText(sher.misra2Ur, WIDTH / 2, curY);

    // Divider between couplets
    if (i < displayAshaar.length - 1) {
      curY += 60;
      ctx.fillStyle = '#d4af37';
      ctx.font = '22px serif';
      ctx.textAlign = 'center';
      ctx.fillText('◈ ◈ ◈', WIDTH / 2, curY);
      curY += 75;
    }
  }
  ctx.restore();

  // 6. Bottom Watermark & Branding
  const dateString = computeFormattedDate(new Date(), lang);
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(BRAND_DOMAIN, WIDTH / 2, 1690);

  ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
  ctx.font = 'bold 20px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.fillText(BRAND_TAGLINE, WIDTH / 2, 1735);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.font = '500 16px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(dateString, WIDTH / 2, 1775);
  ctx.restore();

  // 7. Convert Canvas to PNG Blob & Trigger Download
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob((b) => resolve(b), 'image/png')
  );

  if (!blob) throw new Error('Could not generate Naat status blob');

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${naat.slug}-status-9x16.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
