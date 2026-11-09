import { Language } from '@/data/types';

export interface CanvasData {
  text: string;
  explanation: string;
  author: string;
  category: string;
  slug: string;
  lang: Language;
}

export function generateStatusImage(data: CanvasData): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      resolve('');
      return;
    }

    const isUrdu = data.lang === 'ur';

    // 1. Background Gradient (Deep Royal Emerald)
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
    gradient.addColorStop(0, '#064e3b'); // Rich Emerald
    gradient.addColorStop(0.5, '#043828');
    gradient.addColorStop(1, '#022016'); // Deep Forest Black-Green
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Subtle Geometric Background Overlay
    ctx.save();
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.08)'; // Subtle gold lines
    ctx.lineWidth = 1.5;
    for (let i = -1080; i < 2160; i += 72) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 1080, 1080);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i, 1080);
      ctx.lineTo(i + 1080, 0);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Royal Double Gold Border
    ctx.save();
    ctx.strokeStyle = '#d97706'; // Warm Gold
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, 1000, 1000);

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(54, 54, 972, 972);

    // Corner Ornaments
    const corners = [
      [40, 40],
      [1040, 40],
      [40, 1040],
      [1040, 1040],
    ];
    ctx.fillStyle = '#f59e0b';
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();

    // 4. Header Bismillah / Inscription based on Language
    ctx.save();
    ctx.fillStyle = '#fde68a';
    ctx.textAlign = 'center';
    if (isUrdu) {
      ctx.font = '28px "Amiri", "Traditional Arabic", serif';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 540, 130);
    } else if (data.lang === 'ro') {
      ctx.font = 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✦ BISMILLAH-IR-RAHMAN-IR-RAHEEM ✦', 540, 130);
    } else {
      ctx.font = 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✦ IN THE NAME OF ALLAH, THE MOST BENEFICENT ✦', 540, 130);
    }
    ctx.restore();

    // 5. Author & Category Badge Pill
    ctx.save();
    const badgeText = `${data.author} • ${data.category}`;
    ctx.font = isUrdu
      ? 'bold 24px "Noto Nastaliq Urdu", serif'
      : 'bold 22px "Plus Jakarta Sans", system-ui, sans-serif';
    const textWidth = ctx.measureText(badgeText).width;
    const badgeWidth = Math.max(textWidth + 50, 260);

    ctx.fillStyle = 'rgba(217, 119, 6, 0.2)';
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    roundRect(ctx, 540 - badgeWidth / 2, 170, badgeWidth, 50, 25);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, 540, 195);
    ctx.restore();

    // 6. Main Quote Text (Centered with Strict Language Typography)
    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;
    ctx.textAlign = 'center';

    if (isUrdu) {
      const isLong = data.text.length > 120 || data.text.includes('\n');
      const fontSize = isLong ? 34 : 42;
      const lineHeight = isLong ? 58 : 74;
      ctx.font = `bold ${fontSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif`;
      ctx.direction = 'rtl';
      const lines = wrapText(ctx, data.text, 920);
      let startY = 430 - (lines.length * lineHeight) / 2;
      if (startY < 250) startY = 250;
      lines.forEach((line) => {
        ctx.fillText(line, 540, startY);
        startY += lineHeight;
      });
    } else {
      const isLong = data.text.length > 130 || data.text.includes('\n');
      const fontSize = isLong ? 28 : 34;
      const lineHeight = isLong ? 44 : 54;
      ctx.font = `italic 600 ${fontSize}px "Plus Jakarta Sans", system-ui, -apple-system, sans-serif`;
      ctx.direction = 'ltr';
      const lines = wrapText(ctx, data.text, 900);
      let startY = 430 - (lines.length * lineHeight) / 2;
      if (startY < 250) startY = 250;
      lines.forEach((line) => {
        ctx.fillText(line, 540, startY);
        startY += lineHeight;
      });
    }
    ctx.restore();

    // 7. Golden Ornamental Divider
    ctx.save();
    const dividerY = 640;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(340, dividerY);
    ctx.lineTo(740, dividerY);
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = '22px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(isUrdu ? '✦ حکمت ✦' : '✦ WISDOM ✦', 540, dividerY);
    ctx.restore();

    // 8. Moral Lesson / Explanation in Active Language
    if (data.explanation) {
      ctx.save();
      ctx.fillStyle = '#fde68a';
      ctx.textAlign = 'center';

      if (isUrdu) {
        ctx.font = '26px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", serif';
        ctx.direction = 'rtl';
        const expLines = wrapText(ctx, data.explanation, 880).slice(0, 3);
        let expY = 700;
        expLines.forEach((line) => {
          ctx.fillText(line, 540, expY);
          expY += 50;
        });
      } else {
        ctx.font = '500 24px "Plus Jakarta Sans", system-ui, sans-serif';
        ctx.direction = 'ltr';
        const expLines = wrapText(ctx, data.explanation, 880).slice(0, 3);
        let expY = 700;
        expLines.forEach((line) => {
          ctx.fillText(line, 540, expY);
          expY += 38;
        });
      }
      ctx.restore();
    }

    // 9. Prominent Watermark at Bottom
    ctx.save();
    ctx.fillStyle = 'rgba(2, 44, 34, 0.85)';
    ctx.fillRect(56, 940, 968, 70);

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(56, 940);
    ctx.lineTo(1024, 940);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (isUrdu) {
      ctx.font = 'bold 24px "Noto Nastaliq Urdu", sans-serif';
      ctx.fillText('اخلاقی باتیں  |  AkhlaqiBaatein.com', 540, 975);
    } else if (data.lang === 'ro') {
      ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('AkhlaqiBaatein.com  |  Roman Urdu Quotes', 540, 975);
    } else {
      ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('AkhlaqiBaatein.com  |  Islamic Moral Wisdom', 540, 975);
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
