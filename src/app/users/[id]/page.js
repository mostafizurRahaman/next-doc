import { notFound } from "next/navigation";
const getUser = async (id) => {
   let data = await fetch(`http://localhost:3000/api/users/${id}`, {
      next: { revalidate: 3600 },
   });

   if (!data.ok) return undefined;

   data = await data.json();
   return data;
};

const SingleUser = async ({ params }) => {
   const id = parseInt(params.id);
   const data = await getUser(id);
   if (!data?.id) return notFound();


   return (
      <div>
         <h1 className="text-xl ">Name: {data.name}</h1>
         <h2>Eamil: {data.email}</h2>
         <p>Roll: {data.roll}</p>
         
      </div>
   );
};

export default SingleUser;

export const generateStaticParams = async () => {
   let data = await fetch(`http://localhost:3000/api/users`);
   data = await data.json();

   return data.map((i) => ({
      id: `${i.id}`,
   }));
};

export const generateMetadata = async ({ params }) => {
   const id = parseInt(params.id);
   const i = await getUser(id);
   return {
      title: i?.name,
      description: i?.email,
   };
};
