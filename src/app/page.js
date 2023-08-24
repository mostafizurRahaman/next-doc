"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "@/components/Nav";

const Page = () => {
   const [name, setName] = useState("Ratul Hossain");
   const handleAlert = () => {
      setName("Rakib Hossain");
   };
   return (
      <main>
         <Nav></Nav>
         <h1>Home Page </h1>
         {/* <User name="Mostafizur Rahaman"></User>
         <User name="Raju Ahmed"></User>
         <User name="Robiul Hasan"></User> */}
         {/* <h2>Name: {name} </h2>
         <button onClick={handleAlert}>Click me to show alert</button> */}
      </main>
   );
};

export default Page;

// //  Create an user components:

// const User = ({ name }) => {
//    return (
//       <div>
//          <h2>User Name is {name}</h2>
//       </div>
//    );
// };
