import getUsers from "@/libs/getUsers";
import Link from "next/link";

const page = async () => {
   const users = await getUsers();

   return (
      <div className="grid grid-cols-3 gap-5 my-10">
         {users.map((u) => (
            <div key={u.id} className="bg-blue-500 text-white p-5 flex items-center justify-center flex-col gap-3 rounded-lg">
               <h2>{u.name}</h2>
               <p>email: {u.email}</p>
               <Link
                  className="px-5 py-2 rounded-xl bg-red-500 inline-block"
                  href={`/ssgusers/${u.id}`}
               >
                  View More
               </Link>
            </div>
         ))}
      </div>
   );
};

export default page;
