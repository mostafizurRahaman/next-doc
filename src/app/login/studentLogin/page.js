"use client";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();
   return (
      <div>
         <h1>Student Login Page</h1>
         <button onClick={() => router.replace("/login")}>Back to Login</button>
      </div>
   );
};

export default Page;
