import { Language } from '@/data/types';

export interface CanvasData {
  text: string;
  explanation?: string;
  author: string;
  category: string;
  slug: string;
  lang: Language;
  title?: string;
}

export function generateStatusImage(data: CanvasData): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    // 9:16 Vertical HD WhatsApp / Instagram Story & Status Format
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      resolve('');
      return;
    }

    const isUrdu = data.lang === 'ur';

    // 1. Background Gradient (Luxury Deep Royal Emerald)
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
    gradient.addColorStop(0, '#064e3b'); // Rich Royal Emerald
    gradient.addColorStop(0.45, '#043828');
    gradient.addColorStop(0.85, '#022016');
    gradient.addColorStop(1, '#01140e'); // Deep Forest Black-Green
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // 2. Subtle Islamic Geometric Pattern Overlay
    ctx.save();
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.07)'; // Subtle warm gold
    ctx.lineWidth = 1.5;
    for (let i = -1920; i < 3000; i += 80) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 1080, 1920);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i, 1920);
      ctx.lineTo(i + 1080, 0);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Royal Double Gold Border (Full 1920 Frame)
    ctx.save();
    ctx.strokeStyle = '#d97706'; // Warm Burnished Gold
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, 1000, 1840);

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(54, 54, 972, 1812);

    // Corner Ornaments
    const corners = [
      [40, 40],
      [1040, 40],
      [40, 1880],
      [1040, 1880],
    ];
    ctx.fillStyle = '#f59e0b';
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    // 4. Header Section: Bismillah & Minimal Header
    ctx.save();
    ctx.fillStyle = '#fde68a';
    ctx.textAlign = 'center';

    if (isUrdu) {
      ctx.font = '32px "Amiri", "Traditional Arabic", serif';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 540, 130);
    } else if (data.lang === 'ro') {
      ctx.font = 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✦ BISMILLAH-IR-RAHMAN-IR-RAHEEM ✦', 540, 130);
    } else {
      ctx.font = 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✦ IN THE NAME OF ALLAH, THE MOST BENEFICENT ✦', 540, 130);
    }

    // Site Branding below Bismillah
    ctx.font = isUrdu
      ? 'bold 22px "Noto Nastaliq Urdu", sans-serif'
      : 'bold 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(253, 230, 138, 0.85)';
    ctx.fillText('اخلاقی باتیں  •  AkhlaqiBaatein.com', 540, 180);
    ctx.restore();

    // 5. Author & Category Badge Pill
    ctx.save();
    const badgeText = `${data.author} • ${data.category}`;
    ctx.font = isUrdu
      ? 'bold 24px "Noto Nastaliq Urdu", serif'
      : 'bold 22px "Plus Jakarta Sans", system-ui, sans-serif';
    const textWidth = ctx.measureText(badgeText).width;
    const badgeWidth = Math.max(textWidth + 50, 280);

    ctx.fillStyle = 'rgba(217, 119, 6, 0.22)';
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    roundRect(ctx, 540 - badgeWidth / 2, 225, badgeWidth, 54, 27);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, 540, 252);
    ctx.restore();

    // 6. Optional Quote Title
    let currentY = 320;
    if (data.title && data.title.trim()) {
      ctx.save();
      ctx.fillStyle = '#fde68a';
      ctx.textAlign = 'center';
      ctx.font = isUrdu
        ? 'bold 30px "Noto Nastaliq Urdu", serif'
        : 'bold 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(data.title.trim(), 540, currentY);
      ctx.restore();
      currentY += 45;
    }

    // 7. Main Complete Quote Text (Auto-Fit Dynamic Engine, ~75% Vertical Space, 0% Truncation)
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 4;
    ctx.textAlign = 'center';

    const cleanQuote = data.text.trim();
    const charCount = cleanQuote.length;

    let fontSize: number;
    let lineHeight: number;

    if (isUrdu) {
      if (charCount < 140) {
        fontSize = 54;
        lineHeight = 102; // ~1.9x
      } else if (charCount <= 260) {
        fontSize = 44;
        lineHeight = 82; // ~1.85x
      } else if (charCount <= 420) {
        fontSize = 38;
        lineHeight = 68; // ~1.8x
      } else {
        fontSize = 34;
        lineHeight = 60; // ~1.8x
      }

      ctx.font = `bold ${fontSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif`;
      ctx.direction = 'rtl';
    } else {
      if (charCount < 140) {
        fontSize = 46;
        lineHeight = 82;
      } else if (charCount <= 260) {
        fontSize = 38;
        lineHeight = 68;
      } else if (charCount <= 420) {
        fontSize = 32;
        lineHeight = 56;
      } else {
        fontSize = 28;
        lineHeight = 48;
      }

      ctx.font = `italic 600 ${fontSize}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`;
      ctx.direction = 'ltr';
    }

    // Wrap full text with 920px max width - strictly NO slice, NO ellipsis
    const lines = wrapText(ctx, cleanQuote, 920);
    const totalQuoteHeight = lines.length * lineHeight;

    // Available vertical space is from currentY to 1740 (~1350px)
    const availableAreaHeight = 1740 - currentY;
    let startY = currentY + Math.max(30, (availableAreaHeight - totalQuoteHeight) / 2);

    lines.forEach((line) => {
      ctx.fillText(line, 540, startY);
      startY += lineHeight;
    });
    ctx.restore();

    // 8. Elegant Watermark Footer at Bottom
    ctx.save();
    ctx.fillStyle = 'rgba(1, 20, 14, 0.9)';
    ctx.fillRect(56, 1790, 968, 70);

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(56, 1790);
    ctx.lineTo(1024, 1790);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (isUrdu) {
      ctx.font = 'bold 24px "Noto Nastaliq Urdu", sans-serif';
      ctx.fillText('اخلاقی باتیں  •  AkhlaqiBaatein.com  •  مستند اسلامی اخلاقیات', 540, 1825);
    } else if (data.lang === 'ro') {
      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('AkhlaqiBaatein.com  •  Islamic Moral Wisdom & Quotes', 540, 1825);
    } else {
      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('AkhlaqiBaatein.com  •  Authentic Islamic Ethical Maxims', 540, 1825);
    }
    ctx.restore();

    resolve(canvas.toDataURL('image/png'));
  });
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (let p = 0; p < paragraphs.length; p++) {
    const rawParagraph = paragraphs[p].trim();
    if (!rawParagraph) {
      continue;
    }
    const words = rawParagraph.split(/\s+/);
    let currentLine = words[0] || '';

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  }
  return lines;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export function downloadImage(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
