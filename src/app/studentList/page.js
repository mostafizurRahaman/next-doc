import Link from "next/link";

const StudentList = () => {

   const studentList = [
      {
         id: 0, 
         name: "Mostafizur Rahaman", 
      }, 
      {
         id:1, 
         name: "ratul hossain"
      }, 
      {
         id: 2, 
         name: "nayem hossain", 

      }, 
   ]
   return (
      <div>
         <h1>Student List Page</h1>
         <div>
               {
                  studentList.map((i)=> <div key={i.id}>
                     <Link href={`/studentList/${i.id}`}>{i.name}</Link>
                  </div>)
               }
         </div>
      </div>
   );
};

export default StudentList;
