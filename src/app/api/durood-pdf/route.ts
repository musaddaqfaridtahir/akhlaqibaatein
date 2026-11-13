import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

// Map of slug to authentic imported file names
const SLUG_TO_FILE: Record<string, string> = {
  'durood-e-ibrahimi': 'DUROOD-E-IBRAHIMI.pdf',
  'salat-al-tanjina': 'Durood-e-Tanjeena_akhlaqibaatein.pdf',
  'salat-al-nariya': 'durood-nariya.pdf',
  'durood-e-khizri': 'durood-khizri.pdf',
  'durood-e-shifa': 'salat-al-tibiyya.pdf',
  'durood-e-rizq-o-barkat': 'Durood-Sharif-for-Attaining-Virtues-Equal-to-all-Creation.pdf',
  'durood-e-jumma-khas': 'Salat-al-Nabi-al-Ummi-Salawat.com_.pdf',
  'durood-e-ghausia-tajdar': 'darood-ghousia-pdf.pdf',
  'durood-taj': 'Durood-e-Taj_akhlaqibaatein.pdf',
  'durood-lakhi': 'Durood-Lakhi.pdf',
  'durood-mahi': 'Darood-Mahi.pdf',
  'durood-akbar': 'Durood-Akbar-PDF.pdf',
  'durood-muqaddas': 'Durood-e-Muqaddas.pdf',
  'durood-hazari': 'durood-e-hazari-pdf.pdf',
  'salatul-fatih': 'salatul-fatih.pdf',
  'salatul-mashishiyya': 'salatul-mashishiyya.pdf',
  'qasida-burda': 'Qasida-Burda.pdf',
  'hizb-al-bahr': 'HizbulBahr.pdf',
  'dalail-al-khayrat': 'Dalail-al-Khayrat-in-English.pdf',
  'wird-al-latif': 'Wird-al-Latif-Salawat.pdf',
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const requestedFile = searchParams.get('file');
    const slug = searchParams.get('slug');

    let filename = requestedFile;
    if (!filename && slug && SLUG_TO_FILE[slug]) {
      filename = SLUG_TO_FILE[slug];
    }

    if (!filename) {
      filename = 'DUROOD-E-IBRAHIMI.pdf';
    }

    // Sanitize filename to prevent path traversal
    const safeFilename = path.basename(filename);
    const libraryDir = path.join(process.cwd(), 'public', 'durood-library');
    const filePath = path.join(libraryDir, safeFilename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'PDF file not found in library', file: safeFilename },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(fileBuffer);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const goldColor = rgb(0.83, 0.68, 0.21); // #d4af37
    const emeraldDark = rgb(0.04, 0.08, 0.07); // #0a1411
    const whiteColor = rgb(0.98, 0.98, 0.98);

    // Apply clean, prominent header and footer branding watermark on every single page
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();

      // Top Header Watermark Bar
      page.drawRectangle({
        x: 0,
        y: height - 26,
        width: width,
        height: 26,
        color: emeraldDark,
      });

      page.drawLine({
        start: { x: 0, y: height - 26 },
        end: { x: width, y: height - 26 },
        thickness: 1.5,
        color: goldColor,
      });

      const headerText = 'AkhlaqiBaatein.com  •  Authentic Islamic Wisdom & Durood Hub';
      const headerTextWidth = fontBold.widthOfTextAtSize(headerText, 9);
      page.drawText(headerText, {
        x: Math.max(16, (width - headerTextWidth) / 2),
        y: height - 17,
        size: 9,
        font: fontBold,
        color: goldColor,
      });

      // Bottom Footer Watermark Bar
      page.drawRectangle({
        x: 0,
        y: 0,
        width: width,
        height: 24,
        color: emeraldDark,
      });

      page.drawLine({
        start: { x: 0, y: 24 },
        end: { x: width, y: 24 },
        thickness: 1,
        color: goldColor,
      });

      const footerText = 'AkhlaqiBaatein.com  —  Makhzan-e-Akhlaq, Durood o Salam & Wazaif Library';
      const footerTextWidth = fontRegular.widthOfTextAtSize(footerText, 8.5);
      page.drawText(footerText, {
        x: Math.max(16, (width - footerTextWidth) / 2),
        y: 8,
        size: 8.5,
        font: fontRegular,
        color: whiteColor,
      });
    }

    const modifiedPdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(modifiedPdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="AkhlaqiBaatein-${safeFilename}"`,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('PDF watermarking failed:', error);
    return NextResponse.json(
      { error: 'Failed to watermark PDF' },
      { status: 500 }
    );
  }
}
