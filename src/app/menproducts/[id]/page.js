import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
   let data = await fetch(`https://dummyjson.com/products/${params?.id}`);
   data = await data.json();
   if (!data?.id) return notFound();
   console.log(data);
   return (
      <div key={data.id}>
         <h1>title: {data.tilte}</h1>
         <h2>Description: {data.description}</h2>
         <Link href="/menproducts">Back to Mens</Link>
      </div>
   );
};

export default Page;
