import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("MIDDLEWARE: ", "/about", "/about/:path*", "/dashboard/:path*");
  // if (false) {
  //   return NextResponse.redirect(new URL("/home", req.url));
  // }
}

export const config = {
  matcher: ["/about", "/about/:path*", "/dashboard/:path*"],
};
