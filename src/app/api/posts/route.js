import { posts } from "@/utils/posts";
import { users } from "@/utils/users/user";
import { NextResponse } from "next/server";

export const GET = async () => {
   const data = posts;
   return NextResponse.json(data, { status: 200 });
};

export const POST = async (req) => {
   const payload = await req.json();
   if (!payload.title || !payload.body) {
      return NextResponse.json(
         { reslut: "User data not found", acknowledged: false, success: false },
         { status: 401 }
      );
   }

   const newData = {
      id: Date.now(),
      ...payload,
   };

   return NextResponse.json(
      { reslut: newData, acknowledged: true, success: true },
      { status: 200 }
   );
};
