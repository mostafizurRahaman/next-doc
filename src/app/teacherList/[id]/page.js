"use client"
const Page = ({ params }) => {
   const id = params.id;
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

   const teacher = teacherList.find((i) => i.id === parseInt(id));

   return <div>
         <h1>student details</h1>
         <h2>Name: {teacher?.name} - id: {teacher?.id}</h2>
   </div>;
};

export default Page;
