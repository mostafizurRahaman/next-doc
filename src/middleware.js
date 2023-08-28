import { NextResponse } from "next/server";

export function middleware(request) {
   // if (request.nextUrl.pathname.startsWith("/about")) {
   //    return NextResponse.redirect(new URL("/login", request.url));
   // }
   // if (request.nextUrl.pathname.startsWith("/studentList")) {
   //    return NextResponse.redirect(new URL("/login", request.url));
   // }
   console.log(request.url);
   return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
   matcher: ["/about/:path*", "/studentList/:path*"],
};
