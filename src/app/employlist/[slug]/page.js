const Page = ({ params }) => {
   const slug = params.slug;

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

   const { name, id } = employList.find((i) => i.id === parseInt(slug));

   return (
      <div>
         <h1>
            {" "}
            Employ Name : {name} ---- {id}
         </h1>
      </div>
   );
};

export default Page;
