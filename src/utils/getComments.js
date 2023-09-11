export const getComments = async () => {
   let res = await fetch(`http:localhost:3000/api/comments`);

   res = await res.json();
   return res;
};
