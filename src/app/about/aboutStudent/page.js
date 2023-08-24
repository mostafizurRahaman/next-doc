"use client";

import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();
   return (
      <div>
         <button onClick={() => router.push("/about")}>About Student</button>
      </div>
   );
};

export default Page;
