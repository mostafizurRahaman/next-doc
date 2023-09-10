import { users } from "@/utils/users/user";
import { NextResponse } from "next/server";

export const GET = async () => {
   const data = users;
   return NextResponse.json(data, { status: 200 });
};

export const POST = async (req) => {
   const payload = await req.json();

   if (!payload?.name || !payload?.email || !payload.age) {
      return NextResponse.json(
         { result: "No found any data", success: false },
         { status: 400 }
      );
   }

   return NextResponse.json(
      { result: "Data is posted now", acknowledged: true, success: true },
      { status: 200 }
   );
};

