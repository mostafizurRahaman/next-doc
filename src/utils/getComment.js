export const getComment = async (id) => {
   let res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      next: { revalidate: 3600 },
   });
   if (!res.ok) return undefined;
   res = await res.json();
   return res;
};
