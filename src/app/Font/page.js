import { Oswald } from "next/font/google";
const oswald = Oswald({
   weight: "700",
   style: "normal",
   subsets: ["latin"],
   display: "swap",
});
const page = () => {
   return (
      <div>
         <h1 className={oswald.className}>Mostaifizur Rahaman</h1>
         <h1>Universe It</h1>
      </div>
   );
};

export default page;
