const getUsers = async () => {
   let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
   res = await res.json();
   return res;
};

export default getUsers;
