"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"], weight: '500' });

export const metadata = {
   title: "Next js project",
   description: "This is my first next project",
};

const RootLayout = ({ children }) => {
   const pathname = usePathname();
   const router = useRouter();
   return (
      <html lang="en">
         <body className={inter.className}>
            {!pathname.startsWith("/login") && <Nav></Nav>}
            {children}
            <button onClick={() => router.push("/")}>Back to Home</button>
         </body>
      </html>
   );
};

export default RootLayout;
