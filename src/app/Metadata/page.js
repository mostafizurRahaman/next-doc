"use client";
import Script from "next/script";

const Page = () => {
   return (
      <div>
         <div>Load Script in Next js</div>
         <h1>Generate Meta data.</h1>
         <Script
            src="/geo.js"
            onLoad={() => {
               console.log(`onLoad`);
            }}
            onReady={() => {
               console.log(`onready`);
            }}
            onError={() => {
               console.log("On error");
            }}
         />
      </div>
   );
};

export default Page;

export const generateMetadata = () => {
   return {
      title: "I am a fullstack developer",
      description: "our company description",
   };
};
