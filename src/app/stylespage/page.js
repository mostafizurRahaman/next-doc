"use client";
import { useState } from "react";

const Page = () => {
   const [change, setChange] = useState(true);

   return (
      <div>
         <h1>Learn styles in css here</h1>
         <h2 className={change ? "red" : "green"}>Learn styles in css here.</h2>
         <button onClick={() => setChange(!change)}>Change H2 color.</button>
      </div>
   );
};

export default Page;
