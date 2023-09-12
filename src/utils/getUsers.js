export const getUsers = async () => {
   let data = await fetch("http://localhost:3000/api/users");
   data = await data.json();
   return data;
};
