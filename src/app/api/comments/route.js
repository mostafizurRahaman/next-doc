import { comments } from "@/utils/comments";
import { NextResponse } from "next/server";

export const GET = async () => {
   const data = comments;
   return NextResponse.json(data, { status: 200 });
};
