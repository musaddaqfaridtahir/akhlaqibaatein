import type { DuroodItem } from '@/data/durood';
import { getDuroodCategoryLabelUr } from '@/data/durood';

const BRAND_DOMAIN = 'AkhlaqiBaatein.com';
const BRAND_TAGLINE = 'مخزنِ اخلاق اور مستند اسلامی اذکار';

function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) {
      lines.push('');
      continue;
    }

    const words = trimmed.split(/\s+/);
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
  }

  return lines;
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function roundRectPath(
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

function drawCircularLogo(
  ctx: CanvasRenderingContext2D,
  logoImg: HTMLImageElement | null,
  cx: number,
  cy: number,
  radius: number
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 3, 0, Math.PI * 2);
  ctx.fillStyle = '#d4af37';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.clip();

  if (logoImg) {
    ctx.drawImage(logoImg, cx - radius, cy - radius, radius * 2, radius * 2);
  } else {
    ctx.fillStyle = '#0a1411';
    ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
    ctx.fillStyle = '#d4af37';
    ctx.font = `bold ${Math.round(radius * 0.9)}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ا', cx, cy + 2);
  }
  ctx.restore();
}

/**
 * Wraps a JPEG byte buffer inside a single-page A4 PDF (PDF 1.4).
 * Using a high-DPI canvas image guarantees crystal-clear Arabic tashkeel and
 * Urdu Nastaliq ligature shaping without missing-glyph failures in client PDFs.
 */
function buildSinglePagePdfFromJpeg(
  jpegBytes: Uint8Array,
  pixelWidth: number,
  pixelHeight: number
): Blob {
  const encoder = new TextEncoder();
  const pageWidthPt = 595.28;
  const pageHeightPt = 841.89;

  const contentStream = `q\n${pageWidthPt.toFixed(2)} 0 0 ${pageHeightPt.toFixed(
    2
  )} 0 0 cm\n/Im0 Do\nQ\n`;
  const contentBytes = encoder.encode(contentStream);

  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let cursor = 0;

  const pushString = (str: string) => {
    const bytes = encoder.encode(str);
    chunks.push(bytes);
    cursor += bytes.length;
  };

  const pushBytes = (bytes: Uint8Array) => {
    chunks.push(bytes);
    cursor += bytes.length;
  };

  const startObj = (objNum: number) => {
    offsets[objNum] = cursor;
    pushString(`${objNum} 0 obj\n`);
  };

  pushString('%PDF-1.4\n%\xFF\xFF\xFF\xFF\n');

  // 1: Catalog
  startObj(1);
  pushString('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  // 2: Pages
  startObj(2);
  pushString('<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');

  // 3: Page
  startObj(3);
  pushString(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidthPt.toFixed(
      2
    )} ${pageHeightPt.toFixed(
      2
    )}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`
  );

  // 4: Image XObject (DCTDecode)
  startObj(4);
  pushString(
    `<< /Type /XObject /Subtype /Image /Width ${pixelWidth} /Height ${pixelHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`
  );
  pushBytes(jpegBytes);
  pushString('\nendstream\nendobj\n');

  // 5: Page drawing contents
  startObj(5);
  pushString(`<< /Length ${contentBytes.length} >>\nstream\n`);
  pushBytes(contentBytes);
  pushString('endstream\nendobj\n');

  const xrefOffset = cursor;
  pushString('xref\n0 6\n0000000000 65535 f \n');
  for (let i = 1; i <= 5; i++) {
    pushString(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
  }

  pushString(
    `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  );

  const blobParts: BlobPart[] = chunks.map((chunk) => {
    const copy = new Uint8Array(chunk.byteLength);
    copy.set(chunk);
    return copy.buffer;
  });

  return new Blob(blobParts, { type: 'application/pdf' });
}

export async function generateDuroodPdf(durood: DuroodItem): Promise<void> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const width = 1240;
  const height = 1754;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Could not initialize canvas context for PDF export.');
  }

  const logoImg = await loadImage('/logo.png');

  // Deep Emerald Green background gradient
  const bgGradient = ctx.createLinearGradient(0, 0, width, height);
  bgGradient.addColorStop(0, '#0a1411');
  bgGradient.addColorStop(0.5, '#11221c');
  bgGradient.addColorStop(1, '#08110e');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // Subtle geometric emerald dot motif
  ctx.fillStyle = 'rgba(212, 175, 55, 0.045)';
  for (let gx = 40; gx < width; gx += 48) {
    for (let gy = 40; gy < height; gy += 48) {
      ctx.beginPath();
      ctx.arc(gx, gy, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Luxury double Gold border frame
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.72)';
  ctx.lineWidth = 4;
  roundRectPath(ctx, 34, 34, width - 68, height - 68, 28);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.30)';
  ctx.lineWidth = 2;
  roundRectPath(ctx, 48, 48, width - 96, height - 96, 20);
  ctx.stroke();

  // Branded Header Bar
  const headerY = 74;
  const headerH = 128;
  roundRectPath(ctx, 76, headerY, width - 152, headerH, 20);
  ctx.fillStyle = 'rgba(13, 27, 22, 0.92)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
  ctx.lineWidth = 2;
  ctx.stroke();

  drawCircularLogo(ctx, logoImg, 146, headerY + headerH / 2, 36);

  // Left: Domain & Tagline
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 34px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(BRAND_DOMAIN, 204, headerY + 46);

  ctx.fillStyle = '#d1fae5';
  ctx.font = '24px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif';
  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.fillText(BRAND_TAGLINE, width - 110, headerY + 48);

  const categoryLabel = getDuroodCategoryLabelUr(durood.category);
  ctx.fillStyle = '#fbbf24';
  ctx.font = '22px "Noto Nastaliq Urdu", "Amiri", serif';
  ctx.fillText(`گوشۂ درود و وظائف • ${categoryLabel}`, width - 110, headerY + 94);

  ctx.direction = 'ltr';
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(209, 250, 229, 0.78)';
  ctx.font = '600 18px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText('Authentic Islamic Salawat & Daily Azkar Card', 204, headerY + 92);

  // Bismillah & Title Section
  let cursorY = 250;
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
  ctx.font = '32px "Amiri", "Traditional Arabic", serif';
  ctx.fillText('بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', width / 2, cursorY);

  cursorY += 66;
  ctx.fillStyle = '#fef3c7';
  ctx.font = 'bold 42px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif';
  ctx.fillText(durood.title.ur, width / 2, cursorY);

  // Gold divider line
  cursorY += 46;
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 220, cursorY);
  ctx.lineTo(width / 2 + 220, cursorY);
  ctx.stroke();

  // Arabic Durood Plaque (auto-fitted font size)
  cursorY += 32;
  const arabicBoxX = 82;
  const arabicBoxW = width - 164;
  const arabicMaxH = 490;

  let arabicFontSize = 48;
  let arabicLines: string[] = [];
  let arabicLineHeight = 82;

  while (arabicFontSize >= 30) {
    ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", "Scheherazade New", serif`;
    arabicLines = wrapLines(ctx, durood.arabicText, arabicBoxW - 96);
    arabicLineHeight = Math.round(arabicFontSize * 1.72);
    if (arabicLines.length * arabicLineHeight + 86 <= arabicMaxH) {
      break;
    }
    arabicFontSize -= 3;
  }

  const arabicBoxH = Math.max(220, Math.min(arabicMaxH, arabicLines.length * arabicLineHeight + 92));
  roundRectPath(ctx, arabicBoxX, cursorY, arabicBoxW, arabicBoxH, 24);
  ctx.fillStyle = '#07100d';
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", "Scheherazade New", serif`;

  const arabicStartY =
    cursorY + (arabicBoxH - arabicLines.length * arabicLineHeight) / 2 + arabicLineHeight / 2;
  arabicLines.forEach((line, idx) => {
    ctx.fillText(line, width / 2, arabicStartY + idx * arabicLineHeight);
  });

  cursorY += arabicBoxH + 34;

  // Urdu Translation Box
  const footerReservedY = height - 180;
  const availableBelow = footerReservedY - cursorY - 24;
  const translationBoxH = Math.round(availableBelow * 0.52);
  const fazilatBoxH = availableBelow - translationBoxH - 22;

  roundRectPath(ctx, 82, cursorY, width - 164, translationBoxH, 22);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.55)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#065f46';
  ctx.font = 'bold 26px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif';
  ctx.fillText('اردو ترجمہ:', width - 118, cursorY + 22);

  let trSize = 27;
  let trLines: string[] = [];
  let trLineH = 54;
  while (trSize >= 18) {
    ctx.font = `${trSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif`;
    trLines = wrapLines(ctx, durood.urduTranslation, width - 240);
    trLineH = Math.round(trSize * 2.02);
    if (trLines.length * trLineH + 78 <= translationBoxH) {
      break;
    }
    trSize -= 2;
  }

  ctx.fillStyle = '#0f172a';
  ctx.font = `${trSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif`;
  trLines.forEach((line, idx) => {
    const y = cursorY + 68 + idx * trLineH;
    if (y + trLineH <= cursorY + translationBoxH - 10) {
      ctx.fillText(line, width - 118, y);
    }
  });

  cursorY += translationBoxH + 22;

  // Fazilat & Reference Box
  roundRectPath(ctx, 82, cursorY, width - 164, fazilatBoxH, 22);
  ctx.fillStyle = 'rgba(17, 34, 28, 0.96)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 25px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif';
  ctx.fillText(`فضیلت و برکات (${durood.reference}):`, width - 118, cursorY + 20);

  let fzSize = 24;
  let fzLines: string[] = [];
  let fzLineH = 48;
  while (fzSize >= 17) {
    ctx.font = `${fzSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif`;
    fzLines = wrapLines(ctx, durood.fazilat, width - 240);
    fzLineH = Math.round(fzSize * 1.98);
    if (fzLines.length * fzLineH + 78 <= fazilatBoxH) {
      break;
    }
    fzSize -= 2;
  }

  ctx.fillStyle = '#ecfdf5';
  ctx.font = `${fzSize}px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif`;
  fzLines.forEach((line, idx) => {
    const y = cursorY + 66 + idx * fzLineH;
    if (y + fzLineH <= cursorY + fazilatBoxH - 10) {
      ctx.fillText(line, width - 118, y);
    }
  });

  // Branded Footer Bar
  const footerY = height - 150;
  const footerH = 82;
  roundRectPath(ctx, 76, footerY, width - 152, footerH, 18);
  ctx.fillStyle = '#07100d';
  ctx.fill();
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
  ctx.lineWidth = 2;
  ctx.stroke();

  drawCircularLogo(ctx, logoImg, 126, footerY + footerH / 2, 24);

  ctx.direction = 'ltr';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 26px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(BRAND_DOMAIN, 166, footerY + footerH / 2);

  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.fillStyle = '#fef3c7';
  ctx.font = 'bold 23px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Amiri", serif';
  ctx.fillText(`${BRAND_TAGLINE} • صدقۂ جاریہ کے لیے شیئر کریں`, width - 106, footerY + footerH / 2);

  // Convert canvas to JPEG and wrap into A4 PDF Blob
  const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.94);
  const base64 = jpegDataUrl.split(',')[1];
  const binary = atob(base64);
  const jpegBytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    jpegBytes[i] = binary.charCodeAt(i);
  }

  const pdfBlob = buildSinglePagePdfFromJpeg(jpegBytes, width, height);
  const downloadUrl = URL.createObjectURL(pdfBlob);

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = `${durood.slug}-AkhlaqiBaatein.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(downloadUrl), 4000);
}
