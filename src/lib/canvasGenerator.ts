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
    // 9:16 Vertical HD Social Media Status & Story Format (1080 x 1920)
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
    gradient.addColorStop(0.35, '#043425');
    gradient.addColorStop(0.7, '#022319');
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

    // 4. Header Section: Bismillah & Author Badge (Spacious & Clean)
    ctx.save();
    ctx.fillStyle = '#fde68a';
    ctx.textAlign = 'center';

    if (isUrdu) {
      ctx.font = '34px "Amiri", "Traditional Arabic", serif';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 540, 140);
    } else if (data.lang === 'ro') {
      ctx.font = 'bold 22px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✦ BISMILLAH-IR-RAHMAN-IR-RAHEEM ✦', 540, 140);
    } else {
      ctx.font = 'bold 22px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✦ IN THE NAME OF ALLAH, THE MOST BENEFICENT ✦', 540, 140);
    }

    // Small Gold Decorative Divider below Bismillah
    ctx.font = '16px serif';
    ctx.fillStyle = 'rgba(245, 158, 11, 0.6)';
    ctx.fillText('✦ ───────── ❖ ───────── ✦', 540, 190);
    ctx.restore();

    // 5. Author Badge Pill (Deduplicated to avoid repetitive words like "ارشاد نبوی • ارشادات نبوی")
    ctx.save();
    let badgeText = data.author;
    if (data.category && !data.category.toLowerCase().includes(data.author.toLowerCase()) && !data.author.toLowerCase().includes(data.category.toLowerCase())) {
      badgeText = `${data.author} • ${data.category}`;
    }

    ctx.font = isUrdu
      ? 'bold 24px "Noto Nastaliq Urdu", serif'
      : 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
    const textWidth = ctx.measureText(badgeText).width;
    const badgeWidth = Math.max(textWidth + 60, 260);

    ctx.fillStyle = 'rgba(217, 119, 6, 0.22)';
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    roundRect(ctx, 540 - badgeWidth / 2, 230, badgeWidth, 56, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, 540, 258);
    ctx.restore();

    // 6. Complete Quote & Moral Lesson Layout Engine (Zero Void, Harmonious Balance)
    const cleanQuote = data.text.trim();
    const charCount = cleanQuote.length;

    let quoteFontSize: number;
    let quoteLineHeight: number;

    if (isUrdu) {
      if (charCount < 140) {
        quoteFontSize = 56;
        quoteLineHeight = 110;
      } else if (charCount <= 260) {
        quoteFontSize = 46;
        quoteLineHeight = 90;
      } else if (charCount <= 420) {
        quoteFontSize = 38;
        quoteLineHeight = 74;
      } else {
        quoteFontSize = 32;
        quoteLineHeight = 62;
      }
      ctx.font = `bold ${quoteFontSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif`;
      ctx.direction = 'rtl';
    } else {
      if (charCount < 140) {
        quoteFontSize = 44;
        quoteLineHeight = 78;
      } else if (charCount <= 260) {
        quoteFontSize = 36;
        quoteLineHeight = 64;
      } else if (charCount <= 420) {
        quoteFontSize = 30;
        quoteLineHeight = 52;
      } else {
        quoteFontSize = 26;
        quoteLineHeight = 44;
      }
      ctx.font = `italic 600 ${quoteFontSize}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`;
      ctx.direction = 'ltr';
    }

    const quoteLines = wrapText(ctx, cleanQuote, 880);
    const totalQuoteHeight = quoteLines.length * quoteLineHeight;

    // Check if we should include Moral Lesson / Explanation
    const rawExplanation = (data.explanation || '').trim();
    const includeExplanation = Boolean(rawExplanation && charCount <= 380);

    let expLines: string[] = [];
    let expLineHeight = isUrdu ? 54 : 40;
    let totalExpHeight = 0;
    const dividerGap = 70;

    if (includeExplanation) {
      ctx.save();
      if (isUrdu) {
        ctx.font = '26px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
        ctx.direction = 'rtl';
      } else {
        ctx.font = '500 22px "Plus Jakarta Sans", system-ui, sans-serif';
        ctx.direction = 'ltr';
      }
      // Wrap up to 4 clean lines
      expLines = wrapText(ctx, rawExplanation, 860).slice(0, 4);
      totalExpHeight = expLines.length * expLineHeight;
      ctx.restore();
    }

    // Available vertical space for body: from y=340 to y=1760 (1420px total)
    const totalContentHeight = totalQuoteHeight + (includeExplanation ? (dividerGap + totalExpHeight + 30) : 0);
    const availableAreaHeight = 1760 - 340;
    const quoteStartY = 340 + Math.max(40, (availableAreaHeight - totalContentHeight) / 2);

    // Draw Golden Open-Quote Mark for Elegance
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.font = '60px serif';
    ctx.textAlign = 'center';
    ctx.fillText('“', 540, quoteStartY - 25);
    ctx.restore();

    // Draw Main Quote Text
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 4;
    ctx.textAlign = 'center';

    if (isUrdu) {
      ctx.font = `bold ${quoteFontSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif`;
      ctx.direction = 'rtl';
    } else {
      ctx.font = `italic 600 ${quoteFontSize}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`;
      ctx.direction = 'ltr';
    }

    let currentLineY = quoteStartY + (quoteLineHeight * 0.7);
    quoteLines.forEach((line) => {
      ctx.fillText(line, 540, currentLineY);
      currentLineY += quoteLineHeight;
    });
    ctx.restore();

    // Draw Moral Lesson / Hikmat Section if included
    if (includeExplanation && expLines.length > 0) {
      const dividerY = currentLineY + 30;

      // Golden Ornamental Divider
      ctx.save();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(240, dividerY);
      ctx.lineTo(420, dividerY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(660, dividerY);
      ctx.lineTo(840, dividerY);
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = isUrdu ? '22px "Noto Nastaliq Urdu", serif' : 'bold 18px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(isUrdu ? '✦ اخلاقی درس و حکمت ✦' : '✦ MORAL LESSON & WISDOM ✦', 540, dividerY);
      ctx.restore();

      // Render Moral Lesson Text in soft gold-ivory
      ctx.save();
      ctx.fillStyle = '#fef3c7';
      ctx.textAlign = 'center';

      if (isUrdu) {
        ctx.font = '26px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
        ctx.direction = 'rtl';
      } else {
        ctx.font = '500 22px "Plus Jakarta Sans", system-ui, sans-serif';
        ctx.direction = 'ltr';
      }

      let expLineY = dividerY + 55;
      expLines.forEach((line) => {
        ctx.fillText(line, 540, expLineY);
        expLineY += expLineHeight;
      });
      ctx.restore();
    }

    // 7. Elegant Single Watermark Footer at Bottom
    ctx.save();
    ctx.fillStyle = 'rgba(1, 20, 14, 0.92)';
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
