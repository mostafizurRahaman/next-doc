"use client";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
   const [product, setProduct] = useState(null);
   const productid = params.productid;

   useEffect(() => {
      (async () => {
         const res = await fetch(`https://dummyjson.com/products/${productid}`);
         const data = await res.json();
         setProduct(data);
      })();
   }, [productid]);
   return (
      <div className="card">
         <h2>{product?.title}</h2>
         <p>Brand : {product?.brand} - Price: {product?.price}</p>
      </div>
   );
};

export default Page;
