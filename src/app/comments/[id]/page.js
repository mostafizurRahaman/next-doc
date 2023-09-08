import { notFound } from "next/navigation";
const getComment = async (id) => {
   let res = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
         next: { revalidate: 3600 },
      }
   );

   if (!res.ok) return undefined;

   res = await res.json();
   return res;
};

const Page = async ({ params }) => {
   const comment = await getComment(params.id);
   if (!comment?.id) return notFound();
   return (
      <div>
         {
            <div className="p-5 flex gap-2 flex-col items-center justify-center  rounded-lg bg-violet-500  text-white ">
               <h2 className="text-2xl">{comment.name}</h2>
               <h3 className="text-xl">{comment.email}</h3>
               <p className="text-base">{comment.body}</p>
            </div>
         }
      </div>
   );
};

export default Page;

export const generateStaticParams = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
   const data = await res.json();

   return data.map((i) => ({
      id: `${i.id}`,
   }));
};
