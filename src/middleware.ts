import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("accessToken")?.value;

  if (pathname.startsWith("/admin")) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname.startsWith("/login") && token) {
    const redirectPath =
      request.nextUrl.searchParams.get("redirect") || "/admin";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/admin/:path*", "/login/:path*"],
};
