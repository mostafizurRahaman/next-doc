import Link from "next/link";

const Page = () => {
   const teacherList = [
      {
         id: 0,
         name: "Mostafizur Rahaman",
      },
      {
         id: 1,
         name: "Ratul Hossain",
      },
      {
         id: 2,
         name: "Nayem Hossain",
      },
      {
         id: 3,
         name: "Ratul Hossain",
      },
   ];
   return <div>
      {
         teacherList.map(i => <div key={i.id}> 
            <Link href={`/teacherList/${i.id}`}>{i.name}</Link>
         </div>)
      }
   </div>;
};

export default Page;
