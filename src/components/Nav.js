import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
   
   return (
      <nav className={styles.navigation}>
         <Link href="/">Home</Link>
         <Link href="/login">Login Page</Link>
         <Link href="/about">About</Link>
      </nav>
   );
};

export default Nav;
