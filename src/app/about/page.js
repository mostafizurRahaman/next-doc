"use client";
import Nav from "@/components/Nav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
   const router = useRouter();
   return (
      <div>
         <h1>About us page</h1>
         <Link href="/about/aboutStudent">About Student</Link>
         <Link href="/about/aboutTeacher">About Teacher</Link>
      </div>
   );
};

export default Page;
