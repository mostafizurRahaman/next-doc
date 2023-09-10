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

export const PUT = async (req, content) => {
   const payload = await req.json();
   const id = content.params.id;
   console.log(payload, id);
   if (!payload?.email) {
      return NextResponse.json(
         { result: "Required Data not send", success: false },
         { status: 401 }
      );
   }
   const user = users.find((i) => i.id === parseInt(id));

   if (!user?.id) {
      return NextResponse.json(
         { result: "Data not found", success: false },
         { status: 401 }
      );
   }
   user.email = payload.email;
   return NextResponse.json({ user: user, success: false }, { status: 200 });
};
