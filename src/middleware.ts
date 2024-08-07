import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function to handle authentication
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Access cookies directly from the request
  const token = request.cookies.get('token'); // Get the token cookie
  
  // Determine if the user is authenticated
  const isAuthenticated = token !== undefined;

  // Get the base URL to construct absolute URLs
  const baseUrl = request.nextUrl.origin;
  
  // Private routes: Redirect to /login if the user is not logged in
  const privateRoutes = ['/products', '/products/[id]'];


  if (!isAuthenticated && privateRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(`${baseUrl}/login`);
  }

  // Guest only routes: Redirect to /products if the user is already logged in and tries to access /login
  const guestOnlyRoutes = ['/login'];
  if (isAuthenticated && guestOnlyRoutes.includes(pathname)) {
    return NextResponse.redirect(`${baseUrl}/products`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
