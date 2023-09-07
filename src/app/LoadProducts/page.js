import { Oswald } from "next/font/google";
const getProducts = async () => {
   let data = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
      cache: "no-store",
   });
   data = await data.json();
   return data;
};

const oswald = Oswald({
   weight: ["200", "300", "400", "500", "600", "700"],
   subsets: ["latin"],
   display: "swap",
});

const LoadProducts = async () => {
   const comments = await getProducts();
   return (
      <div className={`${oswald.className}  `}>
         <h1 className="text-4xl font-normal">
            Have Products : {comments.length}{" "}
         </h1>
         {comments.map((i) => (
            <div key={i.id}>
               <h2>Name: {i.name}</h2>
               <h2>Emails: {i.email}</h2>
            </div>
         ))}
      </div>
   );
};

export default LoadProducts;
