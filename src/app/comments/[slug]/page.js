import { getComment } from "@/utils/getComment";
import { getComments } from "@/utils/getComments";
import Link from "next/link";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
   const id = parseInt(params.slug);
   const comment = await getComment(id);
   if (!comment?.id) {
      return notFound();
   }
   return (
      <div>
         <h1>{comment?.title}</h1>
         <p>{comment?.description}</p>
         <Link href="/comments">Back to comments</Link>
      </div>
   );
};

export default page;

export const generateStaticParams = async () => {
   const comments = await getComments();

   return comments.map((i) => ({
      slug: i.id.toString(),
   }));
};

export const generateMetadata = async ({ params }) => {
   const id = +params.slug;
   const comment = await getComment(id);
   return {
      title: comment?.title,
      description: comment?.description,
   };
};
