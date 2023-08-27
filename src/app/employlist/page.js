import Link from "next/link";

const Page = () => {
   const employList = [
      {
         id: 0,
         name: "Mostafizur Rahaman",
      },
      {
         id: 1,
         name: "Raju Ahmed",
      },
      {
         id: 2,
         name: "sajedul Islam",
      },
      {
         id: 3,
         name: "Akram Miyazi",
      },
   ];
   return <div>
         {
            employList.map(i => <div key={i.id}> 
               <Link href={`/employlist/${i.id}`}>{i.name}</Link>
            </div>)
         }
   </div>;
};

export default Page;
