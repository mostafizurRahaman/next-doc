import Image from "next/image";
import image2 from "../../public/vercel.svg";
const Page = async () => {
   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
      cache: "no-store",
   });
   const data = await res.json();
   console.log(image2);
   return (
      <main>
         <h1>Home Page </h1>
         <h1 style={{ fontFamily: "roboto", fontWeight: "100" }}>
            Hello I am mostafizur rahaman{" "}
         </h1>
         <Image
            src={data.message}
            width={500}
            height={300}
            alt="dog_image"
         ></Image>
      </main>
   );
};

export default Page;

// //  Create an user components:

// const User = ({ name }) => {
//    return (
//       <div>
//          <h2>User Name is {name}</h2>
//       </div>
//    );
// };
