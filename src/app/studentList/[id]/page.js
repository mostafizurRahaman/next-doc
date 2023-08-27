"use client";
const StudentDetails = ({ params }) => {
   const studentList = [
      {
         id: 0,
         name: "Mostafizur Rahaman",
      },
      {
         id: 1,
         name: "ratul hossain",
      },
      {
         id: 2,
         name: "nayem hossain",
      },
   ];
   const student = studentList.filter((i) => i.id === parseInt(params?.id));
   console.log(student);
   return (
      <div>
         <h1>
            Student Details:- {student[0].name}- {student[0].id}{" "}
         </h1>
      </div>
   );
};

export default StudentDetails;
