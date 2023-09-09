import { comments } from "@/utils/comments";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
   const id = parseInt(params.id);
   const data = comments.find((i) => id === i.id);
   if (!data?.id) {
      return NextResponse.json({ message: "Data Not Found" }, { status: 403 });
   }
   return NextResponse.json(data, { status: 200 });
};
