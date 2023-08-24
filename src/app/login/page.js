"use client";
import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();
   console.log(router);
   return (
      <div>
         <Nav></Nav>
         <h1>Login Page</h1>
         <button onClick={() => router.push("/login/studentLogin")}>
            Student login
         </button>
         <button onClick={() => router.push("/login/teacherLogin")}>
            Teacher Login
         </button>
      </div>
   );
};

export default Page;
