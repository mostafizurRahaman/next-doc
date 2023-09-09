import { users } from "@/utils/users/user";
import { NextResponse } from "next/server";

export const GET = async () => {
   const data = users;
   return NextResponse.json(data, { status: 200 });
};
