import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
   weight: ["100", "300", "400", "500", "700", "900"],
   display: "swap",
   subsets: ["latin"],
   style: "normal",
});
const Page = async () => {
   let data = await fetch("http://localhost:3000/api/users");
   data = await data.json();
   console.log(data);

   return (
      <div className={`${roboto.className} font-medium`}>
         <h1>Users: {data.length}</h1>
         <div className="grid grid-cols-3 gap-4 rounded-lg ">
            {data.map((i) => (
               <div
                  key={i.id}
                  className="bg-violet-500 text-white capitalize flex items-center justify-center gap-3 flex-col "
               >
                  <h2>Name: {i.name}</h2>
                  <div className="flex items-center justify-between w-full gap-3 px-5">
                     <Link href={`/users/${i.id}`}>Click me</Link>
                     <Link href={`/users/${i.id}/update`}>Edit</Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Page;
