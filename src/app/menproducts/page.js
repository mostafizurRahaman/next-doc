import Link from "next/link";
import { Roboto } from "next/font/google";
const getData = async () => {
   const res = await fetch(`https://dummyjson.com/products?limit=20`);
   const data = await res.json();
   return data.products;
};

const roboto = Roboto({
   weight: "100",
   display: "swap",
   subsets: ["latin"],
   style: "normal",
});

const Page = async () => {
   const data = await getData();
   return (
      <div className={roboto.className}>
         <h1>Men Products</h1>
         <div className="container">
            {data.map((p) => (
               <div key={p.id} className="productCard">
                  <h2>{p.title}</h2>
                  <p>{p.brand}</p>
                  <Link href={`/menproducts/${p.id}`}>Show Details</Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Page;
