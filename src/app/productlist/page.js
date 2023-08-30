"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const ProductList = () => {
   const [products, setProducts] = useState([]);
   console.log(products);
   useEffect(() => {
      const loadProduct = async () => {
         const res = await fetch(`https://dummyjson.com/products?limit=20`);
         const data = await res.json();
         setProducts(data.products);
      };
      loadProduct();
   }, []);
   return (
      <div>
         <h1>Product List</h1>
         <div className="container">
            {products.map((p) => (
               <div key={p.id} className="productCard">
                  <h2>{p.title}</h2>
                  <p>{p.brand}</p>
                  <Link href={`/productlist/${p.id}`}>Show Details</Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProductList;
