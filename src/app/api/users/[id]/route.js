import { users } from "@/utils/users/user";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
   const data = users;
   const id = parseInt(params.id);
   const user = data.find((i) => i.id === id);
   if (!user?.id) {
      return NextResponse.json(
         { message: "User Not Found", success: false },
         { status: 400 }
      );
   }

   return NextResponse.json(user, { status: 200 });
};

export const PUT = async (req, { params }) => {
   const body = await req.json();
   const id = parseInt(params.id);
   let user = users.find((i) => i.id === id);
   if (!user?.id) {
      return NextResponse.json(
         { result: "User not found", success: false },
         { status: 401 }
      );
   }

   user = body;
   return NextResponse.json({ data: user, success: true }, { status: 200 });
};

export const DELETE = async (req, { params }) => {
   // const body = await req.json();
   const id = +params.id;
   const user = users.find((i) => i.id === id);
   if (!user?.id) {
      return NextResponse.json(
         { result: "User not found", success: false },
         { status: 401 }
      );
   }
   const newUsers = users.filter((i) => i.id !== user.id);
   return NextResponse.json({ users: newUsers }, { status: 200 });
};
