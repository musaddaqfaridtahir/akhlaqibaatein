import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug') || '';
  const targetUrl = slug ? `/durood/${slug}` : '/durood';
  return NextResponse.redirect(new URL(targetUrl, req.url), 307);
}
