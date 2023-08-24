"use client";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();

   return (
      <div>
         <h2>About Teacher</h2>
         <button onClick={() => router.push("/about")}>back to about</button>
      </div>
   );
};

export default Page;
