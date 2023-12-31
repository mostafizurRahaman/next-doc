import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
   return (
      <nav className={styles.navigation}>
         <Link href="/">Home</Link>
         <Link href="/login">Login Page</Link>
         <Link href="/about">About</Link>
         {/* <Link href="/studentList">Student List page</Link>
         <Link href="/teacherList">Teacher List</Link> */}
         <Link href="/employlist">EmployList</Link>
         <Link href="/productlist">Productlist</Link>
         <Link href='/menproducts'>Mens</Link>
      </nav>
   );
};

export default Nav;
