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



