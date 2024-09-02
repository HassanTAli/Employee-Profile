import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // Avoid redirecting if the user is already on the desired page
  const isLoginPage = request.nextUrl.pathname === "/";
  const isProfilePage = request.nextUrl.pathname === "/Employee/profile";

  if (token && isLoginPage) {
    // Redirect to profile page only if the token exists and the user is on the login page
    return NextResponse.redirect(new URL("/Employee/profile", request.url));
  } else if (!token && isProfilePage) {
    // Redirect to login page if the token is missing and the user is trying to access the profile page
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next(); // Proceed to the next middleware or to the requested page
}

export const config = {
  matcher: ["/", "/Employee/profile"], // Apply this middleware to these paths
};
