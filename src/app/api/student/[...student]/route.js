import { students } from "@/utils/students";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
   console.log(params?.student);
   let [id, name, email] = params?.student;
   if (id === " " || id === "undefined") {
      id = null;
   }
   if (name === " " || name === "undefined") {
      name = null;
   }
   if ((email === " ") === "undefined") {
      email = null;
   }
   console.log(id, name, email);
   const data = students;
   let items;
   const studentId = parseInt(id);
   if (id && name && email) {
      items = data.filter(
         (i) => i.id === studentId && i.name === name && i.email === email
      );
      console.log("all block");
   } else if (id && name) {
      items = data.filter((i) => i.id === studentId && i.name === name);
      console.log("id name block ");
   } else if (id && email) {
      items = data.filter((i) => i.id === studentId && i.email === email);
      console.log("id email block ");
   } else if (name && email) {
      items = data.filter((i) => i.name === name && i.email === email);
      console.log("name email block ");
   } else if (id) {
      items = data.filter((i) => i.id === studentId);
      console.log("id block");
   } else if (name) {
      items = data.filter((i) => i.name === name);
      console.log("name block");
   } else if (email) {
      items = data.filter((i) => i.email === email);
      console.log("email block");
   } else {
      items = [];
   }

   return NextResponse.json(items, { status: 201 });
};
