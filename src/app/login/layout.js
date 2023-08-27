"use client";

import Link from "next/link";
import styles from "@/components/Nav.module.css";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
   const pathname = usePathname();
   console.log(pathname);
   return (
      <div>
         <ul className={styles.navigation}>
            <li>
               <Link href="/login">Login</Link>
            </li>
            <li>
               <Link href="/login/studentLogin">Studnet login</Link>
            </li>
            <li>
               <Link href="/login/teacherLogin">Teacher Login</Link>
            </li>
         </ul>
         {children}
      </div>
   );
};

export default Layout;
