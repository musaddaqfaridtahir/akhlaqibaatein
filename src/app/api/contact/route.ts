import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (message.length > 5000 || subject.length > 200 || name.length > 120) {
      return NextResponse.json(
        { success: false, error: 'Input length exceeds permitted limits.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'gcaccirtiza@gmail.com';
    const prefixedSubject = `[AkhlaqiBaatein.com Contact] ${subject}`;

    // Option 1: Direct Resend API delivery when RESEND_API_KEY is configured in environment
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const fromAddress =
        process.env.CONTACT_FROM_EMAIL || 'AkhlaqiBaatein.com <onboarding@resend.dev>';

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [recipientEmail],
          reply_to: email,
          subject: prefixedSubject,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({ success: true, provider: 'resend' });
      }
    }

    // Option 2: Zero-config FormSubmit AJAX proxy forwarding cleanly to recipient
    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://akhlaqibaatein.com',
          Referer: 'https://akhlaqibaatein.com/contact',
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: prefixedSubject,
          subject,
          message,
          _captcha: 'false',
          _template: 'table',
        }),
      }
    );

    const data = await formSubmitRes.json().catch(() => null);
    const isSuccess =
      formSubmitRes.ok &&
      (data?.success === true || data?.success === 'true');

    if (!isSuccess) {
      return NextResponse.json(
        {
          success: false,
          error:
            data?.message ||
            'Unable to deliver message automatically at the moment. Please email info@akhlaqibaatein.com directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, provider: 'formsubmit' });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please email info@akhlaqibaatein.com directly.',
      },
      { status: 500 }
    );
  }
}
