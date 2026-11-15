import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cleanly redirect /ur or /ur/... to canonical / or /...
  if (pathname === '/ur') {
    return NextResponse.redirect(new URL('/', request.url), 308);
  }
  if (pathname.startsWith('/ur/')) {
    const cleanPath = pathname.replace(/^\/ur/, '') || '/';
    return NextResponse.redirect(new URL(cleanPath, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|txt|xml|ico)).*)',
  ],
};
