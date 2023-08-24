import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Next js project",
   description: "This is my first next project",
};

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
};

export default RootLayout;
