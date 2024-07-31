import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/auth";
  const isRootPath = path === "/products";

  const token = request.cookies.get("token")?.value || "";

  // Handle redirection logic
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/products", request.nextUrl));
  } else if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  } else if (isRootPath && !token) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  } 

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth", "/products", "/products/:path*"],
};