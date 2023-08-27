"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Next js project",
   description: "This is my first next project",
};

const RootLayout = ({ children }) => {
   const pathname = usePathname();
   return (
      <html lang="en">
         <body>
            {!pathname.startsWith("/login") && <Nav></Nav>}
            {children}
         </body>
      </html>
   );
};

export default RootLayout;
