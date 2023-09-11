import { getComments } from "@/utils/getComments";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async () => {
   const comments = await getComments();
   if (!comments.length) {
      return notFound();
   }
   return (
      <div className="grid grid-cols-3 gap-5 p-5">
         {comments.map((i) => (
            <div
               key={i}
               className="bg-black text-white p-5 rounded-lg "
            >
               <h1 className="text-xl font-bold capitalize">{i.title}</h1>
               <div className="flex items-center justify-between">
                  <Link
                     className="border-b border-blue-600 text-blue-600"
                     href={`/comments/${i.id}`}
                  >
                     details
                  </Link>
                  <Link
                     className="border-b border-blue-600 text-blue-600"
                     href={`/comments/${i.id}/update`}
                  >
                     Edit
                  </Link>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Page;
