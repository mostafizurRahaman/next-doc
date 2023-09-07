const loading = () => {
   return (
      <div className="relative h-screen">
         <div className="w-10 h-10 border-2 animate-spin border-red-500 rounded-full absolute left-[50%] top-1/2 translate-x-1/2 translate-y-1/2 ">
            Loading...
         </div>
      </div>
   );
};

export default loading;
