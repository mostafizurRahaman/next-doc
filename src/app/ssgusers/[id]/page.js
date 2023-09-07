import getUsers from "@/libs/getUsers";

const getSingleUser = async (id) => {
   let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   res = await res.json();
   return res;
};

const SingleUsers = async ({ params }) => {
   const u = await getSingleUser(params.id);
   console.log(u);
   return (
      <div className="bg-blue-500 mx-auto my-10 w-96 text-white p-5 flex items-center justify-center flex-col gap-3 rounded-lg">
         <h2>{u.name}</h2>
         <p>email: {u.email}</p>
      </div>
   );
};

export const generateStaticParams = async () => {
   const users = await getUsers();

   return users.map((u) => ({ id: u.id.toString() }));
};

export default SingleUsers;
