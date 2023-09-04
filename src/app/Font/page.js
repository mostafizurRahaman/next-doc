import { Roboto } from "next/font/google";

const roboto = Roboto({
   weight: "100",
   display: "swap",
   subsets: ["latin"],
   style: "normal",
});
const page = () => {
   return <div>
      <h1>Mostaifizur Rahaman</h1>
      <h1 className={roboto.className}>Universe It</h1>

   </div>;
};

export default page;
