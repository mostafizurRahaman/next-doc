"use client";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();
   return (
      <div>
         <h1>Teacher Login Page. </h1>
         <button onClick={() => router.push("/login")}>
            Back to login{" "}
         </button>
      </div>
   );
};

export default Page;
