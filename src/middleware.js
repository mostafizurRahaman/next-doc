import { NextResponse } from "next/server";

/*
//  for matcher : 
export const middleware = (req) => {
   return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
   matcher: "/about/:path*",
};

*/

export const middleware = (req) => {
   const pathname = req.nextUrl.pathname;
   if (pathname.startsWith("/about")) {
      return NextResponse.redirect(new URL("/login", req.url));
   }
};
