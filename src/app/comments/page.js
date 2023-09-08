import Link from "next/link";

const getComments = async () => {
   let res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
   res = await res.json();
   return res;
};

const Page = async () => {
   const comments = await getComments();

   return (
      <div className="grid grid-cols-3 gap-5 p-5">
         {comments.map((i) => (
            <div
               key={i.id}
               className="p-5 flex gap-2 flex-col items-center justify-center  rounded-lg bg-violet-500  text-white "
            >
               <h2 className="text-2xl">{i.name}</h2>
               <h3 className="text-xl">{i.email}</h3>
               <p className="text-base">{i.body}</p>
               <Link
                  className="px-5 py-2 rounded-lg inline-block  bg-black text-white"
                  href={`/comments/${i.id}`}
               >
                  Show details
               </Link>
            </div>
         ))}
      </div>
   );
};

export default Page;
