"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const roboto = Roboto({
   weight: ["100", "300", "400", "500", "700", "900"],
   display: "swap",
   subsets: ["latin"],
   style: "normal",
});
const Page = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:3000/api/users`)
         .then((res) => res.json())
         .then((data) => setUsers(data))
         .catch((err) => console.log(err));
   }, []);

   const handleDelete = async (id) => {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
         method: "DELETE",
      });
      if (!res.ok) throw new Error("Data isn't fetch correctly");
      const data = await res.json();
      setUsers(data.users);
   };

   return (
      <div className={`${roboto.className} font-medium`}>
         <h1>Users: {users.length}</h1>
         <div className="grid grid-cols-3 gap-4 rounded-lg ">
            {users.map((i) => (
               <div
                  key={i.id}
                  className="bg-violet-500 text-white capitalize flex items-center justify-center gap-3 flex-col "
               >
                  <h2>Name: {i.name}</h2>
                  <div className="flex items-center justify-between w-full gap-3 px-5">
                     <Link href={`/users/${i.id}`}>Click me</Link>
                     <button
                        onClick={() => handleDelete(i.id)}
                        className="px-2 py-1 rounded-lg text-xl font-medium bg-blue-600 "
                     >
                        Delete
                     </button>
                     <Link href={`/users/${i.id}/update`}>Edit</Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Page;
