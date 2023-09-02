import Link from "next/link";

const Page = async ({ params }) => {
   let data = await fetch(`https://dummyjson.com/products/${params?.id}`);
   data = await data.json();
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
